import React, { Component } from 'react';

class CurrValues extends Component {
    state = {
        inputValue: '',
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container pb-2">
                <div className="input-group flex-nowrap">
                    <input 
                        name ="inputValue" 
                        value={this.state.inputValue} 
                        type="text" 
                        onChange={this.handleChange} 
                        className="form-control" 
                        placeholder="enter value.." 
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                    />
                        {this.state.inputValue}
                </div>
            </div>
        );
    }
}

export default CurrValues;
