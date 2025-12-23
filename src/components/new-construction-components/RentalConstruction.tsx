"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ======================
   FRAMER VARIANTS
====================== */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const RentalConstruction = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState<number[]>([]);

  const listings = [
    { id: 1, image: "/alaska1.webp", badge: "New Construction", type: "Apartment", price: "$550 - $580", beds: "1", baths: 1, sqft: "550", address: "Al-Zahraa", city: "Najaf, Iraq" },
    { id: 2, image: "/alaska3.webp", badge: "New Construction", type: "Apartment", price: "$600 - $950", beds: "1 - 3", baths: 1, sqft: "630 - 865", address: "Italian Village", city: "Erbil, Iraq" },
    { id: 3, image: "/alaska4.webp", badge: "New Construction", type: "Apartment", price: "$1,200 - $1,600", beds: "2 - 3", baths: 2, sqft: "1,025 - 1,065", address: "Royal City", city: "Erbil, Iraq" },
    { id: 4, image: "/alaska5.webp", badge: "New Construction", type: "Apartment", price: "$700 - $1,100", beds: "1 - 2", baths: 1, sqft: "445 - 1,008", address: "Al-Karada", city: "Baghdad, Iraq" },
    { id: 5, image: "/alaska1.webp", badge: "New Construction", type: "Studio", price: "$400 - $450", beds: "1", baths: 1, sqft: "350", address: "Empire World", city: "Erbil, Iraq" },
    { id: 6, image: "/alaska3.webp", badge: "New Construction", type: "Apartment", price: "$900 - $1,300", beds: "2", baths: 2, sqft: "950", address: "Dream City", city: "Erbil, Iraq" },
    { id: 7, image: "/alaska4.webp", badge: "New Construction", type: "Penthouse", price: "$2,500+", beds: "4", baths: 3, sqft: "2,200", address: "Gulan Towers", city: "Erbil, Iraq" },
    { id: 8, image: "/alaska5.webp", badge: "New Construction", type: "Apartment", price: "$650", beds: "1", baths: 1, sqft: "600", address: "Mansour", city: "Baghdad, Iraq" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-7xl mx-auto p-6 text-black relative"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-between items-end mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1">New Rentals</h1>
          <a href="#" className="text-yellow-600 hover:underline text-sm font-medium">
            View all rentals with rent specials
          </a>
        </div>

        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full border hover:bg-gray-100 transition">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full border hover:bg-gray-100 transition">
            <ChevronRight />
          </button>
        </div>
      </motion.div>

      {/* CARDS */}
      <motion.div
  ref={scrollRef}
  variants={containerVariants}
  className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
  style={{
    scrollbarWidth: "none",     // Firefox
    msOverflowStyle: "none",    // IE / Edge
  }}
>

        {listings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          return (
            <motion.div
              key={listing.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="min-w-[280px] md:min-w-[320px] snap-start"
            >
              <Link href={`/listings/${listing.id}`}>
                <div className="bg-white rounded-xl overflow-hidden border hover:shadow-xl transition">
                  <div className="relative group">
                    <motion.img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />

                    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-[10px] px-2 py-1 rounded">
                      {listing.badge}
                    </span>

                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSave(listing.id);
                      }}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isSaved
                            ? "fill-yellow-500 text-yellow-500"
                            : ""
                        }`}
                      />
                    </motion.button>
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase mb-1">{listing.type}</p>
                    <p className="text-xl font-bold">{listing.price}</p>
                    <p className="text-sm my-2">
                      <b>{listing.beds}</b> bed • <b>{listing.baths}</b> bath •{" "}
                      <b>{listing.sqft}</b> sqft
                    </p>
                    <p className="text-sm font-medium">{listing.address}</p>
                    <p className="text-sm">{listing.city}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default RentalConstruction;
