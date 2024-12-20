import { nanoid } from 'nanoid'
import React from 'react'
import Carsviewall from '../Cars-Viewall/Cars-Viewall'
// import img2 from '../../../public/image 2.png'
import Image from 'next/image'
// import box1img from '../../../public/image 7 (1).png'
import Imagecar from '../../../public/image 8 (3).png'
import view1 from '../../../public/View 1.png'
import view2 from '../../../public/View 2.png'
import view3 from '../../../public/View 3.png'
import star from '../../../public/Reviews.png'
import Link from 'next/link'






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
  
  
  
  
  
  
  






const page = () => {
  return (
    <div className='w-full h-full flex '>




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


 {/* cars and box container */}
<div className='flex flex-col w-full'>


{/* left side first container */}
<div className='w-full h-auto  -bg-red-300 md:flex md:flex-row xxs:flex xxs:flex-col justify-between px-5 pt-5 py-5 xxs:gap-5 md:gap-0 items-center ' >



{/* First box */}
<div className='md:w-[53%] h-auto sm:w-[80%] mini:w-[90%] ml:w-[90%] xxs:w-[100%] -bg-gray-400'>
<div
  className="md:w-[570px] md:h-auto py-5 sm:w-[100%] mini:w-[100%] ml:w-[100%]  relative bg-orange-300 text-white -flex -items-center -justify-center xxs:w-[100%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  "
  style={{
    backgroundImage: `url('Ads 2.png ')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px', // Optional for rounded corners
  }}
>
<div>
  <div className='-bg-black leading-[59px] pl-4 pt-4 flex flex-col justify-center ml:font-[600]'>
  <h1 className='md:text-[47px] sm:text-[45px] mini:text-[35px]   sm:font-[400]  tracking-wide ml:text-[50px]  xxs:text-[35px] font-[700] xxs:leading-[40px]   ml:leading-normal '>Sports car with the best <span className='ml:hidden xxs:flex'>design and acceleration</span> </h1>
  <h2  className='text-[40px] sm:text-[45px]  mini:text-[30px]  sm:font-[400] tracking-wide ml:text-[50px] xxs:hidden ml:flex ' > design and acceleration</h2></div>
  <div className='-bg-black  pl-4 pt-2 flex flex-col justify-center '>
    <p className='text-[20px] tracking-wide'> Ease of doing a car rental safely and <span className='xxs:flex ml:hidden'>reliably. Of course at a low price.</span> </p>
    <p className='text-[20px] tracking-wide xxs:hidden ml:flex '>reliably. Of course at a low price.</p>
  </div>
  
  {/* car img */}
  <div className='-bg-black  justify-center -pl-[80px] -bg-black h-[180px]
  flex items-center'>
    <Image src={Imagecar} alt='' />
  </div>
</div>

</div>
{/* 3 image box */}
<div className='w-[100%] -bg-black h-auto  bg-white py-3 flex justify-around flex-wrap gap-2'>
<div><Image src={view1}  alt=''/></div>  
<div><Image src={view2}  alt=''/></div>  
<div><Image src={view3}  alt=''/></div>  


</div>
</div>
{/* Firt cloze box */}





{/* Second box */}
<div className='md:w-[45%] sm:w-[80%] mini:w-[90%] h-auto py-5 px-3 ml:w-[85%]  bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
<div className='h-auto py-7 -bg-slate-400 flex -items-center px-2 flex-col'><h1 className='text-[30px]
font-[700]'>Nissan GT - R</h1>
<div className='flex'>
<Image src={star} alt=''/>
<p className='font-[600]'>440+ Reviewer</p>
</div>
</div>

<div className='-bg-zinc-500 h-auto py-4 font-[600] leading-[30px] tracking-wide'>
<p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
</div>


<div className='-bg-red-400 h-[150px] w-full flex flex-col  -items-center justify-around'>
 
 <div className=''>
  <ul className='flex justify-around font-[600] text-[18px] flex-wrap gap-1'>
    <li>Type Car</li>
    <li className='text-[#90A3BF]'>Sport</li>
    <li>Capacity</li>
    <li className='text-[#90A3BF]'>2 Person</li>
  </ul>
 </div>

<div>
<ul className='flex justify-around font-[600] text-[18px] flex-wrap gap-1'>
    <li>Steering </li>
    <li className='text-[#90A3BF]'>Manual</li>
    <li>Gasoline </li>
    <li className='text-[#90A3BF]'>70L</li>
  </ul>
</div>
</div>

<div className='-bg-orange-400 w-full h-[150px] ml:flex ml:flex-row xxs:flex xxs:flex-col items-center justify-between px-5'>
<div><h1 className='font-[700] text-[25px]'>$80.00/ <span className='text-[18px] text-[#90A3BF]'> days </span></h1>
<p className='text-[#90A3BF] font-[600]'>$100.00</p></div>

<div className=''>
<Link href="/PaymentMethod"> <button className='px-7 py-3 bg-[#3563E9] rounded-lg text-white  font-[600]'>Rent Now</button></Link>
</div>

</div>

</div>
{/* Second cloze box */}


</div>







<div className='-w-[100%]'>
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








































    </div>
  )
}

export default page