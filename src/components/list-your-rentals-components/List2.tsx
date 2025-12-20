"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const List2 = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Promote your listing to rent your property faster
          </h1>

          <p className="text-black text-lg max-w-xl">
            Maximize your listing’s exposure by upgrading your listing to
            prioritized placement to quickly receive leads and lease your
            property fast.
          </p>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/list2.png"
            alt="Promote your rental listing"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default List2;
