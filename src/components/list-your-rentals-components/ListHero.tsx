"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ListHero = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Reach millions of renters — list your property for free across the top 20 rental sites
          </h1>

          <p className="text-black text-lg mb-8 max-w-xl">
            With robust features designed to help you fill vacancies faster,
            Avail unlocks the full potential of your rental listing.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-800 transition-colors"
          >
            List your rentals
          </motion.button>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]"
        >
          <Image src="/list1.png" alt="List your rental property" fill className="object-contain" priority />
        </motion.div>

      </div>
    </section>
  );
};

export default ListHero;
