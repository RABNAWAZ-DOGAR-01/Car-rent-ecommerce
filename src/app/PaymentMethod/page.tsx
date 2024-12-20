"use client";
import Image from 'next/image';
import car from '../../../public/Look.png'
import reiw from '../../../public/Review Star.png'
import visa from '../../../public/Visa.png'
import paypal from '../../../public/PayPal.png'
import bitcoin from "../../../public/Bitcoin.png"
import Security from '../../../public/ic-security-safety.png'

const page = () => {
  return (
    
    <div className='w-full  h-full bg-[#F6F7F9]
md:flex-row md:flex xxs:flex xxs:flex-col-reverse xxs:items-center
xxs:justify-between px-5 ml:gap-5 xxs:gap-20 pt-9 md:items-baseline '>

     {/* Contact form */} 
     <div className='flex-col w-[90%] py-5  h-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ml:px-10 xxs:px-0 '>
{/* first section  */}
     <div className='w-[100%]  h-auto bg-white px-3  '>


    <div className='w-full h-[100px] -bg-teal-200 bg-white ml:flex-row ml:justify-between px-2 ml:items-center xxs:flex xxs:flex-col '>
     <div>
      <h1 className='text-[22px] font-[700] tracking-wide'>Billing Info</h1>
      <p className='font-[600] tracking-wide'>Please enter your billing info</p>
     </div>
     <div>
    <h1 className='text-[18px] font-[600] pt-2 ml:pt-0'>Step 1 of 4</h1>
     </div>
    </div>
     {/* Cloze */}


    <div className='w-full h-auto -bg-green-500 bg-white  ml:flex-row justify-between px-3 items-center  xxs:flex  xxs:flex-col py-2 xxs:pt-10 ml:pt-5 ' >
    <div className='ml:w-[45%] h-auto xxs:w-[100%] '>
      <h1 className='text-[22px] font-[600] ml:pb-2  '>Name</h1>
      <input type="text" className='w-full h-[50px] outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9] border-[#F6F7F9]'  placeholder='Your name'/>
      
    </div>


    <div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
    <h1 className='text-[22px] font-[600] pb-2'>Phone Number</h1>
      <input type="text" className='w-full h-[50px]  outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9]' placeholder='Phone number'/>
    </div>
</div>

{/* cloze */}




<div className='w-full h-auto -bg-green-500 bg-white ml:flex-row justify-between px-3 items-center  xxs:flex  xxs:flex-col py-10 ' >
    <div className='ml:w-[45%] h-auto xxs:w-[100%] -xxs:pt-10 ml:pt-0'>
      <h1 className='text-[22px] font-[600] pb-2'>Address</h1>
      <input type="text" className='w-full h-[50px] outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9] border-[#F6F7F9]'  placeholder='Address'/>
      
      
    </div>


    <div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
    <h1 className='text-[22px] font-[600] pb-2'>Town / City</h1>
      <input type="text" className='w-full h-[50px]  outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9]' placeholder='Town or City'/>
    </div>
</div>


     </div>



{/* Cloze */}


{/* First Section cloze */}



{/* Second section */}

     <div className='w-[100%]  h-auto -bg-red-400 pt-10   bg-[#F6F7F9] ' >

    <div className='w-full h-[100px] -bg-teal-200 px-4 bg-white ml:flex ml:flex-row justify-between  items-center gap-3 '>
     <div>
      <h1 className='text-[22px] font-[700] tracking-wide '>Billing Info</h1>
      <p className='font-[600] tracking-wide'>Please enter your billing info</p>
     </div>
     <div>
    <h1 className='text-[18px] font-[600] xxs:pt-2 ml:pt-0'>Step 2 of 4</h1>
     </div>
    </div>
     {/* Cloze */}


    <div className='w-full h-auto -bg-green-500 bg-white  flex justify-between px-3 items-center xxs:py-5 ml:py-0 ' >
    <div className='ml:w-[45%] h-auto xxs:w-[100%]'>
    <div className="ml:flex-row w-full h-[60px] -bg-black ml:items-center pl-3 xxs:flex xxs:flex-col-reverse xxs:items-start">
    <input type="checkbox" id="pickup" className="ml:mr-2 xxs:mr-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] ml:text-[25px]  xxs:text-[25px]'>Pick - Up</h1></div>
    </div>


   
</div>

{/* cloze */}



<div className='w-full h-auto -bg-gray-300  bg-white ml:flex ml:flex-col justify-between -px-2 -items-center  xxs:flex  xxs:flex-col py-2 xxs:pt-10 ml:pt-5  xxs:py-10 ml:py-0 px-3' >

  <div className='w-full ml:h-[120px] ml:flex-row justify-between xxs:h-auto xxs:flex xxs:flex-col '>


    <div className='ml:w-[45%] h-auto xxs:w-[100%] '>
      <h1 className='text-[22px] font-[600] ml:pb-2 xxs:pb-4  '>Locations</h1>
      <select name="pets" id="pet-select" className='w-[100%] h-[50px] px-2 bg-[#F6F7F9]'>
  <option value="">--Please choose an option--</option>
 <option value="dog">karachi</option>
  <option value="cat">Lahore</option>
  <option value="hamster">Peshawer</option>
  <option value="parrot">Punjab</option>
</select>
    </div>


    <div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
    <h1 className='text-[22px] font-[600] pb-2'>Date</h1>
  <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='w-[100%] h-[50px] px-5 bg-[#F6F7F9]' />
    </div>
    </div>

<div className='w-full h-[120px] -bg-gray-950'>
    <div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
    <h1 className='text-[22px] font-[600] pb-2'>Date</h1>
  <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='w-[100%] h-[50px] px-5 bg-[#F6F7F9]' />
    </div>
    </div>

    
</div>





     </div>


{/* Second cloze */}



{/* Third section */}


     <div className='w-[100%]  h-auto -bg-red-400 pt-10 bg-[#F6F7F9]   '>

<div className='w-full h-[100px] -bg-teal-200 bg-white ml:flex ml:flex-row justify-between -px-2 items-center gap-3 px-3'>
 <div>
  <h1 className='text-[22px] font-[700] tracking-wide '>Billing Info</h1>
  <p className='font-[600] tracking-wide'>Please enter your billing info</p>
 </div>
 <div>
<h1 className='text-[18px] font-[600] xxs:pt-2 ml:pt-0'>Step 2 of 4</h1>
 </div>
</div>
 {/* Cloze */}


<div className='w-full h-auto -bg-green-500   bg-white flex justify-between px-2 items-center xxs:py-5 ml:py-0 ' >
<div className='ml:w-[45%] h-auto xxs:w-[100%]'>
<div className="ml:flex-row w-full h-[60px] -bg-black ml:items-center pl-3 xxs:flex xxs:flex-col-reverse xxs:items-start">
<input type="checkbox" id="pickup" className="ml:mr-2 xxs:mr-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] ml:text-[25px]  xxs:text-[25px]'>Drop - of</h1></div>
</div>



</div>

{/* cloze */}



<div className='w-full h-auto -bg-gray-300 bg-white  ml:flex ml:flex-col justify-between px-2 -items-center  xxs:flex  xxs:flex-col py-2 xxs:pt-10 ml:pt-5  xxs:py-10 ml:py-0 ' >

<div className='w-full ml:h-[120px] ml:flex-row justify-between xxs:h-auto xxs:flex xxs:flex-col '>


<div className='ml:w-[45%] h-auto xxs:w-[100%] '>
  <h1 className='text-[22px] font-[600] ml:pb-2 xxs:pb-4  '>Locations</h1>
  <select name="pets" id="pet-select" className='w-[100%] h-[50px] px-2 bg-[#F6F7F9]'>
<option value="">--Please choose an option--</option>
 <option value="dog">karachi</option>
  <option value="cat">Lahore</option>
  <option value="hamster">Peshawer</option>
  <option value="parrot">Punjab</option>
</select>
</div>


<div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
<h1 className='text-[22px] font-[600] pb-2'>Date</h1>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='w-[100%] h-[50px] px-5 bg-[#F6F7F9]' />
</div>
</div>

<div className='w-full h-[120px] -bg-gray-950'>
<div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
<h1 className='text-[22px] font-[600] pb-2'>Date</h1>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='w-[100%] h-[50px] px-5 bg-[#F6F7F9]' />
</div>
</div>


</div>





 </div>


{/* Third section cloze */}


{/* Fourth section */}

 <div className='w-[100%]  h-auto bg-[#F6F7F9] pt-10  '>


<div className='w-full h-auto py-5 -bg-teal-200 bg-white ml:flex-row ml:justify-between -px-2 ml:items-center xxs:flex xxs:flex-col px-3 '>
 <div>
  <h1 className='text-[22px] font-[700] tracking-wide'>Payment Method</h1>
  <p className='font-[600] tracking-wide'>Please enter your payment method</p>
 </div>
 <div>
<h1 className='text-[18px] font-[700]  ml:pt-0 xxs:pt-2'>Step 3 of 4</h1>
 </div>
</div>
 {/* Cloze */}

 {/* Slecet payment method */}
 <div className='w-full h-[70px] bg-white -bg-stone-700 flex justify-between items-center'>
 <div className="ml:flex-row w-full h-[60px] -bg-black ml:items-center pl-3 xxs:flex xxs:flex-col-reverse xxs:items-start">
    <input type="checkbox" id="pickup" className="ml:mr-2 xxs:mr-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] ml:text-[25px]  xxs:text-[25px]'>Pick - Up</h1></div>

  <div className='pr-2'>
<Image src={visa}  alt=''/>
  </div>

 </div>

{/* payment method cloze */}
<div className='w-full h-auto -bg-green-500 bg-white  ml:flex-row justify-between px-2 items-center  xxs:flex  xxs:flex-col py-2 xxs:pt-10 ml:pt-5 ' >
<div className='ml:w-[45%] h-auto xxs:w-[100%] '>
  <h1 className='text-[22px] font-[600] ml:pb-2  '>Card Number</h1>
  <input type="text" className='w-full h-[50px] outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9] border-[#F6F7F9]'  placeholder='Card number'/>
  
</div>


<div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
<h1 className='text-[22px] font-[600] pb-2'>Expration Date</h1>
  <input type="text" className='w-full h-[50px]  outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9]' placeholder='Expration Date'/>
</div>
</div>

{/* cloze */}




<div className='w-full h-auto -bg-green-500 bg-white  ml:flex-row justify-between px-2 items-center  xxs:flex  xxs:flex-col py-10' >
<div className='ml:w-[45%] h-auto xxs:w-[100%] -xxs:pt-10 ml:pt-0'>
  <h1 className='text-[22px] font-[600] pb-2'>Card Holder</h1>
  <input type="text" className='w-full h-[50px] outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9] border-[#F6F7F9]'  placeholder='Card Holder'/>
  
  
</div>


<div className='ml:w-[45%] h-auto xxs:w-[100%] xxs:pt-10 ml:pt-0'>
<h1 className='text-[22px] font-[600] pb-2'>CVC</h1>
  <input type="text" className='w-full h-[50px]  outline-none px-2  rounded-md  focus:border-[2px] focus:border-blue-400 bg-[#F6F7F9]' placeholder='CVC'/>
</div>
</div>


 </div>

{/* Fourth section cloze */}




{/* fifth section */}

<div className='w-full h-[180px] bg-white flex flex-col gap-2'>

<div className='flex justify-between items-center w-full h-[80px] px-5 -bg-black bg-[#F6F7F9]'>
<div className="ml:flex-row w-full h-[60px] -bg-black ml:items-center pl-3 xxs:flex -xxs:flex-col-reverse xxs:items-center  ">
    <input type="checkbox" id="pickup" className="ml:mr-2 xxs:mr-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] ml:text-[25px]  xxs:text-[25px] pl-5'>PayPal</h1></div>
{/* Image */}
    <div>
<Image src={paypal} alt=''/>
    </div>
</div>

<div>
<div className='flex justify-between items-center w-full h-[80px] px-5 -bg-black bg-[#F6F7F9]'>
<div className="ml:flex-row w-full h-[60px] -bg-black ml:items-center pl-3 xxs:flex -xxs:flex-col-reverse xxs:items-center  ">
    <input type="checkbox" id="pickup" className="ml:mr-2 xxs:mr-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-gray-300 appearance-none checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none "/>     <h1 className='font-[700] ml:text-[25px]  xxs:text-[25px] pl-5 '>Bitcoin</h1></div>
{/* Image */}
    <div>
<Image src={bitcoin} alt=''/>
    </div>

</div>
</div>

</div>


{/* fifth section cloze */}



{/* Six Section start  */}
<div className='w-[100%] h-auto bg-[#F6F7F9] pt-10 '>

<div className='w-full h-auto -bg-lime-300 bg-white'>

<div className='w-full h-auto py-5 -bg-teal-200 ng-white ml:flex-row ml:justify-between px-2 ml:items-center xxs:flex xxs:flex-col '>
 <div>
  <h1 className='text-[22px] font-[700] tracking-wide'>Confirmation</h1>
  <p className='font-[600] tracking-wide'>We are getting to the end. Just few clicks and your rental is ready!</p>
 </div>
 <div>
<h1 className='text-[18px] font-[700]  ml:pt-0 xxs:pt-2'>Step 4 of 4</h1>
 </div>
</div>
 {/* Cloze */}
<div className='w-full h-auto py-5 -bg-zinc-500 bg-white flex items-center justify-center flex-col gap-5'>


<div className='w-[90%] h-auto py-5  -bg-emerald-300 bg-[#F6F7F9] flex ml:items-center -justify-center px-5
xxs:flex xxs:items-start '>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-white rounded-md  focus:outline-none text-blue-800 '/>
    <label htmlFor="vehicle1 " className='px-3 font-[600]'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
    </div>


  
<div className='w-[90%] h-auto py-5  bg-[#F6F7F9] -bg-emerald-300 flex ml:items-center -justify-center px-5 xxs:flex xxs:items-start'>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='scale-150 border-white rounded-md  focus:outline-none text-blue-800 '/>
    <label htmlFor="vehicle1 " className='px-3 font-[600]'>I agree with our terms and conditions and privacy policy.</label>
    </div>

   {/* Button */}
  <div className='flex items-start w-full pl-10 -bg-black'>
    <button className='bg-[#3563E9] px-7 py-3 font-[600] text-white rounded-md'>Rent Now</button>
  </div>
  {/* Cloze */}

  {/* End section  */}
  <div className='w-full h-[120px] bg-[#F6F7F9] -bg-red-400 pl-7 py-4'>
  <div className=''>
    <Image src={Security} alt=''/>
  </div>
  <div><h1 className='font-[700]'>All your data are safe</h1>
  <p className='font-[600]'>We are using the most advanced security to provide you the best experience ever.</p></div>
  </div>


</div>
</div>

 {/* second */}
</div>

{/* Six Section cloze */}








     </div> 





     {/* Car section */}

     <div className='md:w-[40%] ml:w-[80%] xxs:w-[100%] ml:h-[600px] xxs:h-[650px]  bg-white -bg-lime-300 -py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg ml:px-10 md:px-0 xxs:px-0'>
     <div className='-bg-black  px-2 w-full '>
      <h1 className='font-[700] md:text-[23px] pt-2 xxs:text-[28px] '>Rental Summary</h1>
      <p className='font-[600] pt-1'>Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>
      {/* First scetion cloze */}
      {/* Image div */}
    <div className='-bg-slate-900 w-full h-[150px] flex px-2 items-center ml:gap-8 xxs:gap-2'> 
      <div >
        <Image src={car} alt='' />
      </div>
      <div className=''>
        <h1  className='md:text-[25px] xxs:text-[25px] ml:text-[35px] font-[700]'> Nissan GT - R</h1>
        <div className='ml:flex ml:flex-row xxs:flex xxs:flex-col-reverse gap-3'>
           <Image src={reiw} alt='' width={50} height={50} /> 
          <p className='font-[700]'>440+ Reviewer</p>
        </div>
      </div>
      </div>
      {/* second section cloze */}

      {/* Third scetion start */}
      <div className='w-full h-[100px] -bg-neutral-600 flex flex-col -items-center px-3 justify-around' >
       <div className='flex justify-between '><h1 className='font-[600] text-[22px]
       text-[#90A3BF]'>Subtotal</h1>
        <p className='font-[700] text-[24px]'>$80.00</p>  </div>
        <div className='flex justify-between '><h1 className='font-[600] text-[22px] text-[#90A3BF]'>Tax</h1>
        <p className='font-[700] text-[24px]'>$0</p>  </div>
      </div>
     {/* third scetion cloze */}



      {/* Fourth scetion start */}
      <div className='w-full h-[120px] -bg-orange-400 flex -justify-between items-center justify-center '>
     <div className='w-[95%] px-5 ml:h-[70px] xxs:h-[80px] bg-[#F6F7F9] ml:flex-row ml:items-center  ml:justify-between xxs:items-center ml:gap-0 xxs:gap-2  xxs:flex xxs:flex-col'>
<h1 className='text-[20px] font-[600]   text-[#90A3BF]' >Apply promo code</h1>
  <h2  className='text-[20px] font-[600] ' >Apply now</h2>
     </div> 
      </div>

      {/*Fourth scetion cloze */}



{/*fifth scetion start */}
<div className='w-full ml:h-[120px] xxs:h-[100px] -bg-blue-400 flex justify-between items-center px-2
 '>

<div>
<h1 className='font-[600] text-[23px]'>Total Rental Price</h1>
<p className='font-[600]'>Overall price and includes rental discount</p>
</div>

<div >
  <h2 className='text-[30px] font-[700]'>$80.00</h2>
</div>

</div>



{/*fifth scetion cloze */}


     </div>
 
 

     </div>

  )
}

export default page
