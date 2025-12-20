"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Star } from "lucide-react"; 

export default function Know() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-600 font-semibold mb-2">
            (Since 2018)
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Get to Know Albasync
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Albasync Real Estate
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Albasync is a modern real estate platform dedicated to helping
            individuals and families find the right property with confidence.
            From apartments and houses to commercial spaces, we make property
            search simple, secure, and transparent.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect people with trusted property listings,
            verified sellers, and valuable local insights — all in one reliable
            platform.
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
          {/* Card 1 */}
          <div className="flex gap-5 items-start">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm">
              <Home size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Homes for Sale & Rent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover a wide range of verified residential properties across
                prime locations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5 items-start">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm">
              <Star size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                High-Quality & Trusted Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every property is carefully reviewed to ensure quality,
                transparency, and reliability.
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
         <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200 
                max-w-sm text-center">
  <p className="text-gray-900 font-bold text-lg">
    Albasync Real Estate Team
  </p>

  <div className="flex justify-center items-end gap-2 mt-4">
    <h1 className="text-5xl font-bold text-yellow-600">05</h1>
    <p className="text-gray-600 font-semibold text-lg">Years</p>
  </div>

  <p className="text-gray-700 mt-2 text-sm font-medium">
    of Industry Experience
  </p>
</div>

        </motion.div>
      </div>
    </section>
  );
}
