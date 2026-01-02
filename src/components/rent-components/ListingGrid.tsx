"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { RentListing } from "./RentData";
import { useTranslations, useLocale } from "next-intl";

interface Props {
  title: string;
  subtitle?: string;
  listings: RentListing[];
  linkHref?: string;
  sectionKey: string; // "newListings", "explore", etc.
}

export function ListingGrid({
  title,
  subtitle,
  listings,
  linkHref,
  sectionKey,
}: Props) {
  const t = useTranslations("rent");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="max-w-7xl mx-auto p-6 text-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={`mb-6 ${isRTL ? "text-right" : "text-left"}`}>
        <h1 className="text-3xl font-bold mb-1">{title}</h1>
        {subtitle && linkHref && (
          <Link
            href={linkHref}
            className="text-yellow-600 hover:underline text-sm font-semibold"
          >
            {subtitle}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((listing) => {
          const isSaved = saved.includes(listing.id);

          // LOOKUP TRANSLATED TEXT FOR THIS SPECIFIC ITEM
          const itemText = t.raw(`sections.${sectionKey}.items.${listing.id}`);
          const badgeText = t(`sections.${sectionKey}.badge`);

          return (
            <Link
              key={listing.id}
              href={`/rent/${listing.id}`}
              className="block"
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={itemText.address}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-3 ${
                      isRTL ? "right-3" : "left-3"
                    } bg-yellow-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full`}
                  >
                    {badgeText}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(listing.id);
                    }}
                    className={`absolute top-3 ${
                      isRTL ? "left-3" : "right-3"
                    } bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isSaved ? "fill-red-500 text-red-500" : "text-gray-700"
                      }`}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 font-medium mb-1">
                    {itemText.type}
                  </div>
                  <div className="text-2xl font-bold mb-2">{listing.price}</div>
                  <div className="text-sm text-gray-700 mb-3 flex items-center gap-1">
                    <span>
                      {listing.beds} {t("labels.bed")}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>
                      {listing.baths} {t("labels.bath")}
                    </span>
                    {listing.sqft && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span>
                          {listing.sqft} {t("labels.sqft")}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-black border-t pt-3">
                    <div className="font-medium">{itemText.address}</div>
                    <div className="text-gray-500">{itemText.city}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
