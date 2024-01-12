import React from "react";
import Navbar from "./Common/Navbar";
import checked from './assets/checked.jpg';
import ticket from './assets/ticket.jpg'
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <Navbar />
      <section className="flex items-center justify-center">
      <img className="mr-4" src={checked} alt="Checked" />
        <div className="text-center">
          <span className="text-2xl font-bold block">Payment Successful</span>
          <span>Your booking has been confirmed</span>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="text-center">
          <img className="mx-auto mt-4" src={ticket} alt="Ticket" />
          <span className=" md:text-sm  block mt-10 bg-red-500 md:bg-green-500 text-xs">Tickets will be send to your email address & WhatsApp shortly</span>
          <span className="text-sm block mt-1">You may be required to show this tickets to access the event</span>
        </div>
      </section>
       
      <section className="mt-4">
            <button className="bg-[#845ADF]  text-white py-2 px-4 rounded mx-auto block">Download Ticket</button>
            <Link to="/">
          <button className="text-[#845ADF] font-bold py-2 px-4 rounded mx-auto block mt-2">Back to event details</button>
        </Link>
          </section>
    </div>
  );
};

export default Payment;
