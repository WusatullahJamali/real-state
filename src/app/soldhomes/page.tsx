"use client";

import React from "react";
import dynamic from "next/dynamic";
import PropertyCard from "@/components/mapsold/propertycards";
import { propertiesData, IRAQ_CENTER_COORDINATES } from "@/data/iraqproperties";
import ListingHeaderIraq from "@/components/mapsold/maphead";

// Dynamically import the map to disable SSR (fixes "window is not defined")
const PropertyMap = dynamic(() => import("@/components/mapsold/propertymap"), {
  ssr: false,
});

const SoldHomesPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <ListingHeaderIraq />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 px-4 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Property Cards */}
          <div className="h-[calc(100vh-3rem)] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propertiesData.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="sticky top-6 h-[calc(100vh-3rem)] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            <PropertyMap
              properties={propertiesData}
              centerLat={IRAQ_CENTER_COORDINATES.lat}
              centerLng={IRAQ_CENTER_COORDINATES.lng}
              zoom={IRAQ_CENTER_COORDINATES.zoom}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SoldHomesPage;
