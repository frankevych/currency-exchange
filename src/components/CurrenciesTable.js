import React, { Component } from 'react';

//currencies table with currencies current rates.
class CurrenciesTable extends Component {

    //return <li> for each curency in api
    currencyDataList = () => {
        const { currencyData, currencyDataYesterday } = this.props;

        //check if props are loaded.
        if(currencyData.length > 0 && currencyDataYesterday.length > 0) { 
            const currencies = [];
            console.log(currencyData);
            console.log(currencyDataYesterday);

            //for each data in api create and push <li> element if currencies arr.
            currencyData.map((i) => {
                currencies.push( 
                    <li
                        key={ i.currency_code }
                        className="list-group-item"
                    >
                        <p className="code inline-block mx-3 my-n1">{ i.currency_code }</p>
                        <p className="selling-rate inline-block mx-3 my-n1">{ i.selling_rate } {}</p>
                        <p className="buying-rate inline-block mx-3 my-n1">{ i.buying_rate } {}</p>
                        {/* calls method wich returns + if currency rate is higher than was day ago. currencies.legth param is used as iterator inside called method */}
                        <p className="median-rate inline-block mx-3 my-n1">{ i.median_rate } {this.currenciesCompareRate(currencyData, currencyDataYesterday, currencies.length)}</p>
                    </li>
                );
            });
            return currencies;
        }
    }

    //method is used to return + or - , depending if rate grew up or down
    currenciesCompareRate = (currencyData, currencyDataYesterday, i) => {
        for(i ; i < currencyData.length; i++){
            return currencyData[i].median_rate > currencyDataYesterday[i].median_rate ? '+' : '-'
        }
    }
  
    render() {
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

export default CurrenciesTable;