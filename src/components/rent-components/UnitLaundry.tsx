"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const UnitLaundry = () => {
  const listings = [
  {
    id: 1,
    image: "/unit1.webp",
    badge: null,
    type: "Single-Family Home",
    price: "$1,600",
    beds: "3",
    baths: "3",
    sqft: "1,780",
    address: "Italian Village",
    city: "Erbil, Kurdistan Region",
  },
  {
    id: 2,
    image: "/unit2.webp",
    badge: "New units - 23 hours ago",
    type: "Apartment",
    price: "$700 - $950",
    beds: "1 - 2",
    baths: "1 - 1.5",
    sqft: "680 - 912",
    address: "Al-Karrada",
    city: "Baghdad, Iraq",
  },
  {
    id: 3,
    image: "/unit3.webp",
    badge: null,
    type: "Single-Family Home",
    price: "$950",
    beds: "2",
    baths: "1",
    sqft: "760",
    address: "Al-Ghazaliya",
    city: "Baghdad, Iraq",
  },
  {
    id: 4,
    image: "/unit4.webp",
    badge: null,
    type: "Listing for Rent",
    price: "$1,450",
    beds: "3",
    baths: "2",
    sqft: "1,700",
    address: "Al-Yarmouk",
    city: "Baghdad, Iraq",
  },
];


  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-black">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">
          Rentals with in-unit laundry
        </h1>
        <a href="#" className="text-yellow-600 hover:underline text-sm">
          View all rentals with in-unit laundry
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          return (
            <Link
              key={listing.id}
              href={`/listings/${listing.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-48 object-cover"
                  />

                  {listing.badge && (
                    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
                      {listing.badge}
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleSave(listing.id);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        isSaved
                          ? "fill-red-500 text-red-500"
                          : "text-gray-700 hover:text-red-500"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-700">
                      {listing.type}
                    </span>
                  </div>

                  <div className="text-2xl font-bold mb-2">
                    {listing.price}
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">{listing.beds}</span> bed •{" "}
                    <span className="font-semibold">{listing.baths}</span> bath •{" "}
                    <span className="font-semibold">{listing.sqft}</span> sqft
                  </div>

                  <div className="text-sm text-gray-700">
                    <div>{listing.address}</div>
                    <div>{listing.city}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UnitLaundry;
