//IMAGE
// import profileImg from "../assets/profile.png"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';

function SingleProductComponent(){

    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(response => {setSingleProduct(response)
            setIsLoading(true)
            toast.success('Product arrived')
        });
    }, [])

    return<>
        {/* <div>
            <img src={profileImg} className="w-[400px] h-[400px] rounded-full"></img>
        </div> */}

        <div className="flex flex-col items-center justify-center">
            {isLoading? <>
                <img src={singleProduct.thumbnail} alt="" className="rounded-full border border-blue-400 "/>
            <div>
                <h2>{singleProduct.title}</h2>


                <img src={singleProduct.images[0]}/>
            </div>
            </> : <h2>Loading...</h2>} 
        </div>
    </>
}

export default SingleProductComponent