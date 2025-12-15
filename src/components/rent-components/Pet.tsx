"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const Pet = () => {
  const listings = [
    {
      id: 1,
      image: "/alaska2.webp",
      badge: "Pet-friendly",
      type: "Apartment",
      price: "$758",
      beds: "2",
      baths: 1,
      sqft: null,
      address: "1140 Cousy Loop",
      city: "Anchorage, AK 99504",
    },
    {
      id: 2,
      image: "/pet1.webp",
      badge: "Pet-friendly",
      type: "Apartment",
      price: "$1,285 - $1,305",
      beds: "1",
      baths: 1,
      sqft: "720",
      address: "631 E 22nd Ave",
      city: "Anchorage, AK 99503",
    },
    {
      id: 3,
      image: "/pet2.webp",
      badge: "Pet-friendly",
      type: "Apartment",
      price: "$1,600",
      beds: "2",
      baths: 1,
      sqft: "1,000",
      address: "3397 Bellwood St",
      city: "North Pole, AK 99705",
    },
    {
      id: 4,
      image: "/pet3.webp",
      badge: "Pet-friendly",
      type: "Apartment",
      price: "$1,495",
      beds: "2",
      baths: 1,
      sqft: "900",
      address: "303 E 15th Ave",
      city: "Anchorage, AK 99501",
    },
  ];

  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Pet-friendly rentals</h1>
        <a href="#" className="text-yellow-600 hover:underline text-sm">
          View all pet-friendly rentals
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

                  <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
                    {listing.badge}
                  </span>

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
                    <span className="font-semibold">{listing.baths}</span> bath
                    {listing.sqft && (
                      <>
                        {" "}
                        •{" "}
                        <span className="font-semibold">
                          {listing.sqft}
                        </span>{" "}
                        sqft
                      </>
                    )}
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

export default Pet;
