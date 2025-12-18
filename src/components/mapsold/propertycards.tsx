// components/PropertyCard.tsx

"use client";
import React from "react";
import { Property } from "@/data/iraqproperties";

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
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer w-full">
      {/* Placeholder Image (replace with Next.js <Image> in production) */}
      <div className="h-48 bg-gray-300 rounded-t-lg flex items-center justify-center overflow-hidden">
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

      <div className="p-4">
        <p className="text-sm font-semibold text-gray-500 mb-1">
          {property.city} - {property.type}
        </p>
        <h3 className="text-xl font-extrabold text-blue-700 mb-2">
          {formatIQD(property.priceIQD)}
        </h3>
        {/* CITY + TYPE */}
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {property.city} · {property.type}
        </p>

        {/* PRICES */}
        <div>
          <h3 className="text-2xl -mt-2 font-extrabold text-blue-700 leading-tight">
            {formatUSD(property.priceIQD)}
          </h3>
          <p className="text-sm text-gray-500">
            {formatIQD(property.priceIQD)}
          </p>
        </div>

        {/* ADDRESS */}
        <p className="text-sm text-gray-800 -mt-3 font-medium">
          {property.address}
        </p>

        {/* SPECS */}
        <div className="flex flex-wrap gap-x-2 -mt-6 gap-y-2 text-sm text-gray-600 pt-3 border-t border-gray-100">
             (homesold changes)
          {property.type === "Land" ? (
            <span className="flex items-center">
              <i className="fas fa-ruler-combined mr-1"></i>
              {property.specs.lotSizeSqM.toLocaleString()} M² Lot
            </span>
          ) : (
            <>
                <i className="fas fa-bed mr-1"></i> {property.specs.beds} Beds
              </span>
              <span className="flex items-center">
                <i className="fas fa-bath mr-1"></i> {property.specs.baths}{" "}
                Baths
              </span>
              <span className="flex items-center">
                <i className="fas fa-area-chart mr-1"></i>{" "}
                {property.specs.areaSqM.toLocaleString()} M²
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
