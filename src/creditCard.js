import React, { Component } from 'react';

class CreditCard extends Component {

    state = {
        inputFieldIndexArray: [0, 1, 2, 3]
    }

    handleInputChange = (e) => {

        if (e.target.value.length > e.target.maxLength) 
            {
                e.target.value = e.target.value.slice(0, e.target.maxLength)
            }
    }

    render() { 
        return (
            <div className="card-div">
                    <label className="card-label">Card Number* 
                        {
                            this.state.inputFieldIndexArray ? 
                                this.state.inputFieldIndexArray.map(num => {
                                    return <input type="number" id={num} onChange={this.handleInputChange} maxLength="4" />
                                })
                            : null
                        }
                    </label>
            </div>
        );
    }
}
 
export default CreditCard;