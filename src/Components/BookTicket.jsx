import React from "react";
import Navbar from "./Common/Navbar";
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/payment");
  };

  return (
    <div className="no-scrollbar">
      <Navbar />
      <section className="flex mb-20">
        <ul className="steps mt-12">
          <li className="step step-primary">Seat</li>
          <li className="step  w-48">Details</li>
          <li className="step step-primary">Payment</li>
        </ul>
        <div className="flex space-x-4 mt-16 ml-[30rem]">
          <button className="bg-white text-[#3D4465] border border-[#3D4465]  px-4 py-2 h-11 rounded">
            Cancle
          </button>
          <button
            className="bg-[#845ADF] text-white px-4 py-2 w-24 h-11 rounded"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>

        
      </section>

    

      {/* <section>
     <div className="w-[22rem] h-[12rem] border-dashed border-2 border-gray-500"></div>
      </section> */}

      

      <section className="flex">
      <div className="flex flex-col mr-4">
          <p className=" ml-32 text-[#3D4465] font-bold text-3xl">
            Enter Your Details
          </p>
          <p className="ml-32 mt-1 text-[#3D4465]">
            This details will be used for further communication
          </p>
        </div>
      </section>

        
    
     
 <section>
    <div class="w-full max-w-xs">
      <form class="rounded px-8 ">
        <div class="mb-6">
          <label class="block text-gray-700 ml-24 text-xs mb-2" for="username">
            Enter Your Full Name
          </label>
          <input
            class="bg-gray-100 shadow appearance-none border rounded ml-24 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-xs ml-24 mb-2" for="password">
            Enter Your Phone Number
          </label>
          <input
            class="bg-gray-100 shadow appearance-none border ml-24 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Phone Number"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-xs mb-2 ml-24" for="username">
            Enter Your Email address
          </label>
          <input
            class="bg-gray-100 shadow appearance-none border rounded w-full ml-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email address"
          />
        </div>
      </form>
      {/* <div className="w-80 h-48 flex border-dashed justify-end border-2 border-gray-500">
        <p>Platinum tickets</p>
      </div> */}
    </div>
  </section>
  
</div>
      
  
  );
};

export default BookTicket;
