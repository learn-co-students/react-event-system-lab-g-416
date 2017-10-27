// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();

  }

  inputPassword = () => {

  }

  render() {
    return (
      <input onClick={this.inputPassword} type='password'>
      </input>
    )

  }
}

export default EyesOnMe;
