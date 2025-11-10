import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ItemListConteiner from './components/ItemListConteiner'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarContainer from './components/NavBarContainer'


function App() {
  return (
    <>
      <header>
        <NavBarContainer/>
      </header>
    <section>
      <ItemListConteiner/>
    </section>
    </>
  )
}

export default App
