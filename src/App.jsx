
import { useEffect, useState } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import ProductService from '../src/services/productService.js'
import axios from 'axios';

axios.defaults.baseURL="https://dummyjson.com"

function App() {

  const [name, setName] = useState('Tihomir')
  // console.log(name)

  function changeName(){
    setName('Angela')
  }

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
      <h1>{name}</h1>
      <button onClick={changeName}>Change name</button>
      <ToastContainer/>
    </>
  )
}

export default App
