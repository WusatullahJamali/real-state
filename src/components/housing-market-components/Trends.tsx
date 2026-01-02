"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Info, Activity, ArrowUpRight, Filter } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function MarketTrendsPage() {
  const t = useTranslations("MarketTrends");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const stats = t.raw("stats");
  const regionalData = t.raw("regional.data");
  const chartLabels = t.raw("chart.labels");
  const verdictPoints = t.raw("verdict.points");

  return (
    <div
      className="min-h-screen bg-white text-black font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <header className="pt-24 pb-16 px-6 text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-yellow-600 font-bold tracking-widest uppercase text-xs">
            <Activity size={14} /> {t("liveIntelligence")}
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-yellow-600">
            {t("mainTitle")}
          </h1>
          <p className="text-lg md:text-xl text-black font-light leading-relaxed">
            {t("mainSubtitle")}
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-yellow-600 transition-all group"
            >
              <div
                className={`flex justify-between items-start mb-4 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <p className="text-xs font-bold text-black uppercase tracking-widest">
                  {stat.label}
                </p>
                <div
                  className={`p-1 px-2 rounded-md text-[10px] font-bold ${
                    stat.change.includes("+")
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <h3 className="text-4xl font-black text-black mb-2">
                {stat.value}
              </h3>
              <p className="text-xs text-black leading-relaxed">{stat.info}</p>
            </motion.div>
          ))}
        </div>

        {/* ANALYTICS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* PRICE TREND CHART */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-10 border border-gray-100 overflow-hidden relative">
            <div
              className={`flex justify-between items-center mb-10 ${
                isRtl ? "flex-row-reverse text-right" : "text-left"
              }`}
            >
              <div>
                <h2 className="text-2xl font-black text-black">
                  {t("chart.title")}
                </h2>
                <p className="text-black text-sm">{t("chart.subtitle")}</p>
              </div>
            </div>

            <div
              className={`h-64 flex items-end gap-3 pb-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              {[40, 55, 48, 70, 85, 90, 88, 95, 110, 100, 120, 135].map(
                (h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-yellow-500/20 hover:bg-yellow-600 rounded-t-2xl transition-all relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h * 15}
                    </div>
                  </motion.div>
                )
              )}
            </div>
            <div
              className={`flex justify-between text-[10px] font-bold text-black mt-4 border-t pt-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              {chartLabels.map((label: string, i: number) => (
                <span key={i}>{label}</span>
              ))}
            </div>
          </div>

          {/* MARKET VERDICT */}
          <div className="lg:col-span-4 bg-yellow-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <TrendingUp
              className={`absolute top-4 ${
                isRtl ? "left-4" : "right-4"
              } opacity-10`}
              strokeWidth={1}
              size={100}
            />
            <h2
              className={`text-2xl font-black mb-8 flex items-center gap-2 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <Info size={24} />
              {t("verdict.title")}
            </h2>
            <ul className="space-y-6 relative z-10">
              {verdictPoints.map((text: string, i: number) => (
                <li
                  key={i}
                  className={`flex gap-4 items-start ${
                    isRtl ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-black mt-2 shrink-0" />
                  <p className="font-bold text-sm leading-tight">{text}</p>
                </li>
              ))}
            </ul>
            <button className="mt-12 w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition-all">
              {t("verdict.cta")}
            </button>
          </div>
        </div>

        {/* REGIONAL PERFORMANCE */}
        <div className="bg-white border border-gray-100 rounded-3xl p-10">
          <div
            className={`flex flex-col md:flex-row justify-between items-center mb-8 gap-4 ${
              isRtl ? "md:flex-row-reverse" : ""
            }`}
          >
            <h2 className="text-3xl font-black text-yellow-600">
              {t("regional.title")}
            </h2>
            <div className="relative">
              <Filter
                className={`absolute ${
                  isRtl ? "right-4" : "left-4"
                } top-1/2 -translate-y-1/2 text-black`}
                size={16}
              />
              <input
                type="text"
                placeholder={t("regional.searchPlaceholder")}
                className={`${
                  isRtl ? "pr-12 pl-6" : "pl-12 pr-6"
                } py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-yellow-500 transition-all outline-none`}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className={`w-full ${isRtl ? "text-right" : "text-left"}`}>
              <thead>
                <tr className="text-xs font-black text-black uppercase tracking-[0.2em] border-b">
                  <th className="pb-6 px-4">{t("regional.table.gov")}</th>
                  <th className="pb-6 px-4">{t("regional.table.growth")}</th>
                  <th className="pb-6 px-4">{t("regional.table.price")}</th>
                  <th className="pb-6 px-4">{t("regional.table.status")}</th>
                  <th
                    className={`pb-6 px-4 ${
                      isRtl ? "text-left" : "text-right"
                    }`}
                  >
                    {t("regional.table.action")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {regionalData.map((gov: any, i: number) => (
                  <tr
                    key={i}
                    className="group hover:bg-yellow-50/30 transition-colors"
                  >
                    <td className="py-6 px-4 font-bold text-black">
                      {gov.name}
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-green-600 font-bold">
                        +{gov.growth}%
                      </span>
                    </td>
                    <td className="py-6 px-4 text-black font-medium">
                      {gov.price}
                    </td>
                    <td className="py-6 px-4">
                      <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-black">
                        {gov.status}
                      </span>
                    </td>
                    <td
                      className={`py-6 px-4 ${
                        isRtl ? "text-left" : "text-right"
                      }`}
                    >
                      <button className="p-2 rounded-lg hover:bg-yellow-600 hover:text-white transition-all text-black">
                        <ArrowUpRight
                          size={20}
                          className={isRtl ? "rotate-[-90deg]" : ""}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* FOOTER CTA */}
      <section className="bg-white py-24 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-600">
            {t("tfooter.title")}
          </h2>
          <p className="text-black text-lg italic font-light">
            {t("tfooter.quote")}
          </p>
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 ${
              isRtl ? "sm:flex-row-reverse" : ""
            }`}
          >
            <button className="px-10 py-4 bg-yellow-600 text-white font-bold rounded-2xl hover:bg-gray-900 transition-all">
              {t("tfooter.btn1")}
            </button>
            <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all">
              {t("tfooter.btn2")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
