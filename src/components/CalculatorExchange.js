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
        medianFrom: '',
        medianTo: '',
        result: '',
    }
    //event handler for user input.
    handleInputAmount = (e) => this.setState({ [e.target.name]: [e.target.value] });

    //event handler calculate the result of exchange
    //this func uses medianFrom & medianTo data choosen by user in handleChoosenCode func
    handleCalculate = () => {
        const { amount, medianFrom, medianTo } = this.state;
        let result = (amount * medianFrom) / medianTo;
        result = result.toFixed(2);
        this.setState({ result: result });
    };
    //based on code choosen by user, sets state with median rate of value from
    handleChoosenCodeFrom = (currency_code) => {
        const { currency } = this.state;
        var medianFrom;

        currency.map((item) => {
            if(item.currency_code === currency_code) {
                medianFrom = item.median_rate;
            }
        })
        this.setState({ medianFrom });
    }

    //based on code choosen by user, sets state with median rate of value to
    handleChoosenCodeTo = (currency_code) => {
        const { currency } = this.state;
        var medianTo;
        currency.map((item) => {
            if(item.currency_code === currency_code) {
                medianTo = item.median_rate;
            }
        })
        this.setState({ medianTo });
    }

    render() {
        return (
            <div className="parentFlex"> 
                <CurrencyChoice currencyData={this.state.currency} choosenCode={this.handleChoosenCodeFrom}>
                    { } From
                </CurrencyChoice>
                <CurrencyChoice currencyData={this.state.currency} choosenCode={this.handleChoosenCodeTo}>
                    { } To
                </CurrencyChoice>

                <div className="input-field pb-2">
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
                            { this.state.result || 'Calculate' }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculatorExchange;