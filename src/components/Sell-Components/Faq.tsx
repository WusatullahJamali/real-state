"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const t = useTranslations("FAQ");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Accessing the array of FAQ items from JSON
  const faqs = t.raw("items") as FaqItem[];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-white w-full flex justify-center py-12 px-4"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl w-full">
        {/* Title */}
        <div className="mb-8">
          <h2
            className={`text-3xl font-bold text-black ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            {t("title")}
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="divide-y divide-gray-200">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`flex justify-between items-center w-full focus:outline-none group ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  {/* Question */}
                  <h3
                    className={`text-lg font-semibold text-black ${
                      isRtl ? "pl-8" : "pr-8"
                    }`}
                  >
                    {item.question}
                  </h3>

                  {/* Chevron Icon */}
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-black" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-black" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-black leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;