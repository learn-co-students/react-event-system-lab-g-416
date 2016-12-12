const React = require('react')

class Keypad extends React.Component {
  keyUp() {
    console.log('Entering password...')
  }
  render(){
  

    return (
      <input type="password" onKeyUp={this.keyUp}>Click</input>

    )
  }


}
module.exports = Keypad
