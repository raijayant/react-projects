import React, { useState } from 'react'
import './App.css'

// step 3 create a function passed as a prop
function Todo ({ todo, index, completeTodo, deleteTodo }) {
  return <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className='todo'>
    {todo.text}
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => deleteTodo(index)}>X</button>
         </div>
}

// step 4 todo form as an empty string

function TodoForm ({ addTodo }) {
  const [value, setValue] = useState('')

  // step 6 handle submit
  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }
  // step 5 form to add todo takes onSubmit, target value, and onChange handler
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text' className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Add Todo'
      />
    </form>
  )
}

// step 1
function App () {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Learn CSS',
      isCompleted: false
    },
    {
      text: 'Built really cool todo app',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const NewTodo = [...todos, { text }]
    setTodos(NewTodo)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className='app'>
      <div className='todo-list'>
        {/* step 2 and pass it to Todo as a prop */}
        {todos.map((todo, index) => (
          <Todo
            key={index} index={index} todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />

      </div>

    </div>
  )
}

export default App
