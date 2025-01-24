
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import ListProductComponent from './components/ListProductsComponent';
import SingleProductComponent from './components/SingleProductComponent';
import { ToastContainer} from 'react-toastify';

function App() {

  const [allProducts, setAllProducts]= useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> {setAllProducts(data.products)
      setIsLoading(true)
    });

  }, [])





  return (
    <>
      <div>
        <h1>radiii</h1>
        <div className='flex flex-wrap gap-20 items-center justify-center'>
          {isLoading ? allProducts.map((product)=>{
            return <ListProductComponent key={product.id} product={product}/>
          }) : <h2>Loading...</h2>}
        </div>
      </div>
      <SingleProductComponent/>
      <ToastContainer/>
    </>
  )
}

export default App
