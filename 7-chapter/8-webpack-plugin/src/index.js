// import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div>
      <h3>안녕하세요, 웹펙 플러그인 예제입니다.</h3>
      <p>html-webpack-plugin 플러그인을 사용합니다.</p>
      <p>{`앱 버전은 ${APP_VERSION}입니다.`}</p>
      <p>{`10 * 10 = ${TEN * TEN}`}</p>
    </div>
  );
}

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.render(<App />, $('#root')[0]);
