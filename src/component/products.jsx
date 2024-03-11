import React from 'react';
import ProductCard from './productCard';

const Product = ({products}) => {
    // console.log(products);
    // console.log(<img src={products.image} />);
    return (
        <>
        <div className='flex text-center justify-center rounded-md text-white mt-5 mb-5 '>
          <span className=' bg-black from-stone-600 rounded-lg text-3xl'>Product</span>
        </div>
        <div className='grid grid-cols-4 gap-20 w-screen '> 
        
            
         
           {
             products.map((item)=> 
             <ProductCard key={item._id} product = {item}/>
              
            )
           }
          <div>
           
          </div>
          
        </div>
        </>
    );
};

export default Product;