import React, { useState } from 'react';
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronCircleLeft } from "react-icons/fa";
export const Banner = () => {
    const [current , setCurrent] = useState(0);

    const data = [
        b1,
        b2,
        b3,
        b4
        
    ]
    const back = ()=>{
      setCurrent((current == 0)? 3 :(prev)=> prev -1);
  }
    const next = ()=>{
        setCurrent((current == 3)? 0 : (prev)=> prev + 1);
    }
    console.log(current);
    return (
        <div  className='w-full h-auto overflow-x-hidden' >
            <div className='w-screen h-[650px] relative'>
                <div className=' flex w-[400vw] h-full transition-transform duration-1000 ' style={{transform: `translateX(-${current*100}vw)` }}>
                    <img src= {data[0]} alt="image" className='w-screen h-full ' loading='priority' />
                    <img src= {data[1]} alt="g" className='w-screen h-full'/>
                    <img src= {data[2]} alt="h" className='w-screen h-full '/>
                    <img src= {data[3]} alt="i" className='w-screen h-full '/>
                </div>
               <div className=' absolute w-fit left-0 right-0 gap-8 mx-auto flex justify-center bottom-96' >
               <div onClick={back} className=' cursor-pointer w-14 h-12 border-[1px] border-black hover:bg-slate-200 pt-3 pl-5 rounded-md '>
               <FaChevronCircleLeft />
                </div>
                <div onClick={next} className=' cursor-pointer w-14 h-12 border-[1px] border-black hover:bg-slate-200 pt-3 pl-5 rounded-md '>
                <FaCircleChevronRight />
                </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;

// BannerWithImage.js

// SlidingBanner.js
/*
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlidingBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={b1} alt="Banner 1" className='h-25 w-full' />
      </div>
      <div>
        <img src={b2} alt="Banner 2" className='h-25 w-full' />
      </div>
      <div>
        <img src={b3} alt="Banner 3" className='h-25 w-full'/>
      </div>
    </Slider>
  );
};

export default SlidingBanner;*/

