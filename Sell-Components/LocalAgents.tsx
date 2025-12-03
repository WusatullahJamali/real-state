"use client";

import React from "react";

// --- Configuration Colors ---
const PRIMARY_BLUE = "#0077c0"; // New theme blue

// --- Interfaces ---
interface Agent {
  name: string;
  detail: string;
  imageUrl: string;
  experienceYears: number;
}

// --- Mock Data ---
const MOCK_AGENTS: Agent[] = [
  {
    name: "Gregg Klar",
    detail: "Gregg's Team, Keller WI.",
    imageUrl: "agent1.jpeg",
    experienceYears: 7,
  },
  {
    name: "Sarah Chen",
    detail: "Home Equity Group, CA.",
    imageUrl: "agent2.jpeg",
    experienceYears: 12,
  },
  {
    name: "Alex Rios",
    detail: "Rios Realty, FL.",
    imageUrl: "agent3.jpeg",
    experienceYears: 3,
  },
  {
    name: "Maria Bell",
    detail: "Bell Properties, TX.",
    imageUrl: "agent4.jpeg",
    experienceYears: 15,
  },
];

// --- Agent Component ---
const AgentComparisonItem: React.FC<{ agent: Agent }> = ({ agent }) => (
  <div className="group flex flex-col items-center text-center p-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
    <div
      className="
        relative w-20 h-20 rounded-full mb-2 
        ring-2 ring-[#0077c0]/40 
        transition 
        group-hover:shadow-[0_0_15px_#0077c0]
        group-hover:ring-[#0077c0]
      "
    >
      <img
        src={agent.imageUrl}
        alt={agent.name}
        className="w-full h-full rounded-full object-cover border-2 border-white"
      />

      {/* Experience Badge — Blue */}
      <div className="absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#0077c0] text-white text-xs font-bold ring-1 ring-white shadow-md">
        {agent.experienceYears}
      </div>
    </div>

    <p className="text-base font-bold text-gray-900">{agent.name}</p>
    <p className="text-xs text-gray-500">{agent.detail}</p>

    <p className="text-[15px] font-semibold mt-1 px-2 py-1 rounded-full bg-[#e6f5ff] text-[#0077c0]">
      {agent.experienceYears} Years Experience.
    </p>
  </div>
);

// --- Main Component ---
export default function LocalAgents() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-3xl shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-5">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Find Skilled Local Experts
            </h1>
            <p className="text-gray-600 text-sm">
              Access our curated network of experienced real estate
              professionals.
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <button
              onClick={() => console.log("Compare Agents Now")}
              className="flex items-center space-x-1 py-2 px-5 text-white text-sm font-semibold bg-[#0077c0] rounded-full shadow-md hover:opacity-90 transition"
            >
              <span>Compare Agents Now</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
          {MOCK_AGENTS.map((agent) => (
            <AgentComparisonItem key={agent.name} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
