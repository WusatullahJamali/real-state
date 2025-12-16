"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// --- 1. GradientButton Component ---
const GradientButton: React.FC = () => {
  return (
    <div className="relative inline-block overflow-hidden rounded-full">
      <button className="relative z-10 rounded-full px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800">
        Get pre-approved now
      </button>
    </div>
  );
};

// --- 2. SearchBar Component (WITH SEARCH FUNCTIONALITY) ---
const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (!value.trim()) return;

    // 🔍 SEARCH LOGIC (replace later with router/API)
    console.log("Searching for:", value);
    alert(`Searching for: ${value}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-md focus-within:border-[#1B3A57] focus-within:ring-1 focus-within:ring-[#1B3A57] transition-all duration-200">
        {/* Input */}
        <input
          type="text"
          placeholder="Address, City, Zip or Neighbourhood"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="grow bg-transparent pl-5 py-2 text-base text-gray-700 placeholder-gray-500 focus:outline-none"
        />

        {/* ❌ Clear Button */}
        {value && (
          <button
            type="button"
            className="p-1 text-gray-500 hover:text-gray-700"
            onClick={() => setValue("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* 🔍 Search Button */}
        <button
          type="button"
          onClick={handleSearch}
          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-black hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- 3. Combined Component ---
const CombinedAd: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Pre-Approval Section */}
      <div className="flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:h-auto">
            <img src="/boy.avif" className="w-full h-full object-cover" />
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-[#1B3A57] mb-4">
              Need a home loan? Get pre-approved
            </h2>
            <p className="text-gray-600 mb-8">
              Find a lender who can offer competitive mortgage rates and help
              you with pre-approval.
            </p>
            <GradientButton />
            <a
              href="#"
              className="mt-8 text-sm text-gray-500 underline hover:text-gray-700 transition-colors"
            >
              Advertising disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Local Info Section */}
      <div className="flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl text-[#1B3A57] font-extrabold mb-4">
              Get Local Info
            </h2>
            <p className="text-gray-600 mb-4">
              Does it have pet-friendly rentals? How are the schools? Get
              important local information on the area you're most interested in.
            </p>
            <SearchBar />
          </div>

          <div className="md:w-1/2 h-96 md:h-auto">
            <img src="/boy2.avif" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedAd;
