// components/PropertyMap.tsx
"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Property } from "@/data/iraqproperties";
import PropertyCard from "./propertycards";

// Fix for default Leaflet icons not showing up in Next.js (Must be in a public folder in real app)
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface PropertyMapProps {
  properties: Property[];
  centerLat: number;
  centerLng: number;
  zoom: number;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  properties,
  centerLat,
  centerLng,
  zoom,
}) => {
  return (
    // Map container must have an explicit height
    <div className="h-full w-full sticky top-0">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={zoom}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          // Using OpenStreetMap for free, global map tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.geo.lat, property.geo.lng]}
          >
            {/* Popup displays the property card for context */}
            <Popup minWidth={350}>
              <div className="w-80">
                <PropertyCard property={property} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
