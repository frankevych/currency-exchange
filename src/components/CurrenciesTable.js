import React, { Component } from 'react';

class CurrenciesTable extends Component {

    //push currencies data li for each curency in api, into currecies state array.
    currencyDataList = () => {
        const { currencyData } = this.props;

            const currencies = [];
            
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
            return currencies;
            // this.setState({ currenciesList: currencies });
    }
  
    render() {
        if(!this.props || this.props.currencyData === undefined){
            return null
        } else {
            return (
                <div className="parentBlock">
                    <ul className="list-group list-group-flush">
                        <li key={'plate'}className="list-group-item">
                            <h6 className="code inline-block mx-3 my-n1">CODE</h6>
                            <h6 className="selling-rate inline-block mx-3 my-n1">SELLING</h6>
                            <h6 className="buying-rate inline-block mx-3 my-n1">BUYING</h6>
                            <h6 className="median-rate inline-block mx-3 my-n1">MEDIAN</h6>
                        </li>
                        { this.currencyDataList() }
                    </ul>
                </div>
            );
        }
    }
}

export default CurrenciesTable;