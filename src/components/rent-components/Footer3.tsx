"use client";

import React, { useState } from "react";

export default function GeoFooter() {
  const [showCities, setShowCities] = useState(false);
  const [showStates, setShowStates] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  const apartmentCities = [
    "Manhattan, NY","Atlanta, GA","Charlotte, NC","San Antonio, TX","Houston, TX",
    "Austin, TX","Las Vegas, NV","San Diego, CA","Colorado Springs, CO","Dallas, TX",
    "Raleigh, NC","Orlando, FL","Greensboro, NC","Phoenix, AZ","Nashville, TN",
    "Oahu, HI","Tampa, FL","Jacksonville, FL","Bronx, NY","Tucson, AZ",
    "Queens, NY","El Paso, TX","Staten Island, NY","Brooklyn, NY","Naples, FL",
  ];

  const states = [
    "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
    "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
    "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
    "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
    "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
    "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
    "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
    "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
  ];

  const resources = [
    "Fair housing","Manage rentals","List your rental","Create a lease",
    "Collect rent online","Casas en venta","New homes for sale",
    "New home construction","Real estate marketing products",
    "Real estate agent resources","Seller's marketplace",
    "How to check your home value","Property records","Housing market data",
    "Housing market summary","Real estate news","Mortgage rates",
    "Mortgage calculator","How much house can I afford?",
    "Recently sold homes","Foreclosures","Homes for sale near universities",
    "Renting advice","How to break a lease","Rent-to-Own real estate",
    "Rent increase laws","What is a leasehold property?",
  ];

  const overview = states.map(state => `${state} real estate overview`);
//Footer3
  return (
    <footer className="bg-white border-t py-16 px-6 text-sm text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>    
          <h3 className="font-bold text-base mb-4">Popular apartment cities</h3>
          <ul className="space-y-2">
  {(showCities ? apartmentCities : apartmentCities.slice(0, 1)).map((city) => (
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
          <h3 className="font-bold text-base mb-4">Find apartments by state</h3>
          <ul className="space-y-2">
  {(showStates ? states : states.slice(0, 1)).map((state) => (
    <li key={state}>
      <a className="hover:underline" href="#">
        {state} apartments
      </a>
    </li>
  ))}
</ul>

          <button onClick={() => setShowStates(!showStates)} className="mt-3 font-medium">
            {showStates ? "See less ▲" : "See more ▼"}
          </button>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-base mb-4">Real estate resources</h3>
          <ul className="space-y-2">
  {(showResources ? resources : resources.slice(0, 1)).map((item) => (
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
          <h3 className="font-bold text-base mb-4">US real estate overview</h3>
          <ul className="space-y-2">
  {(showOverview ? overview : overview.slice(0, 1)).map((item) => (
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
