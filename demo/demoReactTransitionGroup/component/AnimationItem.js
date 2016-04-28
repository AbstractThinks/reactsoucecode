

import React from 'react';
import ReactDOM from 'react-dom';

class AnimationItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AnimationItem';
    }
    componentWillEnter(){
    	console.log(1)
    	ReactDOM.findDOMNode(this); 	
    }
    componentDidEnter(){
    	console.log(2)
    }
    componentWillLeave(){
    	console.log(3)
    }
    componentDidLeave(){
    	console.log(4)
    }
    render() {
        return (
        	<div className="animation-item" key={this.props.key}>
        		{this.props.children}
        	</div>
        )
    }
}

export default AnimationItem;
