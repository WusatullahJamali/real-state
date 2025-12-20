"use client";

import React, { useState } from "react";
import { Search, MapPin, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PropertyHero: React.FC = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/property.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Top Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
            Discover Your Future
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
            Dream Home
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Search properties across Iraq with ease and find the perfect match for
          your lifestyle at the best prices.
        </motion.p>

        {/* Desktop / Tablet Pill Search Bar */}
        <motion.div
          className="hidden sm:flex bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-2xl max-w-4xl mx-auto flex-row items-center gap-2 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* Location Input */}
          <div className="flex items-center w-full px-6 py-2 border-r border-gray-200">
            <MapPin className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="City, Neighborhood..."
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm md:text-base font-medium"
            />
          </div>

          {/* Property Type Selector */}
          <div className="flex items-center w-full px-6 py-2 border-r border-gray-200">
            <Filter className="text-gray-400 w-5 h-5 mr-3" />
            <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer appearance-none text-sm md:text-base font-medium">
              <option>All Property Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="shrink-0 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </motion.div>

        {/* Mobile Search Toggle Button */}
        <div className="sm:hidden flex justify-center mb-4">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl border border-white/40"
          >
            {mobileSearchOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Search className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Collapsible Search Drawer */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              className="sm:hidden bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl mx-2 flex flex-col gap-4 border border-white/20"
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center w-full p-4 border border-gray-100 bg-gray-50 rounded-2xl">
                <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                <input
                  type="text"
                  placeholder="City, Neighborhood..."
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                />
              </div>

              <div className="flex items-center w-full p-4 border border-gray-100 bg-gray-50 rounded-2xl">
                <Filter className="text-gray-400 w-5 h-5 mr-3" />
                <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer appearance-none text-sm">
                  <option>All Property Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Popular Tags (Text-only, no links) */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="font-semibold text-white/70 uppercase tracking-widest">
            Popular:
          </span>
          <span className="text-gray-100 border-b border-white/20 pb-0.5">
            Baghdad
          </span>
          <span className="text-gray-100 border-b border-white/20 pb-0.5">
            Erbil
          </span>
          <span className="text-gray-100 border-b border-white/20 pb-0.5">
            Basra
          </span>
          <span className="text-gray-100 border-b border-white/20 pb-0.5">
            Mosul
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PropertyHero;
