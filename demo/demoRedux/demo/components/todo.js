import React, {Component, PropTypes} from 'react'
class Counter extends Component {
	constructor() {
		super();
	}
	render() {
		const {increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<p>
				Clicked: {counter} times
				{' '}
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
				{' '}
				<button onClick={incrementIfOdd}>Increment if odd</button>
				{' '}
				<button onClick={() => incrementAsync()}>Increment async</button>
			</p>
		)
	}
}

Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired
};

export default Counter