"use client";

import React, { useState } from "react";
import { Search, MapPin, User } from "lucide-react";

const FindHero = () => {
  const [type, setType] = useState<"Buy" | "Sell" | "Both">("Both");
  const [agent, setAgent] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/findhero2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Header */}
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Search for agents
        </h1>
        <p className="text-white/80 text-lg mt-2 mb-8">
          Discover the right match for you.
        </p>

        {/* Tabs */}
        <ul className="flex justify-center gap-6 text-white text-lg font-medium mb-8">
          {["Buy", "Sell", "Both"].map((item) => (
            <li
              key={item}
              onClick={() => setType(item as any)}
              className={`cursor-pointer underline-offset-4 transition
                ${type === item ? "underline" : "hover:underline"}`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-xl max-w-4xl mx-auto flex items-center px-4 py-3 gap-3">

          {/* Agent */}
          <div className="flex items-center flex-1 gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Agent name"
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
              className="w-full outline-none text-black text-lg"
            />
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200"></div>

          {/* Location */}
          <div className="flex items-center flex-1 gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-black text-lg"
            />
          </div>

          {/* Search Button */}
          <button className="ml-2 bg-yellow-500 hover:bg-yellow-400 transition rounded-full p-3">
            <Search className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindHero;
