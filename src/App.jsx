import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Navbar from './components/NavBar'


function App() {
  return (
    <>
    <div>
      <header>
        <Navbar/>
      </header>
    </div>
    <section>
      <Button/>
      <Counter/>
    </section>
    </>
  )
}

export default App
