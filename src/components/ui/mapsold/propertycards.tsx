

"use client";
import React from "react";
import { Property } from "@/data/iraqproperties";

interface PropertyCardProps {
  property: Property;
}

const formatIQD = (price: number) => {
  // Format to show large numbers (in millions) with proper currency symbol
  return `IQD ${price.toLocaleString("ar-IQ", { useGrouping: true })}`;
};

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
        <p className="text-md text-gray-800 font-medium truncate">
          {property.address}
        </p>

        {/* Specs - Discriminated Union Logic */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2 pt-2 border-t border-gray-100">
          {property.type === "Land" ? (
            <span className="flex items-center">
              <i className="fas fa-ruler-combined mr-1"></i>
              {property.specs.lotSizeSqM.toLocaleString()} M² Lot
            </span>
          ) : (
            <>
              <span className="flex items-center">
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
    </div>
  );
};

export default PropertyCard;
