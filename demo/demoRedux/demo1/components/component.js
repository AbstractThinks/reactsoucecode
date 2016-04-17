let React = require('react');
let store = require('../stores/store.js');
let addTodoActions = require('../actions/actionCreator.js');
let ReactDOM = require('react-dom');

let App = React.createClass({
	getInitialState : function () {
		return {
			items : store.getState()
		}	
	},
	componentDidMount : function () {
		let unsubscribe = store.subscribe(this.onChange);
	},
	onChange : function () {
		this.setState({
			item: store.getState()
		});
	},
	handleAdd : function () {
		let input = ReactDOM.findDOMNode(this.refs.todo);
		let value = input.value.trim();

		if (value) {
			store.dispatch(addTodoActions(value));
		}

		input.value = '';
	},
	render : function () {
		return (
			<div>
				<input ref="todo" type="text" placeholder='please input' style={{marginRight:'10px'}} />
				<button onClick={this.handleAdd}>add button</button>
				<ul>
					{this.state.items.map(function(item){
						return <li>{item.text}</li>;
					})}
				</ul>
			</div>			
		)
	}
});

module.exports = App;