const React = require('react');

class Keypad extends React.Component{
	constructor(props){
		super()
		this.inputPasswordEvent = this.inputPasswordEvent.bind(this);
	}	

	inputPasswordEvent(){
		console.log("Entering password...");
	}

	render(){
		return(
			<input type = "password" onKeyUp = {this.inputPasswordEvent}/>
		);
	}
}

module.exports = Keypad;
