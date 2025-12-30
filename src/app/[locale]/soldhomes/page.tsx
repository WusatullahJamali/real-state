// app/buy-iq/page.tsx
import React from "react";
import PropertyCard from "@/components/mapsold/propertycards";
import PropertyMap from "@/components/mapsold/propertymap";
import { propertiesData, IRAQ_CENTER_COORDINATES } from "@/data/iraqproperties";

// Note: This page is a Server Component, but it imports the client component PropertyMap

const IraqPropertyListing: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* -------------------- LEFT COLUMN: INTERACTIVE MAP (50% Width) -------------------- */}
      {/* Fixed width for map, uses h-screen to fill viewport height */}
      <div className="hidden lg:block w-1/2 relative bg-gray-200 shadow-xl">
        <PropertyMap
          properties={propertiesData}
          centerLat={IRAQ_CENTER_COORDINATES.lat}
          centerLng={IRAQ_CENTER_COORDINATES.lng}
          zoom={IRAQ_CENTER_COORDINATES.zoom}
        />
      </div>

      {/* -------------------- RIGHT COLUMN: PROPERTY CARDS (50% Width) -------------------- */}
      {/* Scrolls vertically, takes full width on small screens, 50% on large screens */}
      <div className="w-full lg:w-1/2 overflow-y-scroll p-4 md:p-6">
        {/* Sticky Header/Search Bar */}
        <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm pt-2 pb-4 border-b mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-2">
            Luxury Properties in Baghdad & Erbil
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Showing {propertiesData.length} listings | Prices in Iraqi Dinar
            (IQD)
          </p>

          {/* Filter Bar Placeholder */}
          <div className="flex flex-wrap gap-2 mt-3 p-3 bg-white border rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search Address or City..."
              className="p-2 border rounded text-sm w-full md:w-auto grow"
            />
            <select className="p-2 border rounded text-sm">
              <option>Any Price</option>
              <option>500M+ IQD</option>
            </select>
            <select className="p-2 border rounded text-sm">
              <option>Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Land</option>
            </select>
            <button className="bg-blue-600 text-white p-2 rounded text-sm font-medium hover:bg-blue-700 transition">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Property Card Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IraqPropertyListing;
