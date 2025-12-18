"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Star } from "lucide-react"; 

export default function Know() {
  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-white  blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white  blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-yellow-600 font-semibold tracking-wide mb-3">
            (Since 1994)
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            Get to Know Our <br />
            <span className="text-yellow-600">Real Estate Agency</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-black mb-5">
            Iraq’s Trusted Property Platform
          </h2>

          <p className="text-black leading-relaxed mb-6">
            We proudly serve families, businesses, and investors looking to buy,
            sell, or invest in real estate across Iraq. From modern apartments to
            premium commercial properties, we help you make confident decisions.
          </p>

          <p className="text-black leading-relaxed">
            Our portfolio includes residential homes, commercial developments,
            and land opportunities — all backed by professional guidance and
            transparent processes.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {/* Feature Card 1 */}
          <div className="group flex gap-5 items-start p-6 bg-white transition-all">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
              <Home size={26} className="text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg mb-2">
                Homes for Sale Across Iraq
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Explore a wide range of residential properties in key Iraqi cities,
                designed for comfort, security, and long-term value.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group flex gap-5 items-start p-6 bg-white transition-all">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
              <Star size={26} className="text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg mb-2">
                High-Quality & Verified Properties
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Every property is carefully reviewed to ensure quality construction,
                legal clarity, and reliable investment potential.
              </p>
            </div>
          </div>

          {/* CEO Card */}
          <div className="mt-2 bg-white rounded-2xl p-7 border border-yellow-300">
            <p className="text-black font-extrabold text-xl">
              Shahzaib Ahmed
            </p>
            <p className="text-black font-medium mb-4">
              CEO & Founder
            </p>

            <div className="flex items-end gap-3">
              <h1 className="text-5xl font-extrabold text-yellow-600">30+</h1>
              <p className="text-black font-semibold text-lg">Years</p>
            </div>

            <p className="text-black mt-2 text-sm font-medium">
              Of Real Estate Experience in Iraq
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
