import React from 'react'
import Image from 'next/image'
import map  from '../../../public/Maps.png'
import car from '../../../public/Look (1).png'
import more from '../../../public/more.png'
import cahrt from '../../../public/Chart.png'
import mark1 from '../../../public/Mark.png'
import mark2 from '../../../public/Mark (1).png'
import marks3 from '../../../public/Mark (2).png'
import marks4 from '../../../public/Mark (3).png'
import car1 from '../../../public/car (10).png'
import car2 from '../../../public/car (11).png'
import car3 from '../../../public/car (12).png'
import car4 from   '../../../public/car (13).png'
import d1 from '../../../public/home.png'
import d2 from '../../../public/car.png'
import d3 from '../../../public/Group.png'
import d4 from '../../../public/empty-wallet-change.png'
import d5 from '../../../public/message.png'
import d6 from '../../../public/calendar.png'
import d7 from '../../../public/Settings.png'
import d8 from '../../../public/info-circle.png'
import d9 from '../../../public/briefcase.png'
import d10 from '../../../public/logout.png'
import Link from 'next/link'
const page = () => {
  return (
    // Main container
    <div className='w-full h-full flex bg-[#F6F7F9]'>

    {/* Side start */}
    <div className='xxs:hidden mini:flex '>
    <div className='w-[200px] h-auto py-5 -bg-slate-500  bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer'>
   
   <div className='w-full h-[70px] -bg-red-300 flex items-center px-2'>
  <h1 className='font-[700] text-[18px] text-blue-600'>M A I N  M E N U</h1>
   </div>

<div className='w-full h-full'> 
   <div className='w-full h-[80px] bg-gray-200 flex items-center   '>
    <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg  '> 
   <Image src={d1} alt='' />
   <h1 className='font-[600] text-gray-700  hover:text-white' >Home</h1>
   </div>
   </div>



   <div className='w-full h-[80px] -bg-slate-50 flex items-center  gap-2 '>
   <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg '> 
   <Image src={d2} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Car Rent</h1>
   </div>
   </div>



   <div className='w-full h-[80px] -bg-neutral-600 flex items-center  gap-2'>
   <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg'> 
   <Image src={d3} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Insight</h1>
   </div>
   </div>



   <div className='w-full h-[80px] -bg-red-300 flex items-center  gap-2'>
   <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg'> 
   <Image src={d4} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Reimburse</h1>
   </div>
   </div>


   <div className='w-full h-[80px] -bg-orange-400 flex items-center  gap-2'>
   <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg'>
   <Image src={d5} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Inbox</h1>
   </div>
   </div>




   <div className='w-full h-[80px] -bg-lime-200 flex items-center px-2 gap-2'>
   <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg '>
   <Image src={d6} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Ca lender</h1>
   </div>
   </div>



   <div className='w-full h-auto -bg-black gap-2'>
    <div className='w-full h-[90px] -bg-gray-700 flex justify-center items-center '>
    <h1 className='font-[700] text-[18px]  text-blue-600'>P R E F E R E N C E S</h1>
    </div>
    

    <div className='w-full h-[80px] -bg-orange-400 flex items-center'>
    <div className='flex gap-2 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg '>
   <Image src={d7} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Settings</h1>
   </div>
    </div>




    <div className='w-full h-[80px] -bg-orange-400 flex items-center'>
    <div className='flex gap-5 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg'>
   <Image src={d8} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Help & Center</h1>
   </div>
    </div>




    <div className='w-full h-[80px] -bg-orange-400 flex items-center'>
    <div className='flex gap-5 items-center px-5 py-2 hover:bg-[#3563E9] w-[100%] ml-1 mr-1 rounded-lg'>
   <Image src={d9} alt='' />
   <h1 className='font-[600] text-gray-700 hover:text-white'>Dark Mode</h1>
   </div>
    </div>

    <div className='w-full h-[250px] -bg-teal-200 flex items-end'>
    <div className='w-full h-[100px] -bg-orange-200 flex items-center gap-5 px-3 '>
   
   <Link href={'/'}> <Image  src={d10} alt=''/></Link>
    <h1 className='font-[600] text-[20px] text-[rgb(144,163,191)]' ><Link href={'/'}>Log Out</Link></h1> 
    </div>
    </div>


</div>
</div>
   </div>
{/* Second section */}

    </div>
    {/* Side bar cloze */}


{/* Details Rental */}
<div className='w-full h-full -bg-black flex justify-around pt-5 md:flex md:flex-row xss:flex xxs:flex-col xxs:items-center md:items-start'>
    {/* First box start */}
    <div className='md:w-[45%] sm:w-[80%] mini:w-[90%] xxs:w-[90%]   h-auto bg-white border-b-2 '>
    <div className='w-full h-[60px] -bg-red-400 flex items-center px-2' >
    <h1 className='font-[700] text-[25px]   hover:text-white'>Details Rental</h1>
    </div>
    
    {/* Image section */}
    <div className='w-full h-auto py-5  -bg-black  flex items-center justify-center'>
    <Image src={map}  alt='' />
    </div>
    {/* Image section cloze */}
    
    {/* third section */}
    <div className='w-full h-auto py-5 -bg-slate-900 ml:flex ml:flex-row xxs:flex xxs:flex-col justify-between -items-center px-2 pt-5'>
    <div className='flex gap-5'>
    <div>
        <Image src={car}  alt=''/>
    </div>
    <div>
        <h1 className='font-[700] text-[23px]'>Nissan GT - R</h1>
        <p className='font-[600] text-[#3D5278]'>Sport Car</p>
    </div>
    </div>

    <div className='items-start'>
        <h1 className='text-[#3D5278] ml:pt-0 xxs:pt-5 font-[600]'>#9761</h1>
    </div>
    </div>

    {/* third section cloze */}
 

  {/* Fourth section */}

  <div className='w-full  h-auto py-10   -bg-black flex-col flex  items-center justify-evenly gap-10' >
  <div className="md:w-[400px] mini:w-[80%] sm:w-[100%] md:h-[140px] sm:h-auto xxs:w-[90%] -bg-orange-400 bg-white border-md  -shadow-2xl pb-5 border-1 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
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





{/* Second section  */}
<div className="md:w-[400px] mini:w-[80%] sm:w-[100%] md:h-[140px] sm:h-auto xxs:w-[90%] -bg-orange-400 bg-white border-md  -shadow-2xl pb-5 border-1 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
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

</div>
{/* Fourth section cloze */}

<div className='w-full  h-[120px] -bg-orange-300 flex items-center justify-around'>
<div>
    <h1 className='font-[700] text-[23px]' >Total Rental Price</h1>
    <p className='font-[600] '>Overall price and includes rental discount</p>
</div>
<div>
<h1 className='text-[25px] font-[700]'>$80.00</h1>
</div>
</div>



    </div>
      {/* First box cloze */}




   {/* Second box start */}
    <div className='md:w-[45%] sm:w-[80%] h-auto py-5 -bg-zinc-400 bg-white pt-10 mini:w-[90%] ml:w-[90%] xxs:w-[90%] px-5   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' >
        {/* first box inner */}
    <div className='w-full h-auto  -bg-slate-900'>
    <div className='w-full h-[70px] -bg-amber-200 flex items-center justify-between px-2'>
        <h1 className='text-[23px] font-[700]'>Top 5 Car Rental </h1>
        <Image src={more} alt=''/>
    </div>

    <div className='w-full h-auto py-5 -bg-green-200  flex  items-center justify-around' >
    <div className='pt-5'>
        <Image  src={cahrt}  alt='im' width={260} height={260} />
     
    </div>
<div className='w-full'>
 <div className='bg-white w-[100%] h-[270px]'>
  <div className='w-full h-auto py-2   -bg-slate-900 ml:flex  ml:flex-row  justify-between items-center px-2'>

<div className='flex items-center gap-2'>
 <Image src={mark1} alt=''></Image>
 <h1 className='font-[700]'>Sport Car</h1>
 </div>

<div>
    <p className='font-[600]'>17,439</p>
</div>


  </div>




  <div className='w-full h-auto -inset-5bg-slate-900 ml:flex  ml:flex-row  justify-between items-center px-2'>

<div className='flex items-center gap-2'>
 <Image src={mark2} alt=''></Image>
 <h1 className='font-[700]'>SUV</h1>
 </div>

<div>
    <p className='font-[600]'>9,478</p>
</div>


  </div>




  <div className='w-full h-auto py-2 -bg-slate-900 ml:flex  ml:flex-row   justify-between items-center px-2'>

<div className='flex items-center gap-2'>
 <Image src={marks3} alt=''></Image>
 <h1 className='font-[700]'>Coupe</h1>
 </div>

<div>
    <p className='font-[600]'>18,197</p>
</div>


  </div>






  <div className='w-full h-auto py-2 -bg-slate-900 ml:flex  ml:flex-row   justify-between items-center px-2'>

<div className='flex items-center gap-2'>
 <Image src={marks4} alt=''></Image>
 <h1 className='font-[700]'>Hatchback</h1>
 </div>

<div>
    <p className='font-[600]'>12,510</p>
</div>


  </div>





  <div className='w-full h-auto py-2 -bg-slate-900 ml:flex  ml:flex-row   justify-between items-center px-2'>

<div className='flex items-center gap-2'>
 <Image src={mark1} alt=''></Image>
 <h1 className='font-[700]'>Sport Car</h1>
 </div>

<div>
    <p className='font-[600]'>17,439</p>
</div>


  </div>





 </div>
</div>
    </div>
    </div>
          {/* first box cloze */}



    {/* Second inner start */}
  <div className='w-full h-auto py-5 -bg-cyan-300'>
 <div className='w-full h-auto py-5  -bg-violet-400 ml:flex ml:flex-row xxs:flex  xxs:flex-col  justify-between items-center px-2'>
 <h1 className='text-[22px] font-[700]'>Recent Transaction</h1>
 <p className='font-[600]'>View All</p>
 </div>



 <div className='w-full h-auto py-5 -bg-lime-200'>
<div className='w-full h-auto py-5 -bg-stone-500 flex justify-between px-2 items-center' >
    <div className='ml:flex ml:flex-row xxs:flex xxs:flex-col-reverse -w-full ml:gap-5 xxs:gap-2 ' >
 <div className=' '>
    <Image  src={car1} alt='' />
 </div>
 <div className='flex flex-col'>
    <h1 className='font-[700] text-[20px]'>Nissan GT - R</h1>
    <p className='font-[600]'>Sport Car</p>
    </div>
   </div>

   
<div>
    <h1 className='text-[#90A3BF] font-[600]'>20 July</h1>
    <p className='font-[700] text-[20px]'>$80.00</p>
</div>
</div>






<div className='w-full h-auto py-5 -bg-stone-500 flex justify-between px-2 items-center '  >
    <div className='ml:flex ml:flex-row xxs:flex xxs:flex-col-reverse -w-full ml:gap-5 xxs:gap-2' >
 <div className=' '>
    <Image  src={car2} alt='' />
 </div>
 <div className='flex flex-col'>
    <h1 className='font-[700] ml:text-[20px] xxs:text-[18px]'>Koegnigsegg</h1>
    <p className='font-[600]'>Sport Car</p>
    </div>
   </div>

   
<div>
    <h1 className='text-[#90A3BF] font-[600]'>19 July</h1>
    <p className='font-[700] text-[20px]'>$99.00</p>
</div>
</div>






<div className='w-full h-auto py-5 -bg-stone-500 flex justify-between px-2 items-center' >
    <div className='ml:flex ml:flex-row xxs:flex xxs:flex-col-reverse ml:gap-5 xxs:gap-2' >
 <div className=' '>
    <Image  src={car3} alt='' />
 </div>
 <div className='flex flex-col'>
    <h1 className='font-[700] text-[20px]'>Rolls - Royce</h1>
    <p className='font-[600]'>Sport Car</p>
    </div>
   </div>

   
<div>
    <h1 className='text-[#90A3BF] font-[600]'>18 July</h1>
    <p className='font-[700] text-[20px]'>$96.00</p>
</div>
</div>


 </div>








   {/* second inner cloze */}
  </div>
  {/* second inner cloze */}

</div>
   {/* Second box cloze */}



    </div>
{/* Details Rental cloze */}




















{/* Main container cloze */}
    </div>
  )
}

export default page