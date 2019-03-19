import React, { Component } from 'react';

class CurrenciesList extends Component {
    state = {
        currencies: [],
    }

    //push currencies data li for each curency in api, into currecies state array.
    componentDidUpdate() {
        const { currencyData } = this.props;
        const { currencies } = this.state;
        if(currencies.length === 0){
            const currencies = [];

            currencies.push(
                <li key={'plate'}className="list-group-item">
                    <h5 className="code inline-block mx-3 my-n1">CODE</h5>
                    <h5 className="selling-rate inline-block mx-3 my-n1">SELLING</h5>
                    <h5 className="buying-rate inline-block mx-3 my-n1">BUYING</h5>
                    <h5 className="median-rate inline-block mx-3 my-n1">MEDIAN</h5>
                </li>
            );

            currencyData.map((i) => {
                currencies.push(
                    <li
                        key={ i.currency_code }
                        className="list-group-item"
                    >
                        <p className="code inline-block mx-3 my-n1">{ i.currency_code }</p>
                        <p className="selling-rate inline-block mx-3 my-n1">{ i.selling_rate } {}</p>
                        <p className="buying-rate inline-block mx-3 my-n1">{ i.buying_rate } {}</p>
                        <p className="median-rate inline-block mx-3 my-n1">{ i.median_rate } {}</p>
                    </li>
                );
            });

            this.setState({ currencies });
        }
    }

    render() {
        return (
            <div className="parentBlock">
                <ul className="list-group list-group-flush">
                    
                    { this.state.currencies }
                </ul>
            </div>
        );
    }
}

export default CurrenciesList;
