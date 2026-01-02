"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // 1. Added useLocale

export default function PromoBanner() {
  const t = useTranslations("home.promoBanner");
  const locale = useLocale(); // 2. Get current locale
  const isRtl = locale === "ar";

  return (
    // 3. Added dir to handle RTL layout automatically
    <div
      className="w-full bg-white flex justify-center py-6 px-4 sm:px-6"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1216px] mx-auto bg-white border border-gray-200 shadow-sm rounded-xl 
                   p-4 flex flex-col sm:flex-row items-center gap-5"
      >
        {/* Left Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-28 h-16 sm:w-36 sm:h-20 shrink-0"
        >
          <Image
            src="/promo2.webp"
            alt={t("imageAlt")}
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center sm:text-left rtl:sm:text-right">
          <motion.h2
            initial={{ opacity: 0, x: isRtl ? 10 : -10 }} // Adjust animation direction
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold text-gray-800"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: isRtl ? 10 : -10 }} // Adjust animation direction
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* CTA Button */}
        <Link
          href="/sell/neighbourhood"
          className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-lg text-sm sm:text-base hover:bg-yellow-600 transition inline-block whitespace-nowrap shadow-sm shrink-0"
        >
          <Link
            // 4. Updated href with locale prefix
            href={`/${locale}/sell/neighbourhood`}
            className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-lg text-sm sm:text-base hover:bg-yellow-600 transition inline-block whitespace-nowrap shadow-sm"
          >
            {t("button")}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
