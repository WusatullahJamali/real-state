"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManageCard4 = () => {
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
          <Image src="/m4.png" alt="Lawyer-Reviewed Leases Illustration" fill className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Lawyer-Reviewed Leases
          </h1>

          <p className="text-black text-lg max-w-xl">
            Customize the state-specific, lawyer-reviewed lease templates on Avail and seamlessly collect signatures from renters using built-in eSign options.
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

export default ManageCard4;
