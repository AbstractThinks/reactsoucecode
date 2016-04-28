


import React from 'react';
import ReactDOM from 'react-dom';
import AnimationItem from './AnimationItem';
import ReactTransitionGroup from 'react-addons-transition-group';

class ITEM extends React.Component {
	componentDidMount(){
	    console.log("componentDidMount")
	  }
	   componentWillEnter (callback) {
    console.log("componentWillEnter")

  }
    componentWillLeave (callback) {
    console.log("componentWillLeave")

  }
	componentWillUnmount () {
    	console.log("componentWillUnmount")
    	this.componentWillLeave()
  	}

  	render() {
  		return (
  			<ReactTransitionGroup key={this.props.children}>
				<div id={this.props.children}>
					{this.props.children}
				</div>
			</ReactTransitionGroup>
  		)
  	}
}




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

				<ITEM key={item}>
					{item}
				</ITEM>
				
			);
		});

		return (
			<div>
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<button onClick={this.handleRemove.bind(this)}>remove Item</button>
				
				{items}
				
			</div>
		);
	}
}

ReactDOM.render(<CSSTRANSITION />,  document.getElementById('container'));
export default CSSTRANSITION;
