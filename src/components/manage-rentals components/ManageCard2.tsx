"use client"
import React from "react";

const ManageCard2 = () => {
  return (
    <div className="w-full mt-20 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-3 items-center">

        {/* IMAGE LEFT */}
        <div className="order-1 flex justify-center">
          <img
            src="m1.png"
            alt="rent"
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="order-2 space-y-4">
         

          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            One-Click Rental Listings
          </h1>

          <p className="text-gray-600 text-lg">
            Effortlessly publish your rental listing to the top 20 rental sites,
            including Realtor.com, Trulia, Zumper, and Rent., to reach millions
            of renters and fill vacancies fast.
          </p>

          <button className="border bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg w-fit mt-5">
            Learn more
          </button>
        </div>

      </div>
    </div>
  );
};

export default ManageCard2;
