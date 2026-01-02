"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

interface Property {
  id: number;
  title: string;
  city: string;
  beds: string;
  baths: string;
  size: string;
  price: string;
  image: string;
  status: "sale" | "rent";
  batch?: "Hot Offer" | "New Listing" | null;
}

const STATIC_IMAGES: Record<number, string> = {
  1: "/property1.jpg",
  2: "/property2.webp",
  3: "/property3.webp",
  4: "/h1.jpeg",
  5: "/h2.jpg",
  6: "/h3.jpeg",
  10: "/property4.jpg",
  11: "/property5.webp",
  12: "/property6.webp",
  13: "/h4.avif",
  14: "/h5.jpg",
  15: "/h6.jpg",
};

interface TabButtonProps {
  id: "sale" | "rent";
  label: string;
  active?: boolean;
  onClick?: (id: "sale" | "rent") => void;
}
const TabButton: React.FC<TabButtonProps> = ({
  id,
  label,
  active,
  onClick,
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-lg font-semibold transition ${
      active
        ? "bg-yellow-500 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={() => onClick && onClick(id)}
  >
    {label}
  </motion.button>
);

const ProductCard: React.FC<{ property: Property }> = ({ property }) => {
  const t = useTranslations("RecentProperties.labels");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-lg text-black shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-56 w-full">
        <div
          className={`absolute top-4 ${
            isRtl ? "right-4" : "left-4"
          } z-10 px-3 py-1 rounded-full text-xs font-semibold ${
            property.status === "sale"
              ? "bg-green-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          {property.status === "sale" ? t("sale") : t("rent")}
        </div>

        {property.batch === "New Listing" && (
          <div
            className={`absolute top-4 ${
              isRtl ? "left-4" : "right-4"
            } z-10 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {t("newBatch")}
          </div>
        )}
        {property.batch === "Hot Offer" && (
          <div
            className={`absolute top-4 ${
              isRtl ? "left-4" : "right-4"
            } z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {t("hotBatch")}
          </div>
        )}

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <div className={`p-5 ${isRtl ? "text-right" : "text-left"}`}>
        <div
          className={`mb-2 text-sm text-gray-500 flex items-center ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <svg
            className={`w-4 h-4 ${isRtl ? "ml-1" : "mr-1"} text-yellow-500`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          {property.city}
        </div>

        <h5 className="text-xl font-semibold mb-3">{property.title}</h5>

        <ul
          className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 border-b pb-4 mb-4 ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.beds}
            </span>
          </li>
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.baths}
            </span>
          </li>
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.size}
            </span>
          </li>
        </ul>

        <div
          className={`flex items-center justify-between ${
            isRtl ? "flex-row-reverse" : ""
          }`}
        >
          <div className="text-2xl font-bold text-gray-900">
            {property.price}
          </div>
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg">
            {t("viewDetails")}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function RecentPropertiesSection() {
  const t = useTranslations("RecentProperties");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");
  const [filter, setFilter] = useState<"all" | "new" | "hot">("all");

  const rawData = t.raw(`data.${activeTab}`) as any[];
  const selectedList: Property[] = rawData.map((item) => ({
    ...item,
    status: activeTab,
    image: STATIC_IMAGES[item.id],
  }));

  const filteredProperties = selectedList.filter((p) => {
    if (filter === "all") return true;
    if (filter === "new") return p.batch === "New Listing";
    if (filter === "hot") return p.batch === "Hot Offer";
    return true;
  });

  return (
    <section className="py-16 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 ${
            isRtl ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="text-sm font-medium text-yellow-500 uppercase">
              {t("badge")}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-1">
              {t("title")}
            </h2>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0 ${
              isRtl ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="flex gap-4">
              <TabButton
                id="sale"
                label={t("tabs.sale")}
                active={activeTab === "sale"}
                onClick={setActiveTab}
              />
              <TabButton
                id="rent"
                label={t("tabs.rent")}
                active={activeTab === "rent"}
                onClick={setActiveTab}
              />
            </div>

            <motion.select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "all" | "new" | "hot")
              }
              className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 outline-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <option value="all">{t("filters.all")}</option>
              <option value="new">{t("filters.new")}</option>
              <option value="hot">{t("filters.hot")}</option>
            </motion.select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredProperties.map((property) => (
            <ProductCard key={property.id} property={property} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
