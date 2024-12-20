'use client'
import picker from '../../../../../public/Switch.png'
import Image from 'next/image';

export default function LocationPicker() {
  

  return ( 
   <div className="w-full h-full md:px-5 sm:px-20 mini:px-14 ml:px-3 xxs:px-5   ">
    <div className=' -bg-black w-full h-auto  md:flex  md:justify-around md:items-center          '>

   <div className="md:w-[550px] -mini:w-[70%] sm:w-[100%] md:h-[140px] sm:h-auto -bg-orange-400 bg-white border-md  -shadow-2xl pb-5 border-1 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
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





<div className="w-auto md:h-auto xxs:h-auto  flex justify-center items-center z-10">
<Image  src={picker} alt='' className='md:w-[100px] xxs:w-[150px] '/>
</div>























<div className="md:w-[550px] sm:w-[100%]  md:h-[140px] -bg-orange-400 bg-white sm:h-[80%] -shadow-2xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  xxs:py-10 ml:py-5  md:py-0 border-1 rounded-lg">
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
</div>

   </div>
  );
}