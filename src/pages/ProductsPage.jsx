import { useSelector } from "react-redux";
import '../styles/main.scss'
import CardComponent from "../components/cardComponent";



function ProductsPage() {

    const {allProducts, isLoading} = useSelector(state =>state.productStore)
    return ( 
        <div className="wrapper">
            {isLoading? allProducts.map((product)=>{
                return <CardComponent key={product.id} product={product}/>
            }) : <h1>Loading...</h1>}
        </div> 
    );  
}

export default ProductsPage;