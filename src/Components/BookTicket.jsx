import React from 'react'
import Navbar from './Common/Navbar'
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Navigate to the "/book-ticket" route
    navigate("/payment");
  };

  return (
    <div>
      <Navbar/>
      <section className="flex">
        <ul className="steps mt-12">
          <li className="step">Seat</li>
          <li className="step step-primary w-48">Details</li>
          <li className="step step-primary">Payment</li>
        </ul>
        <div className="flex space-x-4 mt-16 ml-[30rem]">
          <button className="bg-white text-[#3D4465] border border-[#3D4465]  px-4 py-2 h-11 rounded">
            Cancle
          </button>
          <button className="bg-[#845ADF] text-white px-4 py-2 w-24 h-11 rounded"   onClick={handleNextClick}>
            Next
          </button>
        </div>
      </section>

      <section className="flex">
        <div className="flex flex-col mr-4">
            <p className="mt-24 ml-32 text-[#3D4465] font-bold text-3xl">Enter Your Details</p>
            <p className="ml-32 mt-1 text-[#3D4465]">This details will be used for further communication</p>
        </div>
        
    </section>
    </div>
  )
}

export default BookTicket