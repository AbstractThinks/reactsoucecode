import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Item';
    }
    componentDidMount(){
	    console.log("componentDidMount")
	  }
	componentWillAppear(callback) {
		console.log('componentWillAppear');
		setTimeout(callback, 1); // need at least one tick to fire transition
	}
	componentDidAppear() {
		console.log('componentDidAppear');
		// this._enterStyle();
	}
	componentWillEnter(callback) {
		console.log('componentWillEnter');
		setTimeout(callback, 1);
	}
	componentDidEnter() {
		console.log('componentDidEnter');
		// this._enterStyle();
	}
	componentWillLeave(callback) {
		console.log('componentWillLeave');
		// this._leaveStyle();
		setTimeout(callback, 500); // matches transition duration
	}
	componentDidLeave() {
		console.log('componentDidLeave');
	}
	componentWillUnmount () {
		console.log("Item componentWillUnmount")
		// this.componentWillLeave()
	}
    render() {
        return(
        	<div>
        		{this.props.children}
        	</div>
        );
    }
}

export default Item;

