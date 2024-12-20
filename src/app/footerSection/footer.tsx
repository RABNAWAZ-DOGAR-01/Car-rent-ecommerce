import React from 'react'

function Footer() {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-center items-center h-[170px]  bg-[#F6F7F9]'>
     <button className='px-6 py-3 bg-[#3563E9] text-white font-[600] tracking-wide rounded-md ' >Show more car</button></div>

     {/* footer Section */}
     <div className='w-full h-auto  -bg-slate-700'>
      <div className='w-full h-auto  '>

      <div className=' flex justify-around ml:items-center  flex-wrap gap-10 mini:px-20 sm:px-0  xxs:px-1 py-10  -mini:bg-black -sm:bg-gray-950 border-b-2'>


     <div className='sm:w-[290px] mini:w-[560px] ml:w-[600px] -ml:h-[250px] -bg-stone-700 sm:h-[250px] xxs:h-[80px] xxs:pl-3 sm:left-0 '>
      <h1 className='font-[700] text-[35px] text-[#3563E9]'>MORENT</h1>
      <p className='text-[#13131399]'>Our vision is to provide convenience 
        and help increase your sales business.</p>
     </div>

     

      <div className='w-[140px] xxs:w-[120px] h-[300px] -bg-stone-400 flex  justify-between'>
        <ul className='li flex flex-col justify-between'>
          <h1 className='text-[25px]  font-[600] text-black'>About</h1>
          <li >How it works</li>
          <li>Featured</li>
          <li>Partnership</li>
          <li>Bussiness Relation</li>
        </ul>
      </div>


      <div className='w-[140px] h-[300px] -bg-stone-800  flex  justify-between'>
      <ul className='li flex flex-col justify-between'>
          <h1 className='text-[25px]  font-[600] text-black'>Community</h1>
          <li >Events</li>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Invite a friend</li>
        </ul>
      </div>


      <div  className='w-[140px] h-[300px] -bg-stone-500  flex  justify-between'>
      <ul className='li flex flex-col justify-between'>
          <h1 className='text-[25px]  font-[600] text-black'>Socials</h1>
          <li >Discord</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>

      </div>
 
      </div>

    
    
   
   <div className='w-full h-auto py-10  -bg-lime-300 flex justify-between items-center tracking-wide text-[#1A202C]  pr-20 pl-10 flex-wrap gap-10'>
  <div><h1 className='font-[700] ' >©2022 MORENT. All rights reserved</h1></div>

  <div className='sm:flex  gap-10  '>
    <div className='pb-1 sm:gap-0'><h1 className='font-[700]'>Privacy & Policy</h1></div>
    <div><h1 className='font-[700]'>Terms & Condition</h1></div>
  </div>
   </div>

     </div>
    </div>
   
   
   
  )
}

export default Footer