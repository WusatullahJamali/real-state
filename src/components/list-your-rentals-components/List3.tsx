"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const List3 = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/list3.png"
            alt="Automate tour scheduling"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Automate tour scheduling for your property
          </h1>

          <p className="text-black text-lg max-w-xl">
            Empower renters to book a tour directly from your listing on partner
            sites. Landlords who enable this feature are nearly 4x more likely to
            receive a completed application.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default List3;
