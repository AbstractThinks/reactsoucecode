import {connect} from 'react-redux';
import {toggleTod} from '../actions/actions.js';
import TodoList from '../component/TodoList';
import {getVisibleTodos} from '../selectors';

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)