"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManageCard3 = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Applications and Screening
          </h1>

          <p className="text-black text-lg max-w-xl mb-6">
            Avail features customizable applications and robust TransUnion® screening options to help you find and choose the right renter for your property with confidence.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]"
        >
          <Image src="/m3.png" alt="Applications and Screening Illustration" fill className="object-contain" />
        </motion.div>

      </div>
    </section>
  );
};

export default ManageCard3;
