"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find Your Location",
    text: "Browse verified properties across different cities and neighborhoods that fit your needs.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Contact Albasync",
    text: "Get in touch directly with property owners or agents through our secure platform.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Confirm & Pay",
    text: "Finalize your agreement with transparent pricing and clear payment options.",
    icon: Home,
  },
  {
    number: "04",
    title: "Move In",
    text: "Receive your keys and enjoy your new home with complete peace of mind.",
    icon: CheckCircle,
  },
];

export default function Work() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            How Albasync Works
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            A simple and transparent process to help you find your perfect home.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-gray-100 group-hover:text-yellow-100 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-200 group-hover:rotate-12 transition-transform">
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.text}
                </p>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
