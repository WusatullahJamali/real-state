"use client";
import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";
const RecentSold = () => {
  const [activeView, setActiveView] = useState("list");
  const [filters, setFilters] = useState({
    search: "",
    price: "All",
    rooms: "All",
    type: "All",
  });

  const properties = [
  { id: 1, image: "/sold1.jpg", status: "Sold - Dec 13, 2025", price: 300000, beds: 3, baths: 1, sqft: "1,064", acres: "0.9", address: "1108 Ishaboo St", city: "North Pole, AK 99705", type: "Single-Family Home" },
  { id: 2, image: "/sold2.jpg", status: "Sold - Dec 13, 2025", price: 320000, beds: 3, baths: 2, sqft: "1,168", acres: "0.25", address: "432 E Rempel Ave", city: "Palmer, AK 99645", type: "Single-Family Home" },
  { id: 3, image: "/sold3.jpg", status: "Sold - Dec 13, 2025", price: 275000, beds: 3, baths: 1, sqft: "1,200", acres: null, address: "2221 Muldoon Rd Spc 370", city: "Anchorage, AK 99504", type: "Condo" },
  { id: 4, image: "/sold1.jpg", status: "Sold - Dec 14, 2025", price: 450000, beds: 4, baths: 3, sqft: "1,800", acres: "1.2", address: "2500 Alpine St", city: "Anchorage, AK 99501", type: "Single-Family Home" },
  { id: 5, image: "/sold2.jpg", status: "Sold - Dec 14, 2025", price: 520000, beds: 5, baths: 3, sqft: "2,100", acres: "0.8", address: "123 Birchwood Dr", city: "Palmer, AK 99645", type: "Single-Family Home" },
  { id: 6, image: "/sold3.jpg", status: "Sold - Dec 12, 2025", price: 375000, beds: 3, baths: 2, sqft: "1,500", acres: "0.5", address: "789 Evergreen Ln", city: "North Pole, AK 99705", type: "Townhouse" },
  { id: 7, image: "/sold1.jpg", status: "Sold - Dec 11, 2025", price: 410000, beds: 4, baths: 2, sqft: "1,700", acres: "1.0", address: "456 Spruce St", city: "Anchorage, AK 99504", type: "Single-Family Home" },
  { id: 8, image: "/sold2.jpg", status: "Sold - Dec 10, 2025", price: 290000, beds: 2, baths: 1, sqft: "1,050", acres: "0.3", address: "321 Pine Ave", city: "Palmer, AK 99645", type: "Condo" },
  { id: 9, image: "/sold3.jpg", status: "Sold - Dec 09, 2025", price: 480000, beds: 5, baths: 3, sqft: "2,050", acres: "1.5", address: "987 Cedar Blvd", city: "Anchorage, AK 99501", type: "Single-Family Home" },
  { id: 10, image: "/sold1.jpg", status: "Sold - Dec 08, 2025", price: 350000, beds: 3, baths: 2, sqft: "1,400", acres: "0.4", address: "654 Willow Ln", city: "North Pole, AK 99705", type: "Townhouse" },
  { id: 11, image: "/sold1.jpg", status: "Sold - Dec 07, 2025", price: 265000, beds: 2, baths: 1, sqft: "980", acres: null, address: "222 Aspen Rd", city: "Palmer, AK 99645", type: "Condo" },
  { id: 12, image: "/sold2.jpg", status: "Sold - Dec 06, 2025", price: 530000, beds: 4, baths: 3, sqft: "2,200", acres: "1.3", address: "111 Birch St", city: "Anchorage, AK 99504", type: "Single-Family Home" },
  { id: 13, image: "/sold3.jpg", status: "Sold - Dec 05, 2025", price: 395000, beds: 3, baths: 2, sqft: "1,450", acres: "0.6", address: "789 Willow Creek Dr", city: "North Pole, AK 99705", type: "Townhouse" },
  { id: 14, image: "/sold1.jpg", status: "Sold - Dec 04, 2025", price: 455000, beds: 4, baths: 3, sqft: "1,850", acres: "1.0", address: "456 Oak St", city: "Anchorage, AK 99501", type: "Single-Family Home" },
  { id: 15, image: "/sold2.jpg", status: "Sold - Dec 03, 2025", price: 280000, beds: 2, baths: 1, sqft: "1,000", acres: "0.25", address: "321 Maple Ave", city: "Palmer, AK 99645", type: "Condo" },
  { id: 16, image: "/sold3.jpg", status: "Sold - Dec 02, 2025", price: 600000, beds: 5, baths: 4, sqft: "2,500", acres: "2.0", address: "123 Elm St", city: "Anchorage, AK 99504", type: "Single-Family Home" },
  { id: 17, image: "/sold2.jpg", status: "Sold - Dec 01, 2025", price: 340000, beds: 3, baths: 2, sqft: "1,350", acres: "0.5", address: "987 Birch Ln", city: "North Pole, AK 99705", type: "Townhouse" },
  { id: 18, image: "/sold1.jpg", status: "Sold - Nov 30, 2025", price: 500000, beds: 4, baths: 3, sqft: "2,100", acres: "1.2", address: "456 Pine St", city: "Anchorage, AK 99501", type: "Single-Family Home" },
];



  const priceOptions = ["All", "Under 300k", "300k - 400k", "400k - 500k", "500k+"];
  const roomsOptions = ["All", "1+", "2+", "3+", "4+", "5+"];
  const typeOptions = ["All", "Single-Family Home", "Condo", "Townhouse"];

  // Filter logic
  const filteredProperties = properties.filter((p) => {
    // Search filter
    const matchesSearch =
      p.address.toLowerCase().includes(filters.search.toLowerCase()) ||
      p.city.toLowerCase().includes(filters.search.toLowerCase());

    // Price filter
    let matchesPrice = true;
    if (filters.price !== "All") {
      if (filters.price === "Under 300k") matchesPrice = p.price < 300000;
      if (filters.price === "300k - 400k") matchesPrice = p.price >= 300000 && p.price <= 400000;
      if (filters.price === "400k - 500k") matchesPrice = p.price >= 400000 && p.price <= 500000;
      if (filters.price === "500k+") matchesPrice = p.price > 500000;
    }

    // Rooms filter
    let matchesRooms = true;
    if (filters.rooms !== "All") {
      const minBeds = parseInt(filters.rooms[0]);
      matchesRooms = p.beds >= minBeds;
    }

    // Type filter
    const matchesType = filters.type === "All" || p.type === filters.type;

    return matchesSearch && matchesPrice && matchesRooms && matchesType;
  });

  return (
    <>
    <div className="w-full bg-white">
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Search Bar */}
      <div className="mb-6 flex flex-wrap gap-3 text-black">
        <div className="flex-1 relative min-w-[250px]">
          <input
            type="text"
            placeholder="Search by address or city"
            className="w-full px-6 py-3 pr-12 border-2 text-black border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <button className="px-6 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 font-medium">
          Save search
        </button>

        <button
          onClick={() => setActiveView("list")}
          className={`px-6 py-3 rounded-full font-medium ${
            activeView === "list" ? "bg-gray-200" : "border-2 border-gray-300 hover:bg-gray-50"
          }`}
        >
          List
        </button>

        <button
          onClick={() => setActiveView("map")}
          className={`px-6 py-3 rounded-full font-medium ${
            activeView === "map" ? "bg-gray-200" : "border-2 border-gray-300 hover:bg-gray-50"
          }`}
        >
          Map
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 text-black border-2 border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="font-medium text-black">Filters</span>
        </div>

        <select
          className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          {priceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
          value={filters.rooms}
          onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
        >
          {roomsOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          {typeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <Image
              src={property.image}
              alt={property.address}
              width={200}
              height={200}
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
          </div>
        ))}
        {filteredProperties.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No properties found.
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default RecentSold;
