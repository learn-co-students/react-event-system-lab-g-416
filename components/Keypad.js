import React from 'react';
// const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handlePasswordInput() {
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        <label>Password</label>
        <input type="password" onKeyUp={this.handlePasswordInput} />
      </div>
    )
  }
}

module.exports = Keypad;
