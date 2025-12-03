"use client";

import React from "react";

// --- Theme Colors ---
const PRIMARY_BLUE = "#0077c0"; // Theme Blue

type HomeValueTrackerProps = {};

/**
 * Tracker Component with Google Map iframe — blue-themed and compact.
 */
const Tracker: React.FC<HomeValueTrackerProps> = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-8 md:p-10 rounded-3xl shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase text-gray-500 tracking-widest">
            Data Insights
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Track Your Home Value
          </h1>

          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl mx-auto leading-relaxed">
            Our{" "}
            <span className="font-bold text-gray-800">
              RealEstimate<sup>SM</sup>
            </span>{" "}
            data is sourced from multiple valuation providers independent of
            Realtor.com and trusted by the lending industry.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* LEFT — Google Map iframe */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs h-60 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086317898177!2d-122.42324668468166!3d37.77492927975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3edb7f35%3A0x2a4f548c54f4b557!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1701871738561!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "hue-rotate(190deg) saturate(1.2) brightness(0.95)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Value Map"
              />
            </div>
          </div>

          {/* RIGHT — TEXT + BUTTON */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
              Stay updated on how your property value changes over time using
              our advanced valuation tools integrated with leading data
              providers.
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => console.log("Start tracking clicked")}
                className={`
                  py-3 px-8
                  text-white
                  font-semibold
                  rounded-full
                  shadow-md
                  transition
                  hover:opacity-90
                `}
                style={{ backgroundColor: PRIMARY_BLUE }}
              >
                Start Tracking →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
