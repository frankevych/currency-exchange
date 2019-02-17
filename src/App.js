import React, { Component } from 'react';
import './App.css';
import CurrPage from './components/CurrPage'
//import { currenciesList } from './api/currencies';

class App extends Component {


// currList = () => {
//   console.log('in currlist');
//   getCurrencies()
//       .then(res => this.setState());
//       console.log(this.state.currency);    
// }
  render() {
    return (
      <div className="container pt-5">
        <CurrPage />
      </div>
    );
  }
}

export default App;
