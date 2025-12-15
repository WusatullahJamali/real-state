"use client";
import React from "react";
import Image from "next/image";

const ManageCard1 = () => {
  return (
    <div className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md h-full flex items-center justify-center bg-white rounded-2xl p-4">
           <Image
  src="/manage1.jpg"
  alt="Rental Management Illustration"
  width={100}       // or set your preferred width
  height={150}      // or set your preferred height
  className="w-full h-auto object-contain"
/>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Level up your rental management with Avail — supporting landlords every step of the way
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Publish rental listings, find and screen renters, sign leases, collect rent, and more with the Avail property management tools built specifically for DIY landlords.
          </p>
          <button className="mt-4 bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-yellow-700 transition w-max shadow-lg">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default ManageCard1;
