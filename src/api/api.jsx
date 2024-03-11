import axios from 'axios'

export async function ProductData(){
 const productData = await axios.get("https://fakestoreapiserver.reactbd.com/products")
 return productData
}

