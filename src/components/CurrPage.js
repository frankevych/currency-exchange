import React, { Component } from 'react';
import CurrType from './curr_components/CurrType'
import CurrValue from './curr_components/CurrValue'
import {getCurrencies} from '../api/currencies';

class CurrPage extends Component {
    currCalc = () => {
        console.log("in CurrPage");
    }
    render() {
        return (
            <div> 
                {console.log(getCurrencies())}
                <CurrValue currCalc={this.currCalc()} />
                <div className="container btn-group space-between">
                    <CurrType />
                    <CurrType />
                </div>
            </div>
        );
    }
}

export default CurrPage;
