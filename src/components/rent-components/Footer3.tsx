"use client";

import React, { useState } from "react";

export default function GeoFooter() {
  const [showCities, setShowCities] = useState(false);
  const [showGovernorates, setShowGovernorates] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  const apartmentCities = [
    "Baghdad","Basra","Erbil","Sulaymaniyah","Mosul",
    "Najaf","Karbala","Duhok","Kirkuk","Amarah",
    "Diwaniyah","Nasiriyah","Kut","Ramadi","Tikrit",
    "Samarra","Hilla","Fallujah","Baqubah","Zakho",
  ];

  const governorates = [
    "Baghdad","Basra","Dhi Qar","Maysan","Wasit","Najaf",
    "Karbala","Sulaymaniyah","Erbil","Duhok","Kirkuk",
    "Nineveh","Anbar","Babylon","Diwaniyah","Saladin",
    "Muthanna","Qadisiyah","Kirkuk","Sulaymaniyah",
  ];

  const resources = [
    "Iraq real estate news","Property listings","New apartments for sale",
    "Rental apartments","Commercial properties","Land for sale",
    "Real estate agents","Property valuation","Market trends",
    "Mortgage information","Buying guide","Selling guide",
  ];

  const overview = governorates.map(gov => `${gov} real estate overview`);

  return (
    <footer className="bg-white border-t py-16 px-6 text-sm text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-base mb-4">Popular apartment cities</h3>
          <ul className="space-y-2">
            {(showCities ? apartmentCities : apartmentCities.slice(0, 5)).map((city) => (
              <li key={city}>
                <a className="hover:underline" href="#">
                  Apartments for rent in {city}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowCities(!showCities)} className="mt-3 font-medium">
            {showCities ? "See less ▲" : "See more ▼"}
          </button>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-base mb-4">Find apartments by governorate</h3>
          <ul className="space-y-2">
            {(showGovernorates ? governorates : governorates.slice(0, 5)).map((gov) => (
              <li key={gov}>
                <a className="hover:underline" href="#">
                  {gov} apartments
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowGovernorates(!showGovernorates)} className="mt-3 font-medium">
            {showGovernorates ? "See less ▲" : "See more ▼"}
          </button>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-base mb-4">Real estate resources</h3>
          <ul className="space-y-2">
            {(showResources ? resources : resources.slice(0, 5)).map((item) => (
              <li key={item}>
                <a className="hover:underline" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowResources(!showResources)} className="mt-3 font-medium">
            {showResources ? "See less ▲" : "See more ▼"}
          </button>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-base mb-4">Iraq real estate overview</h3>
          <ul className="space-y-2">
            {(showOverview ? overview : overview.slice(0, 5)).map((item) => (
              <li key={item}>
                <a className="hover:underline" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowOverview(!showOverview)} className="mt-3 font-medium">
            {showOverview ? "See less ▲" : "See more ▼"}
          </button>
        </div>

      </div>
    </footer>
  );
}
