import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Contato from './Pages/Contato/Contato';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/contato' element={<Contato></Contato>}/>
        <Route path='/product/:id' element={<Product></Product>}/>
        <Route path='/products' element={<Products></Products>}/>
        <Route path='/*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
