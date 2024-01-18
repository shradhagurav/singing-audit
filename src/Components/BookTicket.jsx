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
      <section className=" flex-none md:flex container md:p-5 md:mb-7 ">
        <ul className="steps  w-full md:mt-12 ">
          <li className="step step-primary font-bold">Seat</li>
          <li className="step font-bold">Details</li>
          <li className="step step-primary font-bold">Payment</li>
        </ul>
        <div className="flex space-x-4 mt-8 ml-[30rem]">
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

      {/* <section>
     <div className="w-[22rem] h-[12rem] border-dashed border-2 border-gray-500"></div>
      </section> */}

    
   {/* parent  */}
      <section className="container flex-none md:flex justify-between p-5 mx-auto ">
     
        
     
       {/* child 1 */}
        <div class="   ">

        <div className="">
          <p className=" text-[#3D4465] font-bold text-3xl">
            Enter Your Details
          </p>
          <p className=" text-[#3D4465] text-xs md:text-sm mb-2">
            This details will be used for further communication
          </p>
        </div>
          <form class="rounded ">
            <div class="mb-6 ">
              <label
                class="block text-gray-700 text-xs mb-2"
                for="username"
              >
                Enter Your Full Name
              </label>
              <input
                class="bg-gray-100 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-6 ">
              <label
                class="block text-gray-700 text-xs mb-2"
                for="username"
              >
                 Enter Your Phone No.
              </label>
              <input
                class="bg-gray-100 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div class="mb-6 ">
              <label
                class="block text-gray-700 text-xs mb-2"
                for="username"
              >
                Enter Your Email Address
              </label>
              <input
                class="bg-gray-100 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="email address"
              />
            </div>
          </form>
         
        </div>
       {/* child 2 */}
        <div className="w-full md:w-80 h-48  border-dashed  border-2 border-gray-500">
          <div className=" flex space-x-16 font-bold">
          <p className="ml-8 mt-8">Platinum tickets</p>
           <p className="mt-8">2 x 3500</p>
          </div>
          <div className=" flex space-x-24 font-bold">
          <p className="ml-8 mt-4">Silver tickets</p>
           <p className=" mt-4">2 x 3500</p>
          </div>
          <div className=" flex space-x-40 font-bold">
          <p className="ml-8 mt-4">Total</p>
           <p className=" mt-4">12000</p>
          </div>
      </div>
      
      </section>
      <section className=" flex  justify-center bg-[#845ADF]">
        <button
          className="block md:hidden  text-center text-white px-4 py-2 w-24 h-11 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default BookTicket;
