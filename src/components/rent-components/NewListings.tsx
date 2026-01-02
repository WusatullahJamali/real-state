"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { newListings } from "./RentData";

const NewListings = () => {
  const listings = [
    {
      id: 1,
      image: "/a1.jpg",
      badge: "New units - 10 hours ago",
      type: "Single-Family Home",
      price: "$1,800",
      beds: 4,
      baths: 2,
      sqft: "1,750",
      address: "Al-Yarmouk District",
      city: "Baghdad, Iraq",
    },
    {
      id: 2,
      image: "/a2.jpg",
      badge: "New units - 10 hours ago",
      type: "Apartment",
      price: "$650 - $850",
      beds: "Studio - 2",
      baths: 1,
      sqft: null,
      address: "Dream City",
      city: "Erbil, Kurdistan Region",
    },
    {
      id: 3,
      image: "/a3.jpg",
      badge: "New units - 10 hours ago",
      type: "Apartment",
      price: "$750",
      beds: 2,
      baths: 1,
      sqft: null,
      address: "Al-Ashar",
      city: "Basra, Iraq",
    },
    {
      id: 4,
      image: "/a4.jpg",
      badge: "New units - 22 hours ago",
      type: "Apartment",
      price: "$700",
      beds: 2,
      baths: 1,
      sqft: "1,150",
      address: "Al-Mansour",
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
      <h1 className="text-3xl font-bold mb-6">Newest listings Iraq</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newListings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          return (
            <Link
              key={listing.id}
              href={`/listings/${listing.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                {/* IMAGE */}
                <div className="relative w-full h-48">
                  <Image
                    src={listing.image}
                    alt={listing.address}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    priority={listing.id === 1}
                  />

                  {listing.badge && (
                    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
                      {listing.badge}
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(listing.id);
                    }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full"
                  >
                    <Heart
                      className={
                        isSaved
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }
                    />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <div className="font-bold text-xl">{listing.price}</div>
                  <div className="text-sm text-gray-600">
                    {listing.beds} bed • {listing.baths} bath
                    {listing.sqft && ` • ${listing.sqft} sqft`}
                  </div>
                  <div className="mt-2 text-sm">
                    {listing.address}
                    <br />
                    {listing.city}
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

export default NewListings;
