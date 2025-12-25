"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { listings } from "./ConstructionData";

type Props = {
  searchTerm?: string;
  priceRange?: string;
  rooms?: string;
};

export default function Construction({
  searchTerm = "",
  priceRange = "all",
  rooms = "all",
}: Props) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredListings = listings.filter((l) => {
    const matchesSearch =
      l.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "0-100000" && l.price < 100000) ||
      (priceRange === "100000-250000" && l.price >= 100000 && l.price <= 250000) ||
      (priceRange === "250000-500000" && l.price >= 250000 && l.price <= 500000) ||
      (priceRange === "500000+" && l.price >= 500000);

    const matchesRooms = rooms === "all" || l.beds >= Number(rooms);

    return matchesSearch && matchesPrice && matchesRooms;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white py-12 text-black">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((l) => (
          <div
            key={l.id}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden
                       shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={l.image}
                alt={l.address}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

              {/* FAVORITE */}
              <button
                onClick={() => toggleFavorite(l.id)}
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-md
                           w-8 h-8 rounded-full flex items-center justify-center
                           shadow-md hover:scale-105 transition"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    favorites.includes(l.id)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-3 space-y-2">
              {/* PRICE */}
              <h3 className="text-lg font-extrabold tracking-tight">
                ${l.price.toLocaleString()}
              </h3>

              {/* LOCATION */}
              <div className="flex items-start gap-1.5 text-xs text-gray-600 leading-snug">
                <MapPin className="w-3.5 h-3.5 text-yellow-500 mt-0.5" />
                <span>
                  {l.address},{" "}
                  <span className="font-medium text-black">{l.city}</span>
                </span>
              </div>

              {/* STATS */}
              <div className="flex justify-between py-2 px-1 rounded-lg bg-gray-50
                              border border-gray-100 text-[11px] font-semibold">
                <span className="flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-yellow-600" />
                  {l.beds} Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-3.5 h-3.5 text-yellow-600" />
                  {l.baths} Baths
                </span>
                <span className="flex items-center gap-1">
                  <Maximize className="w-3.5 h-3.5 text-yellow-600" />
                  {l.sqft} sqft
                </span>
              </div>

              {/* CTA */}
              <Link href={`/new-construction/${l.id}`}>
                <button
                  className="w-full mt-2 bg-black text-white text-[11px]
                             font-bold py-2 rounded-lg uppercase tracking-wider
                             hover:bg-yellow-500 hover:text-black
                             transition-all duration-300"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
