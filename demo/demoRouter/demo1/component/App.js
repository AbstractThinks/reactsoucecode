import React from 'react';
import {Router, Route, Link, IndexLink } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    componentWillMount() {
        console.log("App componentWillMount");
    }

    componentDidMount () {
        console.log("App componentDidMount");
    }

    componentWillReceiveProps () {
        console.log("App componentWillReceiveProps");
    }
    componentWillUpdate () {
        console.log("App componentWillUpdate");
    }

    componentDidUpdate () {
        console.log("App componentDidUpdate");
    }

    componentWillUnmount () {
        console.log("App componentWillUnmount");
    }
    render() {
        return (
        	<div>
        		<h1>App</h1>
        		<ul>
                    <li><Link to="/">Home</Link></li>
        			<li><Link to="/about">About</Link></li>
        			<li><Link to="/inbox">Inbox</Link></li>
        		</ul>
        		{this.props.children}
        	</div>
        )
    }
}
export default App;
