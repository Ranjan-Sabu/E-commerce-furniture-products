
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Products/Navbar';
import Login from './components/Login';
import Registerform from './components/Registerform';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import {Routes,Route} from 'react-router-dom'
import Furniture from './components/Products/Furniture';
import Mattresses from './components/Products/Mattresses';
import SofasSeating from './components/Products/SofasSeating';
import { furnitures } from './components/Products/Productdata';
import { myContext } from './components/Context';
import { useState } from 'react';
import ViewProducts from './components/Products/ViewProducts';
import Cart from './components/Products/Cart';
import AdminHome from './components/AdminSection/AdminHome';
import ViewAdmin from './components/AdminSection/ViewAdmin';
import AdminProduct from './components/AdminSection/AddProduct';
import AdminInfo from './components/AdminSection/AdminInfo';
import Userdetails from './components/AdminSection/Userdetails';
import { Userdata } from './components/AdminSection/Userdata';



function App() {
  const [cart,setCart]=useState([])
 const [product,setProduct]=useState(furnitures)
 const [isLoggedIn,setLoggedIn]=useState(false)
 const [userdata,setUserdata]=useState(Userdata)
  return (
    <>
    <myContext.Provider value={{
     furnitures,cart,setCart,product,setProduct,isLoggedIn,setLoggedIn,userdata,setUserdata
    }}>
    <Navbar/>
 
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Register' element={<Registerform/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/furniture' element={<Furniture/>}/>
     <Route path='/mattresses' element={<Mattresses/>}/>
     <Route path='/SofasSeating' element={<SofasSeating/>}/>
     <Route path='/viewproducts/:id' element={<ViewProducts/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/AdminHome' element={<AdminHome/>}/>
     <Route path='/viewadmin/:id' element={<ViewAdmin/>}/>
     <Route path='/addproduct' element={<AdminProduct/>}/>
     <Route path='/admininfo' element={<AdminInfo/>}/>
     <Route path='/userdetails/:id' element={<Userdetails/>}/>


    </Routes>
   
    <Footer/>
    </myContext.Provider>
    </>
  );
}

export default App;
