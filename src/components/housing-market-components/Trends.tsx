"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Info,
  Activity,
  ArrowUpRight,
  Filter,
} from "lucide-react";

// --- Dynamic Market Data ---
const MARKET_DATA = {
  header: {
    title: "Iraq Real Estate Trends",
    subtitle: "Quarterly Market Insights & Economic Analysis",
    lastUpdated: "Dec 2025",
  },
  stats: [
    {
      label: "Avg. Sq. Meter Price",
      value: "$1,450",
      change: "+8.4%",
      trend: "up",
      info: "Based on Baghdad & Erbil primary zones.",
    },
    {
      label: "Market Inventory",
      value: "12,400",
      change: "-2.1%",
      trend: "down",
      info: "Total active listings across major governorates.",
    },
    {
      label: "Sales Volume",
      value: "$2.4B",
      change: "+15%",
      trend: "up",
      info: "Total transaction value in Q4 2025.",
    },
    {
      label: "Foreign Investment",
      value: "18%",
      change: "+4.5%",
      trend: "up",
      info: "Rise in regional investor participation.",
    },
  ],
  governorates: [
    { name: "Baghdad", growth: 12.5, status: "High Demand", price: "$1,800/sqm" },
    { name: "Erbil", growth: 10.2, status: "Steady", price: "$1,250/sqm" },
    { name: "Basra", growth: 6.8, status: "Emerging", price: "$950/sqm" },
    { name: "Sulaymaniyah", growth: 5.4, status: "Stable", price: "$1,100/sqm" },
  ],
};

export default function MarketTrendsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HEADER */}
      <header className="pt-24 pb-16 px-6 text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-yellow-600 font-bold tracking-widest uppercase text-xs">
            <Activity size={14} /> Live Market Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-yellow-600">
            IRAQ MARKET
          </h1>
          <p className="text-lg md:text-xl text-black font-light leading-relaxed">
            Comprehensive insights into Iraq's real estate trends, investment
            opportunities, and regional performance.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MARKET_DATA.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100  hover:border-yellow-600 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-xs font-bold text-black uppercase tracking-widest">
                  {stat.label}
                </p>
                <div
                  className={`p-1 px-2 rounded-md text-[10px] font-bold ${
                    stat.trend === "up"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <h3 className="text-4xl font-black text-black mb-2">
                {stat.value}
              </h3>
              <p className="text-xs text-black leading-relaxed group-hover:text-black transition-colors">
                {stat.info}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ANALYTICS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* PRICE TREND CHART */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-10 border border-gray-100 overflow-hidden relative">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl font-black text-black">
                  Price Appreciation Trend
                </h2>
                <p className="text-black text-sm">
                  Baghdad Metro Area (2023 - 2025)
                </p>
              </div>
              
            </div>

            {/* DYNAMIC CHART SIMULATION */}
            <div className="h-64 flex items-end gap-3 pb-4">
              {[40, 55, 48, 70, 85, 90, 88, 95, 110, 100, 120, 135].map(
                (h, i) => (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    key={i}
                    className="flex-1 bg-yellow-500/20 hover:bg-yellow-600 rounded-t-2xl transition-all relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h * 15}
                    </div>
                  </motion.div>
                )
              )}
            </div>
            <div className="flex justify-between text-[10px] font-bold text-black mt-4 border-t pt-4">
              <span>JAN 2024</span>
              <span>JUN 2024</span>
              <span>JAN 2025</span>
              <span>PRESENT</span>
            </div>
          </div>

          {/* MARKET VERDICT */}
          <div className="lg:col-span-4 bg-yellow-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <TrendingUp className="" strokeWidth={1} />
            <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
              <Info size={24} />
              Market Verdict
            </h2>
            <ul className="space-y-6 relative z-10">
              {[
                "Baghdad's Karkh district is seeing record-breaking demand.",
                "Commercial property yields hit a 5-year high of 9%.",
                "New residency laws attract expat investors.",
                "Infrastructure projects boost land value in Basra.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="h-2 w-2 rounded-full bg-black mt-2 shrink-0" />
                  <p className="font-bold text-sm leading-tight">{text}</p>
                </li>
              ))}
            </ul>
            <button className="mt-12 w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition-all">
              Speak to an Analyst
            </button>
          </div>
        </div>

        {/* REGIONAL PERFORMANCE */}
        <div className="bg-white border border-gray-100 rounded-3xl p-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-black text-yellow-600">Regional Performance</h2>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={16} />
              <input
                type="text"
                placeholder="Search Governorates..."
                className="pl-12 pr-6 py-3 bg-white rounded-xl text-sm border-none focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-black text-black uppercase tracking-[0.2em] border-b">
                  <th className="pb-6 px-4">Governorate</th>
                  <th className="pb-6 px-4">Annual Growth</th>
                  <th className="pb-6 px-4">Avg. Price</th>
                  <th className="pb-6 px-4">Market Status</th>
                  <th className="pb-6 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MARKET_DATA.governorates.map((gov, i) => (
                  <tr key={i} className="group hover:bg-yellow-50/30 transition-colors">
                    <td className="py-6 px-4 font-bold text-black">{gov.name}</td>
                    <td className="py-6 px-4">
                      <span className="text-green-600 font-bold">+{gov.growth}%</span>
                    </td>
                    <td className="py-6 px-4 text-black font-medium">{gov.price}</td>
                    <td className="py-6 px-4">
                      <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-black">
                        {gov.status}
                      </span>
                    </td>
                    <td className="py-6 px-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-yellow-600 hover:text-white transition-all text-black">
                        <ArrowUpRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* FOOTER CTA */}
      <section className="bg-white py-24 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-600">
            Ready to Invest in Iraq?
          </h2>
          <p className="text-black text-lg italic font-light">
            "We provide the localized data and legal expertise you need to navigate the Iraqi market safely."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-yellow-600 text-white font-bold rounded-2xl hover:bg-gray-900 transition-all">
              View Premium Listings
            </button>
            <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all">
              Consult an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}