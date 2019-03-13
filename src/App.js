import React, { Component } from 'react';
import './App.css';
import CalculatorExchange from './components/CalculatorExchange'

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <CalculatorExchange />
      </div>
    );
  }
}

export default App;
