import React, { Component } from 'react';
import Button from './Button1';
import Box from './Box1';

class App extends Component {
  render() {
    return (
      <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
      </div>
    );
  }
}

export default App;
