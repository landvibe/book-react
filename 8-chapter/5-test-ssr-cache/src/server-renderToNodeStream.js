import express from 'express';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { renderPage, prerenderPages } from './common';
import lruCache from 'lru-cache';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import App from './App';
import { renderToNodeStream } from 'react-dom/server';

const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60,
});

const app = express();

const prerenderHtml = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(
    path.resolve(__dirname, `../dist/${page}.html`),
    'utf8',
  );
  prerenderHtml[page] = pageHtml;
}

const html = fs
  .readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8')
  .replace('__STYLE_FROM_SERVER__', '');

app.use('/dist', express.static('dist'));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log('캐시 사용');
    res.send(ssrCache.get(cacheKey));
    return;
  }
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'home';
  const initialData = { page };
  const isPrerender = prerenderPages.includes(page);
  const result = (isPrerender ? prerenderHtml[page] : html).replace(
    '__DATA_FROM_SERVER__',
    JSON.stringify(initialData),
  );
  if (isPrerender) {
    ssrCache.set(cacheKey, result);
    res.send(result);
  } else {
    const ROOT_TEXT = '<div id="root">';
    const prefix = result.substr(
      0,
      result.indexOf(ROOT_TEXT) + ROOT_TEXT.length,
    );
    const postfix = result.substr(prefix.length);
    res.write(prefix);
    const sheet = new ServerStyleSheet();
    const reactElement = sheet.collectStyles(<App page={page} />);
    const renderStream = sheet.interleaveWithNodeStream(
      renderToNodeStream(reactElement),
    );
    renderStream.pipe(
      res,
      { end: false },
    );
    renderStream.on('end', () => {
      res.end(postfix);
    });
  }
});

app.listen(3000);
