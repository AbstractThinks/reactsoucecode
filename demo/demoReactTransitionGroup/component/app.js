import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import ReactDOM from 'react-dom';
import Item from './item';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {items: ['hello', 'world', 'click', 'me']};
    }
    handleAdd(){
		var newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({items: newItems});
	}
	handleRemove(i){
		var newItems = this.state.items;
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}
	componentWillUnmount () {
		console.log("App componentWillUnmount")
		// this.componentWillLeave()
	}
    render() {
    	const items = this.state.items.map((item, i) => {
			return (
				
					<Item key={item}>
						{item}
					</Item>
				
			);
		});
        return(
        	<div>
        		<button onClick={ this.handleAdd.bind(this) } > Add Item </button>
				<button onClick={this.handleRemove.bind(this)}>remove Item</button>
        		<ReactTransitionGroup component="ul" className="animated-list">
        		{items}
        		</ReactTransitionGroup>
        	</div>

        );
    }
}
ReactDOM.render(<App />,  document.getElementById('container'));
export default App;