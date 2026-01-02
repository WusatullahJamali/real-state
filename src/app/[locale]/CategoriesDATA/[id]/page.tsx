"use client";

import Image from "next/image";
import Link from "next/link";
import { CategoriesDATA } from "./Data";
import { useTranslations, useLocale } from "next-intl";

export default function CategoriesListingPage() {
  const t = useTranslations("CategoriesListing");
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";

  return (
    <div className="bg-white min-h-screen py-10" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-6">
        {/* BACK BUTTON - MOBILE ONLY */}
        <div className="mb-6 md:hidden">
          <Link
            // Added locale prefix to the home link
            href={`/${locale}`}
            className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            {isRtl ? "←" : "→"} {t("backHome")}
          </Link>
        </div>

        <h1
          className={`text-3xl font-bold text-black mb-8 ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          {t("pageTitle")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CategoriesDATA.map((property) => {
            // Access translated content based on current locale
            const content = property[locale];

            return (
              <Link
                key={property.id}
                // Prepend locale to the detail page link
                href={`/${locale}/CategoriesDATA/list/${property.id}`}
                className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={property.images[0]}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>
                  <h2 className="text-lg font-semibold text-black line-clamp-1">
                    {content.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-1">
                    {content.location}
                  </p>

                  <p className="text-yellow-600 font-bold text-xl mt-2">
                    {property.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
