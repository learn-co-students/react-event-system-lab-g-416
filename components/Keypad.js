const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.display = this.display.bind(this)
  }

  display() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.display}/>
      </div>
    );
  }

}

module.exports = Keypad;