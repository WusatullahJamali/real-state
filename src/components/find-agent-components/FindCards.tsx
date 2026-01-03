"use client";

import React, { useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";

const FindCards = () => {
  const t = useTranslations("FindCards");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Data mapping images to translation keys
  const cards = useMemo(
    () => [
      {
        key: "support",
        img: "/find1.jpg",
      },
      {
        key: "expertise",
        img: "/find2.jpg",
      },
      {
        key: "fees",
        img: "/find3.png",
      },
    ],
    []
  );

  return (
    <section className="bg-white py-20" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("headerTitle")}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("headerDesc")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {cards.map((card) => (
            <div
              key={card.key}
              className="bg-white rounded-3xl transition-all duration-300 overflow-hidden group border border-transparent hover:border-gray-100"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden">
                <img
                  src={card.img}
                  alt={t(`cards.${card.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-yellow-600">
                  {t(`cards.${card.key}.title`)}
                </h2>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {t(`cards.${card.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <button className="px-8 py-4 border-2 border-gray-200 bg-white text-black rounded-full hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 font-bold text-lg">
            {t("ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindCards;
