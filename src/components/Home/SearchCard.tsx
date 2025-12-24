"use client";

import React from "react";
import { Property } from "./SearchData";

interface Props {
  property: Property;
}

const SearchCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-200">
        <img
          src={property.image}
          alt={property.address}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-yellow-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
            {property.transaction}
          </span>
          <span className="bg-white/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-2xl font-black text-black">
          <span className="text-sm mr-1 underline decoration-blue-500/30">
            IQD
          </span>
          {property.priceIQD.toLocaleString()}
        </p>

        <p className="text-sm font-semibold text-gray-900 truncate mt-1">
          {property.address}
        </p>

        <p className="text-sm text-gray-600">
          {property.city}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
