import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from '../components/HelloWorld.jsx'
class Main extends React.Component{
	constructor(props){
		super(props)
	}
	static run(){
		ReactDom.render(<Main></Main>,document.getElementById("app"));
	}
	render(){
		return (
		<HelloWorld name='123'/>
		)
	}

}
Main.run();
