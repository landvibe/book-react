import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
console.log('123'.padStart(5, '0'));

ReactDOM.render(<App name="mike" age={23} />, document.getElementById('root'));
