import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'

import storeTodo from '../store/todo'

const TodoList = () => {
  const [count, setCount] = useState(0)
  const formRef = useRef(null)
  const navigate = useNavigate()

  const todoList = storeTodo((state) => state.todoList)
  const setTodoList = storeTodo(state => state.addTodo)

  const handleAddTodo = (desc = 'Belajar React') => {
    setTodoList({
      desc,
      status: 'todo'
    })
  }

  const handleCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setTimeout(() => {
      handleAddTodo()
    },3000)
  }, [])

  return (
    <>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          handleAddTodo(e.target.todo.value)
          e.target.reset()
          navigate('product')
        }}
      >
        <input
          name='todo'
          placeholder='Masukan todo'
        />
        <button type='button' onClick={() => {
          formRef.current.reset()
        }}>clear</button>
        <button type='submit'>Tambah</button>
      </form>

      {todoList.length > 0 ? (
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item.desc} - {item.status}</li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Belum ada todo</p>
        </div>
      )}

      <button onClick={() => handleAddTodo()}>Tambah data todo</button>

      <div>{count}</div>
      <button onClick={handleCount}>count</button>
    </>
  )
}

export default TodoList