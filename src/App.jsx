
import './App.css'
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import useFetch from './utils/useFetch.js';
import CardComponent from './components/cardComponent.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';

axios.defaults.baseURL="https://dummyjson.com"

function App() {

  const {data, isLoading} =useFetch(' ');
  
  return (
    
      <div className='container mx-auto'>
        <NavBarComponent/>
        <div className='flex flex-wrap gap-[20px] items-center justify-center mt-[50px]'>
          {isLoading? data.map((product)=>{
            return <CardComponent key={product.id} product={product}/>
          }) : <h2>Loading...</h2>}
        </div>

        <ToastContainer/>
      </div>
      
    
  )
}

export default App
