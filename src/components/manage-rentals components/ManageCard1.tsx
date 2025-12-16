"use client";

import React from "react";
import Image from "next/image";

const ManageCard1 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT CONTENT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Level up your rental management with Avail — supporting landlords every step of the way
          </h1>

          <p className="text-black text-lg mb-8 max-w-xl">
            Publish rental listings, find and screen renters, sign leases, collect rent, and more with the Avail property management tools built specifically for DIY landlords.
          </p>

          <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors shadow-lg">
            Get Started
          </button>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/manage1.jpg"
            alt="Rental Management Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default ManageCard1;
