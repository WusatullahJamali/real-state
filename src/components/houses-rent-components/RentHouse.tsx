"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Heart, Bed, Ruler, MapPin, ArrowUpRight, Sparkles, Bath } from "lucide-react";
import { houseList, HouseType } from "./RentData";

const RentHouses = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-6 bg-[#FCFCFC] text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Collection 2024</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              Modern Living <span className="font-serif italic text-yellow-500">Spaces</span>
            </h2>
            <p className="mt-4 text-gray-500 font-medium max-w-md">
              Discover hand-picked residential properties designed for comfort and sophisticated urban living.
            </p>
          </div>
          <Link 
            href="/houses-for-rent" 
            className="hidden md:flex items-center gap-2 text-sm font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors"
          >
            Explore All Rentals <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {houseList.map((house: HouseType) => (
            <div
              key={house.id}
              className="group bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={house.image} 
                  alt={house.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Verified
                  </span>
                </div>

                <button
                  onClick={(e) => toggleFav(e, house.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110 active:scale-95"
                >
                  <Heart 
                    className={`w-4 h-4 transition-colors duration-300 ${favorites.includes(house.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} 
                  />
                </button>

                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                  <div className="bg-yellow-500 p-1.5 rounded-lg shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-xs font-bold tracking-wide drop-shadow-md">{house.location}</span>
                </div>
              </div>

              {/* Info Content */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                      {house.title}
                    </h3>
                    <div className="flex gap-4 text-gray-400">
                       <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4" />
                          <span className="text-xs font-bold text-gray-600">{house.bedrooms}</span>
                       </div>
                       <div className="flex items-center gap-1.5">
                          <Ruler className="w-4 h-4" />
                          <span className="text-xs font-bold text-gray-600">{house.areaSqFt} <span className="font-medium text-gray-400 uppercase text-[9px]">sqft</span></span>
                       </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900 leading-none">
                      ${house.price.toLocaleString()}
                    </p>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">/ Month</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  {house.amenities.slice(0, 3).map((am, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-[0.1em] bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg border border-gray-100">
                      {am}
                    </span>
                  ))}
                </div>

                {/* Button Action */}
                <Link
                  href={`/houses-for-rent/house/${house.id}`}
                  className="group/btn mt-auto relative flex items-center justify-center gap-3 w-full bg-slate-900 text-white font-bold py-4 rounded-2xl overflow-hidden transition-all hover:bg-black"
                >
                  <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Explore Property</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  <div className="absolute inset-0 bg-yellow-500 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentHouses;