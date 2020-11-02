import React, {useState} from 'react'
import Todolist from './Todolist'

const App = () => {

  const [todolist, setTodolist] = useState([
    {id: 1, title: 'todo item1', status: false},
    {id: 2, title: 'todo item2', status: true},
    {id: 3, title: 'todo item3', status: false},
  ])
  const [newInput, setNewInput] = useState('');

  const addNewTodoHandler = () => {
    const newTodo = {id: Math.random(), title: newInput, status: false}
    const newList = [...todolist, newTodo]
    setTodolist(newList)
    setNewInput('')
  }
  const inputHandler = (e) => {
    setNewInput(e.target.value)
  }

  const deleteHandler = (todoId) => {
    const newList = todolist.filter(el => todoId !== el.id)
    setTodolist(newList)
  }

  const updateHandler = (todoId)=> {
   const newList = todolist.map(el=> {
     if (todoId === el.id) {
         return {...el, status: !el.status}
     }
     return el
       }
   )
      setTodolist(newList)
  }

  return (

      <div>
        <input type='text' onChange={inputHandler} value={newInput}/>
        <button onClick={addNewTodoHandler}>add new todo</button>
        <Todolist
            todolist={todolist}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
        />
      </div>
  )
}


export default App
