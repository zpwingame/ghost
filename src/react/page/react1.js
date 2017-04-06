import React from 'react';
import ReactDom from 'react-dom';
import List from '../components/List.jsx'
class RDemo1 extends React.Component{
	constructor(props){
		super(props)
	}
	static run(){
		ReactDom.render(<RDemo1></RDemo1>,document.getElementById("app"));
	}
	render(){
		let items = [{name:'1'},{name:'2'}]
		return (
		<List items={items}/>
		)
	}

}
RDemo1.run();
