const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.whenFocus = this.whenFocus.bind(this);

    this.whenBlur = this.whenBlur.bind(this);
  };

  whenFocus() {
    console.log('Good!')
  };

  whenBlur() {
    console.log('Hey! Eyes on me!')
  };

  render() {
    return(
      <div>
        <button onFocus={this.whenFocus} onBlur={this.whenBlur}>Eyes</button>
      </div>
    )
  };
}

module.exports = EyesOnMe;
