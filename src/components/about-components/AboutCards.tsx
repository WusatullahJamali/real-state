"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ShieldCheck, Wallet } from "lucide-react";

const features = [
  {
    title: "Affordable & Flexible Pricing",
    text: "We offer competitive prices across Iraq with flexible payment options, making it easier for families and investors to own or rent property.",
    icon: Wallet,
  },
  {
    title: "Trusted & Verified Listings",
    text: "All properties are carefully verified to ensure legal clarity, safety, and transparency for buyers and renters.",
    icon: ShieldCheck,
  },
  {
    title: "Local Market Expertise",
    text: "With deep knowledge of Iraqi cities and neighborhoods, we help you find the right home in the right location.",
    icon: Home,
  },
];

const stats = [
  { number: "15", unit: "+", label: "Cities Covered" },
  { number: "12", unit: "K+", label: "Properties Listed" },
  { number: "8", unit: "K+", label: "Homes Rented & Sold" },
  { number: "97", unit: "%", label: "Client Satisfaction" },
];

export default function AboutCard() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEAD */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 font-semibold tracking-wide uppercase">
            Iraq Real Estate Platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Why Choose Albasync
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your trusted platform for buying, renting, and investing in
            properties across Iraq.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white mb-5">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-black">
                  {item.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-4xl font-bold text-yellow-600">
                {item.number}
                <span className="text-yellow-600">{item.unit}</span>
              </h2>
              <p className="text-gray-600 text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
