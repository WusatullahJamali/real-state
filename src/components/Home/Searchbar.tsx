"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const propertyTypes = ["All Types", "Apartment", "House", "Land", "Office"];
const priceRanges = ["Any Price", "$0 - $100k", "$100k - $300k", "$300k+"];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("buy");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchData = {
      tab: activeTab,
      location: formData.get("location"),
      propertyType: formData.get("property-type"),
      priceRange: formData.get("price-range"),
    };

    console.log("Searching with data:", searchData);
    alert(`Searching for: ${activeTab.toUpperCase()} in ${searchData.location}`);
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 w-full max-w-4xl shadow-lg">
      
      {/* Tabs */}
      <div className="flex gap-2 sm:gap-5 mb-4 flex-wrap">
        {["Buy", "Rent", "Sell", "Services"].map((tab) => {
          const tabLower = tab.toLowerCase();
          const isActive = activeTab === tabLower;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tabLower)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black hover:bg-gray-200"
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
        className="flex flex-col sm:flex-row items-end gap-4 bg-white rounded-xl p-4 shadow-md"
      >
        <input type="hidden" name="transaction_type" value={activeTab} />

        {/* Location */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-800 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Baghdad, Erbil, Basra..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            required
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-800 mb-1">
            Property Type
          </label>
          <select
            name="property-type"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500 focus:outline-none"
          >
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold text-gray-800 mb-1">
            Price Range
          </label>
          <select
            name="price-range"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500 focus:outline-none"
          >
            {priceRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Submit Button  */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold transition-all"
        >
          <Search size={18} />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
