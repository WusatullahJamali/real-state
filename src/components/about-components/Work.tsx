"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Home, CheckCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const STEP_ICONS = {
  step1: MapPin,
  step2: Phone,
  step3: Home,
  step4: CheckCircle,
} as const;

export default function Work() {
  const t = useTranslations("Work");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Define keys to iterate through
  const stepKeys = ["step1", "step2", "step3", "step4"] as const;

  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            {t("description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map((key, idx) => {
            const Icon = STEP_ICONS[key];
            const stepNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-gray-100 group-hover:text-yellow-100 transition-colors">
                    {stepNumber}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-200 group-hover:rotate-12 transition-transform">
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                  {t(`steps.${key}.title`)}
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  {t(`steps.${key}.text`)}
                </p>

                {/* Bottom Decorative Line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full ${
                    isRtl ? "origin-right" : "origin-left"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
