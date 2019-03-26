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
        const codeButtons = [];

        currencyData.map((currency) => 
            codeButtons.push(    
                <button 
                key={currency.currency_code} 
                className="dropdown-item"
                onClick={this.props.choosenCode.bind(currency, [currency.currency_code, currency.median_rate])}
                >
                    {currency.currency_code}
                </button>
            )
        );
        this.setState({ codeButtons });
    }

    render() {
        if(this.props.currencyData.length === 0){
            return <div>no info</div>
        } else {
            return (
                <div className='dropdown px-4'>
                    <button 
                        onClick={this.handleDopdownMenuClick}
                        className="btn btn-secondary dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        >
                        Currency { this.props.children }
                    </button>
                    <div 
                        className="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton"
                    >
                        {this.state.codeButtons}
                    </div>
                </div>
            )
        }
    };
}
export default CurrencyChoice;