import React, { Component } from 'react';
import './App.css'

import CreditCard from './creditCard';
class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Credit Card Details : </h1>
                <CreditCard />
            </div>
        );
    }
}
 
export default App;