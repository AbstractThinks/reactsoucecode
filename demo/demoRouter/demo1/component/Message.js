import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Message';
    }
    render() {
        return (

        	<h3>Message {this.props.params.id}</h3>

        );
    }
}

export default Message;
