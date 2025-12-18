"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Property } from "@/data/iraqproperties";

// Fix default Leaflet icons
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

// 10 Iraqi cities with coordinates
const IRAQ_CITIES = [
  { id: "c1", name: "Baghdad", lat: 33.3128, lng: 44.3615 },
  { id: "c2", name: "Basra", lat: 30.5085, lng: 47.7835 },
  { id: "c3", name: "Mosul", lat: 36.335, lng: 43.118 },
  { id: "c4", name: "Erbil", lat: 36.1911, lng: 44.0094 },
  { id: "c5", name: "Kirkuk", lat: 35.4681, lng: 44.3922 },
  { id: "c6", name: "Najaf", lat: 32.0, lng: 44.3333 },
  { id: "c7", name: "Karbala", lat: 32.616, lng: 44.024 },
  { id: "c8", name: "Samarra", lat: 34.1959, lng: 43.875 },
  { id: "c9", name: "Duhok", lat: 36.8663, lng: 42.9885 },
  { id: "c10", name: "Nasiriyah", lat: 31.0464, lng: 46.2573 },
];

interface PropertyMapProps {
  properties: Property[];
  centerLat: number;
  centerLng: number;
  zoom: number;
}

// Fix map resize issues (strict mode safe)
const ResizeFix = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 200);
  }, [map]);
  return null;
};

const PropertyMap: React.FC<PropertyMapProps> = ({
  properties,
  centerLat,
  centerLng,
  zoom,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-xl">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={zoom}
        scrollWheelZoom
        className="h-full w-full"
      >
        <ResizeFix />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Property Markers */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.geo.lat, property.geo.lng]}
          >
            <Popup>
              <div className="text-sm font-semibold">📍 {property.city}</div>
            </Popup>
          </Marker>
        ))}

        {/* 10 Cities Markers */}
        {IRAQ_CITIES.map((city) => (
          <Marker key={city.id} position={[city.lat, city.lng]}>
            <Popup>
              <div className="text-sm font-semibold">📍 {city.name}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
