"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, Bed, Ruler, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { houseList } from "./RentData"; // Importing the data

const RentHouses = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-14 px-6 bg-gray-100 text-black">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Houses for Rent
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {houseList.map((house) => (
            <motion.div
              key={house.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <motion.img 
                  src={house.image} 
                  alt={house.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white font-semibold text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500" /> {house.location}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent accidental navigation
                    toggleFav(house.id);
                  }}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition active:scale-95"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(house.id) ? "text-red-500 fill-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors">
                    {house.title}
                  </h3>
                  <p className="text-yellow-600 font-extrabold text-lg">${house.price}<span className="text-xs font-normal text-gray-500">/mo</span></p>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" /> <span className="font-semibold text-black">{house.bedrooms}</span> Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" /> <span className="font-semibold text-black">{house.areaSqFt}</span> sqft
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {house.amenities.slice(0, 3).map((am, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      {am}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/houses-for-rent/house/${house.id}`}
                  className="mt-4 block bg-yellow-600 text-white py-3 text-center rounded-lg font-semibold hover:bg-yellow-700 shadow-md hover:shadow-yellow-600/20 transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RentHouses;