import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import HelloWorld from '../components/HelloWorld.jsx'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        };
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    static run() {
        ReactDom.render(
            <Main></Main>, document.getElementById("app"));
    }
    render() {
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

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}


// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
