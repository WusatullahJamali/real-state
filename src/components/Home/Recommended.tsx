"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface Location {
  id: number;
  name: string;
  mapColor: string;
  img: string;
  listings: number;
  medianPrice: string;
}

const RECOMMENDED_LOCATIONS = [
  {
    id: 1,
    name: "Baghdad",
    mapColor: "bg-blue-200", // fallback if no image
    img: "/r1.webp", // add image
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

// --- Map/Image Component ---

interface LocationMapProps {
  name: string;
  mapColor: string;
  img: string;
}

const LocationMap = ({ name, mapColor, img }: LocationMapProps) => (
  <div className={`h-48 w-full relative overflow-hidden border-b border-gray-200`}>
    {img ? (
      <Image
        src={img}
        alt={`${name} map`}
        fill
        className="object-cover"
      />
    ) : (
      <div className={`${mapColor} h-full w-full`} />
    )}

    {/* Map Pin Icon */}
    <MapPin className="h-10 w-10 text-red-600 drop-shadow-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

    {/* Map overlay label */}
    <div className="absolute bottom-2 right-2 text-xs text-gray-700 bg-white bg-opacity-70 px-2 py-1 rounded">
      Map data ©2025
    </div>
  </div>
);

// --- Main Component ---
export default function RecommendedLocations() {
  return (
    <div className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Recommended cities
        </h2>
        <p className="mb-8 text-lg text-gray-600 md:mb-12">
          Based on your previous searches
        </p>

        {/* Grid */}
      

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {RECOMMENDED_LOCATIONS.map((location) => (
    <Link
      key={location.id}
      href={`/CategoriesDATA/${location.id}`}
      className="block"
    >
      <div className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition hover:shadow-2xl hover:scale-[1.02]">
        <LocationMap
          name={location.name}
          mapColor={location.mapColor}
          img={location.img}
        />

        {/* Content */}
        <div className="space-y-2 p-4">
          <h3 className="text-xl font-bold text-gray-700">
            {location.name}
          </h3>

          <p className="text-base text-gray-600">
            <span className="font-semibold text-gray-800">
              {location.listings}
            </span>{" "}
            Listings for sale
          </p>

          <div>
            <p className="text-xl font-extrabold text-yellow-500">
              {location.medianPrice}
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              Median Listing Home Price
            </p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  );
}
