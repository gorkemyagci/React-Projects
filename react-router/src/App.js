import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Product from './pages/Product/Product';
import ProductDetails from './pages/Product/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout/>}>
        <Route index={true} element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
