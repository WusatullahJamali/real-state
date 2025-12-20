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
    <section className="relative py-24 bg-white text-black overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px] pointer-events-none" />

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Albasync Works
          </h1>
          <p className="text-gray-600 text-lg">
            A simple and transparent process to help you find your perfect home.
          </p>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8
                           shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600
                                  flex items-center justify-center text-sm font-bold">
                    {item.number}
                  </div>

                  <Icon
                    className="text-yellow-500 group-hover:scale-110 transition"
                    size={28}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

                {/* Hover Progress */}
                <div className="absolute bottom-0 left-0 h-1 bg-yellow-600 w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
