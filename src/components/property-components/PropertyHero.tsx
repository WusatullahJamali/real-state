"use client";

import React, { useState } from "react";
import { Search, MapPin, Filter, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl"; // Added imports

const PropertyHero: React.FC = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("PropertyHero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="relative w-full min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 🔙 Mobile Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 start-4 z-20 flex items-center gap-1 rounded-full bg-yellow-500 px-3 py-2 text-sm font-medium text-white shadow-lg md:hidden"
      >
        <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
        {t("back")}
      </button>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/property.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase">{t("badge")}</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
          {t("titleLine1")}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-yellow-500">
            {t("titleLine2")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm sm:text-lg max-w-xl mx-auto mb-8">
          {t("subtitle")}
        </p>

        {/* Desktop Search */}
        <div className="hidden sm:flex bg-white/95 p-2 rounded-full shadow-xl max-w-4xl mx-auto items-center">
          <div
            className={`flex items-center w-full px-5 py-2 ${
              isRtl ? "border-l" : "border-r"
            } border-gray-200`}
          >
            <MapPin className="w-5 h-5 text-gray-400 mx-2" />
            <input
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent outline-none text-gray-800 text-sm font-medium"
            />
          </div>

          <div className="flex items-center w-full px-5 py-2">
            <Filter className="w-5 h-5 text-gray-400 mx-2" />
            <select className="w-full bg-transparent outline-none text-gray-800 cursor-pointer text-sm font-medium appearance-none">
              <option>{t("allTypes")}</option>
              <option>{t("types.house")}</option>
              <option>{t("types.apartment")}</option>
              <option>{t("types.villa")}</option>
            </select>
          </div>

          <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
            <Search className="w-5 h-5" />
            {t("searchBtn")}
          </button>
        </div>

        {/* Popular Cities */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
          <span className="text-white/60 font-semibold uppercase">
            {t("popular")}:
          </span>
          {["Baghdad", "Erbil", "Basra", "Mosul"].map((city) => (
            <span
              key={city}
              className="border-b border-white/20 pb-0.5 text-gray-100"
            >
              {/* This looks up the city name in the PropertyCard translation we made earlier */}
              {t(`cities.${city}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
