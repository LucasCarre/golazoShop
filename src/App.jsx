import './App.css'
import ItemListConteiner from './components/ItemListConteiner'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarContainer from './components/NavBarContainer'
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:cat' element={<ItemListConteiner/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
