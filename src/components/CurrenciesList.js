import React, { Component } from 'react';

class CurrenciesList extends Component {
    state = {
        currencies: [],
    }

    //push currencies data li for each curency in api, into currecies state array.
    componentDidUpdate() {
        const { currencyData } = this.props;
        const { currencies } = this.state;
        if(currencies.length !== currencyData.length){
            this.setState(currencyData.map((i) => {
                currencies.push(
                    <li
                        key={ i.currency_code }
                        className="list-group-item"
                    >
                        <p className="code inline-block mx-3">{ i.currency_code }</p>
                        <p className="selling-rate inline-block mx-3">{ i.selling_rate } {}</p>
                        <p className="buying-rate inline-block mx-3">{ i.buying_rate } {}</p>
                        <p className="median-rate inline-block mx-3">{ i.median_rate } {}</p>
                    </li>
                )
            }));
        }
    }
    render() {
        return (
            <div className="parentBlock">
                <li className="list-group-item pt-5">
                    <p className="code inline-block mx-3">CODE</p>
                    <p className="selling-rate inline-block mx-3">SELLING</p>
                    <p className="buying-rate inline-block mx-3">BUYING</p>
                    <p className="median-rate inline-block mx-3">MEDIAN</p>
                </li>
                <ul className="list-group list-group-flush">
                    { this.state.currencies }
                </ul>
            </div>
        );
    }
}

export default CurrenciesList;
