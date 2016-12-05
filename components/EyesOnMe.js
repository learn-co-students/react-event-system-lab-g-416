const React = require('react');

class EyesOnMe extends React.Component{
	constructor(props){
		super();
		this.focusEvent = this.focusEvent.bind(this);
	 	this.blurEvent = this.blurEvent.bind(this);	
	}

	focusEvent(){
		console.log("Good!");
	}

	blurEvent(){
		console.log('Hey! Eyes on me!');
	}

	render(){
		return(
			<button type="submit" onBlur = {this.blurEvent} onFocus = {this.focusEvent}>Press me </button>
		)
	}
}

module.exports = EyesOnMe;
