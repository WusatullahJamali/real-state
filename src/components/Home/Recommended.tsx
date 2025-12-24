"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Added for animations

// --- Types ---
interface Location {
  id: number;
  name: string;
  mapColor: string;
  img: string;
  listings: number;
  medianPrice: string;
}

interface LocationMapProps {
  name: string;
  mapColor: string;
  img: string;
}

// --- Mock Data ---
const RECOMMENDED_LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Baghdad",
    mapColor: "bg-blue-200",
    img: "/r1.webp",
    listings: 850,
    medianPrice: "$455,000",
  },
  {
    id: 2,
    name: "Mosul",
    mapColor: "bg-green-100",
    img: "/r2.jpg",
    listings: 312,
    medianPrice: "$1,200,000",
  },
  {
    id: 3,
    name: "Erbil",
    mapColor: "bg-teal-200",
    img: "/r3.webp",
    listings: 198,
    medianPrice: "$710,500",
  },
  {
    id: 4,
    name: "Basrah",
    mapColor: "bg-gray-200",
    img: "/r4.webp",
    listings: 405,
    medianPrice: "$595,000",
  },
];

// --- Map / Image Component ---
const LocationMap: React.FC<LocationMapProps> = ({ name, mapColor, img }) => (
  <div className="relative h-48 w-full overflow-hidden border-b border-gray-200">
    {img ? (
      <Image src={img} alt={`${name} map`} fill className="object-cover" />
    ) : (
      <div className={`${mapColor} h-full w-full`} />
    )}

    {/* Map Pin with Pulse Animation */}
    <motion.div
      animate={{ 
        y: [0, -5, 0],
        filter: ["drop-shadow(0px 2px 2px rgba(0,0,0,0.2))", "drop-shadow(0px 8px 4px rgba(0,0,0,0.4))", "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))"]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <MapPin className="h-10 w-10 text-red-600" />
    </motion.div>

    {/* Overlay label */}
    <div className="absolute bottom-2 right-2 rounded bg-white/70 px-2 py-1 text-xs text-gray-700 backdrop-blur-sm">
      Map data ©2025
    </div>
  </div>
);

// --- Main Component ---
export default function RecommendedLocations() {
  return (
    <div className="bg-white py-10 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Group Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Recommended cities
          </h2>
          <p className="mb-8 text-lg text-gray-600 md:mb-12">
            Based on your previous searches
          </p>
        </motion.div>

        {/* Grid with Staggered Children */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {RECOMMENDED_LOCATIONS.map((location) => (
            <motion.div
              key={location.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Link
                href={`/CategoriesDATA/${location.id}`}
                className="block group"
              >
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                  <LocationMap
                    name={location.name}
                    mapColor={location.mapColor}
                    img={location.img}
                  />

                  {/* Content */}
                  <div className="space-y-2 p-4">
                    <h3 className="text-xl font-bold text-gray-700 transition-colors group-hover:text-yellow-600">
                      {location.name}
                    </h3>

                    <p className="text-base text-gray-600">
                      <span className="font-semibold text-gray-800">
                        {location.listings}
                      </span>{" "}
                      Listings for sale
                    </p>

                    <div className="pt-2">
                      <p className="text-xl font-extrabold text-yellow-500">
                        {location.medianPrice}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Median Listing Price
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}