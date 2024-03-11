import React, { useEffect, useState } from 'react';
import Banner from '../component/banner.jsx';
import { useLoaderData } from 'react-router-dom';
import Product from '../component/products.jsx';
import Products from '../component/products.jsx';
const Home = () => {
    const [products , setProducts] = useState([]);
    const data = useLoaderData()
    useEffect(()=>{
        setProducts(data.data)
    } , [data])
    return (
        <div>
        <Banner/>     
        <Products products = {products}/>
        </div>
    );
};

export default Home;