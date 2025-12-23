// components/PropertyCard.tsx
"use client";

import React from "react";
import { Property } from "@/data/iraqproperties";
import { Bed, Bath, Ruler } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
}

/* ------------------ CURRENCY HELPERS ------------------ */
const IQD_PER_USD = 1300;

const formatIQD = (price: number) => `IQD ${price.toLocaleString("en-US")}`;

const formatUSD = (priceIQD: number) => {
  const usd = priceIQD / IQD_PER_USD;
  return `$${usd.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

/* ------------------ COMPONENT ------------------ */
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden w-full cursor-pointer">
      {/* IMAGE */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        <Image
          src={property.image}
          alt={property.address}
          width={150}
          height={150}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/600x400?text=Property+Image";
          }}
        />
      </div>

      {/* SCROLLABLE CONTENT (SCROLLBAR FULLY HIDDEN) */}
      <div
        className="p-5 space-y-3 max-h-[260px] overflow-y-scroll"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
        }}
      >
        {/* CITY + TYPE */}
        <p className="text-sm font-extrabold uppercase tracking-wide text-gray-500">
          {property.city} · {property.type}
        </p>

        {/* PRICES */}
        <div>
          <h3 className="text-xl -mt-1.5  font-extrabold text-blue-700 leading-tight">
            {formatUSD(property.priceIQD)}
          </h3>
          <p className="text-sm mt-0.5 text-gray-500">
            {formatIQD(property.priceIQD)}
          </p>
        </div>

        {/* ADDRESS */}
        <p className="text-sm text-gray-800 -mt-2 font-medium">
          {property.address}
        </p>

        {/* SPECS */}
        <div className="flex flex-wrap gap-x-2 -mt-6 gap-y-2 text-sm text-gray-600 pt-3 border-t border-gray-100">
          {property.type === "Land" ? (
            <span className="flex items-center gap-1">
              <Ruler size={16} />
              {property.specs.lotSizeSqM.toLocaleString()} m² Lot
            </span>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <Bed size={16} />
                {property.specs.beds} Beds
              </span>

              <span className="flex items-center gap-1">
                <Bath size={16} />
                {property.specs.baths} Baths
              </span>

              <span className="flex items-center gap-1">
                <Ruler size={16} />
                {property.specs.areaSqM.toLocaleString()} m²
              </span>
            </>
          )}
        </div>
      </div>

      {/* WEBKIT SCROLLBAR HIDE */}
    </div>
  );
};

export default PropertyCard;
