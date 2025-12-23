"use client";
import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { properties, priceOptions, roomsOptions, typeOptions } from "./RecentSoldData";

const RecentSold = () => {
  const [activeView, setActiveView] = useState("list");
  const [filters, setFilters] = useState({
    search: "",
    price: "All",
    rooms: "All",
    type: "All",
  });

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.address.toLowerCase().includes(filters.search.toLowerCase()) ||
      p.city.toLowerCase().includes(filters.search.toLowerCase());

    let matchesPrice = true;
    if (filters.price !== "All") {
      if (filters.price === "Under 150k") matchesPrice = p.price < 150000;
      if (filters.price === "150k - 250k") matchesPrice = p.price >= 150000 && p.price <= 250000;
      if (filters.price === "250k - 350k") matchesPrice = p.price >= 250000 && p.price <= 350000;
      if (filters.price === "350k+") matchesPrice = p.price > 350000;
    }

    let matchesRooms = true;
    if (filters.rooms !== "All") {
      const minBeds = parseInt(filters.rooms[0]);
      matchesRooms = p.beds >= minBeds;
    }

    const matchesType = filters.type === "All" || p.type === filters.type;

    return matchesSearch && matchesPrice && matchesRooms && matchesType;
  });

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto p-6 bg-white">
        {/* Search Bar */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="flex-1 relative min-w-[250px]">
            <input
              type="text"
              placeholder="Search by address or city"
              className="w-full px-6 py-3 pr-12 border-2 border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button className="px-6 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 font-medium transition">
            Save search
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">Filters</span>
          </div>

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            {priceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition"
            value={filters.rooms}
            onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
          >
            {roomsOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            {typeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white border border-gray-500 rounded-lg overflow-hidden hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">{property.status}</span>
                  </div>

                  <div className="text-2xl font-bold mb-3">${property.price.toLocaleString()}</div>

                  <div className="text-sm text-gray-700 mb-3">
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

                  <div className="text-sm text-gray-700">
                    <div className="font-medium">{property.address}</div>
                    <div>{property.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No properties found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSold;
