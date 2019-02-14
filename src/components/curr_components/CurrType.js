import React from 'react'

class CurrType extends React.Component {
    
    state = {
        currencyCode: [],
    }

    render() {
        return (
            <div className='dropdown'>
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Dropdown
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="www.google.com">USD</a>
                    <a className="dropdown-item" href="www.google.com">EUR</a>
                    <a className="dropdown-item" href="www.google.com">UAH</a>
                </div>
            </div>
        )
    }
}

export default CurrType;