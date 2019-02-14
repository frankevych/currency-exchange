import React, { Component } from 'react';
import './App.css';
import CurrPage from './components/CurrPage'

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <CurrPage />
      </div>
    );
  }
}

export default App;
