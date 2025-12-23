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
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src="/hero4.jpg"
        alt="hero image"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mt-2 mx-auto px-4 sm:px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-white font-bold leading-tight mb-4
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Find Your Perfect Home & Trusted Services
        </h1>

        <p className="text-gray-100 max-w-3xl mx-auto mb-8
          text-sm sm:text-base md:text-lg">
          Discover properties across IRAQ and book verified home service providers.
          Buy, sell, rent, or get expert help — all in one platform.
        </p>

        {/* Search */}
        <SearchBar />

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1B3A57] rounded-2xl px-3 py-3 mb-4 text-center
              shadow-[0_4px_20px_rgba(255,195,0,0.4)]
              hover:shadow-[0_6px_30px_rgba(255,195,0,0.7)]
              hover:scale-105 transition-all duration-300"
            >
              <div className="text-yellow-400 font-bold text-base sm:text-lg md:text-xl">
                {stat.value}
              </div>
              <div className="text-yellow-100/90 text-xs sm:text-sm mt-1">
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
