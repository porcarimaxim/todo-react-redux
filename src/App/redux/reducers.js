import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, VisibilityFilters, SET_VISIBILITY_FILTER } from './actions';
import { v4 as uuidv4 } from 'uuid';

const todo = (state, action) => {
    if (action.type === ADD_TODO) {
        return {
            id: uuidv4(),
            text: action.text,
            completed: false
        }
    }
    if (action.type === TOGGLE_TODO) {
        if (state.id !== action.id) {
            return state;
        }

        return {
            ...state,
            completed: !state.completed
        }
    }

    return state;
}

const todos = (state = [], action) => {
    if (action.type === ADD_TODO) {
        return [
            ...state,
            todo(undefined, action)
        ]
    }
    if (action.type === TOGGLE_TODO) {
        return state.map(t => todo(t, action))
    }

    return state;
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


const todoApp = combineReducers({
    todos,
    visibilityFilter
}) 

export default todoApp;