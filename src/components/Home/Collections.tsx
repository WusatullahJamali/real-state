"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // 1. Added useLocale

interface CollectionItem {
  title: string;
  count: number;
  img: string;
  href: string;
}

export default function CollectionsSection() {
  const t = useTranslations("home.collections");
  const locale = useLocale(); // 2. Get current locale (en or ar)
  const isRtl = locale === "ar";

  const collections = t.raw("items") as CollectionItem[];

  const cardVariants = (index: number): Variants => ({
    hidden: {
      opacity: 0,
      x: isRtl ? (index < 4 ? 120 : -120) : index < 4 ? -120 : 120,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.8,
        delay: index * 0.15,
      },
    },
  });

  return (
    <section
      className="bg-white py-16 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-3">{t("title")}</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-4 md:overflow-visible">
          {collections.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="min-w-[85%] snap-center md:min-w-0 group rounded-xl overflow-hidden transition-transform hover:scale-105"
            >
              <Link
                // 3. Updated href to include the locale prefix
                href={`/${locale}${item.href}`}
                className="block group rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent ${
                      isRtl ? "items-start" : "items-start"
                    }`}
                  >
                    <h3 className="text-white font-bold text-xl">
                      {item.title}
                    </h3>

                    <p className="text-white text-sm">
                      {t("propertiesCount", { count: item.count })}
                    </p>

                    <span className="mt-3 px-6 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-lg transition group-hover:bg-yellow-400">
                      {t("viewButton")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      {/* Mobile Indicators */}
      <div className="mt-6 flex justify-center md:hidden">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}
