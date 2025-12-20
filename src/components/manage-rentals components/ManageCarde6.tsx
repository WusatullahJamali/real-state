"use client";

import React from "react";
import Image from "next/image";

const ManageCard6 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/m6.png"
            alt="Avail Tools Illustration"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Discover all the tools available on Avail
          </h1>

          <p className="text-black text-lg max-w-xl mb-6">
            Avail includes everything you need to manage your rentals effortlessly and professionally. Uncover the full suite of Avail features to simplify your day-to-day operations while maximizing your profit.
          </p>

          <button className="mt-6 cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default ManageCard6;
