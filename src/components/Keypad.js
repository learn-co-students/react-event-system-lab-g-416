// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

  }

  inputPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type='password' onKeyUp={this.inputPassword}>
      </input>
    )

  }
}

export default Keypad;
