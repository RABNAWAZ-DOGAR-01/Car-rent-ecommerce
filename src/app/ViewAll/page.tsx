'use client'
import React from 'react'

import Image from 'next/image'
import picker from '../../../public/Switch.png'
import Cars from '../components/HeroSection/Cars-section/Cars'
import { nanoid } from 'nanoid'
import Carsviewall from '../Cars-Viewall/Cars-Viewall'


const data1  =  [
  {
    id: nanoid(1),
    heading : "Koenigsegg",
    para1 : "Sport",
   img : "/herat.jpg",
   car : '/car (14).png',
   petrollheading  :  "90L",
   shellheading : "Manual",
   people : "2 People",
   price : '$99.00/',
 
  },

  {
    id: nanoid(2),
    heading : "Nissan GT - R",
    para1 : "Sport",
   img : "/heart2.png",
   car : '/car (2).png',
   petrollheading  :  "80L",
   shellheading : "Manua",
   people : "2 People",
   price : '$80.00',
   discount : '$100.00'

  },


  
  {
    id: nanoid(3),
    heading : "Rolls - Royce",
    para1 : "Sedan",
   img : "/herat.jpg",
   car : '/Car (3).png',
   petrollheading  :  "70L",
   shellheading : "Manual",
   people : "4 People",
   price : '$96.00/'

  },





  
  // {
  //   id: nanoid(4),
  //   heading : "Nissan GT - R",
  //   para1 : "Sport",
  //  img : "/heart2.png",
  //  car : '/car (2).png',
  //  petrollheading  :  "80L",
  //  shellheading : "Manual",
  //  people : "2 People",
  //  price : '$80.00/',
  //  discount :  '$100.00',
 

  // },
 
 
  



  
]



const data3   = [
  {
    id: nanoid(1),
    heading : "All New Rush",
    para1 : "SUV",
   img : "/heart2.png",
   car : '/cart2-1.png',
   petrollheading  :  "70L",
   shellheading : "Manual",
   people : "6 People",
   price : '$72.00/ ',
  discount : '$80.00'
  },

  {
    id: nanoid(2),
    heading : "CR  - V",
    para1 : "SUV",
   img : "/herat.jpg",
   car : '/se2-2.png',
   petrollheading  :  "80L",
   shellheading : "Manua",
   people : "6 People",
   price : '$80.00/ ',
  

  },


  
  {
    id: nanoid(3),
    heading : "All New Terios",
    para1 : "SUV",
   img : "/heart2.png",
   car : '/Se2-3.png',
   petrollheading  :  "90L",
   shellheading : "Manual",
   people : "6 People",
   price : '$74.00/ '

  },

]



const data4 =   [
  {
    id: nanoid(1),
    heading : "MG ZX Exclusice",
    para1 : "Hatchback",
   img : "/herat.jpg",
   car : '/Car (8).png',
   petrollheading  :  "70L",
   shellheading : "Manual",
   people : "4 People",
   price : '$76.00/ ',
 discount : '$80.00'
 
  },

  {
    id: nanoid(2),
    heading : "New MG ZS",
    para1 : "SUV",
   img : "/heart2.png",
   car : '/Car (9).png',
   petrollheading  :  "80L",
   shellheading : "Manual",
   people : "6 People",
   price : '$80.00',

  },


  
  {
    id: nanoid(3),
    heading : "MG ZX Excite",
    para1 : "Hatchback",
   img : "/herat.jpg",
   car : '/Car (8).png',
   petrollheading  :  "90L",
   shellheading : "Manual",
   people : "4 People",
   price : '$74.00/'

  },


  



  
]









