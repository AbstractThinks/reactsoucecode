


import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CSSTRANSITION extends React.Component {
    constructor(props) {
        super(props);
        //初始化state
        this.state = {items: ['hello', 'world', 'click', 'me']};
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
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<button onClick={this.handleRemove.bind(this)}>remove Item</button>
				<ReactCSSTransitionGroup transitionName="example">
				{items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

ReactDOM.render(<CSSTRANSITION />, document.getElementById('root'));
export default CSSTRANSITION;
