import React from "react";
import { useRef, useState } from 'react'
import { addTodo } from './redux/actions'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const input = useRef(null);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    return <div>
        <input ref={input} value={value} onChange={() => setValue(input.current.value)} />
        <button onClick={() => {
            dispatch(addTodo(input.current.value));
            input.current.value = ''
        }} >
            Add Todo
        </button>
    </div>
}

export default AddTodo