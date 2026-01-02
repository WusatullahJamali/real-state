"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  DollarSign,
  FileQuestionMark,
  House,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Static metadata that doesn't need translation logic
const GUIDES_METADATA = [
  {
    link: "/sell/seller-guides/should-i-sell-my-home-now",
    icon: <FileQuestionMark className="w-6 h-6 text-yellow-500" />,
  },
  {
    link: "/sell/seller-guides/how-much-is-my-home-worth",
    icon: <House className="w-6 h-6 text-yellow-500" />,
  },
  {
    link: "/sell/seller-guides/how-should-i-sell-my-home",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
  {
    link: "/sell/seller-guides/selling-costs",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
];

export default function SellerGuides() {
  const t = useTranslations("SellerGuides");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Combine translated text with static metadata
  const guides = (t.raw("guides") as any[]).map((guide, index) => ({
    ...guide,
    ...GUIDES_METADATA[index],
  }));

  return (
    <section className="bg-white py-20 text-black" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              {t("title")}
            </h2>
            <p className="text-black mt-2 max-w-xl">{t("description")}</p>
          </div>

          <Link
            href="/guides/home-selling-guide"
            className="flex items-center font-semibold text-yellow-600 hover:text-yellow-500 transition"
          >
            {t("completeGuide")}
            <ArrowRight
              className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`}
            />
          </Link>
        </div>

        {/* Cards Grid – 2 x 2 */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={`${guide.title}-${index}`}
              href={guide.link}
              className="
                group relative overflow-hidden
                rounded-3xl bg-white p-8
                border border-gray-100
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl hover:border-yellow-200
              "
            >
              {/* Subtle Gradient Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Icon */}
              <div
                className={`relative z-10 w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition`}
              >
                {guide.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-black leading-relaxed max-w-md">
                {guide.description}
              </p>

              {/* Arrow */}
              <div
                className={`absolute bottom-6 text-black group-hover:text-yellow-600 transition-transform duration-300 ${
                  isRtl ? "left-6" : "right-6"
                }`}
              >
                <ChevronRight
                  className={`w-6 h-6 ${
                    isRtl
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
