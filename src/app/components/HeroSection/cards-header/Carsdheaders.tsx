"use client";
import Link from 'next/link';
import React from 'react'
interface CardspropsType{
    heading: string;
    para?: string ;
  
  
   
  }

const Carsdheaders = (props:CardspropsType) => {
    const {heading , para } = props
  return (
    <div className='w-full h-full'>
 <div className='w-full h-full -bg-yellow-200 flex justify-between items-center px-5'> 
     <h1 className='text-[#90A3BF] tracking-wide text-[21px]'>{heading}</h1>
 <h2 className='text-blue-900 tracking-wide text-[21px]'>
<Link href={'/ViewAll'}>  {para} </Link>
  </h2> 

    </div>

    </div>
  )
}

export default Carsdheaders