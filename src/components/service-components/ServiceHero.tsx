// components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }} // ❌ removed opacity: 0
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/srr.avif"
          alt="Home service tools"
          fill
          priority
          className="object-cover pointer-events-none brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Badge */}
          <motion.span
            className="mb-6 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 backdrop-blur"
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            Premium Home Solutions
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            Your Trusted <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Home Services
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-200 mb-10 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            Reliable, affordable, and professional solutions designed to make
            your home safer, smarter, and more comfortable.
          </motion.p>

          {/* CTA (unchanged, empty as provided) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              },
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default ServiceHero;
