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
          <p className="text-yellow-600 font-semibold mb-2">(Since-1994)</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Get To Know About Neckle
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to our Neckle!
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            We're thrilled to have you join our community of automotive enthusiasts and professionals. Whether you're a passionate driver, a car owner, or someone who loves all things automotive, you've come to the right place.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Real estate refers to property, including land, buildings, and natural resources, along with the legal rights associated.
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
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Home size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Home For Sales
              </h3>
              <p className="text-gray-600 text-sm">
                This sector focuses on properties used for residential.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5 items-start">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Star size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                High Quality Property
              </h3>
              <p className="text-gray-600 text-sm">
                This sector focuses on properties used for residential.
              </p>
            </div>
          </div>

          {/* CEO */}
          <div className="mt-6 bg-yellow-100 rounded-xl p-6 border border-yellow-300">
            <p className="text-gray-900 font-bold text-xl">
              Natrison Mongla (CEO & Founder)
            </p>

            <div className="flex items-end gap-2 mt-4">
              <h1 className="text-5xl font-bold text-yellow-700">05</h1>
              <p className="text-gray-600 font-semibold text-lg">Years</p>
            </div>

            <p className="text-gray-700 mt-2 text-sm font-medium">
              Of Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
