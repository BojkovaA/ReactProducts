//icons
import { FaBasketShopping } from "react-icons/fa6";

function ListProductComponent({product}){

    
    return <>
        <div className="w-[300px] h-full border border-blue-500 flex flex-col items-center justify-center gap-[20px] p-[20px]">
            <img src={product.thumbnail} alt={product.title} className="w-full h-[150px] object-fitcover"/>
            <div className="mt-[50px] text-center">
                <h2>{product.title}</h2>
                <p>{product.price}</p>
            </div>
            <FaBasketShopping size={32} className="cursor-pointer"/>
        </div>
        
    </>
}

export default ListProductComponent