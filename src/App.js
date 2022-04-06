import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes , Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
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


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Navigate  to='/home'/>}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/allproducts' element={<AllProducts />}/>
      <Route path='/respiratory' element={<Respiratory />}/>
      <Route path='/catheter' element={<Catheter />}/>
      <Route path='/anesthesia' element={<Anesthesia />}/>
      <Route path='/nonwoven' element={<NonWoven />}/>
      <Route path='/accessory' element={<Accessory />}/>
      <Route path='/Others' element={<Others />}/>
      <Route path='/adminallproducts' element={<AdminAllProducts />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sign' element={<Sign />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
