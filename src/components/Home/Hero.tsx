"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SearchBar from "./Searchbar";
import { useTranslations } from "next-intl";

// Animation Variants (UNCHANGED)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  const t = useTranslations("home.hero");

  const stats = [
    { value: t("stats.0.value"), label: t("stats.0.label") },
    { value: t("stats.1.value"), label: t("stats.1.label") },
    { value: t("stats.2.value"), label: t("stats.2.label") },
    { value: t("stats.3.value"), label: t("stats.3.label") }
  ];

  return (
    <section className="relative w-full min-h-[94vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={t("backgroundImage")}
        alt="hero image"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="
            text-gray-100 
            text-3xl sm:text-4xl mt-4 md:text-5xl lg:text-6xl 
            font-extrabold leading-tight mb-4 sm:mb-5
          "
        >
          {t("title")}
        </motion.h1>

        <motion.h3
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            text-white font-normal 
            text-sm sm:text-base md:text-lg 
            mb-8 sm:mb-10
          "
        >
          {t("description")}
        </motion.h3>

        {/* Search */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchBar />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 sm:flex sm:flex-wrap mb-3 justify-center gap-2 sm:gap-3 mt-4 sm:mt-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="
                flex-1 min-w-[110px] sm:min-w-[130px]
                px-3 py-2
                bg-[#1B3A57]
                rounded-2xl
                text-center
                shadow-[0_4px_20px_rgba(255,195,0,0.4)]
                hover:shadow-[0_6px_30px_rgba(255,195,0,0.7)]
                transition-shadow duration-300
              "
            >
              <div className="text-yellow-400 font-bold text-base sm:text-lg md:text-xl">
                {stat.value}
              </div>
              <div className="text-yellow-100/90 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;