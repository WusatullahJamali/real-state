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

      <div className="p-4">
        <p className="text-sm font-semibold text-gray-500 mb-1">
          {property.city} - {property.type}
        </p>

        <h3 className="text-xl font-extrabold text-blue-700">
          {formatUSD(property.priceIQD)}
        </h3>

        <p className="text-sm text-gray-500">
          {formatIQD(property.priceIQD)}
        </p>

        <p className="text-sm text-gray-800 font-medium mt-1">
          {property.address}
        </p>

        {/* SPECS */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-600 pt-3 border-t border-gray-100 mt-3">
          {property.type === "Land" ? (
            <span className="flex items-center gap-1">
              <Ruler size={16} />
              {property.specs.lotSizeSqM.toLocaleString()} m² Lot
            </span>
          ) : (
            <>
              <span className="flex items-center">
                <i className="fas fa-bed mr-1"></i>
                {property.specs.beds} Beds
              </span>

              <span className="flex items-center">
                <i className="fas fa-bath mr-1"></i>
                {property.specs.baths} Baths
              </span>

              <span className="flex items-center">
                <i className="fas fa-area-chart mr-1"></i>
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
