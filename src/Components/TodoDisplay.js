import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodos, completeTodos, editTodos } from '../Store/reduxToolkit'

export default function TodoDisplay() {
    const [edit, setedit] = useState(false)
    const [first, setfirst] = useState("")
    const [ide, setide] = useState("")
    const task = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div>
            {task.length == 0 && <h3>No task added</h3>}
            {task.length > 0 && <div><h3>Task todo</h3>
                {task && task.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            {!item.complete &&
                                (<div className="card d-block">{(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(editTodos({ id: item.id, valnam: first })) }}>
                                    <input value={first} onChange={(e) => { setfirst(e.target.value) }} />
                                    <input type="submit" value="Add" className='d-none' />
                                </form> : <span>{item.name}</span>}
                                    <button onClick={() => { setedit(!edit); setfirst(item.name); setide(item.id) }}>Edit</button>
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
                                (<div className="card d-block">{(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(editTodos({ id: item.id, valnam: first })) }}>
                                    <input value={first} onChange={(e) => { setfirst(e.target.value) }} />
                                    <input type="submit" value="Add" className='d-none' />
                                </form> : <span>{item.name}</span>}
                                    <button onClick={() => { setedit(!edit); setfirst(item.name); setide(item.id) }}>Edit</button>
                                    <button onClick={() => { dispatch(removeTodos(item.id)) }}>Remove</button></div>)
                            }
                        </div>
                    )
                })}</div>}
        </div >
    )
}
