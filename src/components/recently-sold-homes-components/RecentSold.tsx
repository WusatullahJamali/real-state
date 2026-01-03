"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Search, MapPin, Bed, Bath, Move, ArrowUpRight } from "lucide-react";
import { soldListings } from "./RecentSoldData";

const RecentSold = () => {
  const t = useTranslations("recentSold");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = soldListings.filter((item) => {
    const address = t(`listings.${item.id}.address`).toLowerCase();
    const city = t(`listings.${item.id}.city`).toLowerCase();
    const query = searchQuery.toLowerCase();
    return address.includes(query) || city.includes(query);
  });

  return (
    <div
      className="w-full bg-[#F8FAFC] text-slate-900 min-h-screen py-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900">
              {t("title")}{" "}
              <span className="text-yellow-500 relative inline-block">
                {t("titleHighlight")}
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-yellow-500/20 rounded-full"></span>
              </span>
            </h1>
          </div>

          <div className="relative group w-full lg:w-[450px]">
            <Search
              className={`absolute ${
                isRTL ? "right-5" : "left-5"
              } top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors`}
              size={22}
            />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className={`w-full py-5 ${
                isRTL ? "pr-14 pl-6" : "pl-14 pr-6"
              } rounded-3xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 transition-all text-lg`}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* LISTING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt="Property"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* SOLD OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                <div
                  className={`absolute top-6 ${
                    isRTL ? "right-6" : "left-6"
                  } flex flex-col gap-2`}
                >
                  <span className="bg-yellow-500 text-black text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {t(`listings.${item.id}.status`)}
                  </span>
                </div>

                <div
                  className={`absolute bottom-6 ${
                    isRTL ? "left-6" : "right-6"
                  }`}
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="text-black" size={24} />
                  </div>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl font-bold tracking-tight text-slate-900">
                    {item.price}
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-8 py-4 border-y border-slate-50">
                  <div className="flex items-center gap-2">
                    <Bed size={20} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      {item.beds}{" "}
                      <span className="text-slate-400 font-medium">
                        {t("labels.beds")}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={20} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      {item.baths}{" "}
                      <span className="text-slate-400 font-medium">
                        {t("labels.baths")}
                      </span>
                    </span>
                  </div>
                  {item.sqft && (
                    <div className="flex items-center gap-2">
                      <Move size={20} className="text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">
                        {item.sqft}{" "}
                        <span className="text-slate-400 font-medium">
                          {t("labels.sqft")}
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                    <MapPin size={22} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-yellow-600 transition-colors">
                      {t(`listings.${item.id}.address`)}
                    </h4>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-widest">
                      {t(`listings.${item.id}.city`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredListings.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[4rem] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              {t("noResults")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentSold;
