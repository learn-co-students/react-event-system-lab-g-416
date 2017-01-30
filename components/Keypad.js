const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.password = this.password.bind(this);
  }

  password() {
    console.log('Entering password...');
  }

  render() {
    return (
    <div>
      <input onKeyUp={this.password} type="password" />
    </div>
  )
  }
}

module.exports = Keypad;
