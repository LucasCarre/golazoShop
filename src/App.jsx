import './App.css'
import ItemListConteiner from './components/ItemListConteiner'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarContainer from './components/NavBarContainer'
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:cat' element={<ItemListConteiner/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
