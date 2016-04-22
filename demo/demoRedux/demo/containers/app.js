import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/todo.js';
import * as CounterActions from '../actions/counter';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
	console.log(state);
	return {
		counter: state.counter
	}
}

// export default connect(mapStateToProps, CounterActions)(Counter);
export default connect(mapStateToProps, CounterActions)(Counter);
//第二种写法
//将action的所有方法绑定到props上
// function mapDispathToProps(dispatch) {
// 	return bindActionCreators(CounterActions, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

