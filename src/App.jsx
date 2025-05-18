import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header title="Ini Header Pertama" />
      <Body>
        <div>
          <h1>Ini child</h1>
        </div>
      </Body>
      <Footer />
    </>
  )
}

export default App