import React from 'react';

module.exports = class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.blur = this.blur.bind(this);
    this.focus = this.focus.bind(this);
  }

  blur() {
    console.log("Hey! Eyes on me!");
  }

  focus(){
      console.log("Good!");
  }

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}></button>
    );
  }
}
