"use client";

import React, { useState } from "react";
import { Search, MapPin, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ListingHeaderProps {
  totalListings?: number;
}

const ListingHeaderIraq: React.FC<ListingHeaderProps> = ({
  totalListings = 10,
}) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center overflow-hidden l">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0  "
        style={{ backgroundImage: "url('hero5.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-3 sm:mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
            {totalListings} Premium Listings Available
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Find Your Dream <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-yellow-500">
            Home in Iraq
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-4 sm:mb-6 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Discover luxury villas in Baghdad, modern apartments in Erbil, and
          heritage homes across the nation.
        </motion.p>

        {/* Desktop / Tablet Search Bar */}
        <motion.div
          className="hidden sm:flex bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-2xl max-w-4xl mx-auto flex-row items-center gap-2 border border-white/20 flex-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* Location Input */}
          <div className="flex items-center w-full px-4 py-2 border-r border-gray-200">
            <MapPin className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="City, Neighborhood..."
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          {/* Type Dropdown */}
          <div className="flex items-center w-full px-4 py-2 border-r border-gray-200">
            <Filter className="text-gray-400 w-5 h-5 mr-3" />
            <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer appearance-none text-sm sm:text-base">
              <option>All Property Types</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="shrink-0 w-auto bg-gray-900 cursor-pointer hover:bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Search</span>
          </button>
        </motion.div>

        {/* Mobile Search Icon */}
        <div className="sm:hidden flex justify-center mb-4">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg"
          >
            {mobileSearchOpen ? (
              <X className="w-5 h-5 text-gray-800" />
            ) : (
              <Search className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Collapsible Search */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              className="sm:hidden bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg mx-1 mb-1 flex flex-col gap-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center w-full  border border-gray-200 rounded-lg">
                <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="City, Neighborhood..."
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                />
              </div>

              <div className="flex items-center w-full border border-gray-200 rounded-lg">
                <Filter className="text-gray-400 w-5 h-5 mr-2" />
                <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer appearance-none text-sm">
                  <option>All Property Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Commercial</option>
                </select>
              </div>

              <button className="w-full bg-gray-900 hover:bg-black text-white  rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Popular Tags */}
        <motion.div
          className="mt-3 sm:mt-5 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="font-medium">Popular:</span>
          <span className="hover:text-white cursor-pointer underline ">
            Baghdad
          </span>
          <span className="hover:text-white cursor-pointer underline ">
            Erbil
          </span>
          <span className="hover:text-white cursor-pointer underline ">
            Basra
          </span>
          <span className="hover:text-white cursor-pointer underline ">
            Mosul
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ListingHeaderIraq;
