"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, SlidersHorizontal } from "lucide-react";
import { properties } from "./RecentSoldData";

import { div } from "framer-motion/client";
const RecentSold = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState("list");
  const [filters, setFilters] = useState({
    search: "",
    price: "All",
    rooms: "All",
    type: "All",
  });

  const priceOptions = ["All", "Under 150k", "150k - 250k", "250k - 350k", "350k+"];
  const roomsOptions = ["All", "1+", "2+", "3+", "4+", "5+"];
  const typeOptions = ["All", "Single-Family Home", "Condo", "Townhouse"];

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.address.toLowerCase().includes(filters.search.toLowerCase()) ||
      p.city.toLowerCase().includes(filters.search.toLowerCase());

    let matchesPrice = true;
    if (filters.price === "Under 150k") matchesPrice = p.price < 150000;
    if (filters.price === "150k - 250k") matchesPrice = p.price >= 150000 && p.price <= 250000;
    if (filters.price === "250k - 350k") matchesPrice = p.price >= 250000 && p.price <= 350000;
    if (filters.price === "350k+") matchesPrice = p.price > 350000;

    let matchesRooms = true;
    if (filters.rooms !== "All") {
      matchesRooms = p.beds >= Number(filters.rooms.replace("+", ""));
    }

    const matchesType = filters.type === "All" || p.type === filters.type;

    return matchesSearch && matchesPrice && matchesRooms && matchesType;
  });

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto p-6 bg-white">

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => router.push("/")}
            className="bg-yellow-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            ← Home
          </button>
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="flex-1 relative min-w-[250px]">
            <input
              type="text"
              placeholder="Search by address or city"
              className="w-full px-6 py-3 pr-12 border-2 border-gray-300 rounded-full"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
         

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            {priceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full"
            value={filters.rooms}
            onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
          >
            {roomsOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            {typeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* OLD CARD GRID (UNCHANGED DESIGN) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={property.image}
                alt={property.address}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                {/* Status */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm text-black">{property.status}</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold mb-3">
                  ${property.price.toLocaleString()}
                </div>

                {/* Details */}
                <div className="text-sm text-black mb-3">
                  <span className="font-semibold">{property.beds}</span> bed •{" "}
                  <span className="font-semibold">{property.baths}</span> bath •{" "}
                  <span className="font-semibold">{property.sqft}</span> sqft
                  {property.acres && (
                    <>
                      {" • "}
                      <span className="font-semibold">{property.acres}</span> acre lot
                    </>
                  )}
                </div>

                {/* Address */}
                <div className="text-sm text-black">
                  <div className="font-medium">{property.address}</div>
                  <div>{property.city}</div>
                </div>
              </div>
            </div>
          ))}

          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center text-black py-10">
              No properties found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSold;
