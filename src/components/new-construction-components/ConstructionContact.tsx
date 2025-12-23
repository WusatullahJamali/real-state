"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ======================
   ANIMATION VARIANTS
====================== */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ConstructionContact = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-7xl mx-auto p-6 font-sans text-black"
    >
      <motion.h2
        variants={card}
        className="text-2xl font-bold mb-6"
      >
        How to buy a home in Iraq
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT CARD */}
        <motion.div
          variants={card}
          whileHover={{ y: -6 }}
          className="border border-gray-200 rounded-2xl p-6 flex flex-col"
        >
          <h3 className="text-lg font-bold mb-4">Be prepared to buy</h3>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-64 mb-6 overflow-hidden rounded-lg"
          >
            <img
              src="/a12.jpg"
              alt="Modern Iraq home"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="mt-auto">
            <h4 className="text-xl font-bold mb-2">Get pre-approved</h4>
            <p className="text-black mb-6">
              A pre-approval letter from a local bank makes your offer stronger
              and helps you understand your budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 rounded-full font-bold hover:border-yellow-600 transition-colors w-fit"
            >
              Get pre-approved
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={card}
          whileHover={{ y: -6 }}
          className="border border-gray-200 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold mb-6">
            Moving cost calculator
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {["Move from", "Move to"].map((label) => (
              <motion.div
                key={label}
                variants={card}
                className="space-y-2"
              >
                <label className="text-sm font-bold">{label}</label>
                <input
                  type="text"
                  placeholder="City or District"
                  className="w-full p-3 border-2 rounded-lg focus:outline-none"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {["Size of move", "Packing"].map((label) => (
              <motion.div
                key={label}
                variants={card}
                className="space-y-2"
              >
                <label className="text-sm font-bold">{label}</label>
                <div className="relative">
                  <select className="w-full p-3 border-2 rounded-lg appearance-none bg-white focus:outline-none">
                    {label === "Size of move" ? (
                      <>
                        <option>1-2 bedrooms</option>
                        <option>2-3 bedrooms</option>
                        <option>4+ bedrooms</option>
                      </>
                    ) : (
                      <>
                        <option>None</option>
                        <option>Partial</option>
                        <option>Full Service</option>
                      </>
                    )}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition-colors"
          >
            Get estimates
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ConstructionContact;
