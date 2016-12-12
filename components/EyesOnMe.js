const React = require('react')

class EyesOnMe extends React.Component {
  focus(){
    console.log('Good!')
  }
  blur(){
    console.log('Hey! Eyes on me!')
  }
  render() {
    // this.focus = this.focus.bind(this)
    // this.blind = this.blur.bind(this)


    return (
      <button onFocus={this.focus} onBlur={this.blur}>Click</button>
    )
  }



}
module.exports = EyesOnMe
