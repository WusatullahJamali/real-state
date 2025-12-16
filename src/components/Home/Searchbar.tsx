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
    alert(
      `Searching for: ${activeTab.toUpperCase()} in ${searchData.location}...`
    );
  };

  return (
    <div
      className="
        bg-gray-100 
        rounded-2xl sm:rounded-[20px] 
        p-3 sm:p-5 
        w-full max-w-4xl 
        shadow-lg
      "
    >
      {/* Tabs */}
      <div className="flex gap-2 sm:gap-5 mb-3 flex-wrap justify-center sm:justify-start">
        {["Buy", "Rent", "Sell", "Services"].map((tab) => {
          const tabLower = tab.toLowerCase();
          const isActive = activeTab === tabLower;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabLower)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 
                          text-xs sm:text-sm 
                          font-medium rounded-xl transition-all ${
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

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="
          flex flex-col sm:flex-row 
          items-stretch sm:items-end 
          gap-3 sm:gap-4 
          bg-white rounded-xl 
          p-3 sm:p-4 
          shadow-md
        "
      >
        <input type="hidden" name="transaction_type" value={activeTab} />

       {/* Location */}
<div className="flex flex-col flex-1">
  <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
    Location
  </label>
  <input
    type="text"
    name="location"
    placeholder="Baghdad, Erbil, Basra..."
    className="
      w-full rounded-md border border-gray-300
      px-3 py-1.75
      text-xs sm:text-sm text-black
      bg-white
      focus:outline-none focus:ring-1 focus:ring-yellow-500
    "
    required
  />
</div>

{/* Property Type */}
<div className="flex flex-col flex-1">
  <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
    Property Type
  </label>
  <select
    name="property-type"
    className="
      w-full rounded-md border border-gray-300
      px-3 py-2
      text-xs sm:text-sm text-black
      bg-white
      focus:outline-none focus:ring-1 focus:ring-yellow-500
    "
  >
    {propertyTypes.map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
</div>

{/* Price Range */}
<div className="flex flex-col flex-1">
  <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
    Price Range
  </label>
  <select
    name="price-range"
    className="
      w-full rounded-md border border-gray-300
      px-3 py-2
      text-xs sm:text-sm text-black
      bg-white
      focus:outline-none focus:ring-1 focus:ring-yellow-500
    "
  >
    {priceRanges.map((range) => (
      <option key={range} value={range}>
        {range}
      </option>
    ))}
  </select>
</div>

        {/* Search Button */}
        <button
          type="submit"
          className="
            w-full sm:w-auto
            flex items-center justify-center gap-1 
            bg-yellow-500 text-black font-semibold 
            text-xs sm:text-sm 
            px-4 py-2 
            rounded-md 
            hover:bg-yellow-600 transition shadow-sm
          "
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
