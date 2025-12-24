"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <div className="w-full bg-white flex justify-center py-6 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1216px] mx-auto bg-white border border-gray-200 shadow-sm rounded-xl 
                   p-4 flex flex-col sm:flex-row items-center gap-5 hover:shadow-md transition-shadow duration-300"
      >
        {/* Left Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-28 h-16 sm:w-36 sm:h-20 shrink-0"
        >
          <Image
            src="/promo2.webp"
            alt="Promo"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex-1 text-center sm:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold text-gray-800"
          >
            Discover Top Neighborhoods
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2"
          >
            Explore homes in the best areas tailored just for you.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/sell/neighbourhood"
            className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-lg text-sm sm:text-base hover:bg-yellow-600 transition inline-block whitespace-nowrap shadow-sm"
          >
            Explore Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}