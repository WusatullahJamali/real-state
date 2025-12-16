// components/PropertyCard.tsx
"use client";

import React from "react";
import { Property } from "@/data/iraqproperties";

interface PropertyCardProps {
  property: Property;
}

// ------------------ CURRENCY HELPERS ------------------
const IQD_PER_USD = 1300;

const formatIQD = (price: number) => `IQD ${price.toLocaleString("en-US")}`;

const formatUSD = (priceIQD: number) => {
  const usd = priceIQD / IQD_PER_USD;
  return `$${usd.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

// ------------------ COMPONENT ------------------
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden w-full cursor-pointer">
      {/* IMAGE */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={property.image}
          alt={property.address}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/600x400?text=Property+Image";
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        {/* CITY + TYPE */}
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {property.city} · {property.type}
        </p>

        {/* PRICES */}
        <div>
          <h3 className="text-2xl font-extrabold text-blue-700 leading-tight">
            {formatUSD(property.priceIQD)}
          </h3>
          <p className="text-sm text-gray-500">
            {formatIQD(property.priceIQD)}
          </p>
        </div>

        {/* ADDRESS */}
        <p className="text-sm text-gray-800 font-medium truncate">
          {property.address}
        </p>

        {/* SPECS */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 pt-3 border-t border-gray-100">
          {property.type === "Land" ? (
            <span>📐 {property.specs.lotSizeSqM.toLocaleString()} m² Lot</span>
          ) : (
            <>
              <span>🛏 {property.specs.beds} Beds</span>
              <span>🛁 {property.specs.baths} Baths</span>
              <span>📐 {property.specs.areaSqM.toLocaleString()} m²</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
