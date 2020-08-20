import React from "react";
import {connect} from 'react-redux'
import {useRef} from 'react'
import {addTodo} from './redux/actions'
const AddTodo = ({dispatch}) => {
    const input = useRef(null);

    return <div>
        <input ref={input}/>
        <button onClick={() => {
            dispatch(addTodo(input.current.value));
            input.current.value = ''
        }} > 
        Add Todo 
        </button>
    </div>
}

export default connect()(AddTodo)