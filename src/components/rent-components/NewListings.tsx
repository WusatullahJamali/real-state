"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { newListings } from "./RentData";

const NewListings = () => {
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
            <Link key={listing.id} href={`/rent/${listing.id}`}>
              <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg">
                <div className="relative">
                  <img
                    src={listing.image}
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
