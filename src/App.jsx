import NavbarContainer from './components/NavbarContainer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
