import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes , Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Sign from './components/Sign';
import AllProducts from './components/AllProducts';
import AdminAllProducts from './components/AdminAllProducts';
import Respiratory from './components/Respiratory';
import Catheter from './components/Catheter';
import Anesthesia from './components/Anesthesia';
import NonWoven from './components/NonWoven';
import Accessory from './components/Accessory';
import Others from './components/Others';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Contact from './components/ContactUs';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Navigate  to='/home'/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/allproducts' element={<AllProducts />}/>
      <Route path='/respiratory' element={<Respiratory />}/>
      <Route path='/catheter' element={<Catheter />}/>
      <Route path='/anesthesia' element={<Anesthesia />}/>
      <Route path='/nonwoven' element={<NonWoven />}/>
      <Route path='/accessory' element={<Accessory />}/>
      <Route path='/Others' element={<Others />}/>
      <Route path='/adminallproducts' element={<AdminAllProducts />}/>
      <Route path='/adminallproducts/:id' element={<ProductDetails />}/>
      <Route path='/productdetails' element={<ProductDetails />}/>
      <Route path='/productdetails/:id' element={<ProductDetails />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/deleteproduct' element={<DeleteProduct />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sign' element={<Sign />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
