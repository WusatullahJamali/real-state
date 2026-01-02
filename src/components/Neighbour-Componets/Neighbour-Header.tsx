"use client";
import React from "react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const BACKGROUND_IMAGE_URL = "/hh.jpg";

const Hero: React.FC = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Parent container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Individual item variants - these MUST be passed to children
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      className="relative h-[700px] overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Image with subtle scale-in animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center text-white p-4"
      >
        {/* Small top text */}
        <motion.p
          variants={itemVariants}
          className="text-xl uppercase tracking-widest font-semibold text-gray-200"
        >
          {t("topText")}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-snug text-center"
        >
          {t("mainHeading")}{" "}
          <span className="text-transparent text-6xl bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
            {t("highlightedText")}
          </span>
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          variants={itemVariants}
          className="text-base text-center max-w-xl mb-8 text-gray-200"
        >
          {t("subText")}
        </motion.p>

        {/* Button Container */}
        <motion.div variants={itemVariants}>
          <Link
            href="/add-property"
            className="relative flex items-center justify-center gap-2 
              px-6 py-3 w-[230px] h-12 
              bg-gray-900 text-white font-semibold text-sm cursor-pointer 
              overflow-hidden shadow-md transition-all duration-300 
              active:translate-x-[5px] active:translate-y-[5px] group"
          >
            {/* Yellow Hover Animation - Fixed for RTL/LTR */}
            <span
              className={`absolute w-[230px] h-[230px] bg-yellow-500 
                transition-all duration-300 top-0
                ${
                  isRtl
                    ? "-right-full group-hover:-translate-x-full group-hover:-translate-y-1/2"
                    : "-left-full group-hover:translate-x-full group-hover:-translate-y-1/2"
                }`}
            ></span>

            <ChevronsRight
              className={`w-4 h-4 relative z-10 ${isRtl ? "rotate-180" : ""}`}
            />
            <span className="relative z-10">{t("buttonText")}</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
