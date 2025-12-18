"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Shield, Wallet } from "lucide-react";

const features = [
  {
    title: "Affordable Property Prices",
    text: "We offer residential and commercial properties across Iraq at competitive prices, making it easier for families and investors to own quality real estate without overpaying.",
    icon: Wallet,
  },
  {
    title: "Secure & Transparent Deals",
    text: "All transactions are handled with full transparency, verified documentation, and legal assurance to protect buyers, sellers, and investors at every step.",
    icon: Shield,
  },
  {
    title: "Trusted Iraqi Real Estate Agency",
    text: "With deep knowledge of the Iraqi property market, we connect clients with the best homes, lands, and investment opportunities in prime locations.",
    icon: Home,
  },
];

const stats = [
  { number: "25", unit: "K+", label: "Properties Listed" },
  { number: "18", unit: "K+", label: "Properties Sold" },
  { number: "4.5", unit: "K+", label: "New Developments" },
  { number: "99", unit: "%", label: "Client Satisfaction" },
];

export default function AboutCard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEAD */}
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold tracking-wide">
            Iraq Real Estate Experts
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose Our Real Estate Agency
          </h1>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-7 border rounded-xl shadow-sm hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-600 text-white mb-4">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-4xl font-bold text-yellow-600">
                {item.number}
                <span className="text-yellow-600">{item.unit}</span>
              </h2>
              <p className="text-black text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
