const React = require('react');
const ReactDOM = require('react-dom');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.good = this.good.bind(this);
    this.hey = this.hey.bind(this);
  }

  good() {
    console.log('Good!');
  }

  hey() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.hey}>A Nifty Button</button>
    );
  }
}

module.exports = EyesOnMe;