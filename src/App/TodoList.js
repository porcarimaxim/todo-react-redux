import React from "react";
import {VisibilityFilters, toggleTodo} from './redux/actions'
import Todo from './Todo'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

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

const TodoList = () => {
    const todos = useSelector((state) => getVisibleTodos(
        state.todos,
        state.visibilityFilter
    ), shallowEqual);
    
    const dispatch = useDispatch()

    return <ul>
        {todos.map(todo => <Todo
            key={todo.id}
            {...todo}
            onClick={() => dispatch(toggleTodo(todo.id))}
        />)}
    </ul>
}


export default TodoList