"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";

const AdviceCard = ({
  image,
  title,
  badge,
}: {
  image: string;
  title: string;
  badge: string;
}) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group text-black">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge - Position switches based on RTL */}
        <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}>
          <span className="bg-yellow-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className={`text-lg font-semibold text-black leading-snug ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

const AdviceCardsGrid = () => {
  const t = useTranslations("rent.advice");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const cards = [
    { image: "/advice1.jpeg", title: t("cards.1") },
    { image: "/advice2.jpeg", title: t("cards.2") },
    { image: "/advice3.jpeg", title: t("cards.3") },
    { image: "/advice4.jpeg", title: t("cards.4") },
  ];

  return (
    <section className="py-16 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <AdviceCard
              key={index}
              image={card.image}
              title={card.title}
              badge={t("badge")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdviceCardsGrid;
