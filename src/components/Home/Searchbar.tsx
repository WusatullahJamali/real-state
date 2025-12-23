"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const propertyTypes = ["All Types", "Apartment", "House", "Land", "Office"];
const priceRanges = ["Any Price", "$0 - $100k", "$100k - $300k", "$300k+"];

const SearchBar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const query = new URLSearchParams({
      transaction: activeTab,
      location: formData.get("location")?.toString() || "",
      type: formData.get("property-type")?.toString() || "",
      price: formData.get("price-range")?.toString() || "",
    }).toString();

    router.push(`/search?${query}`);
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto shadow-lg">
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
        {["Buy", "Rent", "Sell", "Services"].map((tab) => {
          const value = tab.toLowerCase();
          const isActive = activeTab === value;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(value)}
              className={`px-4 py-2 text-sm rounded-xl font-medium transition-all
                ${isActive
                  ? "bg-yellow-500 text-white"
                  : "bg-white hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl p-4 shadow-md"
      >
        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Location</label>
          <input
            name="location"
            placeholder="Baghdad, Erbil, Basra..."
            className="rounded-md border px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Property Type</label>
          <select
            name="property-type"
            className="rounded-md border px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500"
          >
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Price Range</label>
          <select
            name="price-range"
            className="rounded-md border px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500"
          >
            {priceRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
            bg-yellow-500 hover:bg-yellow-600 text-white
            px-5 py-2 rounded-lg font-semibold transition-all"
          >
            <Search size={18} />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
