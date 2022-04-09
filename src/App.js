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
import {useState,useEffect} from 'react';
import axios from "axios";


function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }
    // console.log(fetch());
  }, []);

 
  const [cartItems,setCartItems]=useState([]); 
  const onAdd = (product)=>{
    const exist = cartItems.find(item => item._id === product._id);
    if(exist){
      setCartItems(cartItems.map(item => item._id === product._id ? {...exist , qty: exist.qty +1} : item));
    }else{
      setCartItems([...cartItems , {...product , qty : 1}]);
    }
  };

  const onRemove = (product)=>{
    const exist = cartItems.find(item => item._id === product._id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter(item => item._id !== product._id));
    }else{
      setCartItems(cartItems.map(item => item._id === product._id ? {...exist , qty: exist.qty -1} : item));
    }
  };
 
  return (
    <>
    <Header cartItems={cartItems} countItems={cartItems.length}/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Navigate  to='/Sign'/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/allproducts' element={<AllProducts onAdd={onAdd}/>}/>
      <Route path='/respiratory' element={<Respiratory onAdd={onAdd}/>}/>
      <Route path='/catheter' element={<Catheter onAdd={onAdd}/>}/>
      <Route path='/anesthesia' element={<Anesthesia onAdd={onAdd}/>}/>
      <Route path='/nonwoven' element={<NonWoven onAdd={onAdd}/>}/>
      <Route path='/accessory' element={<Accessory onAdd={onAdd}/>}/>
      <Route path='/Others' element={<Others onAdd={onAdd}/>}/>
      <Route path='/adminallproducts' element={<AdminAllProducts onAdd={onAdd}/>}/>
      <Route path='/adminallproducts/:id' element={<ProductDetails onAdd={onAdd}/>}/>
      <Route path='/productdetails' element={<ProductDetails />}/>
      <Route path='/productdetails/:id' element={<ProductDetails onAdd={onAdd}/>}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/deleteproduct' element={<DeleteProduct />}/>
      <Route path='/deleteproduct/:id' element={<DeleteProduct  />}/>
      <Route path='/cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sign' element={<Sign />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
