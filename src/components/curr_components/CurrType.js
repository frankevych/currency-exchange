import React from 'react';

class CurrType extends React.Component {

    state = {
        currCD: [],
    }


    componentWillMount() {
        const { currData } = this.props;
        const { currCD } = this.state
        this.setState(currData.map((currency) => {
            currCD.push(
                <a className="dropdown-item" href="www.google.com">
                    {currency.currency_code}
                </a>
            )
        }))
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
        );
    }
    ;
}
export default CurrType