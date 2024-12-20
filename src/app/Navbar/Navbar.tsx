'use client'
import React from 'react'
import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from 'react-icons/gi'; 
import Link from 'next/link';
import Im1 from '../../../public/Like (1).png'
import Image from 'next/image';
import notifecation from '../../../public/Notification (1).png'
import setting from '../../../public/Settings.png'
import profile from '../../../public/Profil.png'


interface NavMobProps {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Navbar = ({ setIsMenu }: NavMobProps) => {
  return (
    <div className=' w-full h-full flex lg:justify-center lg:items-center xxs:items-center  gap-6  -bg-yellow-500 -md:justify-around md:px-5'>
    
     <Link href={'/'} className='lg:hidden text-[20px] px-3 flex justify-start md:hidden   '  onClick={() => {
              setIsMenu(true); // Toggle state
            }}><GiHamburgerMenu/></Link>
   
   
    <h1 className='lg:text-[32px] xxs:text-[27px] font-bold leading-[38.4px] ml:flex xxs:hidden 
     '><Link href={'/'}> MORENT</Link></h1>
    <div className='md:flex sm:hidden lg:hidden xxs:hidden  w-[30%] items-center gap-4 justify-center text-base  leading-[21.6px] cursor-pointer font-[600] -bg-black '>
    <p className='flex items-center justify-center
    transition-all duration-500 hover:bg-[#3563E9] hover:shadow-xs hover:text-white py-2 px-3 rounded-full'><Link href={'/Dashboard'}> Dashboard </Link>  <RiArrowDropDownLine className='w-4 h-4 mt-[5.25px] text-black hover:text-white
     '/></p>
    
    <p
    className='transition-all duration-500 hover:bg-[#3563E9]   hover:shadow-xs hover:text-white py-2 px-2 rounded-full '><Link href={'/ViewAll'}>Cars Category </Link></p>
    <p
    className='transition-all duration-500 hover:bg-[#3563E9] hover:shadow-xs hover:text-white py-2 px-2 rounded-full '><Link href={'/Carsdetail'}>Cars Details</Link>  </p>
    </div>

    <div className="sm:flex  -xxs:hidden lg:flex items-center sm:w-[55%] lg:w-[60%] md:w-[30%]  h-[50%] py-3 px-4 rounded-[62px]  -bg-white -bg-[#F0F0F0] mini:w-[50%] ml:h-auto ml:flex -bg-black  xxs:flex xxs:w-[100%]">
    <IoSearch className="text-gray-500 text-2xl "/>
        <input type="text" name='search'   placeholder='Search for products...'  className=' outline-none border-none' />
    </div>


    <div className='lg:flex xxs:hidden  -xxs:flex mini:flex items-center xxs:justify-center  -bg-black  justify-center -w-[102px] md:w-[20%] mr-5  gap-[15px] cursor-pointer -bg-black h-auto'>
      <div>
     {/* <IoSearch className="text-black text-2xl flex lg:hidden md:hidden"/> */}
     <Image  src={setting} alt=''/>
     </div>


     <div>
     {/* <MdOutlineAccountCircle className='h-7 w-7'/> */}
     <Image src={Im1} alt='dedfe '/>
     </div>


     <div >
     {/* <IoCartOutline className='h-8  w-8  -hover:bg-black '/>*/}
     <Image src={notifecation} alt='' /> </div> 

     <div>
    <Image src={profile} alt='' />
   </div> 
     </div>
   
   

    </div>




  )
}

export default Navbar
