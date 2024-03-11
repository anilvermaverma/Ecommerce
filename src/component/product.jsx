import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdStarRate } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import { addToCard } from '../redux/bazerSlice';
import{ToastContainer , toast} from 'react-toastify'
import Cart from '../pages/cart';

const Products = () => {
    const productCard =  useSelector((state)=> state.bazar.productData)
    const [Quantity , setQuantity] = useState(1)
    const display = useDispatch()
   const [detail , setDetail] = useState({})
    const location = useLocation()
    // console.log(location.state.item);
    useEffect(()=>{
     
     setDetail(location.state.item)
    //  console.log(location.state.item);
    },[])

    // console.log(detail);
    return (
        <div>
           <div className='flex items-center'>
            <div >
            <img src={detail.image} alt="image" className='rounded-lg h-96 ' />
            </div>
            <div className='gap-8 ml-10 ' >
                <div>
                <div className='flex justify-start '>
                    
                <h1 className='font-bold  text-2xl'>
                    {detail.title}
                </h1>
                </div>

                <div className='flex gap-8 mt-4'>
                    <p className=' text-gray-600 '>
                        ${detail.oldPrice}
                    </p>
                    <p className='text-xl'>
                       $ {detail.price}
                    </p>
                </div>
                <div className='flex justify-start gap-1 mt-8'>
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <p>
                    (Custmure review)
                </p>
                </div>
                <div className='mt-8'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error optio possimus. </p>
                        <p>Quae error optio possimus. Esse at architecto eveniet veritatis sequi architecto eveniet veritatis sequi </p>
                        <p> 
                    </p>
                </div>
                </div>
                <div className='flex justify-start gap-2 mt-8'>
                    <div className='flex justify-start border-[1px] gap-4 px-2 py-2 w-40 rounded-md'>
                    <p>
                        Quantity
                    </p>
                    <button onClick={()=>{
                       if(Quantity != 1){
                        setQuantity(Quantity - 1)
                       }
                        
                    }} className=' text-gray-600' >
                        -
                    </button>
                    <p>
                       {Quantity}
                    </p>
                    <button 
                    onClick={()=> setQuantity(Quantity + 1)}
                     className=' text-gray-600' >
                        +
                    </button>
                    </div>
                   <div>
                  <button 
                     onClick={ ()=>{
                        display(addToCard({
                            _id: detail._id,
                            title: detail.title,
                            image: detail.image,
                            price:detail.price,
                            oldPrice:detail.oldPrice,
                            quantity: Quantity,
                            description: detail.description,

                        }))& (toast.success(`${detail.title} is added`) )
                     } } 
                     className='bg-black text text-white rounded-md px-2 py-2'>
                        Add to Card
                    </button>
                   </div>
                </div>
                <div className=' flex justify-start mt-8'>
                    Categry: {detail.category}
                </div>
            </div>

           </div>
           <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
/>
        
        </div>
    );
};

export default Products;