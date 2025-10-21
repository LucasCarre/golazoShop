import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ItemListConteiner from './components/ItemListConteiner'
import Navbar from './components/NavBar'


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
    <section>
      <ItemListConteiner saludo='Bienvenidos a la tienda online de GOLAZO SHOP' slogan='Equipate para vivir tu pasión al máximo.'/>
    </section>
    </>
  )
}

export default App
