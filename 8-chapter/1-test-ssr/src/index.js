import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// 실습1
ReactDom.render(<App page="home" />, document.getElementById('root'));

// 실습2
// ReactDom.hydrate(<App page="home" />, document.getElementById('root'));
