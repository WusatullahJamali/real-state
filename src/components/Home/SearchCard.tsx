"use client";

import React from "react";
import { Property } from "./SearchData";
import { MapPin } from "lucide-react";

interface Props {
  property: Property;
}

const SearchCard: React.FC<Props> = ({ property }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-100
                 shadow-sm hover:shadow-2xl transition-all duration-500
                 overflow-hidden"
    >
      {/* Gradient Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                   bg-gradient-to-br from-yellow-100/40 via-transparent to-blue-100/40
                   transition-opacity duration-500 pointer-events-none"
      />

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        <img
          src={property.image}
          alt={property.address}
          className="h-full w-full object-cover transition-transform duration-700
                     group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <span
            className="backdrop-blur-md bg-yellow-600/90 text-white
                       text-[10px] font-extrabold px-3 py-1 rounded-full uppercase"
          >
            {property.transaction}
          </span>

          <span
            className="backdrop-blur-md bg-white/90 text-black
                       text-[10px] font-bold px-3 py-1 rounded-full uppercase"
          >
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 space-y-2">
        {/* Price */}
        <p className="text-2xl font-black text-gray-900 tracking-tight">
          <span className="text-xs font-semibold mr-1 text-yellow-600 uppercase">
            IQD
          </span>
          {property.priceIQD.toLocaleString()}
        </p>

        {/* Address */}
        <p className="text-sm font-semibold text-black truncate">
          {property.address}
        </p>

        {/* City */}
        <div className="flex items-center gap-1.5 text-gray-600 text-sm">
          <MapPin size={14} className="text-yellow-600" />
          <span>{property.city}</span>
        </div>

        {/* Divider */}
        <div className="pt-3">
          <div
            className="h-[2px] w-0 bg-gradient-to-r from-yellow-500 to-yellow-500
                       group-hover:w-full transition-all duration-700 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
