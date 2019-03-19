import React, { Component } from 'react';
import CurrencyChoice from "./CurrencyChoice";
import { getCurrencies } from '../api/currencies';
import CurrenciesList from './CurrenciesList';

class CalculatorExchange extends Component {
    /**
     * currency: array of objects(currency Data)
     */
    state = {
        currency: [],
        amount: '',
        currencyCodeFrom: '',
        currencyCodeTo: '',
        medianFrom: '',
        medianTo: '',
        result: '',
    };

    //get data from api, set state currency with it
    componentDidMount() {
        getCurrencies()
          .then(res => this.setState({ currency: res.data }))
    };

    //event handler for user input.
    handleInputAmount = (e) => this.setState({ [e.target.name]: [e.target.value] });

    //event handler calculate the result of exchange
    //this func uses medianFrom & medianTo state choosen by user in handleChoosenCode func
    handleCalculate = () => {
        const { amount, medianFrom, medianTo } = this.state;
        let result = ((amount * medianFrom) / medianTo).toFixed(2);

        this.setState({ result });
    };

    //based on code choosen by user, sets state with median rate of value from
    handleChoosenCodeFrom = ([currency_code, median_rate]) => {
        this.setState({ 
            medianFrom: median_rate,
            currencyCodeFrom: currency_code, 
        });
    }

    //based on code choosen by user, sets state with median rate of value to
    handleChoosenCodeTo = ([currency_code, median_rate]) => {
        this.setState({ 
            medianTo: median_rate,   
            currencyCodeTo: currency_code,
        });
    }

    render() {
        return (
                <div className="card">
                    <div className="card-header">
                    
                       <div className="parentFlex my-5">
                            <CurrencyChoice 
                                currencyData={this.state.currency} 
                                choosenCode={this.handleChoosenCodeFrom} 
                            >
                            { this.state.currencyCodeFrom }
                            </CurrencyChoice>

                            <CurrencyChoice 
                                currencyData={this.state.currency} 
                                choosenCode={this.handleChoosenCodeTo} 
                            >
                            { this.state.currencyCodeTo }
                            </CurrencyChoice>

                            <div className="input-field ml-5">
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
                                        { this.state.result || 'Result' }
                                    </button>
                                </div>
                            </div>
                       </div>     
                        
                        <div className="card">
                            <div className="card-body">
                                <CurrenciesList currencyData={this.state.currency}/>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }
}

export default CalculatorExchange;