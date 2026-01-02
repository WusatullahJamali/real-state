"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const HomeValueTracker = () => {
  const t = useTranslations("HomeValueTracker");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // We define the value for {realEstimate} here to match your JSON
  const realEstimateValue = t("chartTitle");

  return (
    <div
      className="flex items-center justify-center bg-white py-16 px-4"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Chart overlay */}
              <div
                className={`absolute top-6 bg-white rounded-lg shadow-xl p-6 z-10 w-64 ${
                  isRtl ? "right-6" : "left-6"
                }`}
              >
                <h3 className="text-lg font-bold text-black mb-4">
                  {t("chartTitle")}
                  <sup className="text-xs">SM</sup>
                </h3>

                {/* Simple chart representation */}
                <div className="relative h-40 mb-4">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Grid lines */}
                    {[20, 40, 60, 80].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="200"
                        y2={y}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Line 1 - Purple dashed */}
                    <polyline
                      points="0,75 50,70 100,50 150,45 200,25"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Line 2 - Teal solid */}
                    <polyline
                      points="0,70 50,65 100,48 150,40 200,20"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                    />

                    {/* Line 3 - Blue dashed */}
                    <polyline
                      points="0,80 50,75 100,60 150,55 200,40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Indicator dot */}
                    <circle cx="200" cy="20" r="4" fill="#14b8a6" />
                  </svg>

                  {/* X-axis labels */}
                  <div
                    className="flex justify-between text-xs text-black mt-1"
                    dir="ltr"
                  >
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-purple-500"></div>
                      <span className="text-gray-600">
                        {t("chartLegend.analytics")}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-800" dir="ltr">
                      $446K
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-teal-500"></div>
                      <span className="text-gray-600">
                        {t("chartLegend.corelogic")}
                        <sup>™</sup>
                      </span>
                    </div>
                    <span className="font-semibold text-black" dir="ltr">
                      $445K
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-yellow-500"></div>
                      <span className="text-black">
                        {t("chartLegend.quantarium")}
                      </span>
                    </div>
                    <span className="font-semibold text-black" dir="ltr">
                      $438K
                    </span>
                  </div>
                </div>
              </div>

              {/* Building Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/tracker.jpeg"
                  alt="Property"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Text and CTA */}
          <div
            className={`flex flex-col space-y-6 ${
              isRtl ? "items-start" : "items-start"
            }`}
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {t("title")}
              </h1>

              <p className="text-black text-lg leading-relaxed">
                {/* This maps the {realEstimate} variable in your JSON to the value of chartTitle */}
                {t("description", { realEstimate: realEstimateValue })}
              </p>
            </div>

            <button className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-lg border-2 rounded-full hover:border-yellow-500 transition-all duration-300">
              <span>{t("button")}</span>
              <MoveRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isRtl
                    ? "group-hover:-translate-x-1 rotate-180"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValueTracker;
