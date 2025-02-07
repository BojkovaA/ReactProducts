import { useDispatch } from "react-redux";
import { saveInCartAction } from "../store/productSlice";


function CardComponent({product}){


    const dispatch = useDispatch();

    function handleCart(product){
        dispatch(saveInCartAction(product))
    }


    return (
    <div className="border border-orange-500 w-[300px]">
        <div className="relative">
            <img src={product.thumbnail} alt="" 
            className="w-full h-[150px] object-cover"/>
            <div className="bg-black/40 hover:bg-black/0 absolute inset-0 cursor-pointer
            transition-all hover:scale-110 "></div>
        </div>
        <div className="p-[15px] mt-[20px] flex flex-col gap-[10px]">
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <button className="px-[20px] py-[10px] bg-orange-500 text-white rounded-[10px] hover:scale-105 transition-all duration-300
            hover:bg-blue-500">View more</button>

            <button className="px-[20px] py-[10px] bg-orange-500 text-white rounded-[10px] hover:scale-105 transition-all duration-300
            hover:bg-blue-500" onClick={()=>handleCart(product)}>Add to Cart</button>
        </div>
    </div>
    )
}

export default CardComponent;
   