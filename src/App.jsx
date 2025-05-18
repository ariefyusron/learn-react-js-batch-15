import { useState } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

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

      <h2>count: {count}</h2>
      <button onClick={() => {
        setCount(2)
      }}>Klik</button>
    </>
  )
}

export default App