import React from 'react';

module.exports = class Keypad extends React.Component {
  constructor() {
    super();
    this.keyup = this.keyup.bind(this);
  }

  keyup() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.keyup} type="password"/>
    );
  }

}
