import React, { Component } from 'react';
import CurrencyChoice from "./CurrencyChoice";
import { getCurrencies, getCurrenciesYesterday } from '../api/currencies';
import CurrenciesTable from './CurrenciesTable';

class CalculatorExchange extends Component {
    /**
     * currency: arr of objects(currency Data)
     * yesterdayCurrency: ar off objects(currency Data 3days ago.)
     * amount: users amount to calculate
     * currencyCodeFrom: identifier by country cash code
     * currencyCodeTo: identifier by country cash code  ps.(double rendering, with different states.)
     * medianFrom: '',
     * medianTo: '',   same as currencyCode. but median rate of currency.
     */
    state = {
        currency: [],
        yesterdayCurrency: [],
        amount: '',
        currencyCodeFrom: '',
        currencyCodeTo: '',
        medianFrom: '',
        medianTo: '',
        result: '',
    };

    //get data from api, with set state (data loader)
    componentDidMount() {
        getCurrencies()
            .then(res => this.setState({ currency: res.data }));
        getCurrenciesYesterday()
            .then(res => this.setState({ yesterdayCurrency: res.data }));
    };

    //event handler for user input. with method call handleCalculate()
    handleInputAmount = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
        this.handleCalculate(e.target.value);
    }

    //this func uses medianFrom & medianTo state choosen by user in handleChoosenCode func 
    handleCalculate = (value) => {
        const { medianFrom, medianTo } = this.state;
        let result = ((value * medianFrom) / medianTo).toFixed(2);

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
                                    type="number" 
                                    onChange={this.handleInputAmount} 
                                    className="form-control" 
                                    placeholder="enter amount.." 
                                />
                                <div>
                                    { this.state.result || 'Result' }
                                </div>
                                
                            </div>
                        </div>
                    </div>     
                    
                    <div className="card">
                        <div className="card-body">
                            <CurrenciesTable currencyData={this.state.currency} currencyDataYesterday={this.state.yesterdayCurrency}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CalculatorExchange;