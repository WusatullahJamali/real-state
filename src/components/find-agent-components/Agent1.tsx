"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Agent1 = () => {
  const t = useTranslations("Agent1");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Feature keys mapping to JSON sub-objects
  const features = [
    { key: "professionalism", icon: "🏢", label: "Professionalism" },
    { key: "expertise", icon: "📍", label: "Local Expertise" },
    { key: "experience", icon: "🎖️", label: "Certifications" },
  ];

  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen bg-white overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* LEFT COLUMN: Image & Branding */}
      <div
        className="lg:w-1/2 w-full h-96 lg:h-auto bg-cover bg-center relative flex flex-col justify-end p-8 md:p-12 text-white"
        style={{ backgroundImage: "url('/shahzaib2.png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide uppercase">
            {t("networkTitle")}
          </h1>
        </div>
      </div>

      {/* RIGHT COLUMN: Content */}
      <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 flex flex-col justify-center">
        {/* Title and Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            {t("mainHeading")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {t("introText")}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-8">
          {features.map((feature) => (
            <div key={feature.key} className="flex flex-col group">
              <div className="flex items-center mb-2">
                <span
                  className="text-2xl mr-3 rtl:mr-0 rtl:ml-3 transition-transform group-hover:scale-110"
                  role="img"
                  aria-label={feature.label}
                >
                  {feature.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-800">
                  {t(`features.${feature.key}.title`)}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-9 rtl:pl-0 rtl:pr-9 font-medium">
                {t(`features.${feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="flex items-center px-8 py-4 border-2 border-gray-200 bg-white text-black hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 rounded-full text-base font-bold">
            {t("ctaButton")}
            {isRtl ? (
              <ChevronLeft className="mr-2 w-5 h-5" />
            ) : (
              <ChevronRight className="ml-2 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agent1;
