"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

interface Provider {
  id: number;
  nameKey: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  unit: string;
  badges: string[];
  image: string;
  descriptionKey: string;
}

const providers: Provider[] = [
  {
    id: 1,
    nameKey: "1",
    category: "Electrical",
    location: "Baghdad",
    rating: 4.9,
    reviews: 234,
    price: "$25",
    unit: "hour",
    badges: ["Verified", "Licensed"],
    image: "/er.jpg",
    descriptionKey: "1",
  },
  {
    id: 2,
    nameKey: "2",
    category: "Cleaning",
    location: "Erbil",
    rating: 4.8,
    reviews: 189,
    price: "$50",
    unit: "term",
    badges: ["Verified"],
    image: "/cl.jpg",
    descriptionKey: "2",
  },
  {
    id: 3,
    nameKey: "3",
    category: "AC & HVAC",
    location: "Baghdad",
    rating: 4.9,
    reviews: 312,
    price: "$35",
    unit: "visit",
    badges: ["Verified", "24/7"],
    image: "/ca.jpg",
    descriptionKey: "3",
  },
  {
    id: 4,
    nameKey: "4",
    category: "Plumbing",
    location: "Basra",
    rating: 4.7,
    reviews: 156,
    price: "$30",
    unit: "hour",
    badges: ["Verified", "Emergency"],
    image: "/pl.jpg",
    descriptionKey: "4",
  },
  {
    id: 5,
    nameKey: "5",
    category: "Renovation",
    location: "Baghdad",
    rating: 4.9,
    reviews: 278,
    price: "$100",
    unit: "project",
    badges: ["Verified", "Licensed"],
    image: "/hr.jpg",
    descriptionKey: "5",
  },
  {
    id: 6,
    nameKey: "6",
    category: "Landscaping",
    location: "Erbil",
    rating: 4.6,
    reviews: 142,
    price: "$40",
    unit: "visit",
    badges: ["Verified"],
    image: "/gm.jpg",
    descriptionKey: "6",
  },
  {
    id: 7,
    nameKey: "7",
    category: "Electronics",
    location: "Baghdad",
    rating: 4.8,
    reviews: 201,
    price: "$20",
    unit: "hour",
    badges: ["Verified", "Fast Service"],
    image: "/rh.png",
    descriptionKey: "7",
  },
  {
    id: 8,
    nameKey: "8",
    category: "Painting",
    location: "Mosul",
    rating: 4.7,
    reviews: 167,
    price: "$45",
    unit: "room",
    badges: ["Verified", "Licensed"],
    image: "/ppp.jpg",
    descriptionKey: "8",
  },
  {
    id: 9,
    nameKey: "9",
    category: "Locksmith",
    location: "Baghdad",
    rating: 4.9,
    reviews: 289,
    price: "$35",
    unit: "service",
    badges: ["Verified", "24/7"],
    image: "/locks.jpg",
    descriptionKey: "9",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const FeaturedProviders = () => {
  const t = useTranslations("FeaturedProviders");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="bg-[#fdfcfb] py-16 px-6 font-sans overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-left rtl:text-right"
        >
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl -mb-9 font-serif font-bold text-gray-800">
            {t("title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {providers.map((p) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border py-7 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6">
                <div className="flex gap-4 mb-4 items-start">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-md">
                    <Image
                      src={p.image}
                      alt={t(`providers.${p.nameKey}.name`)}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-[26px] leading-tight">
                      {t(`providers.${p.nameKey}.name`)}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500 mt-0.5">
                      <MapPin size={12} className="text-green-600" />
                      <p className="text-sm font-medium">
                        {t(`categories.${p.category}`)} •{" "}
                        {t(`locations.${p.location}`)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={
                            i < Math.round(p.rating) ? "currentColor" : "none"
                          }
                        />
                      ))}
                      <span className="text-xs font-bold mx-1 text-gray-700">
                        {p.rating}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        ({p.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-[18px] leading-relaxed mb-4 line-clamp-2 text-left rtl:text-right">
                  {t(`providers.${p.descriptionKey}.desc`)}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {p.badges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1 py-1 px-2 bg-green-50 text-green-700 text-[13px] font-bold rounded-md border border-green-100 uppercase"
                    >
                      <CheckCircle size={13} /> {t(`badges.${badge}`)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 mt-auto flex flex-row items-center justify-between gap-3">
                <div className="whitespace-nowrap text-left rtl:text-right">
                  <span className="text-[12px] uppercase text-gray-400 font-bold">
                    {t("startingFrom")}
                  </span>
                  <p className="text-md font-bold text-gray-900">
                    {p.price}
                    <span className="text-gray-500 font-normal italic">
                      {" "}
                      / {t(`units.${p.unit}`)}
                    </span>
                  </p>
                </div>

                {/* Updated Link with Locale prefix */}
                <Link href={`/${locale}/service/${p.id}`} className="block">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-yellow-700 transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    {t("bookNow")}
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
