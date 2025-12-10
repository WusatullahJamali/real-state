"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// ---------------- TERMS DATA ----------------
const terms = [
  {
    title: "Assumable mortgage",
    description:
      "Unlike a traditional mortgage, an assumable mortgage is passed directly from seller to buyer...",
  },
  // ... keep rest same
];

// ---------------- ANIMATIONS ----------------
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ---------------- MAIN COMPONENT ----------------
const Common = () => {
  return (
    <section className="py-16 bg-linear-to-br from-yellow-50 via-orange-50 to-yellow-100 text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Common Mortgage Terms
          </h1>
          <p className="text-gray-600 text-lg">
            Understanding the language of home financing
          </p>
        </motion.div>

        {/* TERMS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {terms.map((term, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white border border-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden cursor-pointer"
            >
              {/* Animated background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mr-16 -mt-16"
              />

              <div className="relative z-10">
                <motion.h2 className="text-xl font-semibold mb-3 text-yellow-700 group-hover:text-yellow-600 transition-colors">
                  {term.title}
                </motion.h2>

                <motion.p className="text-gray-700 text-sm leading-relaxed">
                  {term.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-yellow-400 to-orange-400"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Common;
