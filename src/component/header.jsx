import React from 'react';
import lohoHeader from '../../src/assets/logoHeader.jpg'
import card from '../assets/card.png'
import anil from '../assets/anil.jpg'
import { Link , NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const productData = useSelector((state)=> state.bazar.productData)
  console.log(productData);
    return (
      <div  className='flex justify-around items-center w-auto h-20 border-b-[1px] border-b-gray-800 gap-8 max-w-screen-xl sticky top-0 z-50 bg-slate-200 '>
       <Link to= '/'>
       <div className=' corner w-12 h-4' >
         <img src={lohoHeader} alt="logoheader" className='rounded-lg' />
        </div>
       </Link>
        <div className='flex justify-between text-center gap-8'>
          <ul className='flex justify-end text-center gap-8 cursor-pointer'>
            <li className='hover:underline-offset-4 hover:text-orange-900 hover:underline text-black font-bold duration-300'>Home</li>
            <li className='hover:underline-offset-4 hover:text-orange-900 hover:underline text-black font-bold duration-300'>Card</li>
            <li className='hover:underline-offset-4 hover:text-orange-900 hover:underline text-black font-bold duration-300'>contect</li>
            <li className='hover:underline-offset-4 hover:text-orange-900 hover:underline text-black font-bold duration-300'>Healp</li>
          </ul>
          <NavLink to='/cart'>
         
          <img src= {card} alt="card_image" className='w-full h-5'/>
          {productData.length }
          
          </NavLink>
          
          
          
          <img src= {anil} alt="anil_image" className='w-8 h-8 rounded-full' />
        </div>
 
      </div>   
    );
};

export default Header;