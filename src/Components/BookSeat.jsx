import React, { useState } from "react";
import Navbar from "./Common/Navbar";
import chair2 from './assets/chair2.jpg'
import chair1 from './assets/chair1.jpg'
import chair3 from './assets/chair3.jpg'
import black from './assets/black.jpg'
import blue from './assets/blue.jpg'
import { useNavigate } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";

const BookSeat = () => {

  const [selectedGoldSeat,setSelectedGoldSeat]=useState([])
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Navigate to the "/book-ticket" route
    navigate("/book-ticket");
  };

  const handleGoldSeat=(seatNumber)=>{
     alert(`You have selected ${seatNumber} seat `)
     setSelectedGoldSeat(seatNumber);
  }


 

  return (
    <>
      <Navbar />

      <section className=" flex-none  w-full md:flex container">
        <ul className="steps md:w-[39%] w-full md:mt-4 ">
          <li className="step font-bold ">Seat</li>
          <li className="step step-primary font-bold">Details</li>
          <li className="step step-primary font-bold">Payment</li>
        </ul>
        <div className="flex space-x-4 mt-4 ml-[34rem]">
          <button className="hidden md:block bg-white text-[#3D4465] border border-[#3D4465]  px-4 py-2 h-11 rounded">
            Cancle
          </button>
          <button
            className="hidden md:block bg-[#845ADF] text-white px-4 py-2 w-24 h-11 rounded"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </section>
    

      <section className="flex ">
        <div className="flex flex-col mr-4 whitespace-nowrap mx-3">
            <p className="md:mt-16 md:ml-4 text-[#3D4465] font-bold text-base md:text-3xl">Select your seats to continue</p>
            <p className="md:ml-4 mt-1 text-xs md:mb-4 text-[#3D4465]">Use your fingers or mouse scroll to zoom in and out</p>
        </div>
        <div className="md:flex space-x-2 items-end md:ml-[28rem] md:mb-4">
        <img src={chair2} alt="Chair" className="w-7 h-7 hidden md:block" />
          <p className="pr-10 hidden md:block">Available</p>
          <img src={blue} alt="Chair" className="w-7 h-7 hidden md:block" />
            <p className="pr-10 hidden md:block">Selected</p>
            <img src={black} alt="Chair" className="w-7 h-7 hidden md:block" />
            <p className="pr-10 hidden md:block">Reserved</p>
        </div>
</section>

         {/* responsive section */}
   <section>
   <div className="flex pl-3.5 mt-3.5">
        <img src={chair2} alt="Chair" className="w-4 h-4 md:hidden block" />
          <p className="mx-3 md:hidden block text-xs">Available</p>
          <img src={black} alt="Chair" className="w-4 h-4 md:hidden block" />
          <p className="mx-3 md:hidden block text-xs">Reserved</p>
        </div>
   </section>
    
   
    <section className=" grid grid-cols-3 mt-4 gap-4   container mx-auto ">
        
        {/* left chair section  */}
         <div className=" flex" >
        <div >
            <p className=" font-bold mb-2 text-[9px]">Silver seats $2500</p>
        <div className=" w-full flex flex-wrap ">
        {[...Array(18)].map((item,index) =>(
          <div key={index} className="w-1/6">
           <img src={chair1} alt="Chair" className="md:w-12 md:h-12 w-4 h-4" />
           </div>
        ))}
        </div>
      
        </div>
        </div>


        <div className="flex justify-center items-center w-full md:h-44 h-16 bg-gray-200 mt-3.5 md:mt-0">
          <p className="text-[#3D4465] md:text-xl text-xs">Stage</p>
        </div>

        {/* right chair section  */}
        <div className="flex">
        <div >
            <p className=" font-bold mb-2 text-[9px]">Silver seats $2500</p>
        <div className=" w-full flex flex-wrap md:gap-y-0.5">
        {[...Array(18)].map((item,index) =>(
          <div key={index} className="w-1/6">
           <img src={chair3} alt="Chair" className="md:w-12 md:h-12 w-4 h-4" />
           </div>
        ))}
        </div>
      
        </div>
        </div>
        
       
      </section>
      
      {/* platinum seats */}
      <section className="md:mt-6 container mx-auto">
      <p className=" font-bold md:mb-2 text-[9px]">Platinum seats $2500</p>

      <div className=" w-full md:gap-4 flex flex-wrap ">
        {[...Array(40)].map((item,index) =>(
          <div key={index} className="">
           <img src={chair2} alt="Chair" className="md:w-12 md:h-12 w-[1.2rem] h-4" />
           </div>
        ))}
        </div>

      </section>
      
      {/* gold seats  */}
      <section className="md:mt-6 container mx-auto">
      <p className=" font-bold md:mb-2 text-[9px]">Gold seats $2500</p>

      <div className=" w-full md:gap-4 flex flex-wrap ">
        {[...Array(60)].map((item,index) =>(
          <div onClick={()=>handleGoldSeat(index)} key={index} className="  cursor-pointer ">
           <img src={chair2} alt="Chair" className={` ${selectedGoldSeat ? 'bg-green-500':''} md:w-12 md:h-12 w-[1.2rem] h-4`} />
           {/* <MdOutlineChair className={` hover:fill-green-500 ${selectedGoldSeat ? '':''} w-7 h-7 `} /> */}
           </div>
        ))}
        </div>

      </section>
      <section className=" flex  justify-center bg-[#845ADF] mt-36">
        <button
          className="block md:hidden  text-center text-white px-4 py-2 w-24 h-11 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </section>
    </>
  );
};

export default BookSeat;
