
import { useEffect } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import ProductService from '../src/services/productService.js'
import axios from 'axios';

axios.defaults.baseURL="https://dummyjson.com"

function App() {

  useEffect(()=>{
    ProductService.getSingleProduct()
    .then(res=> console.log(res.data))
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-[60px] text-green-600 font-extrabold my-[30px]'>TODO APP</h1>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
