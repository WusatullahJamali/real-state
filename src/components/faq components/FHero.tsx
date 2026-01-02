"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";

const FHero = () => {
  const t = useTranslations("FHero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 text-white overflow-hidden flex items-center justify-center"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hp-hero.webp"
          alt={t("altText")}
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          {t("title")}
        </h1>
        <p className="mt-4 text-gray-200 text-lg md:text-xl">{t("subtitle")}</p>
      </div>

      {/* Wavy Section Divider (optional) */}
      {/* Add SVG or CSS wave here if needed */}
    </section>
  );
};

export default FHero;
