// components/ListingHeaderIraq.tsx
"use client";

import React from "react";

const ListingHeaderIraq: React.FC<{ totalListings?: number }> = ({
  totalListings = 10,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl container mx-auto px-6 sm:px-8 lg:px-6  mt-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        {/* Left Side: Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Homes for Sale in Iraq
          </h1>
          <p className="text-gray-600 mt-1 text-base sm:text-lg">
            Explore premium properties across major cities
          </p>
        </div>

        {/* Right Side: Total Listings */}
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm sm:text-base">
            {totalListings} Listings
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingHeaderIraq;
