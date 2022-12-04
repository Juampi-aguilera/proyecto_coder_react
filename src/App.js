import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import './App.css';
import Header from './containers/Header'
import Main from './containers/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

const App = () =>{
  return(
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;
