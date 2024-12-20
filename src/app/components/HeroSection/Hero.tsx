'use client'
import React from 'react'
import Image from 'next/image'
import box1img from '../../../../public/image 7 (1).png'
import img2 from '../../../../public/image 2.png'




const Hero = () => {
  return ( 
    <div className='w-full h-full flex justify-around items-center -absolute flex-wrap mini:px-3 sm:px-0 ml:gap-8 mini:gap-0 ' >
     {/* Right - box */}
     <div
  className="md:w-[570px] md:h-[395px] sm:w-[400px] ml:h-[400px] mini:w-[350px] ml:w-[530px]  relative bg-orange-300 text-white -flex -items-center -justify-center xxs:w-[90%] xxs:h-[410px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
  style={{
    backgroundImage: `url('Ads 1 (1).png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px', // Optional for rounded corners
  }}
>
<div>
  <div className='-bg-black leading-[59px] pl-4 pt-4 flex flex-col justify-center ml:font-[600]'>
  <h1 className='md:text-[50px] sm:text-[45px] mini:text-[35px]   sm:font-[400]  tracking-wide ml:text-[50px]  xxs:text-[35px] font-[700] xxs:leading-[40px]   ml:leading-normal '>The Best Platform <span className='ml:hidden xxs:flex'>for Car Rental</span> </h1>
  <h2  className='text-[50px] sm:text-[45px]  mini:text-[30px]  sm:font-[400] tracking-wide ml:text-[50px] xxs:hidden ml:flex ' > for Car Rental</h2></div>
  <div className='-bg-black  pl-4 pt-2 flex flex-col justify-center '>
    <p className='text-[20px] tracking-wide'> Ease of doing a car rental safely and <span className='xxs:flex ml:hidden'>reliably. Of course at a low price.</span> </p>
    <p className='text-[20px] tracking-wide xxs:hidden ml:flex '>reliably. Of course at a low price.</p>
  </div>
  <div className=' pl-4 pt-5 -bg-black '>
    <button className='bg-[#3563E9] px-5 py-2 tracking-wide text-[20px] flex  justify-center items-center rounded-md'>
    Rental Car
    </button>
  </div>
  {/* car img */}
  <div className='-bg-black flex justify-center items-center -pl-[80px] '>
    <Image src={box1img} alt='' />
  </div>
   

</div>

</div>

   
     {/* left - box */}
     <div
  className="md:w-[570px] sm:w-[400px]  sm:h-[400px] md:h-[395px]   mini:w-[350px] mini:h-[400px]  -sm:hidden relative bg-orange-300 text-white -flex -items-center -justify-center  ml:w-[530px] xxs:hidden ml:flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
  style={{
    backgroundImage: `url('Ads 2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px', // Optional for rounded corners
    
  }}
>
<div>
  <div className='-bg-black leading-[59px] pl-4 pt-4 flex flex-col justify-center  '>
  <h1 className='md:text-[50px] sm:text-[45px]  sm:font-[400] tracking-wide mini:text-[35px] ml:font-[600]  ml:text-[50px]'>Easy way to rent a  </h1>
  <h2  className='md:text-[50px] sm:text-[45px] mini:text-[35px] sm:font-[400] mini:font-[600] tracking-wide ml:text-[50px] ' > car at a low price</h2></div>
  <div className='-bg-black  pl-4 pt-2 flex flex-col justify-center '>
    <p className='text-[20px] tracking-wide'>Providing cheap car rental services  </p>
    <p className='text-[20px] tracking-wide'>and safe and comfortable facilities.</p>
  </div>
  <div className=' pl-4 pt-5 -bg-black  '>
    <button className='bg-[#54A6FF] px-5 py-2 tracking-wide text-[20px] flex  justify-center items-center rounded-md'>
    Rental Car
    </button>
  </div>
  {/* car img */}
  <div className='-bg-black flex justify-end items-center -md:ml-48  xxs:pl-0 pt-3 '>
    <Image src={img2} alt='' />
  </div>
</div>
</div>
   
    </div>
  )
}

export default Hero