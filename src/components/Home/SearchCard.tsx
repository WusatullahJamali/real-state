"use client";

import React from "react";
import { Property } from "./SearchData";

interface Props {
  property: Property;
}

const SearchCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-200">
        <img
          src={property.image}
          alt={property.address}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-yellow-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {property.transaction}
          </span>
          <span className="bg-white backdrop-blur-sm text-black text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-1">
          <p className="text-2xl font-black text-black leading-tight">
            <span className="text-sm font-medium mr-1 text-black underline decoration-blue-500/30">IQD</span>
            {property.priceIQD.toLocaleString()}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-black truncate">{property.city}</h3>
          <p className="text-black text-xs truncate uppercase tracking-tighter">{property.address}</p>
        </div>

        {/* Amenities Row (Only for Houses & Apartments) */}
{(property.type === "House" || property.type === "Apartment") && (
  <div className="flex items-center justify-between py-3 border-t border-gray-50 text-black">
    {/* Beds */}
    <div className="flex items-center gap-1.5">
      <svg
        className="w-4 h-4 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7"
        />
      </svg>
      <span className="text-xs font-semibold">3 Bed</span>
    </div>

    {/* Baths */}
    <div className="flex items-center gap-1.5">
      <svg
        className="w-4 h-4 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9"
        />
      </svg>
      <span className="text-xs font-semibold">2 Bath</span>
    </div>

    {/* Area */}
    <div className="flex items-center gap-1.5">
      <svg
        className="w-4 h-4 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 8V4m0 0h4"
        />
      </svg>
      <span className="text-xs font-semibold">120m²</span>
    </div>
  </div>
)}


        <button className="w-full mt-2 py-2 bg-gray-50 hover:bg-yellow-600 hover:text-white text-black text-sm font-bold rounded-lg transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SearchCard;