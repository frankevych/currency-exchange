import React from 'react';

class CurrencyChoice extends React.Component {
    //list with currencies code
    state = {
        codeButtons: [],
        showDropdownListClass: false,
    }
    handleDropDownItemClick = ([currency_code, median_rate]) => {
        (this.props.choosenCode.bind(this, [currency_code, median_rate]))();
        this.setState(prevState => ({ showDropdownListClass: !prevState.showDropdownListClass }));
    };
    /**
     * handles users click event
     * creating buttons with dropdown items () => 
     * sets State codeButtons[items.currency_code]
     */
    handleDopdownMenuClick = () => {
        const { currencyData } = this.props;
        const codeButtons = [];
        //if dropdown list is shown, but dropdown btn has been clicked = hide menu
        this.setState(prevState => ({ showDropdownListClass: !prevState.showDropdownListClass }), () => {
            currencyData.map((currency) => 
                codeButtons.push(    
                    <button 
                    key={currency.currency_code} 
                    className="dropdownItem"
                    onClick={this.handleDropDownItemClick.bind(this, [currency.currency_code, currency.median_rate])}
                    >
                        <span>
                           {currency.currency_code}
                        </span>
                    </button>
                )
            );
            this.setState({ codeButtons });
        })

    }
    isShown = () => {
        const { showDropdownListClass } = this.state;
        return showDropdownListClass ? "show" : '';
    }

    render() {
        if(this.props.currencyData.length === 0){
            return <div>no info</div>
        } else {
            return (
                <div className='drop-right'>
                    <button 
                        onClick={this.handleDopdownMenuClick}
                        className="dropbtn" 
                        type="button" 
                        >   
                            <div className="button-style">
                                { this.props.children ? <p>{this.props.children}</p> : <p>Currency</p> }
                                <i className="fas fa-angle-right"></i>
                            </div>
                    </button>
                    <div 
                        className={ "dpwn-content " + this.isShown() }
                    >
                        {this.state.codeButtons}
                    </div>
                </div>
            )
        }
    };
}
export default CurrencyChoice;