const React = require('react');

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
      <div>
        <button onFocus={this.good} onBlur={this.hey}>Click the button</button>
      </div>
    )
  }
}

module.exports = EyesOnMe;
