"use client";

import React from "react";
import { Property } from "@/data/iraqproperties";
import { Bed, Bath, Ruler } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface PropertyCardProps {
  property: Property;
}

const IQD_PER_USD = 1300;
const SQFT_TO_SQM = 0.092903;

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const t = useTranslations("PropertyHero.PropertyCard");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const formatUSD = (priceIQD: number) => {
    const usd = priceIQD / IQD_PER_USD;
    return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  };

  const specs = property.specs as any;

  /* ---------- SAFE TRANSLATION ---------- */
  const translateOrFallback = (key: string, value: string) => {
    const translated = t(`${key}.${value}`, { default: "" });
    return translated || value;
  };

  /* ---------- NORMALIZE AREA ---------- */
  let areaSqm: number | null = null;

  if (specs?.sqm) {
    areaSqm = specs.sqm;
  } else if (specs?.lotSizeSqM) {
    areaSqm = specs.lotSizeSqM;
  } else if (specs?.areaSqm) {
    areaSqm = specs.areaSqm;
  } else if (specs?.area) {
    areaSqm = specs.area;
  } else if (specs?.sqft) {
    areaSqm = Math.round(specs.sqft * SQFT_TO_SQM);
  }

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden w-full cursor-pointer"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="h-48 bg-gray-200 overflow-hidden relative">
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 space-y-3 text-start">
        <p className="text-sm font-extrabold uppercase tracking-wide text-gray-500">
          {translateOrFallback("cities", property.city)} ·{" "}
          {translateOrFallback("types", property.type)}
        </p>

        <div>
          <h3 className="text-xl font-extrabold text-blue-700">
            {formatUSD(property.priceIQD)}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {property.priceIQD.toLocaleString()} IQD
          </p>
        </div>

        <p className="text-sm text-gray-800 font-medium">{property.address}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 pt-3 border-t border-gray-100">
          {property.type === "Land" && areaSqm && (
            <span className="flex items-center gap-1">
              <Ruler size={16} />
              <strong>{areaSqm}</strong> {t("unit.sqm")} {t("labels.lot")}
            </span>
          )}

          {property.type !== "Land" && (
            <>
              {specs?.beds !== undefined && (
                <span className="flex items-center gap-1">
                  <Bed size={16} />
                  <strong>{specs.beds}</strong> {t("labels.beds")}
                </span>
              )}

              {specs?.baths !== undefined && (
                <span className="flex items-center gap-1">
                  <Bath size={16} />
                  <strong>{specs.baths}</strong> {t("labels.baths")}
                </span>
              )}

              {areaSqm && (
                <span className="flex items-center gap-1">
                  <Ruler size={16} />
                  <strong>{areaSqm}</strong> {t("unit.sqm")}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
