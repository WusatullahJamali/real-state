"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface BuyCardsProps {
  title: string;
  linkText: string;
  linkHref: string;
  properties: any[];
}

export default function BuyCards({
  title,
  linkText,
  linkHref,
  properties,
}: BuyCardsProps) {
  const locale = useLocale();
  if (!properties || properties.length === 0) return null;

  return (
    <div className="w-full bg-white">
      <section className="w-full sm:max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-4 flex flex-col items-start rtl:items-start">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Link
            // Updated link to include locale prefix
            href={`/${locale}${linkHref}`}
            className="text-sm text-gray-700 hover:text-gray-900 hover:underline w-fit"
          >
            {linkText} {locale === "ar" ? "←" : "→"}
          </Link>
        </div>

        {/* Grid Container with Stagger Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {properties.slice(0, 4).map((property) => (
            <motion.div
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

const PropertyCard = ({ property }: { property: any }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const t = useTranslations("buyCards");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const formatPrice = (price: number) => {
    const formatted = new Intl.NumberFormat(isRtl ? "ar-IQ" : "en-US").format(
      price
    );
    return `${formatted} ${t("currency")}`;
  };

  return (
    // Updated link to include locale prefix and dynamic ID
    <Link href={`/${locale}/buy/${property.id}`} className="block h-full">
      <motion.div
        className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg h-full transition-all"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Image & Overlay Section */}
        <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
          <AnimatePresence>
            {isImageLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-gray-200 animate-pulse"
              />
            )}
          </AnimatePresence>

          <Image
            src={property.image}
            alt="property"
            fill
            className={`object-cover transition-opacity duration-500 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsImageLoading(false)}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-white p-2 rounded-full shadow-md z-20 hover:scale-110 transition-transform active:scale-95"
          >
            <Heart
              size={18}
              fill={isFavorited ? "#ca8a04" : "none"}
              className={isFavorited ? "text-yellow-600" : "text-gray-700"}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-1 text-left rtl:text-right items-start rtl:items-start">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">
              {t(`propertyTypes.${property.typeKey}`)}
            </span>
          </div>

          <h3
            className="text-xl font-bold text-gray-900"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {formatPrice(property.price)}
          </h3>

          <div className="text-gray-700 text-sm font-medium flex flex-wrap gap-x-3 gap-y-1 mt-1">
            {property.specs.lotSizeKey ? (
              <span>
                {t(`specs.${property.specs.lotSizeKey}`, {
                  count: property.specs.lotSizeValue,
                })}
              </span>
            ) : (
              <>
                <span className="whitespace-nowrap">
                  {t("specs.beds", { count: property.specs.beds })}
                </span>
                <span className="whitespace-nowrap">
                  {t("specs.baths", { count: property.specs.baths })}
                </span>
                <span className="whitespace-nowrap">
                  {t("specs.sqft", { count: property.specs.sqft })}
                </span>
              </>
            )}
          </div>

          <div className="mt-2 text-sm text-gray-500 leading-snug w-full">
            <p className="truncate">{t(property.addressKey)}</p>
            <p className="truncate">{t(property.cityKey)}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
