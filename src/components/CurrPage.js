import React, { Component } from 'react';
import CurrType from "./curr_components/CurrType";
import CurrValue from './curr_components/CurrValue'
import { currenciesList } from '../api/currencies';

class CurrPage extends Component {
    //list with currencies info 14elements in array
    state = {
        currency: currenciesList,
        amount: 0,
        currencyCodeFrom: '',
        currencyCodeTo: '',
        medianaFrom: 0,
        medianaTo: 0,
    }

    exchangeCalculator = () => {
    }

    handleExchangeValue = (amount) => {
        //this is working, calling clg righ after setstate will show prevstate.
        this.setState({ amount });
        
    };

    handleChoosenTypeFrom = (currency_code) => {
        this.setState({ currencyCodeFrom: currency_code })
        this.currentMedianFrom()
    }

    currentMedianFrom = () => {
        this.state.currency.map((curr) => {
            if(curr.currency_code === this.state.currencyCodeFrom){
                this.setState({ medianaFrom: curr.median_rate })
            }
        })
    }
    
    handleChoosenTypeTo = (currency_code) => {
        this.setState({ currencyCodeTo: currency_code })
        this.currentMedianTo();
    }
    currentMedianTo = () => {
        this.state.currency.map((curr) => {
            if(curr.currency_code === this.state.currencyCodeTo){
                this.setState({ medianaTo: curr.median_rate })
            }
        })
    }
    render() {
        //console.log(this.state.amount);
        console.log(this.state.currency);
        return (
            <div> 
                <CurrValue exchangeValue={this.handleExchangeValue} />
                <div className="container btn-group space-between">
                    <CurrType currData={this.state.currency} choosenType={this.handleChoosenTypeFrom} />
                    <p>
                        {this.state.currencyCodeFrom}
                        its mediana is:
                        {this.state.medianaFrom}
                    </p>
                    <CurrType currData={this.state.currency} choosenType={this.handleChoosenTypeTo} />
                    <p>
                        {this.state.currencyCodeTo}
                        its mediana is:
                        {this.state.medianaTo}
                    </p>
                </div>
            </div>
        );
    }
}

export default CurrPage;