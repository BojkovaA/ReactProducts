import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products?limit=50&skip=20');
    static getProductByCategory = () => axios.get('/products/category/smartphones')
}

export default ProductService;

// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);