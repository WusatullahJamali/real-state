"use client"
import React, { useState } from "react";

const MFooter = () => {
  const [showCities, setShowCities] = useState(false);
  const [showLoanTypes, setShowLoanTypes] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showStates, setShowStates] = useState(false);

  const cities = [
    "San Francisco", "Raleigh", "San Jose", "Austin", "Seattle", "Washington DC", "Charlotte", "San Diego",
    "Minneapolis", "Los Angeles", "Portland", "Indianapolis", "Houston", "New York", "Boston", "Denver",
    "Phoenix", "Milwaukee", "Richmond", "Salt Lake City", "Dallas", "Nashville", "Las Vegas", "Sacramento",
    "Cincinnati", "New Orleans", "Columbus", "Oklahoma City", "Baltimore", "Saint Louis", "Chicago",
    "Atlanta", "Virginia Beach", "Philadelphia", "Tampa", "Detroit", "Orlando", "West Hartford",
    "Riverside", "Cleveland", "Miami", "Jacksonville", "Providence", "Kansas City", "Birmingham",
    "San Antonio", "Pittsburgh", "Memphis", "Louisville", "Buffalo"
  ];

  const loanTypes = ["30 year fixed", "20 year fixed", "15 year fixed", "5 year ARM", "7 year ARM"];

  const tools = [
    "Mortgage calculator",
    "Affordability calculator",
    "Rent or Buy?",
    "Refinance calculator",
    "Mortgage deferment and mortgage forbearance—is there a difference?",
    "6 refinancing mistakes homeowners risk making right now",
    "Why does my mortgage keep getting sold?",
    "What is a force majeure clause, and what does it mean for mortgages?",
    "Ready to refinance? Ask these 5 questions first"
  ];

  const states = [
    "Texas", "California", "Florida", "Utah", "Colorado", "Massachusetts", "Ohio", "Illinois", "Michigan",
    "Missouri", "Indiana", "Tennessee", "Wisconsin", "Oregon", "Maryland", "North Carolina", "Nevada",
    "New York", "South Carolina", "Oklahoma", "Arizona", "Pennsylvania", "Kentucky", "Alabama", "Rhode Island",
    "Nebraska", "Idaho", "New Jersey", "Minnesota", "New Hampshire", "Georgia", "Iowa", "Louisiana", "Maine",
    "Connecticut", "Kansas", "Arkansas", "Delaware", "Virginia", "New Mexico", "Vermont", "Washington",
    "Mississippi", "Montana", "Alaska", "West Virginia", "Hawaii", "Wyoming", "District of Columbia",
    "North Dakota", "South Dakota"
  ];

  const renderList = (items, show, setShow, suffix = " mortgage rates") => (
    <div>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:underline text-sm">{items[0]}{suffix}</a>
        </li>
      </ul>
      {show && (
        <ul className="mt-2 space-y-2">
          {items.slice(1).map((item, idx) => (
            <li key={idx}>
              <a href="#" className="hover:underline text-sm">{item}{suffix}</a>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShow(!show)}
        className="mt-2 text-sm text-blue-500 font-medium flex items-center hover:underline"
      >
        {show ? "See less" : "See more"}
        <span className="ml-1">{show ? "▲" : "▼"}</span>
      </button>
    </div>
  );

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Mortgage rates by city</h3>
            {renderList(cities, showCities, setShowCities)}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Mortgage rates by loan type</h3>
            {renderList(loanTypes, showLoanTypes, setShowLoanTypes, "")}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Mortgage tools</h3>
            {renderList(tools, showTools, setShowTools, "")}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Mortgage rates by state</h3>
            {renderList(states, showStates, setShowStates)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MFooter;
