import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 동기 렌더링
ReactDOM.render(<App />, document.getElementById('root'));

// 비동기 렌더링
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
