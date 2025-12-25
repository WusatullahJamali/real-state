"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const RentalConstruction = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState<number[]>([]);

  const listings = [
    { id: 1, image: "/alaska1.webp", badge: "New Construction",  type: "Apartment", price: "$550 - $580", beds: "1", baths: 1, sqft: "550", address: "Al-Zahraa", city: "Najaf, Iraq" },
    { id: 2, image: "/alaska3.webp", badge: "New Construction",  type: "Apartment", price: "$600 - $950", beds: "1 - 3", baths: 1, sqft: "630 - 865", address: "Italian Village", city: "Erbil, Iraq" },
    { id: 3, image: "/alaska4.webp", badge: "New Construction",  type: "Apartment", price: "$1,200 - $1,600", beds: "2 - 3", baths: 2, sqft: "1,025 - 1,065", address: "Royal City", city: "Erbil, Iraq" },
    { id: 4, image: "/alaska5.webp", badge: "New Construction",  type: "Apartment", price: "$700 - $1,100", beds: "1 - 2", baths: 1, sqft: "445 - 1,008", address: "Al-Karada", city: "Baghdad, Iraq" },
    { id: 5, image: "/alaska1.webp", badge: "New Construction",    type: "Studio", price: "$400 - $450", beds: "1", baths: 1, sqft: "350", address: "Empire World", city: "Erbil, Iraq" },
    { id: 6, image: "/alaska3.webp", badge: "New Construction",  type: "Apartment", price: "$900 - $1,300", beds: "2", baths: 2, sqft: "950", address: "Dream City", city: "Erbil, Iraq" },
    { id: 7, image: "/alaska4.webp", badge: "New Construction",  type: "Penthouse", price: "$2,500+", beds: "4", baths: 3, sqft: "2,200", address: "Gulan Towers", city: "Erbil, Iraq" },
    { id: 8, image: "/alaska5.webp", badge: "New Construction", type: "Apartment", price: "$650", beds: "1", baths: 1, sqft: "600", address: "Mansour", city: "Baghdad, Iraq" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const toggleSave = (id: number) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-black relative group">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">New Rentals</h1>
          <a href="#" className="text-yellow-600 hover:underline text-sm font-medium">
            View all rentals with rent specials
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {listings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          return (
            <div key={listing.id} className="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] snap-start">
              <Link href={``} className="block">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {listing.badge}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSave(listing.id);
                      }}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 hover:scale-110 transition-transform shadow-md"
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? "fill-yellow-500 text-yellow-500" : "text-gray-400"}`} />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-black uppercase">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      {listing.type}
                    </div>
                    <div className="text-xl font-bold mb-1">{listing.price}</div>
                    <div className="text-sm text-black mb-3">
                      <span className="font-bold text-black">{listing.beds}</span> bed •{" "}
                      <span className="font-bold text-black">{listing.baths}</span> bath •{" "}
                      <span className="font-bold text-black">{listing.sqft}</span> sqft
                    </div>
                    <div className="text-sm text-black leading-tight">
                      <p className="font-medium text-black">{listing.address}</p>
                      <p>{listing.city}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RentalConstruction;