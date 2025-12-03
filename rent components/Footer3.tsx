"use client";

import React, { useState } from "react";

export default function GeoFooter() {
  const [showMarkets, setShowMarkets] = useState(false);
  const [showApartments, setShowApartments] = useState(false);

  const markets = [
    "Dallas, TX", "Myrtle Beach, SC", "Raleigh, NC", "Omaha, NE", "Rochester, NY",
    "Houston, TX", "Greensboro, NC", "San Diego, CA", "El Paso, TX", "Erie, PA",
    "Atlanta, GA", "Chicago, IL", "Nashville, TN", "Boise, ID", "Tucson, AZ",
    "Bakersfield, CA", "Indianapolis, IN", "Knoxville, TN", "Tampa, FL",
  ];

  const apartments = [
    "Manhattan, NY", "Atlanta, GA", "Charlotte, NC", "San Antonio, TX",
    "Houston, TX", "Austin, TX", "Chicago, IL", "Los Angeles, CA",
    "Phoenix, AZ", "San Diego, CA", "Miami, FL", "Denver, CO"
  ];

  const buildMarketURL = (city: string) =>
    `/realestateandhomes-search/${city.replace(/, /g, "_").replace(/ /g, "-")}`;

  const buildApartmentURL = (city: string) =>
    `/apartments/${city.replace(/, /g, "_").replace(/ /g, "-")}/type-apartments`;

  return (
    <footer className="w-full bg-white text-black border-t py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Popular Markets */}
        <div>
          <h3 className="text-lg font-bold mb-4">Popular real estate markets</h3>
          <ul className="space-y-2">
            <li>
              <a href={buildMarketURL(markets[0])} className="text-black hover:underline">
                {markets[0]} real estate
              </a>
            </li>
          </ul>

          {showMarkets && (
            <ul className="mt-3 space-y-2">
              {markets.slice(1).map((city, i) => (
                <li key={i}>
                  <a href={buildMarketURL(city)} className="text-black hover:underline">
                    {city} real estate
                  </a>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setShowMarkets(!showMarkets)}
            className="mt-3 text-sm text-black font-medium flex items-center gap-1 hover:text-blue-600 transition"
          >
            {showMarkets ? "See less" : "See more"} {showMarkets ? "▲" : "▼"}
          </button>
        </div>

        {/* Popular Apartment Cities */}
        <div>
          <h3 className="text-lg font-bold mb-4">Popular apartment cities</h3>
          <ul className="space-y-2">
            <li>
              <a href={buildApartmentURL(apartments[0])} className="text-black hover:underline">
                Apartments for rent in {apartments[0]}
              </a>
            </li>
          </ul>

          {showApartments && (
            <ul className="mt-3 space-y-2">
              {apartments.slice(1).map((city, i) => (
                <li key={i}>
                  <a href={buildApartmentURL(city)} className="text-black hover:underline">
                    Apartments for rent in {city}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setShowApartments(!showApartments)}
            className="mt-3 text-sm text-black font-medium flex items-center gap-1 hover:text-blue-600 transition"
          >
            {showApartments ? "See less" : "See more"} {showApartments ? "▲" : "▼"}
          </button>
        </div>

      </div>
    </footer>
  );
}
