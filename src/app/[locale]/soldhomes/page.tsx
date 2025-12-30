"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropertyCard from "@/components/mapsold/propertycards";
import { propertiesData, IRAQ_CENTER_COORDINATES } from "@/data/iraqproperties";
import ListingHeaderIraq from "@/components/mapsold/maphead";

// Dynamic import to disable SSR for map
const PropertyMap = dynamic(() => import("@/components/mapsold/propertymap"), {
  ssr: true,
});

const SoldHomesPage: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensure DOM is ready
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <>
      <ListingHeaderIraq />

      <div className="min-h-screen bg-gray-100 px-10 sm:px-6 lg:px-7 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Property Cards */}
          <div className="h-[calc(100vh-3rem)] lg:h-[calc(100vh-6rem)] overflow-y-auto pr-0 lg:pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {propertiesData.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="sticky top-6 h-[400px] sm:h-[500px] lg:h-[calc(100vh-6rem)] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
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
