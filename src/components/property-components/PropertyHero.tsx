"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PropertyHero: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Search:", searchValue);
  };

  return (
    <div
      className="relative h-[65vh] min-h-[550px] bg-cover bg-center"
      style={{ backgroundImage: "url('/property.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

      <motion.div
        className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.h1
          className="max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight drop-shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover Your <span className="text-yellow-400">Dream Home</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 max-w-xl text-base sm:text-lg md:text-xl text-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Search properties across Iraq with ease
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative flex items-center bg-[#2f3640] rounded-full w-[70%] max-w-3xl shadow-xl">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search for houses in Iraq at best prices"
              className="w-full bg-transparent text-white placeholder-gray-300 text-sm px-6 py-4 pr-16 focus:outline-none rounded-full"
            />

            <button
              onClick={handleSearch}
              className="absolute right-1.5 h-12 w-12 rounded-full bg-gradient-to-r from-[#2AF598] to-[#009EFD] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PropertyHero;
