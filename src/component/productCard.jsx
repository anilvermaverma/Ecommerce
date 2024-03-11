import React, { useEffect } from 'react';
import { WiDirectionRight } from "react-icons/wi";
import Products from './product';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import Product from './product';
import { addToCard } from '../redux/bazerSlice';
import { toast, ToastContainer } from 'react-toastify';
const ProductCard = ({product}) => {
   // console.log(product)
   const dispatch = useDispatch()
   const _id = product.title
   
   // console.log(_id);
  const idstring = ()=>  String(_id).toLowerCase().split(" ").join("")
 
  const rootId = idstring(_id)
   // console.log(rootId);
//   console.log(rootId);

  const navigate = useNavigate()
 const hendelSubmit =  ()=>{
   // console.log(rootId);
   navigate(`/product/${rootId}`,{
      state:{
        item: product
      },
   })
 }

//   console.log(product);
    return (
        <div className='group h-96'>
           <div>
           <div  className='w-full cursor-pointer' >
              <img  onClick={hendelSubmit}  src={product.image} alt="" className='w-full h-80 group-hover:scale-110 duration-500 rounded-md' />
           </div >
           </div>
           <div  className='flex justify-between border-[1px] px-2 py-4 overflow-hidden '>
            <div>
            <h1 className=' font-bold  '>{product.title.substring(0 , 15)}</h1>
            </div>
         
        
         <div className='flex gap-2 transform group-hover:translate-x-24 relative overflow-hidden transition-transform duration-500 '>
            <p className=' text-gray-500'>${product.price}</p>
             <p>{product.oldPrice}</p>
           </div>
           <button
           onClick={()=> dispatch(addToCard({
             _id:product._id,
             title: product.title,
             image: product.image,
             price: product.price,
             oldPrice: product.oldPrice,
             quantity:1,
             description: product.description
           }))& toast.success(`${product.title} is added`)
          } 
           className='absolute  hover:text-gray-600  flex items-center gap-1 group-hover:translate-x-32 transition-transform duration-500 cursor-pointer ' >
            Add to Card
            <WiDirectionRight  />
           </button>
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

export default ProductCard;