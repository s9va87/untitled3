import React from 'react'


    const style = {'textDecoration': 'line-through',}

const Todolist = (props) => {

    const {todolist, deleteHandler, updateHandler} = props
    const {status} = todolist
    const done = status ? style : {}


    return (
        <div>
            {
                todolist.map(el => <div key={el.id}>
                    <span style={done}>{el.title}{el.status} </span>
                    <button onClick={() => deleteHandler(el.id)}>delete</button>
                    <button onClick={() => updateHandler(el.id)}>update</button>
                    <button>up</button>
                    <button>down</button>
                    <button>edit</button>
                </div>)
            }
        </div>
    )
}

export default Todolist
