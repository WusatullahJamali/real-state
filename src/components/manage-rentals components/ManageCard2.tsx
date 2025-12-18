"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManageCard2 = () => {
  return (
    <div className="w-full bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-3 items-center">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 flex justify-center"
        >
          <Image
            src="/m1.png"
            alt="rent"
            width={200}
            height={200}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-2 space-y-4"
        >
          <h1 className="text-4xl font-bold text-black leading-snug">
            One-Click Rental Listings
          </h1>

          <p className="text-black text-lg">
            Effortlessly publish your rental listing to the top 20 rental sites,
            including Realtor.com, Trulia, Zumper, and Rent., to reach millions
            of renters and fill vacancies fast.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-full w-fit mt-5"
          >
            Learn more
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default ManageCard2;
