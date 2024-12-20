'use client'

import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdClose } from 'react-icons/md'; 
import Link from 'next/link';
import Image from 'next/image';
import Im1 from '../../../../public/Like (1).png'
import notifecation from '../../../.../../../public/Notification (1).png'
import setting from '../../../../public/Settings.png'
import profile from '../../../../public/Profil.png'


import React from 'react'



interface NavMobProps {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Navmob = ({ setIsMenu }: NavMobProps) => {
  return (
    <div className=' w-[100%] h-full xxs:flex -items-center  gap-6  bg-white flex-col md:hidden'>
        <div  className='-bg-slate-400 w-10  text-[30px] items-center   flex justify-center h-10 -items-start '> 
    <Link href={'/'}  onClick={() => {
              setIsMenu(false); // Toggle state
            }}><MdClose/></Link></div>

<div className='flex items-center px-14 gap-3'>

  
<div className=" py-3 px-4 rounded-full  flex items-center justify-center -bg-[#F0F0F0]  w-[90%] h-10 bg-slate-100 ">
    <IoSearch className="text-gray-500 text-2xl  "/>
        <input type="text" name='search'   placeholder='Search for products... ' className='bg-slate-100'  />
    </div>


<div className='flex items-center -bg-black  justify-center  -mr-5 -h-6 gap-[5px] cursor-pointer w-full h-auto flex-wrap '>
     <IoSearch className="text-black text-2xl flex lg:hidden xxs:hidden"/>
     <div>
     {/* <MdOutlineAccountCircle className='h-7 w-7'/> */}
     <Image src={Im1} alt='dedfe '/>
     </div>
       
     <div >
     {/* <IoCartOutline className='h-8  w-8  -hover:bg-black '/>*/}
     <Image src={notifecation} alt='' /> </div> 
     
     <div>
     {/* <IoSearch className="text-black text-2xl flex lg:hidden md:hidden"/> */}
     <Image  src={setting} alt=''/>
     </div>


     <div>
    <Image src={profile} alt='' />
   </div>

     </div>

     
   </div>

  
    <div className=' text-base  leading-[21.6px] cursor-pointer font-[400] -bg-black flex flex-col items-center gap-5'>
    <h1 className='text-[50px] font-bold leading-[38.4px] flex items-center  justify-center '>MOMENT</h1>
    <p className='flex -items-center'><Link href={'/'}
     onClick={() => {
      setIsMenu(false); // Toggle state
    }}> MORENT</Link> </p>

    
    <p><Link href={'/Dashboard'}
     onClick={() => {
      setIsMenu(false); // Toggle state
    }}> Dashboard </Link></p>


    <p><Link href={'/ViewAll'}
    onClick={() => {
      setIsMenu(false); // Toggle state
    }}>Cars Category </Link></p>
    <p><Link href={'/Carsdetail'}
    onClick={() => {
      setIsMenu(false); // Toggle state
    }}>
    Cars Details</Link></p>
    </div>

  


   
    </div>


  )
}

export default Navmob
