import React, { Component } from 'react';
import CurrencyChoice from "./CurrencyChoice";
import { currenciesList } from '../api/currencies';

class CalculatorExchange extends Component {
    /**
     * currency: array of objects(currency Data)
     */
    state = {
        currency: currenciesList,
        amount: '',
    }
    //event handler for user input.
    handleInputAmount = (e) => this.setState({ [e.target.name]: [e.target.value] });

    //event handler calculate the result of exchange
    //this func uses medianFrom & medianTo data choosen by user in handleChoosenCode func
    handleCalculate = () => {
        console.log('in handlecalculate');
        console.log('we need amount: ' + this.state.amount);
        console.log('we need medianFrom: ' + this.state.medianFrom);
        console.log('we need medianTo: ' + this.state.medianTo);
        // this.props.exchangeValue(this.state.amount);
        // this.setState({ amount: '' });
    };

    //based on code choosen by user, sets state with median rate of value from
    handleChoosenCodeFrom = (currency_code) => {
        console.log('clicked in code: ' + currency_code);
        const { currency } = this.state;
        var medianFrom;

        currency.map((item) => {
            if(item.currency_code === currency_code) {
                console.log('currency.median_rate: '+ item.median_rate);
                medianFrom = item.median_rate;
            }
        })
        console.log('after cycle: ' + medianFrom)
        this.setState({ medianFrom });
    }

    //based on code choosen by user, sets state with median rate of value to
    handleChoosenCodeTo = (currency_code) => {
        console.log('clicked in code: ' + currency_code);
        const { currency } = this.state;
        var medianTo;
        
        currency.map((item) => {
            if(item.currency_code === currency_code) {
                console.log('currency.median_rate: '+ item.median_rate);
                medianTo = item.median_rate;
            }
        })
        console.log('after cycle: ' + medianTo)
        this.setState({ medianTo });
    }

    render() {
        return (
            <div> 

                <div className="pb-2">
                    <div className="input-group">
                        <input 
                            name ="amount" 
                            value={this.state.amount} 
                            type="text" 
                            onChange={this.handleInputAmount} 
                            className="form-control" 
                            placeholder="enter amount.." 
                        />
                        <button type="submit" onClick={this.handleCalculate}>
                            Click
                        </button>
                    </div>
                </div>

                <div className="container btn-group space-between">
                    <CurrencyChoice currencyData={this.state.currency} choosenCode={this.handleChoosenCodeFrom} />
                    <p>
                        {this.state.currencyCodeFrom}
                        its mediana is:
                        {this.state.medianFrom}
                    </p>
                    <CurrencyChoice currencyData={this.state.currency} choosenCode={this.handleChoosenCodeTo} />
                    <p>
                        {this.state.currencyCodeTo}
                        its mediana is:
                        {this.state.medianTo}
                    </p>
                </div>

            </div>
        );
    }
}

export default CalculatorExchange;