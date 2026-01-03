"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Star } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Know() {
  const t = useTranslations("Know");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const containerVariants = (direction: number) => ({
    hidden: { x: direction, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  });

  return (
    <section
      className="relative py-24 bg-white text-black overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Soft Background Accent */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gray-50/50 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-50/50 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants(isRtl ? 40 : -40)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-yellow-600 font-semibold mb-2">{t("badge")}</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            {t("mainTitle")}
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("subTitle")}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 font-medium">
            {t("description1")}
          </p>

          <p className="text-gray-600 leading-relaxed font-medium">
            {t("description2")}
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={containerVariants(isRtl ? -40 : 40)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {/* Card 1 */}
          <div className="flex gap-5 items-start">
            <div className="bg-yellow-500 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm">
              <Home size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {t("cards.homes.title")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {t("cards.homes.text")}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5 items-start">
            <div className="bg-yellow-500 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm">
              <Star size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {t("cards.quality.title")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {t("cards.quality.text")}
              </p>
            </div>
          </div>

          {/* EXPERIENCE BOX */}
          <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200 max-w-sm text-center">
            <p className="text-gray-900 font-bold text-lg">
              {t("experience.team")}
            </p>

            <div
              className={`flex justify-center items-end gap-2 mt-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <h1 className="text-5xl font-bold text-yellow-600 leading-none">
                {t("experience.number")}
              </h1>
              <p className="text-gray-600 font-semibold text-lg">
                {t("experience.unit")}
              </p>
            </div>

            <p className="text-gray-700 mt-2 text-sm font-medium">
              {t("experience.label")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
