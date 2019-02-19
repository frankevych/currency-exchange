import React, { Component } from 'react';
import CurrType from "./curr_components/CurrType";
import CurrValue from './curr_components/CurrValue'
import { currenciesList } from '../api/currencies';




class CurrPage extends Component {
    //list with currencies info 14elements in array
    state = {
        currency: currenciesList
    }
    //
    handleExchangeValue = (inputValue) => {
    };

    handleChoosenType = (currency_code) => {
        console.log('in currpage handle choos type')
        console.log(currency_code)
    }

    render() {
        console.log(this.state.currency);
        return (
            <div> 
                <CurrValue exchangeValue={this.handleExchangeValue} />
                <div className="container btn-group space-between">
                    <CurrType currData={this.state.currency} choosenType={this.handleChoosenType} />
                    <CurrType currData={this.state.currency} choosenType={this.handleChoosenType} />
                </div>
            </div>
        );
    }
}

export default CurrPage;
