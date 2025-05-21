import { useState } from 'react'

import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Ini Header Pertama" />

      <Body>
        <div>
          <h1>Ini child</h1>
        </div>
      </Body>
      <Footer />

      {count === 0 ? <p>Count belum dihitung</p> : <h2>count: {count}</h2>}

      <button onClick={() => {
        setCount(2)
      }}>Klik</button>

      <div>-------------------------</div>

      <TodoList />
    </>
  )
}

export default App