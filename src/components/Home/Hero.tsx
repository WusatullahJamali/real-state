"use client";

import React from "react";
import Image from "next/image";
import SearchBar from "./Searchbar";

const stats = [
  { value: "50,000+", label: "Properties Listed" },
  { value: "15,000+", label: "Verified Providers" },
  { value: "18", label: "Governorates" },
  { value: "4.9★", label: "User Rating" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[94vh] flex items-center justify-center bg-cover bg-center">
      
      {/* Background Image */}
      <Image
        src="/hero4.jpg"
        alt="hero image"
        fill
        priority
        className="object-cover transition-all duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        
        {/* Heading */}
        <h1 className="
          text-gray-100 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold leading-tight mb-4 sm:mb-5
        ">
          Find Your Perfect Home & Trusted Services
        </h1>

        <h3 className="
          text-white font-normal 
          text-sm sm:text-base md:text-lg 
          mb-8 sm:mb-10
        ">
          Discover properties across IRAQ and book verified home service providers.
          Buy, sell, rent, or get expert help — all in one platform.
        </h3>

        {/* Search */}
        <SearchBar />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                flex-1 min-w-[110px] sm:min-w-[130px]
                px-3 py-2
                bg-[#1B3A57]
                rounded-2xl
                text-center
                shadow-[0_4px_20px_rgba(255,195,0,0.4)]
                hover:shadow-[0_6px_30px_rgba(255,195,0,0.7)]
                hover:scale-105
                transition-all duration-300
              "
            >
              <div className="text-base sm:text-lg md:text-xl font-bold text-yellow-400 drop-shadow-md">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-yellow-100/90">
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
