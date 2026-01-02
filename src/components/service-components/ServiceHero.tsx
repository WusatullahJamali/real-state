"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const ServiceHero: React.FC = () => {
  const t = useTranslations("ServiceHero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/srr.avif"
          alt="Home service tools"
          fill
          priority
          className="object-cover pointer-events-none brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {/* Badge */}
          <motion.span
            className="mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 backdrop-blur"
            variants={{
              hidden: { opacity: 0, y: -16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {t("badge")}
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight drop-shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            {t("titleMain")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              {t("titleHighlight")}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="max-w-xl text-sm sm:text-base md:text-lg font-medium text-neutral-200 mb-6 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {t("subtext")}
          </motion.p>

          {/* CTA Placeholder */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.96 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default ServiceHero;
