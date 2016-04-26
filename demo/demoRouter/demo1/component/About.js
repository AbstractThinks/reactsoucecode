import React from 'react';
import withRouter from '../withRouter/withRouter';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'About';
    }
    routerWillLeave() {
        console.log("About will leave")
    }
    componentWillMount() {
        console.log("About componentWillMount");
    }

    routerWillLeave(nextLocation) {
        console.log(nextLocation)
        console.log('Your work is not saved! Are you sure you want to leave?');
        return false;
    }

    componentDidMount () {
        console.log("About componentDidMount");
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    componentWillReceiveProps () {
        console.log("About componentWillReceiveProps");
    }
    componentWillUpdate () {
        console.log("About componentWillUpdate");
    }

    componentDidUpdate () {
        console.log("About componentDidUpdate");
    }

    componentWillUnmount () {
        console.log("About componentWillUnmount");
    }

    render() {
        return(
        	<h3>About</h3>
        );
    }
}
// const About = withRouter(About1)
export default withRouter(About);
