const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()

    this.keypad = this.keypad.bind(this)
  }

  keypad() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.keypad} />
      </div>
    )
  }
}

module.exports = Keypad
