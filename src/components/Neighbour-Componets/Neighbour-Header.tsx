"use client";

import React from "react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react"; // FIXED ICON IMPORT

const BACKGROUND_IMAGE_URL = "/hh.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white p-4">
        {/* Small top text */}
        <p className="text-sm uppercase tracking-widest mb-2 font-semibold text-gray-200">
          Find Community — Find Home
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-snug text-center">
          Discover Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400">
            Dream Lifestyle
          </span>
        </h1>

        {/* Sub Text */}
        <p className="text-base text-center max-w-xl mb-8 text-gray-200">
          Explore diverse neighborhoods, discover local amenities, and find the
          community that perfectly matches your lifestyle.
        </p>

        {/* Button */}
        <Link
          href="/add-property"
          className="relative flex items-center justify-center gap-2 
            px-6 py-3 w-[230px] h-12 
            bg-gray-900 text-white font-semibold text-sm cursor-pointer 
            overflow-hidden shadow-md transition-all duration-300 
            active:translate-x-[5px] active:translate-y-[5px] group"
        >
          {/* Yellow Hover Animation */}
          <span
            className="absolute w-[230px] h-[230px] bg-yellow-500 
              -left-full top-0 transition-all duration-300 
              group-hover:translate-x-full group-hover:-translate-y-1/2"
          ></span>

          <ChevronsRight className="w-4 h-4 relative z-10" />
          <span className="relative z-10">ADD PROPERTY</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
