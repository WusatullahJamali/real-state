"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { RentListing } from "./RentData";

interface Props {
  title: string;
  subtitle?: string;
  listings: RentListing[];
  linkHref?: string;
}

const ListingGrid = ({ title, subtitle, listings, linkHref }: Props) => {
  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-black">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">{title}</h1>
        {subtitle && linkHref && (
          <Link
            href={linkHref}
            className="text-yellow-600 hover:underline text-sm"
          >
            {subtitle}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          return (
            <Link
              key={listing.id}
              href={`/rent/${listing.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg">
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

                  {listing.special && (
                    <span className="absolute top-10 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                      {listing.special}
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(listing.id);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-2"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isSaved
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-gray-700"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-1">
                    {listing.type}
                  </div>

                  <div className="text-2xl font-bold mb-2">
                    {listing.price}
                  </div>

                  <div className="text-sm text-gray-600 mb-2">
                    {listing.beds} bed • {listing.baths} bath
                    {listing.sqft && ` • ${listing.sqft} sqft`}
                  </div>

                  <div className="text-sm">
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

export default ListingGrid;
