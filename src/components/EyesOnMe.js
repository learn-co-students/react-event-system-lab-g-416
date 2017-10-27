// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();

  }

  _onBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  _onFocus = () => {
    console.log('Good!')
  }

  render() {
    return (
      <button onBlur={this._onBlur} onFocus={this._onFocus}>
      </button>
    )

  }
}

export default EyesOnMe;
