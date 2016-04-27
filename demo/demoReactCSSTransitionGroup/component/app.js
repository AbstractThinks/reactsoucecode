


import React from 'react';
import render from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../sass/app.scss')

class CSSTRANSITION extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    getInitialState(){
    	return {items: ['hello', 'world', 'click', 'me']};
  	}
	handleAdd(){
		var newItems =
		this.state.items.concat([prompt('Enter some text')]);
		this.setState({items: newItems});
	}
	handleRemove(i){
		var newItems = this.state.items;
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}
    render() {
		const items = this.state.items.map((item, i) => {
			return (
				<div key={item} onClick={this.handleRemove.bind(this, i)}>
				{item}
				</div>
			);
		});

		return (
			<div>
				<button onClick={this.handleAdd}>Add Item</button>
				<ReactCSSTransitionGroup transitionName="example">
				{items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

render(<CSSTRANSITION />, document.getElementById('root'));
export default CSSTRANSITION;
