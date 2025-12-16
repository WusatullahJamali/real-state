"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Property } from "@/data/iraqproperties";

// Fix for default Leaflet icons not showing
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

// Extra 7 locations
const EXTRA_LOCATIONS = [
  { id: "e1", name: "Najaf", lat: 32.0, lng: 44.3333 },
  { id: "e2", name: "Karbala", lat: 32.616, lng: 44.024 },
  { id: "e3", name: "Samarra", lat: 34.1959, lng: 43.875 },
  { id: "e4", name: "Duhok", lat: 36.8663, lng: 42.9885 },
  { id: "e5", name: "Kirkuk", lat: 35.4681, lng: 44.3922 },
  { id: "e6", name: "Hillah", lat: 32.482, lng: 44.432 },
  { id: "e7", name: "Nasiriyah", lat: 31.0464, lng: 46.2573 },
];

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
    <div className="h-full w-full sticky top-0">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={zoom}
        scrollWheelZoom
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Property Markers */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.geo.lat, property.geo.lng]}
          >
            <Popup>
              <div className="text-sm font-semibold text-gray-800">
                📍 {property.city}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Extra Locations */}
        {EXTRA_LOCATIONS.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>
              <div className="text-sm font-semibold text-gray-800">
                📍 {place.name}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
