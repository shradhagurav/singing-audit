import React from "react";
import Navbar from "./Common/Navbar";
import chair2 from './assets/chair2.jpg'
import black from './assets/black.jpg'
import blue from './assets/blue.jpg'
import { useNavigate } from "react-router-dom";

const BookSeat = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Navigate to the "/book-ticket" route
    navigate("/book-ticket");
  };


  return (
    <>
      <Navbar />
      <section className="flex">
        {/* {...Array(18).map((item,index) =>(
          <p key={index}>li</p>
        ))} */}
        <ul className="steps mt-12">
          <li className="step">Seat</li>
          <li className="step step-primary w-48">Details</li>
          <li className="step step-primary">Payment</li>
        </ul>
        <div className="flex space-x-4 mt-16 ml-[30rem]">
          <button className="bg-white text-[#3D4465] border border-[#3D4465]  px-4 py-2 h-11 rounded">
            Previous
          </button>
          <button className="bg-[#845ADF] text-white px-4 py-2 w-24 h-11 rounded"   onClick={handleNextClick}>
            Next
          </button>
        </div>
      </section>

      <section className="flex">
        <div className="flex flex-col mr-4">
            <p className="mt-24 ml-32 text-[#3D4465] font-bold text-3xl">Select your seats to continue</p>
            <p className="ml-32 mt-1 text-[#3D4465]">Use your fingers or mouse scroll to zoom in and out</p>
        </div>
        <div className="flex space-x-2 items-end ml-80">
        <img src={chair2} alt="Chair" className="w-7 h-7" />
          <p className="pr-10">Available</p>
          <img src={blue} alt="Chair" className="w-7 h-7" />
            <p className="pr-10">Selected</p>
            <img src={black} alt="Chair" className="w-7 h-7" />
            <p className="pr-10">Reserved</p>
        </div>
    </section>
    <section className="flex justify-between">
  <p className="mt-4 ml-32 font-bold">Silver seats $2500</p>
  <p className="mr-72 mt-4 font-bold">Silver seats $2500</p>
</section>
    <section className="flex justify-center items-center p-4 ">
        <div className="flex justify-center items-center w-96 h-40 mt-16 bg-gray-200">
          <p className="text-[#3D4465] text-xl">Stage</p>
        </div>
      </section>

    </>
  );
};

export default BookSeat;
