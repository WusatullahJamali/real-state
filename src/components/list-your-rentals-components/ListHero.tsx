"use client";

import React from "react";
import Image from "next/image";

const ListHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Reach millions of renters — list your property for free across the top 20 rental sites
          </h1>

          <p className="text-black text-lg mb-8 max-w-xl">
            With robust features designed to help you fill vacancies faster,
            Avail unlocks the full potential of your rental listing.
          </p>

          <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-800 transition-colors">
            List your rentals
          </button>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/list1.png"
            alt="List your rental property"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default ListHero;
