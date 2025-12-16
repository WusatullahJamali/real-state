"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

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
const LocationMap: React.FC<LocationMapProps> = ({
  name,
  mapColor,
  img,
}) => (
  <div className="relative h-48 w-full overflow-hidden border-b border-gray-200">
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

    {/* Map Pin */}
    <MapPin className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-red-600 drop-shadow-md" />

    {/* Overlay label */}
    <div className="absolute bottom-2 right-2 rounded bg-white/70 px-2 py-1 text-xs text-gray-700">
      Map data ©2025
    </div>
  </div>
);

// --- Main Component ---
export default function RecommendedLocations() {
  return (
    <div className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Recommended cities
        </h2>
        <p className="mb-8 text-lg text-gray-600 md:mb-12">
          Based on your previous search
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RECOMMENDED_LOCATIONS.map((location) => (
            <div
              key={location.id}
              className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition hover:shadow-2xl"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}
