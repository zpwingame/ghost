import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from '../components/HelloWorld.jsx'
class Main extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
	}
	handleChange(e){
		this.setState({value: e.target.value});
	}
	static run(){
		ReactDom.render(<Main></Main>,document.getElementById("app"));
	}
	render(){
		return (
			<div>
				<HelloWorld name='123'/>
				<input onChange={this.handleChange}/>
				<div>{this.state.value}</div>
			</div>
		)
	}
}
Main.run();
