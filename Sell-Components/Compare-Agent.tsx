"use client";

import React, { useState, FormEvent } from "react";

// Theme Colors
const PRIMARY_BLUE = "#0077c0"; // Theme Blue
const LIGHT_BLUE = "#e6f5ff"; // For subtle accents

// --- Step Component ---
interface StepProps {
  number: number;
  text: string;
}
const Step: React.FC<StepProps> = ({ number, text }) => (
  <div className="flex items-start mb-4">
    <div
      className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-sm shadow-md"
      style={{ backgroundColor: PRIMARY_BLUE }}
    >
      {number}
    </div>
    <p className="ml-3 pt-1 text-base text-gray-700">{text}</p>
  </div>
);

// --- Main Component ---
export default function CompareAgents() {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for agents at:", address);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white p-8 md:p-10 rounded-3xl ">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE: Steps + Search */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Compare agents with{" "}
                <span style={{ color: PRIMARY_BLUE }}>RealChoice™</span>, find a
                trusted expert
              </h2>

              {/* Steps */}
              <div className="space-y-2">
                <Step number={1} text="Enter your selling address" />
                <Step number={2} text="View proposals, no commitment" />
                <Step number={3} text="Choose the right agent, confidently" />
              </div>

              {/* Search Form */}
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter home address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={`
                        w-full pl-12 pr-4 py-3
                        rounded-full
                        bg-white
                        border border-gray-200
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-2 focus:ring-[${PRIMARY_BLUE}]/40
                        focus:border-[${PRIMARY_BLUE}]
                        transition duration-200
                        text-gray-700
                      `}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`
                      bg-[${PRIMARY_BLUE}]
                      hover:bg-[#005a99]
                      text-white
                      font-semibold
                      py-3 px-6
                      rounded-full
                      shadow-md
                      hover:shadow-lg
                      transition duration-200 transform hover:scale-[1.02]
                    `}
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: Proposal Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img
              src="sample-proposals.png"
              alt="Proposal"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
