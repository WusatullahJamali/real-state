"use client";

import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[85vh] md:h-[90vh] lg:h-[95vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight lg:leading-tight mb-6">
          The #1 site real estate professionals trust*
        </h1>

        {/* Navigation Tabs */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-white text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8">
          {["Buy", "Rent", "Sell", "Pre-approval", "Just sold", "Home value"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline underline-offset-4 transition text-xs sm:text-sm md:text-base"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-3 sm:px-4 py-2 sm:py-3 shadow-xl max-w-full sm:max-w-3xl mx-auto">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />

          <input
            type="text"
            placeholder="Search for homes, addresses, agents…"
            className="flex-1 mx-2 sm:mx-3 outline-none text-black text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
