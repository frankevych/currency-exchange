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

    render() {
        console.log(this.state.currency);
        return (
            <div> 
                <CurrValue exchangeValue={this.handleExchangeValue} />
                <div className="container btn-group space-between">
                    <CurrType currData={this.state.currency}/>
                    <CurrType currData={this.state.currency}/>
                </div>
            </div>
        );
    }
}

export default CurrPage;
