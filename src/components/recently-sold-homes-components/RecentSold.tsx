"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, SlidersHorizontal, ChevronDown, Home, MapPin, X, Bed } from "lucide-react";
import { properties } from "./RecentSoldData";

const RecentSold = () => {
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
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
    <div className="w-full bg-[#FBFCFD] min-h-screen text-black">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        
        {/* --- PROFESSIONAL RESPONSIVE HEADER START --- */}
        <div className="mb-8 md:mb-12 space-y-6">
          
          {/* Navigation & Title Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <button
                onClick={() => router.push("/")}
                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-yellow-600 transition-colors"
              >
                <Home className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Return Home
              </button>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none">
                Recently <span className="text-yellow-500">Sold</span>
              </h1>
            </div>
            
            {/* Results Badge (Hidden on very small screens, shown on md) */}
            <div className="hidden md:block bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-[10px] font-black text-black uppercase tracking-widest block mb-1">Live Market Data</span>
              <p className="text-lg font-bold text-black leading-none">{filteredProperties.length} Properties Found</p>
            </div>
          </div>

          {/* Unified Responsive Filter Capsule */}
          <div className="bg-white p-2 md:p-3 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-2">
              
              {/* Search Field */}
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Address, City, or Zip..."
                  className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-[1.8rem] text-sm font-bold placeholder:text-gray-700 focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>

              {/* Mobile Filter Toggle Button */}
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-[1.8rem] font-bold text-sm"
              >
                {isFilterOpen ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
                {isFilterOpen ? "Close Filters" : "Refine Search"}
              </button>

              {/* Desktop Filters / Mobile Collapsible Filters */}
              <div className={`${isFilterOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto mt-2 lg:mt-0`}>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-[1.8rem]">
                  
                  {/* Custom Dropdown Styling */}
                  {[
                    { val: filters.price, key: 'price', opts: priceOptions, label: 'Price' },
                    { val: filters.rooms, key: 'rooms', opts: roomsOptions, label: 'Beds' },
                    { val: filters.type, key: 'type', opts: typeOptions, label: 'Type' }
                  ].map((select, idx) => (
                    <div key={select.key} className="relative w-full sm:w-auto min-w-[140px]">
                      <select
                        className="w-full appearance-none bg-white lg:bg-gray-50 pl-4 pr-10 py-3 rounded-xl border border-gray-200 lg:border-none text-[10px] font-black uppercase tracking-widest cursor-pointer outline-none text-black"
                        value={select.val}
                        onChange={(e) => setFilters({ ...filters, [select.key]: e.target.value })}
                      >
                        {select.opts.map((o) => (
                          <option key={o} value={o}>{o === 'All' ? select.label : o}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Desktop Advanced Icon */}
                <button className="hidden lg:flex bg-black text-white p-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all shadow-lg shadow-black/10">
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
        {/* --- PROFESSIONAL RESPONSIVE HEADER END --- */}

        {/* PROPERTY GRID (Fully Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white text-black rounded-[1.5rem] overflow-hidden border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700"
            >
              {/* Image with Zoom effect */}
              <div className="relative h-60 md:h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.address}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5">
                   <span className="bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                    {property.status}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="text-3xl font-black mb-4 text-black tracking-tighter">
                  ${property.price.toLocaleString()}
                </div>

                {/* Specs Row */}
                <div className="flex items-center gap-4 text-[10px] font-black text-black mb-6 border-b border-gray-50 pb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
                  <div className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5 text-yellow-500" /> {property.beds} BEDS</div>
                  <div className="flex items-center gap-1.5 font-light text-black">|</div>
                  <div className="flex items-center gap-1.5"><span className="text-yellow-500">◈</span> {property.baths} BATHS</div>
                  <div className="flex items-center gap-1.5 font-light text-black">|</div>
                  <div className="flex items-center gap-1.5 uppercase tracking-tighter">{property.sqft} SQFT</div>
                </div>

                {/* Address Section */}
                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 p-2.5 rounded-xl transition-colors group-hover:bg-yellow-500">
                    <MapPin className="w-4 h-4 text-black group-hover:text-black transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-sm uppercase tracking-tight text-black truncate">{property.address}</div>
                    <div className="text-[10px] font-bold text-black uppercase tracking-widest">{property.city}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 px-6 bg-white rounded-[2.5rem] border border-dashed border-gray-200 max-w-2xl mx-auto">
            <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-black uppercase tracking-tight text-black">No properties found</h3>
            <p className="text-sm text-black font-medium mb-6">Adjust your filters or search terms to find what you're looking for.</p>
            <button 
              onClick={() => setFilters({search: "", price: "All", rooms: "All", type: "All"})}
              className="bg-black text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentSold;