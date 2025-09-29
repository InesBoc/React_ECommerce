
import NavbarContainer from './components/NavbarContainer'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import checkout from './components/Checkout'
import Checkout from './components/Checkout'

function App() {
  
  return (

    <BrowserRouter>
    <NavbarContainer />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path= "/cart" element ={<CartContainer />}/>
      <Route path= "/Checkout" element ={<Checkout />}/>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