const ViewAll = () => {
  return (
    <div className='w-full h-full flex  '>
    {/* side bar */}
    <div className='w-[260px] h-full bg-slate-700 xxs:hidden sm:flex border-t-2 flex-col border-r-2  '>
      {/* First section */}
    <div className='w-full -bg-zinc-800 h-[450px] flex  flex-col justify-around pl-5 bg-white font-[600]  '>
     <h1 className='text-[15px] font-[700] text-gray-400'>TYPE</h1>
     <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-white rounded-md  focus:outline-none text-blue-800 '/>
    <label htmlFor="vehicle1 " className='px-3'>Sport <span className='text-gray-500'>(10)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>SUV  <span className='text-gray-500'>(12)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>MPV <span className='text-gray-500'>(16)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>Sedan  <span className='text-gray-500'>(20)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>Coupe  <span className='text-gray-500'>(14)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>Hatchback <span className='text-gray-500'>(14)</span></label>
    </div>
    </div>



{/* Second side bar */}



    <div className='w-full -bg-zinc-800 h-[450px] flex  flex-col justify-around pl-5 bg-white font-[600] '>
     <h1 className='text-[15px] font-[700] text-gray-400'>TYPE</h1>
     <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-white rounded-md  focus:outline-none text-blue-800 '/>
    <label htmlFor="vehicle1 " className='px-3'>2 Person <span className='text-gray-500'>(10)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>4 Person  <span className='text-gray-500'>(12)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>6 Person  <span className='text-gray-500'>(16)</span></label>
    </div>
    <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-blue-800 rounded-md focus:outline-none text-blue-800'/>
    <label htmlFor="vehicle1" className='px-3'>8 or More  <span className='text-gray-500'>(20)</span></label>
    </div>
   

    </div>







    </div>
 





















    <div className='flex flex-col  w-full border-t-2'>
    {/* sider baz Cloze */}
    <div className='w-full -bg-slate-600 md:h-[450px] sm:h-[800px] mini:h-[850px] ml:h-[900px] flex -justify-around items-center -flex-wrap flex-col xxs:py-10  xxs:pt-5  '>
    {/* Pick Start */}
    <div className="md:w-[670px] mini:w-[80%] sm:w-[70%] sm:h-[40%] md:h-[140px] ml:w-[70%] xxs:w-[80%] -bg-orange-400 -bg-slate-400 border-md  -shadow-2xl pb-5 border-1 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
    <div className="flex w-full h-[60px] -bg-black items-center pl-3">
   <input type="checkbox" id="pickup" className="mr-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] text-[25px]  '>Pick - Up</h1></div>
  

<div className="md:grid md:grid-cols-3 md:divide-x md:content-between  w-full  px-5 sm:flex-col md:gap-5    ">
    <div className="flex flex-col sm:pt-1 sm:pb-3 xxs:pb-5 md:pb-0 pt-0 ">
        <label htmlFor="" className="pb-2 text-[22px] font-[700]" >Locations</label>
        <select name="Select your city" id="Select your city" className="w-[100%] flex justify-center items-center  text-gray-400">
            <option value="" >Select your city</option>
        </select>
    </div>


    <div className="flex flex-col sm:pt-1 sm:pb-3  xxs:pb-5  md:pb-0 pt-0  ">  <label htmlFor="" className="pb-2  text-[22px] font-[700]">Date</label>
        <select name="" id="" className="w-[100%]  flex justify-center items-center  text-gray-400">
            <option value="">Select your date</option>
        </select>
        </div>



    <div  className="flex flex-col  sm:pt-1 sm:pb-5  md:pb-0 pt-0   xxs:pb-5" >  <label htmlFor="" className="pb-2 text-[22px] font-[700]">Time</label>
        <select name="" id="" className="w-[100%] flex justify-center items-center  text-gray-400">
            <option value="">Select your time</option>
        </select>
        </div>
</div>
</div>





<div className="w-auto -md:h-auto xxs:h-auto  flex -justify-center items-center z-10">
<Image  src={picker} alt='' className='md:w-[100px] xxs:w-[150px] '/>
</div>























<div className="md:w-[670px] sm:w-[70%] sm:h-[40%] mini:w-[80%]  md:h-[140px] ml:w-[70%] -bg-orange-400 -bg-slate-800 -shadow-2xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  -xxs:py-10 ml:py-5  md:py-0 border-1 rounded-md xxs:w-[80%]">
    <div className="flex w-full h-[60px] -bg-black items-center pl-3 pb-5">
   <input type="checkbox" id="pickup" className="mr-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none"/>     <h1
   className='font-[700] text-[25px]'>Drop - Off</h1></div>
  

<div className="md:grid md:grid-cols-3 md:divide-x md:content-between gap-2 w-full  px-5 sm:flex-col  ">
    <div className="flex flex-col sm:pt-1 sm:pb-3  md:pb-0 pt-0   xxs:pb-5  ">
        <label htmlFor="" className="pb-2 text-[22px] font-[700]">Locations</label>
        <select name="Select your city" id="Select your city" className="w-[100%] flex justify-center items-center  text-gray-400">
            <option value="" >Select your city</option>
        </select>
    </div>


    <div className="flex flex-col sm:pt-1 sm:pb-3  md:pb-0 pt-0   xxs:pb-5">  <label htmlFor="" className="pb-2 text-[22px] font-[700]">Date</label>
        <select name="" id="" className="w-[100%]  flex justify-center items-center  text-gray-400">
            <option value="">Select your date</option>
        </select>
        </div>


 
    <div  className="flex flex-col  sm:pt-1 sm:pb-5   md:pb-0 pt-0   xxs:pb-5" >  <label htmlFor="" className="pb-2 text-[22px] font-[700]">Time</label>
        <select name="" id="" className="w-[100%] flex justify-center items-center  text-gray-400">
            <option value="">Select your time</option>
        </select>
        </div>
</div>
</div>
{/* Pick end */}
    </div>
 

 {/* Cars Section */}
<div className="w-full h-auto -bg-slate-500  md:grid-cols-3  -sm:grid-cols-3 md:px-0 md:gap-0 sm:px-0 mini:px-0    py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1  xxs:gap-8  -ml:gap-8  xxs:grid xxs:grid-cols-1   -px-5 
bg-[#F6F7F9]  ">
{data1.map((elem , )=>{
  return(
    <Carsviewall
    key={elem.id}
    heading={elem.heading}
    para1={elem.para1}
    img={elem.img}
    car={elem.car}
    petrollheading={elem.petrollheading}
    shellheading={elem.shellheading}
    people={elem.people}
    price={elem.price}
    discount={elem.discount} 
      />
  )
 })}
</div>




{/* Cars section cloze */}
<div className="w-full h-auto -bg-slate-500  md:grid-cols-3  -sm:grid-cols-3 md:px-0 md:gap-0 sm:px-0 mini:px-0    py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1 -sm:grid-cols-2  xxs:gap-8  -ml:gap-8  xxs:grid xxs:grid-cols-1   -px-5 
bg-[#F6F7F9]  ">
{data3.map((elem  )=>{
  return(
    <Carsviewall 
    key={elem.id}
    heading={elem.heading}
    para1={elem.para1}
    img={elem.img}
    car={elem.car}
    petrollheading={elem.petrollheading}
    shellheading={elem.shellheading}
    people={elem.people}
    price={elem.price}
    discount={elem.discount} 
      />
  )
 })}
</div>
    



    
<div className="w-full h-auto -bg-slate-500  md:grid-cols-3 md:px-0 md:gap-0 sm:px-0 mini:px-0   py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1 xxs:gap-8  ml:gap-8  xxs:grid xxs:grid-cols-1
bg-[#F6F7F9] ">
{data4.map((elem  )=>{
  return(
    <Carsviewall  
    key={elem.id}
    heading={elem.heading}
    para1={elem.para1}
    img={elem.img}
    car={elem.car}
    petrollheading={elem.petrollheading}
    shellheading={elem.shellheading}
    people={elem.people}
    price={elem.price}
    discount={elem.discount} 
      />
  )
 })}
</div> 

</div>

















    </div>
  )
}

export default ViewAll