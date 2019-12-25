import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import smallImage from './small.jpeg';
import bigImage from './big.jpeg';
import TodoList from './TodoList';
import './test.css';

function App() {
  return (
    <div className="App">
      <img src={bigImage} alt="big" />
      <img src={smallImage} alt="small" />
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);

export default App;
