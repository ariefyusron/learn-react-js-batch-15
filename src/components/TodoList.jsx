const TodoList = () => {
  const todoList = [
    {
      desc: 'Service Motor',
      status: 'todo'
    },
    {
      desc: 'Cuci Motor',
      status: 'in progress'
    },
    {
      desc: 'Jual Motor',
      status: 'todo'
    }
  ]

  return (
    <>
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
    </>
  )
}

export default TodoList