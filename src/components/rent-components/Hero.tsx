"use client";

import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/hero4.jpg')",
      }}
    >   
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Header */}    
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          The #1 site real estate professionals trust*
        </h1>

        {/* Navigation Tabs */}
        <ul className="flex flex-wrap justify-center space-x-6 text-white text-lg font-medium mb-8">
          {["Buy", "Rent", "Sell", "Pre-approval", "Just sold", "Home value"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline underline-offset-4 transition"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-xl max-w-3xl mx-auto">
          <Search className="w-6 h-6 text-gray-600" />

          <input
            type="text"
            placeholder="Search for homes, addresses, agents…"
            className="flex-1 mx-3 outline-none text-black text-lg"
          />

          {/* Filter Dropdown */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
