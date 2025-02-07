
import './App.css'
import { ToastContainer } from 'react-toastify';
import axios from "axios";
import NavBarComponent from './components/NavBarComponent.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import productService from './services/productService';
import { useDispatch } from 'react-redux';
import { saveProductAction } from './store/productSlice.js';

axios.defaults.baseURL="https://dummyjson.com"

function App() {

 const dispatch = useDispatch();

 useEffect(()=>{
  productService.getAllProducts().
  then((response) => {
    console.log(response.data.products)
    dispatch(saveProductAction(response.data.products))
  }).catch(err => console.log(err))
 },[])
  
  return (
    
      <div className='container mx-auto'>
        <NavBarComponent/>
       
       <Outlet/>
        
        <ToastContainer/>
      </div>
      
    
  )
}

export default App
