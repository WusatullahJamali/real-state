"use client";

import React, { useState } from "react";
import { Search, MapPin, Filter, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const PropertyHero: React.FC = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* 🔙 Mobile Back Button */}
      <button
        onClick={() => router.push("/")}
        className="
          absolute top-4 start-4 z-20
          flex items-center gap-1
          rounded-full bg-yellow-500 backdrop-blur-md
          px-3 py-2 text-sm font-medium text-white
          shadow-lg border border-white/30
          md:hidden
        "
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/property.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-10 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase">
            Discover Your Future
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Discover Your
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-yellow-500">
            Dream Home
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-200 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Search properties across Iraq with ease and find the perfect match for
          your lifestyle at the best prices.
        </motion.p>

        {/* Desktop / Tablet Search */}
        <motion.div
          className="hidden sm:flex bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-xl max-w-4xl mx-auto items-center border border-white/20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <div className="flex items-center w-full px-5 py-2 border-r border-gray-200">
            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
            <input
              placeholder="City, Neighborhood..."
              className="w-full bg-transparent outline-none text-gray-800 text-sm font-medium"
            />
          </div>

          <div className="flex items-center w-full px-5 py-2 border-r border-gray-200">
            <Filter className="w-5 h-5 text-gray-400 mr-3" />
            <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer text-sm font-medium appearance-none">
              <option>All Property Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </div>

          <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg">
            <Search className="w-5 h-5" />
            Search
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="sm:hidden flex justify-center mb-4">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/30"
          >
            {mobileSearchOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Search className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Search Drawer */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              className="sm:hidden bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-xl mx-2 flex flex-col gap-4 border border-white/20"
              initial={{ opacity: 0, scale: 0.95, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: "auto" }}
              exit={{ opacity: 0, scale: 0.95, height: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  placeholder="City, Neighborhood..."
                  className="w-full bg-transparent outline-none text-gray-800 text-sm"
                />
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-2xl border">
                <Filter className="w-5 h-5 text-gray-400 mr-3" />
                <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                  <option>All Property Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>

              <button className="bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition">
                <Search className="w-5 h-5" />
                Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Popular Cities */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="uppercase tracking-widest text-white/60 font-semibold">
            Popular:
          </span>
          {["Baghdad", "Erbil", "Basra", "Mosul"].map((city) => (
            <span
              key={city}
              className="border-b border-white/20 pb-0.5 text-gray-100"
            >
              {city}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PropertyHero;
