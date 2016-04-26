import React from 'react';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inbox';
    }

    componentWillMount() {
        console.log("Inbox componentWillMount");
    }

    componentDidMount () {
        console.log("Inbox componentDidMount");
    }

    componentWillReceiveProps () {
        console.log("Inbox componentWillReceiveProps");
    }
    componentWillUpdate () {
        console.log("Inbox componentWillUpdate");
    }

    componentDidUpdate () {
        console.log("Inbox componentDidUpdate");
    }

    componentWillUnmount () {
        console.log("Inbox componentWillUnmount");
    }

    render() {
        return (
        	<div>
		        <h2>Inbox</h2>
		        {this.props.children || "Welcome to your Inbox"}
		    </div>
        );
    }
}

export default Inbox;

