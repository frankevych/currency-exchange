import React from 'react';

class CurrencyChoice extends React.Component {
    //list with currencies code
    state = {
        codeButtons: [],
    }
    
    /**
     * creating buttons per each element in currencyData &
     * sets State codeButtons[]
     */
    handleDopdownMenuClick = () => {
        const { currencyData } = this.props;
        const { codeButtons } = this.state;
        this.setState(currencyData.map((currency) => 
            codeButtons.push(    
                <button 
                key={currency.median_rate} 
                className="dropdown-item"
                onClick={this.props.choosenCode.bind(this, currency.currency_code)}
                >
                    {currency.currency_code}
                </button>
            )
        ))
    }

    render() {
        return (
            <div className='dropdown pr-4'>
                <button 
                    onClick={this.handleDopdownMenuClick}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >
                    {this.props.children}
                </button>
                <div 
                    className="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton"
                >
                    {this.state.codeButtons}
                </div>
            </div>
        )
    };
}
export default CurrencyChoice