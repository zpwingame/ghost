import React from 'react';
import ReactDom from 'react-dom';
import List from '../components/List.jsx';
import db from './db.json'
class RDemo1 extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			flowerList:db.flowerList
		}
	}
	static run(){
		ReactDom.render(<RDemo1></RDemo1>,document.getElementById("app"));
	}
	componentWillMount(){
		let list = [];
		let item = db.flowerList;
		for(let i = 0;i<1000;i++){
			list = list.concat(item)
		}
		this.setState({flowerList:list});
		console.log(performance.now())
	}
	render(){
		let items = this.state.flowerList;
		return (
		<List items={items}/>
		)
	}
	componentDidMount(){
		console.log(performance.now())
	}

}
RDemo1.run();
