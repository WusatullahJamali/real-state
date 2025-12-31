"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useTranslations, useMessages, useLocale } from "next-intl";

const InfoCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const t = useTranslations("propertyCards");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const popAnimation: Variants = {
    hidden: { opacity: 0, x: isRtl ? -50 : 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={popAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-full overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer"
      >
        {/* IMAGE SECTION */}
        <div className="relative h-48 sm:h-52">
          <Image
            src={item.imageSrc}
            alt="property-news"
            fill
            className="object-cover"
          />

          {/* CATEGORY BADGE */}
          <span
            className={`absolute top-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 text-[10px] font-bold text-white rounded-full uppercase ${item.categoryColor}`}
          >
            {t(`categories.${item.categoryKey}`)}
          </span>

          {/* OPTIONAL BADGE */}
          {item.badgeKey && (
            <span
              className={`absolute bottom-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 text-xs font-bold text-white rounded-full ${item.badgeBgColor}`}
            >
              {t(`badges.${item.badgeKey}`)}
            </span>
          )}
        </div>

        {/* TEXT SECTION */}
        <div className="p-4 text-left rtl:text-right">
          <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-relaxed">
            {item.title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PropertyCards: React.FC = () => {
  const messages = useMessages() as any;
  const items = messages.propertyCards?.items || [];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: any, index: number) => (
            <InfoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCards;
