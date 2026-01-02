"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const ManageRentals = () => {
  const t = useTranslations("manageRentals");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Data mapping to match your images and section IDs
  const sections = [
    { id: "card1", img: "/a15.webp", bg: "bg-white", type: "cover" },
    { id: "card2", img: "/m1.png", bg: "bg-white", type: "cover" },
    { id: "card3", img: "/m3.png", bg: "bg-white", type: "contain" },
    { id: "card4", img: "/m4.png", bg: "bg-white", type: "contain" },
    { id: "card5", img: "/m5.png", bg: "bg-gray-50", type: "contain" },
    { id: "card6", img: "/m6.png", bg: "bg-white", type: "contain" },
    { id: "card7", img: "/m7.png", bg: "bg-gray-50", type: "contain" },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {sections.map((section, index) => {
        // Logic: Alternate image side based on index (Even = Text Left, Odd = Text Right)
        const isImageRight = index % 2 === 0;

        return (
          <section
            key={section.id}
            className={`${section.bg} py-16 overflow-hidden`}
          >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`${isImageRight ? "lg:order-1" : "lg:order-2"} ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
                  {t(`${section.id}.title`)}
                </h2>
                <p className="text-black text-lg mb-8 max-w-xl leading-relaxed">
                  {t(`${section.id}.description`)}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-3.5 rounded-full font-bold transition-all shadow-md"
                >
                  {t(`${section.id}.button`)}
                </motion.button>
              </motion.div>

              {/* IMAGE SIDE */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative w-full h-[300px] md:h-[400px] lg:h-[450px] ${
                  isImageRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={section.img}
                  alt={t(`${section.id}.title`)}
                  fill
                  priority={index === 0}
                  className={`${
                    section.type === "cover"
                      ? "object-cover rounded-2xl shadow-sm"
                      : "object-contain"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ManageRentals;
