"use client";

import React from "react";
// import { Search } from "lucide-react";
import Image from "next/image";
import SearchBar from "./Searchbar";
 const stats = [
    { value: "50,000+", label: "Properties Listed" },
    { value: "15,000+", label: "Verified Providers" },
    { value: "18", label: "Governorates" },
    { value: "4.9★", label: "User Rating" },]

const Hero = () => {
  
  return (
    <section
      className="relative w-full h-[94vh] flex items-center justify-center bg-cover bg-center"
    
    >
        <Image
              src="/hero4.jpg"
              alt="hero image"
              fill
              className="object-cover  group-hover:scale-105 transition-all duration-300"
            />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Header */}
        <h1 className="text-gray-100 text-7xl md:text-6xl font-bold leading-tight mb-5">
          Find Your Perfect Home & Trusted Services
        </h1>
        <h3 className="text-white font-normal text-center text-lg mb-10">Discover properties across IRAQ and book verified home service providers. Buy, sell, rent, or get expert help — all in one platform.</h3>

        {/* Navigation Tabs */}
        {/* <ul className="flex flex-wrap justify-center space-x-6 text-white text-xl font-bold  mb-8">
          {["Buy", "Rent", "Sell", "Services"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline  underline-offset-4 transition"
              >
                {item}
              </li>
            )
          )}
        </ul> */}

        {/* Search Bar */}
        {/* <div className="bg-white rounded-full flex items-center px-2 py-3 shadow-xl max-w-lg mx-auto">
          

          <input
            type="text"
            placeholder="Search for Homes , Apartments , Agents , Services..."
            className="flex-1 mx-3 outline-none text-black text-lg"
          />

          {/* Filter Dropdown */}
          {/* <Search className="w-8 h-8 cursor-pointer  text-yellow-500" />
          
        </div> */} 

        <SearchBar/>
         <div className=" flex flex-wrap justify-center gap-3 mt-4">
 {stats.map((stat, index) => (
  <div
    key={index}
    className="
      flex-1 min-w-[70px] px-3 py-2
      bg-[#1B3A57]
      rounded-2xl
      text-center
      shadow-[0_4px_20px_rgba(255,195,0,0.4)]
      hover:shadow-[0_6px_30px_rgba(255,195,0,0.7)]
      hover:scale-105
      transition-all duration-300
    "
  >
    <div className="text-lg sm:text-xl font-bold text-yellow-400 drop-shadow-md">
      {stat.value}
    </div>
    <div className="mt-1 text-xs sm:text-sm text-yellow-100/90">
      {stat.label}
    </div>
  </div>
))}




     
    </div>
      </div>
    </section>
  );
};

export default Hero;