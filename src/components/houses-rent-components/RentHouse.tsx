"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Heart, Bed, Ruler, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { houseList, HouseType } from "./RentData";

const RentHouses = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-600 font-bold tracking-widest uppercase text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Exclusive Rentals</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Houses for <span className="text-yellow-500">Rent</span>
            </h2>
          </div>
          <div className="h-1 w-16 bg-yellow-500 hidden md:block"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houseList.map((house: HouseType) => (
            <div
              key={house.id}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs">
                  <MapPin className="w-3 h-3 text-yellow-600" />
                  <span className="font-bold text-black">{house.location}</span>
                </div>
                <button
                  onClick={(e) => toggleFav(e, house.id)}
                  className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors duration-300 ${
                      favorites.includes(house.id)
                        ? "fill-yellow-600 text-yellow-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors mb-2">
                  {house.title}
                </h3>
                <p className="text-2xl font-black text-black mb-3">
                  ${house.price.toLocaleString()}
                  <span className="text-sm font-normal text-black">/mo</span>
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="p-1 bg-yellow-50 rounded">
                      <Bed className="w-3.5 h-3.5 text-yellow-600" />
                    </div>
                    <span className="font-bold text-black">
                      {house.bedrooms} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="p-1 bg-yellow-50 rounded">
                      <Ruler className="w-3.5 h-3.5 text-yellow-600" />
                    </div>
                    <span className="font-bold text-black">
                      {house.areaSqFt} sqft
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mb-4 flex-wrap text-[9px]">
                  {house.amenities.slice(0, 2).map((am, i) => (
                    <span
                      key={i}
                      className="uppercase font-bold tracking-wider bg-gray-50 text-black px-2 py-0.5 rounded border border-gray-100"
                    >
                      {am}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/houses-for-rent/house/${house.id}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-yellow-500 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
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
