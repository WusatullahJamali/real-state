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
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((l) => (
          <div
            key={l.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-44">
              <Image
                src={l.image}
                alt={l.address}
                fill
                className="object-cover"
              />

              <button
                onClick={() => toggleFavorite(l.id)}
                className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow"
              >
                <Heart
                  className={`w-4 h-4 ${
                    favorites.includes(l.id)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">
                ${l.price.toLocaleString()}
              </h3>

              <div className="flex items-center gap-1 text-xs mb-3">
                <MapPin className="w-3 h-3 text-yellow-600" />
                {l.address}, {l.city}
              </div>

              <div className="flex justify-between py-2 border-y mb-3 text-xs font-bold">
                <span className="flex gap-1">
                  <Bed className="w-3 h-3 text-yellow-600" /> {l.beds}
                </span>
                <span className="flex gap-1">
                  <Bath className="w-3 h-3 text-yellow-600" /> {l.baths}
                </span>
                <span className="flex gap-1">
                  <Maximize className="w-3 h-3 text-yellow-600" /> {l.sqft}
                </span>
              </div>

              <Link href={`/new-construction/${l.id}`}>
                <button className="w-full bg-gray-800 text-white text-xs font-bold py-2 rounded-lg hover:bg-yellow-600 transition uppercase">
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
