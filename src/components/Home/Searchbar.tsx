
"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const SearchBar = () => {
  const t = useTranslations("home.searchBar");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const propertyTypes = t.raw("propertyType.options") as string[];
  const priceRanges = t.raw("priceRange.options") as string[];
  const tabs = t.raw("tabs") as string[];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const query = new URLSearchParams({
      transaction: activeTab,
      location: formData.get("location")?.toString() || "",
      type: formData.get("property-type")?.toString() || "",
      price: formData.get("price-range")?.toString() || ""
    }).toString();

    router.push(`/search?${query}`);
  };

  return (
    <div className="bg-gray-100 rounded-2xl sm:rounded-[20px] p-3 sm:p-5 w-full max-w-4xl shadow-lg">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
        {tabs.map((tab) => {
          const value = tab.toLowerCase();
          const isActive = activeTab === value;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(value)}
              className={`px-4 py-2 text-sm rounded-xl font-medium transition-all
                ${
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
        className="grid grid-cols- text-black sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl p-4 shadow-md"
      >
        <input type="hidden" name="transaction_type" value={activeTab} />

        {/* Location */}
        <div className="flex flex-col flex-1">
          <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
            {t("location.label")}
          </label>
          <input
            type="text"
            name="location"
            placeholder={t("location.placeholder")}
            className="w-full rounded-md border border-gray-300 px-3 py-1.75 text-xs sm:text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col flex-1">
          <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
            {t("propertyType.label")}
          </label>
          <select
            name="property-type"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs sm:text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
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
            {t("priceRange.label")}
          </label>
          <select
            name="price-range"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs sm:text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold transition-all"
          >
            <Search size={18} />
            {t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
