"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const NewListings = () => {
  const listings = [
    {
      id: 1,
      image: "/new1.webp",
      badge: "New units - 10 hours ago",
      type: "Single-Family Home",
      price: "$3,000",
      beds: 4,
      baths: 2,
      sqft: "1,754",
      address: "5710 Cope St",
      city: "Anchorage, AK 99518",
    },
    {
      id: 2,
      image: "/new2.webp",
      badge: "New units - 10 hours ago",
      type: "Apartment",
      price: "$1,285 - $1,555",
      beds: "Studio - 2",
      baths: 1,
      sqft: null,
      address: "5215 Mockingbird Dr",
      city: "Anchorage, AK 99507",
    },
    {
      id: 3,
      image: "/new4.jpg",
      badge: "New units - 10 hours ago",
      type: "Apartment",
      price: "$1,500",
      beds: 2,
      baths: 1,
      sqft: null,
      address: "1446 Turner St",
      city: "Fairbanks, AK 99701",
    },
    {
      id: 4,
      image: "/new3.webp",
      badge: "New units - 22 hours ago",
      type: "Apartment",
      price: "$1,475",
      beds: 2,
      baths: 1,
      sqft: "1,150",
      address: "1303 W 23rd Ave",
      city: "Anchorage, AK 99503",
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
        <h1 className="text-3xl font-bold mb-1">Newest listings</h1>
        <a href="#" className="text-yellow-600 hover:underline text-sm">
          View all
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

                  {/* Heart */}
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

export default NewListings;
