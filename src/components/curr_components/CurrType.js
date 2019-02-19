import React from 'react';

class CurrType extends React.Component {

    state = {
        currCD: [],
    }
    
    handleClick = () => {
        const { currData } = this.props;
        const { currCD } = this.state;
        this.setState(currData.map((currency) => 
            currCD.push(    
                <button 
                key={currency.currency_code} 
                className="dropdown-item"
                onClick={this.props.choosenType.bind(this, currency.currency_code)}
                >
                    {currency.currency_code}
                </button>
            )
        ))
    }

    render() {
        return (
            <div className='dropdown'>
                <button 
                    onClick={this.handleClick}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Dropdown
                </button>
                <div 
                    className="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton"
                >
                    {this.state.currCD}
                </div>
            </div>
        )
    };
}
export default CurrType