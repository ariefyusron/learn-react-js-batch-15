import { useState, useEffect, useRef } from 'react'

const TodoList = () => {
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)
  const formRef = useRef(null)

  const handleAddTodo = (desc = 'Belajar React') => {
    setTodoList([
      {
        desc,
        status: 'todo'
      },
      ...todoList
    ])
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
        }}
      >
        <input
          name='todo'
          placeholder='Masukan todo'
        />
        <button onClick={(e) => {
          e.preventDefault()
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