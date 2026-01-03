"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

// Reusable FAQ Item with better accessibility and Lucide icons
const FAQItem = ({
  question,
  answer,
  isRtl,
}: {
  question: string;
  answer: string;
  isRtl: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left rtl:text-right focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 font-bold text-base group-hover:text-yellow-600 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Agent2 = () => {
  const t = useTranslations("Agent2");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // FAQ keys mapping for clean iteration
  const faqKeys = [
    "whyWork",
    "howFind",
    "howChosen",
    "privacy",
    "fees",
  ] as const;

  return (
    <section className="py-20 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-stretch gap-12 px-6">
        {/* Right: Image Wrapper */}
        <div className="lg:w-1/2 w-full relative h-80 lg:h-auto min-h-[400px]">
          <Image
            src="/shahzaib.png"
            alt={t("title")}
            fill
            className="object-cover rounded-3xl shadow-lg"
            sizes="(max-w-768px) 100vw, 50vw"
          />
        </div>

        {/* Left: FAQ Content */}
        <div className="lg:w-1/2 w-full bg-white p-2 md:p-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
            {t("description")}
          </p>

          <div className="space-y-0">
            {faqKeys.map((key) => (
              <FAQItem
                key={key}
                question={t(`faqs.${key}.question`)}
                answer={t(`faqs.${key}.answer`)}
                isRtl={isRtl}
              />
            ))}
          </div>

          <div className="mt-10">
            <button className="flex items-center px-8 py-4 border-2 border-gray-200 bg-white text-black hover:border-yellow-500 hover:bg-yellow-50 transition-all rounded-full text-base font-bold group">
              {t("ctaButton")}
              {isRtl ? (
                <ChevronLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent2;
