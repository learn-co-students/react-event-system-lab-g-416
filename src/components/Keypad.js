// Code Keypad Component Here

import React, { Component } from 'react'

class Keypad extends Component {

    handleKeyUp = () => {
        console.log('Entering password...')
    }


    render() {
        return (
            <div>
                Keypad here!
                <input type="password" onKeyUp={this.handleKeyUp}></input>
            </div>
        )
    }
}

export default Keypad;


