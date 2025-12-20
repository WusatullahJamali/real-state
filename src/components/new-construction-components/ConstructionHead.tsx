"use client";

import React from "react";
import { Search, X } from "lucide-react";

type Props = {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  priceRange: string;
  setPriceRange: (v: string) => void;
  rooms: string;
  setRooms: (v: string) => void;
};

const ConstructionHead = ({
  searchTerm,
  setSearchTerm,
  priceRange,
  setPriceRange,
  rooms,
  setRooms,
}: Props) => {
  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange("all");
    setRooms("all");
  };

  const hasFilters =
    searchTerm !== "" || priceRange !== "all" || rooms !== "all";

  return (
    <div className="bg-white backdrop-blur text-black ">
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-5">
        
        {/* PAGE HEADING */}
        <div className="max-w-7xl mt-6">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-yellow-100 text-yellow-700 uppercase">
            Iraq Real Estate
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover premium properties across{" "}
            <span className="text-yellow-600">Iraq</span>
          </h2>
        </div>

        {/* ONE LINE MODERN FILTER BAR */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center mt-8">

          {/* SEARCH */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search city or address..."
              className="w-full pl-14 pr-5 py-3.5 rounded-full border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
            />
          </div>

          {/* PRICE */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full sm:w-auto min-w-[120px] lg:w-auto px-5 py-3.5 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          >
            <option value="all">Any Price</option>
            <option value="0-100000">Below $100k</option>
            <option value="100000-250000">$100k – $250k</option>
            <option value="250000-500000">$250k – $500k</option>
            <option value="500000+">$500k+</option>
          </select>

          {/* ROOMS */}
          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full lg:w-auto sm:w-auto px-5 py-3.5 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          >
            <option value="all">Any Rooms</option>
            <option value="2">2+ Rooms</option>
            <option value="3">3+ Rooms</option>
            <option value="4">4+ Rooms</option>
            <option value="5">5+ Rooms</option>
          </select>          
          
          {/* CLEAR FILTERS */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="w-full lg:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-gray-300 bg-white text-sm font-medium text-black hover:bg-gray-100 transition whitespace-nowrap"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionHead;
