const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();
    this.msgToConsole = this.msgToConsole.bind(this);
  }

  msgToConsole() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.msgToConsole} />
      </div>
    )
  }
}

module.exports = Keypad;
