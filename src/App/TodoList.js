import React from "react";
import { connect } from "react-redux"
import {VisibilityFilters, toggleTodo} from './redux/actions'
import Todo from './Todo'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const TodoList = ({todos, onTodoClick}) => {
    return <ul>
        {todos.map(todo => <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
        />)}
    </ul>
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => dispatch(toggleTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)