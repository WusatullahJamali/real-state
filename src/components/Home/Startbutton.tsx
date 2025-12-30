"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PromoBanner() {
  const t = useTranslations("home.promoBanner");

  return (
    <div className="w-full bg-white flex justify-center py-6">
      <div
        className="w-full max-w-[1216px] mx-auto bg-white border border-gray-200 shadow-sm rounded-xl 
                   p-4 flex flex-col sm:flex-row items-center gap-5"
      >
        {/* Left Image */}
        <div className="relative w-28 h-16 sm:w-36 sm:h-20 shrink-0">
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
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold text-gray-800"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
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
          {t("button")}
        </Link>
      </div>
    </div>
  );
}
