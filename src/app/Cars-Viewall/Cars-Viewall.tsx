"use client";
import React from 'react'
import Image from 'next/image';
// import heart from '../../../../../public/Vector.jpg'
import car1 from '../../../public/car.png'
import petroll from '../../../public/petroll.png'
import shell from '../../../public/shell.png'
import profilwe from '../../../public/profile-2user.png'
import { People } from '@mui/icons-material';








interface CardspropsType{

  heading: string;
  para1: string;
  img: string ,
  car: string ,
  petrollheading : string,
  shellheading : string ,
  people : string,
  price : string ,
  discount ?: string ,


 
}


const Carsviewall = (props:CardspropsType) => {
  const {heading  ,para1 , img , car , petrollheading , shellheading , people , price , discount , } = props
  return (
    <div className='w-full h-full grid  place-content-center content-center place-items-center   '>
   
    {/* this section cloze */}
  
     <div className='-bg-green-200  bg-white md:w-[300px] md:h-[415px] sm:h-[410px] sm:w-[300px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-2 rounded-lg mini:px-4 sm:px-0 ml:px-1 ml:w-[500px] mini:w-[300px] xxs:w-[300px] xxs:px-2 xxs:py-3 sm:py-0  '>
        {/* First  */}
     <div className='flex justify-between -bg-orange-300 px-2 pt-3'>
        <div>
    <h1 className='font-[700] text-[25px]'>{heading}</h1>
    <p className='text-[#90A3BF] font-[700] '>{para1}</p>
    </div>
    <div className='pt-2'>
 <Image src={img} width={30}  height={30}  className='w-[20px] h-[20px] ' alt='' />
 </div>
     </div>
     {/* Cloze */}


    {/* cart car img  second*/}
    <div className='w-full h-[180px] -bg-stone-500 flex items-center justify-center'>
   <Image src={car} alt='' width={550} height={550} className='mini:w-auto ml:w-[300px]'/>
    </div>
    {/* cart img st cloze */}


{/*   card section 3rd*/}
<div className='w-full h-[60px] -bg-green-300 flex items-center justify-around text-[#90A3BF]'> 
  <div  className='flex items-center justify-around gap-1' ><Image src={petroll}   alt=''/>{petrollheading}</div>
  <div className='flex items-center justify-around gap-1'><Image src={shell}  alt=''/>{shellheading}</div>
  <div className='flex items-center justify-around gap-1'><Image src={ profilwe}  alt=''/> {  people }</div>
</div>
  
  {/* Last section card */}
  <div className='w-full mini:h-[60px] ml:h-[100px] -bg-yellow-300 flex  items-center  justify-around -bg-red-400 '>
 <div> <h1 className='font-[700] text-[25px]'>{price}<span className='text-[#90A3BF] text-[18px]'> day</span></h1></div>
 <div>
  <button className='px-6 py-2.5 bg-[#3563E9] text-white font-[600] rounded-md  '>Rent Now</button>
 </div>
  </div>
  <div  className='-bg-slate-700 w-full h-[37px] flex items-center pl-3 font-[700]'><span><del className='text-[#90A3BF]'>{discount}</del></span></div>
     </div>


    </div>
   
  )
}

export default Carsviewall 