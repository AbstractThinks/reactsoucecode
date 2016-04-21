export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
	return {
		type: INCREMENT_COUNTER
	}
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
	return (dispatch, getState) => {
		//获取state对象中的counter属性值
		const {counter} = getState();

		//偶数则返回
		if (counter % 2 === 0) {
			return 
		}

		dispatch(increment());
	}
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}