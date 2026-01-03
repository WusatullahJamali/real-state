"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";

const AboutHero = () => {
  // This "AboutHero" string must match the key in your JSON file exactly
  const t = useTranslations("AboutHero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 text-white overflow-hidden flex items-center justify-center"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0">
        <img
          src="/hp-hero.webp"
          alt={t("imageAlt")} // Accesses "imageAlt" inside "AboutHero"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          {t("title")}
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
