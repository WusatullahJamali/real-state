"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  MapPin,
  X,
  Bed,
} from "lucide-react";
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
    if (filters.price === "150k - 250k")
      matchesPrice = p.price >= 150000 && p.price <= 250000;
    if (filters.price === "250k - 350k")
      matchesPrice = p.price >= 250000 && p.price <= 350000;
    if (filters.price === "350k+") matchesPrice = p.price > 350000;

    let matchesRooms = true;
    if (filters.rooms !== "All") {
      matchesRooms = p.beds >= Number(filters.rooms.replace("+", ""));
    }

    const matchesType = filters.type === "All" || p.type === filters.type;

    return matchesSearch && matchesPrice && matchesRooms && matchesType;
  });

  return (
    <div className="w-full bg-[#FBFCFD] min-h-screen font-sans text-black">
      <div className="max-w-7xl mx-auto p-4 md:p-6">

        {/* HEADER */}
        <div className="mb-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            Recently <span className="text-yellow-500">Sold</span>
          </h1>

          {/* FILTER BAR */}
          <div className="bg-white p-3 rounded-[2rem] shadow border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-3 items-center">

              {/* SEARCH */}
              <div className="relative ">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                <input
                  type="text"
                  placeholder="Search by address or city..."
                  className="w-full pl-14 pr-5 py-4 rounded-[1.5rem] bg-gray-50 text-sm font-semibold outline-none focus:ring-2 focus:ring-yellow-500"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>

              {/* MOBILE FILTER BUTTON */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-[1.5rem] font-bold text-sm"
              >
                {isFilterOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
                {isFilterOpen ? "Close Filters" : "Filters"}
              </button>

              {/* FILTERS */}
              <div
                className={`${
                  isFilterOpen ? "flex" : "hidden"
                } lg:flex flex-wrap gap-2 w-full lg:w-auto`}
              >
                {[ 
                  { key: "price", label: "Price", options: priceOptions },
                  { key: "rooms", label: "Beds", options: roomsOptions },
                  { key: "type", label: "Type", options: typeOptions },
                ].map((f) => (
                  <div key={f.key} className="relative min-w-[140px]">
                    <select
                      value={filters[f.key as keyof typeof filters]}
                      onChange={(e) =>
                        setFilters({ ...filters, [f.key]: e.target.value })
                      }
                      className="appearance-none w-full bg-gray-50 py-3 pl-4 pr-10 rounded-xl text-[11px] font-bold uppercase tracking-widest outline-none"
                    >
                      {f.options.map((o) => (
                        <option key={o} value={o}>
                          {o === "All" ? f.label : o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => router.push(`/recently-sold-homes/${property.id}`)}
              className="group cursor-pointer bg-white rounded-[1.5rem] overflow-hidden border border-gray-100
              transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <div className="relative h-60 md:h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.address}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <span className="absolute top-5 left-5 bg-white/90 px-4 py-2 rounded-xl text-[9px] font-bold tracking-widest uppercase">
                  {property.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="text-3xl font-extrabold tracking-tight">
                  ${property.price.toLocaleString()}
                </div>

                <div className="flex items-center gap-4 text-[11px] font-semibold border-b pb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-yellow-500" /> {property.beds} Beds
                  </div>
                  <span>|</span>
                  <div>{property.baths} Baths</div>
                  <span>|</span>
                  <div>{property.sqft} Sqft</div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 p-2.5 rounded-xl group-hover:bg-yellow-500 transition">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm uppercase truncate">
                      {property.address}
                    </p>
                    <p className="text-[11px] tracking-widest font-semibold uppercase text-gray-600">
                      {property.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl">
            <Search className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-lg font-bold uppercase">No properties found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentSold;
