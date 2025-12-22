"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManageCard6 = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]"
        >
          <Image src="/m6.png" alt="Avail Tools Illustration" fill className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Discover all the tools available on Avail
          </h1>

          <p className="text-black text-lg max-w-xl mb-6">
            Avail includes everything you need to manage your rentals effortlessly and professionally. Uncover the full suite of Avail features to simplify your day-to-day operations while maximizing your profit.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-full w-fit mt-5"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ManageCard6;
