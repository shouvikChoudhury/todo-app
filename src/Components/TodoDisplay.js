import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodos, completeTodos } from '../Store/reduxToolkit'

export default function TodoDisplay() {
    const task = useSelector((state) => state.todolist)
    const dispatch = useDispatch()
    return (
        <div><h3>Task todo</h3>
            {task && task.map((item) => {
                return (
                    <div key={item.id}>
                        {!item.complete &&
                            (<p><span>{item.name}</span>
                                <button onClick={() => { dispatch(completeTodos(item.id)) }}>Completed</button>
                                <button onClick={() => { dispatch(removeTodos(item.id)) }}>Remove</button></p>)
                        }
                    </div>
                )
            })}
            <h3>Task completed</h3>
            {task && task.map((item) => {
                return (
                    <div key={item.id}>
                        {item.complete &&
                            (<p><span>{item.name}</span>
                                <button onClick={() => { dispatch(removeTodos(item.id)) }}>Remove</button></p>)
                        }
                    </div>
                )
            })}
        </div >
    )
}
