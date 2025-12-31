"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero2: React.FC = () => {
  // We point this to "hero2" because it is a top-level key in your JSON
  const t = useTranslations("hero2");

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden w-full">
      {/* Animated Background Container */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${t("image")}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center px-4 md:px-0 max-w-3xl text-white z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight rtl:leading-snug"
        >
          {t("title")}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-600 transition-colors px-8 py-3 rounded-full font-semibold shadow-lg text-white"
        >
          {t("button")}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero2;
