import React from "react";
import { Link } from "react-router-dom";
import circle from "../assets/circle.jpg";
import bell from "../assets/bell.jpg";
import toyfan from "../assets/fan.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white p-8 ">
      <div className="container mx-auto flex items-center md:justify-between">
        {/* Brand/Logo */}
        <div className="text-[#845ADF] font-bold text-lg flex items-center space-x-2">
          <div className="p-1 bg-[#3D4465] rounded-md w-7 h-7">
            <img
              src={toyfan}
              alt="Toy Fan"
              className="md:w-full md:h-5  rounded-md"
            />
          </div>
          <div className="flex items-center  relative  whitespace-nowrap">
            <span className="text-[#3D4465]">Event-X</span>
            <span className="absolute bottom-0 left-0 w-full h-3 border-b-2 border-dotted border-[#3D4465]"></span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex md:pr-96 pr-44">
          <Link
            href="#"
            className="hidden md:block text-[#3D4465] font-bold mr-12"
          >
            About the Event
          </Link>
          <Link
            href="#"
            className="hidden md:block text-[#3D4465] font-bold mr-64"
          >
            List Your Event
          </Link>
        </div>

        {/* Contact Us Link */}
        <div className="md:flex">
          <Link
            href="#"
            className="hidden md:block text-[#3D4465] pr-16 font-bold"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex space-x-3">
        <img src={bell} alt="User Profile" className="w-8 h-8 rounded-full block md:hidden" />
        <img src={circle} alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
