import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodos } from '../Store/reduxToolkit'

export default function TaskForm() {
    const [todo, settodo] = useState("")
    const dispatch = useDispatch()
    const addHandler = (e) => {
        e.preventDefault()
        dispatch(addTodos(todo))
        settodo("")
    }
    return (
        <div>
            <h3>Todo</h3>
            <form onSubmit={addHandler}>
                <label htmlFor="name">Enter task name :</label>
                <input type="text" value={todo} onChange={(e) => { settodo(e.target.value) }} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
