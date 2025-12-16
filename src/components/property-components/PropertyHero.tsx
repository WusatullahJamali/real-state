"use client";

import React, { useState, useMemo, useRef } from "react";
import { Search, MapPin, DollarSign, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// --- Updated Static Data (Including Provinces and more cities) ---
const IRAQ_LOCATIONS = [
  "Baghdad Governorate",
  "Basra Governorate",
  "Mosul Governorate",
  "Erbil Governorate",
  "Suleimaniya Governorate",
  "Kirkuk Governorate",
  "Najaf Governorate",
  "Karbala Governorate",
  "Diyala Governorate",
  "Amara City",
  "Duhok City",
  "Ramadi City",
];

// --- Static Data for Aesthetic Price Options ---
const PRICE_OPTIONS = [
  { label: "Any Price", value: "" },
  { label: "Up to $100,000", value: "100000" },
  { label: "Up to $250,000", value: "250000" },
  { label: "Up to $500,000", value: "500000" },
  { label: "Up to $1,000,000", value: "1000000" },
  { label: "Over $1,000,000", value: "99999999" },
];

// --- Helper function for formatting price display ---
const formatPriceLabel = (value: string | undefined): string => {
  if (!value || value === "") return "Price Range";
  const option = PRICE_OPTIONS.find((opt) => opt.value === value);
  return option ? option.label : "Custom Price";
};

const PropertyHero: React.FC = () => {
  const [locationInput, setLocationInput] = useState("");
  const [selectedPriceValue, setSelectedPriceValue] = useState(
    PRICE_OPTIONS[0].value
  );
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  // Reference to the price input wrapper to handle clicks outside the dropdown
  const priceRef = useRef<HTMLDivElement>(null);

  // --- Search Logic: Static City Suggestions ---
  const suggestedLocations = useMemo(() => {
    if (!locationInput) {
      // Return the top 8 locations when the input is empty
      return IRAQ_LOCATIONS.slice(0, 8);
    }
    // Filter locations based on user input (case-insensitive)
    return IRAQ_LOCATIONS.filter((loc) =>
      loc.toLowerCase().includes(locationInput.toLowerCase())
    ).slice(0, 8);
  }, [locationInput]);

  const handleLocationSelect = (loc: string) => {
    setLocationInput(loc);
    setIsLocationFocused(false);
    handleSearch(); // Auto-search
  };

  const handleSearch = () => {
    setIsLocationFocused(false);
    setIsPriceDropdownOpen(false);

    // 💡 Functionality: Log search parameters (replace with your actual API call)
    console.log("--- Search Executed! ---");
    console.log("Location:", locationInput);
    console.log("Max Price Value:", selectedPriceValue);
    console.log("Max Price Label:", formatPriceLabel(selectedPriceValue));
  };

  // Toggle the price dropdown state
  const handlePriceClick = () => {
    setIsPriceDropdownOpen((prev) => !prev);
  };

  const handlePriceSelect = (value: string) => {
    setSelectedPriceValue(value);
    setIsPriceDropdownOpen(false);
    handleSearch(); // Auto-search
  };

  // --- Aesthetics ---
  const backgroundImageStyle = {
    backgroundImage: "url('/property.webp')",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative h-[65vh] min-h-[550px] bg-cover bg-center"
      style={backgroundImageStyle}
    >
      {/* Aesthetic Overlay: Dark gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

      <motion.div
        className="relative z-10 flex h-full flex-col justify-center px-8 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title: Bolder and more impactful */}
        <motion.h1
          className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tighter font-sans drop-shadow-2xl"
          variants={itemVariants}
        >
          Discover Your <span className="text-[#facc15]">Dream Home</span>
        </motion.h1>

        {/* Subtitle: More refined */}
        <motion.p
          className="mt-4 max-w-xl text-lg md:text-xl text-gray-200 font-light"
          variants={itemVariants}
        >
          Browse thousands of verified luxury listings across Iraq
        </motion.p>

        {/* --- Search Bar Container (Premium Look) --- */}
        <motion.div
          className="mt-10 flex w-full max-w-3xl overflow-visible rounded-2xl bg-white/95 shadow-3xl backdrop-blur-sm"
          variants={itemVariants}
        >
          {/* --- 1. Location Input with Dynamic Suggestions --- */}
          <div className="relative flex flex-1 items-center rounded-l-2xl">
            <MapPin className="ml-5 h-5 w-5 text-gray-500" />
            <input
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onFocus={() => setIsLocationFocused(true)}
              onBlur={() => setTimeout(() => setIsLocationFocused(false), 200)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              type="text"
              placeholder="Enter City or Area (e.g., Erbil)"
              className="w-full py-5 pl-3 pr-10 text-lg font-medium text-gray-800 placeholder-gray-500 focus:outline-none bg-transparent"
            />

            {/* Clear Button */}
            {locationInput && (
              <button
                onClick={() => setLocationInput("")}
                className="absolute right-3 text-gray-400 hover:text-gray-700 p-2 transition"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Location Suggestions Dropdown */}
            {isLocationFocused && suggestedLocations.length > 0 && (
              <div className="absolute top-[105%] left-0 right-0 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-20">
                <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase text-gray-500 border-b border-gray-100">
                  Suggested Locations
                </p>
                {suggestedLocations.map((loc) => (
                  <div
                    key={loc}
                    onMouseDown={() => handleLocationSelect(loc)}
                    className="flex items-center gap-2 p-3 text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-base">{loc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-200" />

          {/* --- 2. Price Range Dropdown (Aesthetic and Functional) --- */}
          <div
            ref={priceRef}
            className="relative flex items-center bg-transparent"
          >
            <DollarSign className="ml-4 h-5 w-5 text-gray-500" />
            <button
              onClick={handlePriceClick}
              className="flex items-center justify-between w-full py-5 px-3 text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span
                className={
                  selectedPriceValue === "" ? "text-gray-500" : "text-gray-800"
                }
              >
                {formatPriceLabel(selectedPriceValue)}
              </span>
              <ChevronDown
                className={`h-4 w-4 ml-2 transition-transform ${
                  isPriceDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Price Dropdown Menu */}
            {isPriceDropdownOpen && (
              <div className="absolute top-[105%] right-0 mt-2 w-64 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-20">
                {PRICE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handlePriceSelect(option.value)}
                    className={`flex justify-between items-center p-3 text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors ${
                      selectedPriceValue === option.value
                        ? "bg-gray-100 font-semibold"
                        : "font-normal"
                    }`}
                  >
                    <span className="text-base">{option.label}</span>
                    {selectedPriceValue === option.value && (
                      <X className="h-4 w-4 text-green-500" /> // Using X as a checkmark icon for simplicity
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* --- 3. Search Button --- */}
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 rounded-r-2xl bg-[#1B3A57] px-8 text-white font-semibold text-lg transition hover:bg-[#1e40af] focus:outline-none"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PropertyHero;
