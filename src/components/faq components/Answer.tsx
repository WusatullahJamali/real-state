// components/FAQ.tsx (Shadows Removed)

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

type FAQItem = {
  q: string;
  a: string;
  category: string;
};

export default function FAQ() {
  // Changed namespace to fFAQ
  const t = useTranslations("fFAQ");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const faqs: FAQItem[] = t.raw("items");
  const categoryLabels = t.raw("categories");

  // Create category list starting with "All"
  const categories = ["All", ...Object.keys(categoryLabels)];

  const filteredFAQs = faqs.filter(
    (f) =>
      (selectedCategory === "All" || f.category === selectedCategory) &&
      (f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleIndex = (index: number) => {
    setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
  };

  return (
    <section
      className="py-24 bg-[#F8FAFC] min-h-screen font-sans selection:bg-indigo-100 selection:text-black"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-yellow-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" /> {t("badge")}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">
            {t("title")}{" "}
            <span className="text-yellow-600">{t("titleHighlight")}</span>
          </h1>
          <p className="text-black text-lg max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* --- Search & Filter Bar --- */}
        <div className="mb-12 space-y-6">
          <div className="relative group">
            <Search
              className={`absolute ${
                isRtl ? "right-5" : "left-5"
              } top-1/2 -translate-y-1/2 w-5 h-5 text-black group-focus-within:text-yellow-500 transition-colors`}
            />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full ${
                isRtl ? "pr-14 pl-6" : "pl-14 pr-6"
              } py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-500/5 focus:border-yellow-500 transition-all text-black shadow-sm placeholder:text-gray-600`}
            />
          </div>

          <div
            className={`flex gap-2 flex-wrap justify-center ${
              isRtl ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {categories.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === catKey
                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-200"
                    : "bg-white border-slate-200 text-black hover:border-yellow-300 hover:text-yellow-600"
                }`}
              >
                {catKey === "All" ? t("allCategory") : categoryLabels[catKey]}
              </button>
            ))}
          </div>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <motion.div
                    key={item.q}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className={`overflow-hidden rounded-2xl transition-all duration-500 border ${
                      isOpen
                        ? "bg-white border-indigo-200 shadow-xl shadow-indigo-500/5"
                        : "bg-white border-slate-200 hover:border-yellow-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
                    >
                      <span
                        className={`text-lg font-medium transition-colors duration-300 ${
                          isRtl ? "text-right" : "text-left"
                        } ${isOpen ? "text-yellow-600" : "text-black"}`}
                      >
                        {item.q}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-yellow-600 text-white rotate-180"
                            : "bg-slate-100 text-black"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div
                            className={`px-8 pb-8 text-black leading-relaxed border-t border-slate-50 pt-6 ${
                              isRtl ? "text-right" : "text-left"
                            }`}
                          >
                            <p className="max-w-[90%] mx-auto md:mx-0">
                              {item.a}
                            </p>
                            <div
                              className={`mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-600 cursor-pointer hover:underline ${
                                isRtl ? "flex-row-reverse" : ""
                              }`}
                            >
                              {t("learnMore")}{" "}
                              <ArrowRight
                                className={`w-3.5 h-3.5 ${
                                  isRtl ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Search className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-black font-medium">{t("noResults")}</h3>
                <p className="text-black text-sm mt-1">{t("noResultsDesc")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 text-center">
          <p className="text-black text-sm">
            {t("footerText")}{" "}
            <span className="text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700 transition-colors">
              <Link href="/contact">{t("footerLink")}</Link>
            </span>{" "}
            {t("footerSuffix")}
          </p>
        </div>
      </div>
    </section>
  );
}
