import React from 'react';

class CurrType extends React.Component {

    state = {
        currCD: '',
    }

    handleClick = () => {
        console.log('handleClick CurrType')
        console.log(this.props.currData);
    }

    render() {
        return (
            <div className='dropdown'>
                <button 
                    onClick={this.handleClick}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                </div>
            </div>
        );
    }
    ;
}
export default CurrType