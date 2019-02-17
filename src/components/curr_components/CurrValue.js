import React, { Component } from 'react';

class CurrValue extends Component {
    state = {
        amount: '',
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClick = (e) => {
        console.log('in handleclick')
        e.preventDefault();
        this.props.exchangeValue(this.state.amount);
        this.setState({ amount: '' });
    }

    render() {
        return (
            <div className="container pb-2">
                <div className="input-group flex-nowrap">
                    <input 
                        name ="amount" 
                        value={this.state.amount} 
                        type="text" 
                        onChange={this.handleChange} 
                        className="form-control" 
                        placeholder="enter amount.." 
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                    />
                    <button type="submit" onClick={this.handleClick}>
                        Click
                    </button>
                </div>
            </div>
        );
    }
}

export default CurrValue;
