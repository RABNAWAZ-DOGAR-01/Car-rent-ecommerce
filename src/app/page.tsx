
import Hero from "./components/HeroSection/Hero";
import LocationPicker from "./components/HeroSection/pick-drop/pick";
import Cars from "./components/HeroSection/Cars-section/Cars";
import { CardHeader } from "@mui/material";
import Carsdheaders from "./components/HeroSection/cards-header/Carsdheaders";
import { disconnect } from "process";
import { nanoid } from 'nanoid';




const data1  =  [
  {
    
    id: nanoid(1),
    heading : "car (15).png",
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





  
  {
    id: nanoid(4),
    heading : "Nissan GT - R",
    para1 : "Sport",
   img : "/heart2.png",
   car : '/car (2).png',
   petrollheading  :  "80L",
   shellheading : "Manual",
   people : "2 People",
   price : '$80.00/',
   discount :  '$100.00',
 

  },
 
 
  



  
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





  
  {
    id: nanoid(4),
    heading : "CR  - V",
    para1 : "SUV",
   img : "/herat.jpg",
   car : '/Car (7).png',
   petrollheading  :  "80L",
   shellheading : "Manual",
   people : "2 People",
   price : '$80.00/',
   discount :  '$80.00/ ',
 

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





  
  {
    id: nanoid(4),
    heading : "New MG ZS",
    para1 : "SUV",
   img : "/heart2.png",
   car : '/Car (9).png',
   petrollheading  :  "80L",
   shellheading : "Manual",
   people : "6 People",
   price : '$80.00/ ',
   discount :  '$100.00',
 

  },
 
 
  



  
]

const data2 =  [
  {
    id: nanoid(1),
    heading : "Popular Car",
    para : 'View All'
  }
]

export default function Home() {
  const SelectCrad = () => {

    console.log("Button clicked!");
    alert('hello world')
  };
  return (
  <div className="w-full h-full">
  {/* Navbar */}
  
 {/* Nav Section cloze */}




{/* Hero Section */}
<div className="w-full h-auto -bg-slate-400  py-10  ml:px-5 mini:px-0 bg-[#F6F7F9] ">
<Hero/>
</div>
{/* Hero Section Cloze */}




{/* Pick Start */}
  <div className="w-full h-auto -bg-slate-500  py-5  -flex -relative bg-[#F6F7F9]  "> 
 <LocationPicker />
  </div>
{/* Pick end */}




{/* Cards header */}
<div className="w-full h-[70px] -bg-red-400 p-3 bg-[#F6F7F9] ">
{data2.map((elem , )=>{
  return(
    <Carsdheaders 
    key={elem.id}
    heading={elem.heading}
    para={elem.para}
      />
  )
 })}
</div>
{/* Cars Section */}
<div className="w-full h-auto -bg-slate-500  md:grid-cols-4 md:px-0 md:gap-0 sm:px-0 mini:px-0   py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1 xxs:gap-8  ml:gap-8  xxs:grid xxs:grid-cols-1 
bg-[#F6F7F9] "   >
 
{data1.map((elem )=>{



  return(
      <Cars 
    
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

<div className="w-full h-[70px] - -bg-black bg-[#F6F7F9] ">
<Carsdheaders heading={"Recomendation Car"}/>
</div>
{/* Cars section cloze */}
<div className="w-full h-auto -bg-slate-500  md:grid-cols-4 md:px-0 md:gap-0 sm:px-0 mini:px-0   py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1 xxs:gap-8  ml:gap-8  xxs:grid xxs:grid-cols-1
bg-[#F6F7F9] ">
{data3.map((elem  )=>{
  return(
    <Cars 
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

<div className="w-full h-auto -bg-slate-500  md:grid-cols-4 md:px-0 md:gap-0 sm:px-0 mini:px-0   py-10 mini:grid mini:grid-cols-2 ml:grid ml:grid-cols-1 xxs:gap-8  ml:gap-8  xxs:grid xxs:grid-cols-1
bg-[#F6F7F9] ">
{data4.map((elem  )=>{
  return(
    <Cars 
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
{/* Card Section cloze */}

  </div>

  );
}
