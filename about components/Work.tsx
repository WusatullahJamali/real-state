"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Phone, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Any where",
    text: "The real estate industry It plays a significant role in the as it contributes.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Contact With Us",
    text: "The real estate industry It plays a significant role in the as it contributes.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Pay For The Home",
    text: "The real estate industry It plays a significant role in the as it contributes.",
    icon: Home,
  },
  {
    number: "04",
    title: "Recieve The Home",
    text: "The real estate industry It plays a significant role in the as it contributes.",
    icon: CheckCircle,
  },
];

export default function Work() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Does It Work
          </h1>
          <p className="text-gray-600 text-lg">
            Here are some of the featured Apartment in different categories
          </p>
        </div>

        {/* VIDEO BUTTON */}
        <div className="flex justify-center mb-16">
          <button className="flex items-center gap-3 text-white bg-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-600 transition-all shadow">
            <Play size={20} />
            Watch Video
          </button>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={index}
                className="bg-white border rounded-xl shadow-sm p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold">
                    {item.number}
                  </div>

                  <Icon className="text-yellow-600" size={30} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
