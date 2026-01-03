"use client";

import React, { useState } from "react";
import { Search, MapPin, User } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

type SearchType = "Buy" | "Sell" | "Both";

const FindHero = () => {
  const t = useTranslations("FindHero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [type, setType] = useState<SearchType>("Both");
  const [agent, setAgent] = useState("");
  const [location, setLocation] = useState("");

  const tabItems: SearchType[] = ["Buy", "Sell", "Both"];

  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/findhero2.png')" }}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Header */}
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          {t("title")}
        </h1>
        <p className="text-white text-lg mt-2 mb-8">{t("subtitle")}</p>

        {/* Tabs */}
        <ul className="flex justify-center gap-6 text-white text-lg font-medium mb-8">
          {tabItems.map((item) => (
            <li
              key={item}
              onClick={() => setType(item)}
              className={`cursor-pointer underline-offset-4 transition
                ${type === item ? "underline" : "hover:underline"}`}
            >
              {t(`tabs.${item}`)}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-xl max-w-4xl mx-auto flex items-center px-4 py-3 gap-3">
          {/* Agent Input */}
          <div className="flex items-center flex-1 gap-2">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t("placeholders.agent")}
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
              className="w-full outline-none text-black text-lg bg-transparent"
            />
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200"></div>

          {/* Location Input */}
          <div className="flex items-center flex-1 gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t("placeholders.location")}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-black text-lg bg-transparent"
            />
          </div>

          {/* Search Button */}
          <button
            aria-label={t("searchButton")}
            className={`bg-yellow-500 hover:bg-yellow-400 transition rounded-full p-3 ${
              isRtl ? "mr-2" : "ml-2"
            }`}
          >
            <Search className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindHero;
