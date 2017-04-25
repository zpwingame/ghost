import React from 'react';
import ReactDom from 'react-dom';
import './react-basic.scss';
class RBasic extends React.Component{
	constructor(props){
		super(props);
		this.charctorList= ['a','b'];
	}
	static run(){
		ReactDom.render(<RBasic></RBasic>,document.getElementById("app"));
	}
	componentWillMount(){
		console.log(performance.now())
	}
	componentDidMount(){
		console.log(performance.now())
	}
	render(){
		return (
			<div className='list-container'>
				{
					this.charctorList.map((item,index) => {
						return <div className ='item' key={index}>
							<span>{index}</span><span>{item}</span>
						</div>
					})
				}
			</div>
		)
	}
}
RBasic.run();
