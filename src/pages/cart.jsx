import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import water from '../assets/water.jpg'
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
const Cart = () => {
    const [total , setTotal] = useState('')
    const productData =  useSelector((state)=> state.bazar.productData)
    // console.log(productData);
    return (
        <div>
             <div >
                <img src={water} alt="water" className='w-full h-72 bg-cover' />
             </div>
             <div className='flex justify-around'>
                 <div className='flex'>
                    
                    <div >
                      
                       {
                        productData.map((item)=>
                        <div className='flex justify-between gap-4 py-4'>
                            <div className='flex items-center ml-4'>
                                < LiaSkullCrossbonesSolid/>
                            </div>
                            <div className='gap-4 flex justify-center items-center'>
                               <div>
                               <img src= {item.image} alt="" className='w-36 h-36 rounded-md ' />
                               </div >
                               <div >
                                {item.title}
                               </div>
                               <div >
                                ${item.price}
                               </div>
                               <div>
                                <div className='flex border-[1px] gap-2 px-2 py-2'>
                                    <h1>
                                        Quantity
                                    </h1>
                                    <button>
                                        -
                                    </button>
                                    <p>
                                        {item.quantity}
                                    </p>
                                    <button>
                                        +
                                    </button>
                                </div>
                               </div>
                               <div>
                               $ {
                                    item.oldPrice
                                }
                               </div>
                            </div>
                        </div>


                        )
                       }
                        
                    </div>

                 </div>
                 <div>
                    <div>
                        Total Card
                    {
                            productData.map((item)=>
                             
                            <div> 
                                <div>
                                    <h1>Suntotal {(item.price)*(item.quantity)}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            )
                        }
                            
                    </div>
                    
                 </div>
             </div>
        </div>
    );
};

export default Cart;