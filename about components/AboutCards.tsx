"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Shield, Wallet } from "lucide-react";

const features = [
  {
    title: "Affordable Price",
    text: "An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...",
    icon: Wallet,
  },
  {
    title: "Money Back Guarantee",
    text: "Some may offer a full refund with no questions asked, others may require the customer to provide...",
    icon: Shield,
  },
  {
    title: "Top Rated Agency",
    text: "During this 8-month period, if the product fails to function properly due to a defect or malfunction...",
    icon: Home,
  },
];

const stats = [
  { number: "600", unit: "K+", label: "Project Available" },
  { number: "400", unit: "K+", label: "Project Sold" },
  { number: "200", unit: "K+", label: "New Home" },
  { number: "98.50", unit: "%", label: "Customer Satisfaction" },
];

export default function AboutCard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEAD */}
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold tracking-wide">
            Best Real Estate
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Only Choose Neckle
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
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white mb-4">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
                <span className="text-yellow-700">{item.unit}</span>
              </h2>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
