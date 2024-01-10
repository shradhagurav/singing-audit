import React from 'react';
import { Link } from 'react-router-dom';
import circle from '../assets/circle.jpg'
import toyfan from '../assets/fan.jpg'

const Navbar = () => {
  return (
    <nav className="bg-white p-8 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <div className="text-[#845ADF] font-bold text-lg flex items-center space-x-2">
        <div className="p-1 bg-[#3D4465] rounded-md">
        <img src={toyfan} alt="Toy Fan" className="w-full h-[14px] rounded-md" />
      </div>
      <div className="flex items-center  relative">
        <span className="text-[#3D4465]">Event-X</span>
        <span className="absolute bottom-0 left-0 w-full h-3 border-b-2 border-dotted border-[#3D4465]"></span>
      </div>
          </div>

        {/* Navigation Links */}
        <div className="flex  pr-96">
          <Link href="#" className="text-[#3D4465] font-bold mr-12">About the Event</Link>
          <Link href="#" className="text-[#3D4465] font-bold mr-64">List Your Event</Link>
        </div>

      

        {/* Contact Us Link */}
        <div className="hidden md:flex">
          <Link href="#" className="text-[#3D4465] pr-16 font-bold">Contact Us</Link>
          <img src={circle} alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
