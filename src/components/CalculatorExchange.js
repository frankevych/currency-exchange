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
        showDropdownListClass: false,
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
        console.log('in handlechoosencodefrom');
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
            <div className="container">
                <header className="header">
                    <div className="logo">
                        <img src={require('../images/Illuminati.png')} alt="logo" width="70px" height="70"/>
                    </div>
                    <nav className="navbar">
                        <a href="#">RATES</a>
                        <a href="#">HOME</a>
                    </nav>
                </header>
                <div className="main-content">
                    <h3>Currency Converter</h3>
                    <div className="parentFlex">

                        <div className="first-currency-choice">
                            
                            <CurrencyChoice 
                                currencyData={this.state.currency} 
                                choosenCode={this.handleChoosenCodeFrom} 
                            >
                                { this.state.currencyCodeFrom }
                            </CurrencyChoice>
                            <div className="input">
                                <input 
                                    name ="amount" 
                                    value={this.state.amount} 
                                    type="number" 
                                    onChange={this.handleInputAmount}
                                    placeholder="enter amount.." 
                                />
                                { this.state.currencyCodeFrom ? <p>{this.state.currencyCodeFrom} rate: { this.state.medianFrom }</p> : null }
                            </div>
                        </div>

                        <div className="first-currency-choice">
                            <CurrencyChoice 
                                currencyData={this.state.currency} 
                                choosenCode={this.handleChoosenCodeTo} 
                            >
                                { this.state.currencyCodeTo }
                            </CurrencyChoice>
                            <div className="input">
                                <p>{ this.state.result > 0 ? this.state.result : "Result" }</p>
                                { this.state.currencyCodeTo ? <p>{this.state.currencyCodeTo} rate: { this.state.medianTo }</p> : null }
                            </div>
                        </div>

                    </div>     
                    
                    {/* <div className="card">
                        <div className="card-body">
                            <CurrenciesTable currencyData={this.state.currency} currencyDataYesterday={this.state.yesterdayCurrency}/>
                        </div>
                    </div> */}
                    
                </div>
                <footer className="footer">
                    <img id="playMarket" src={require("../images/getItOnGooglePlay.png")} alt="google play"/>
                    <img id="appStore" src={require("../images/getItOnAppStore.png")} alt="app store"/>
                    <img id="twitter" src={require("../images/twitter.png")} alt="twitter"/>
                </footer>
            </div>
        );
    }
}

export default CalculatorExchange;