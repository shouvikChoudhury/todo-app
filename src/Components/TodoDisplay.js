import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodos, completeTodos } from '../Store/reduxToolkit'

export default function TodoDisplay() {
    const task = useSelector((state) => state.todolist)
    const dispatch = useDispatch()
    return (
        <div>
            {task.length == 0 && <h3>No task added</h3>}
            {task.length > 0 && <div><h3>Task todo</h3>
                {task && task.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            {!item.complete &&
                                (<div className="card d-block"><span>{item.name}</span>
                                    <button onClick={() => { dispatch(completeTodos(item.id)) }}>Completed</button>
                                    <button onClick={() => { dispatch(removeTodos(item.id)) }}>Remove</button></div>)
                            }
                        </div>
                    )
                })}

                <h3>Task completed</h3>
                {task && task.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            {item.complete &&
                                (<div className="card d-block"><span>{item.name}</span>
                                    <button onClick={() => { dispatch(removeTodos(item.id)) }}>Remove</button></div>)
                            }
                        </div>
                    )
                })}</div>}
        </div >
    )
}
