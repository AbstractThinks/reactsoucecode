import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../action/actions';
import AddTodo from '../component/AddTodo';
import TodoList from '../component/TodoList';
import Footer from '../component/Footer';

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(actionCreator.addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(actionCreator.completeTodo(index))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(actionCreator.setVisibilityFilter(nextFilter))
          } />
      </div>
    )
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case actionCreator.VisibilityFilters.SHOW_ALL:
      return todos
    case actionCreator.VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case actionCreator.VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}
function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(App);
