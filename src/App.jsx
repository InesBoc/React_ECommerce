
import NavbarContainer from './components/NavBarContainer'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  
  return (
   /* <>
   
      
      <ItemListContainer text="Tienda on line de artículos de maquillaje y accesorios"/>
   
    </> */
     <BrowserRouter>
     <NavbarContainer />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
       <Route path="/category/:id" element={<ItemListContainer />} />
       <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
