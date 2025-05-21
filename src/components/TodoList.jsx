import { useState, useEffect } from 'react'

const TodoList = () => {
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

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
      <input
        placeholder='Masukan todo'
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
      />
      <button onClick={() => setValue('')}>clear</button>
      <button onClick={() => {
        handleAddTodo(value)
        setValue('')
      }}>Tambah</button>

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