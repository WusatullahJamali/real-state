"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Heart,
  Bed,
  Ruler,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const RentHouses = () => {
  const t = useTranslations("houses");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // We are no longer using getLoc() to fetch from JSON to avoid MISSING_MESSAGE errors
  const houseList = [
    {
      id: 1,
      title: isRTL ? "فيلا حديقة فاخرة" : "Luxury Garden Villa",
      price: 2500,
      bedrooms: 4,
      location: isRTL ? "المنطقة الخضراء، بغداد" : "Green Zone, Baghdad",
      image: "/house1.png",
      areaSqFt: 3500,
      amenities: [
        t("amenities.security"),
        t("amenities.pool"),
        t("amenities.gym"),
      ],
    },
    {
      id: 2,
      title: isRTL ? "شقة مودرن سكاي لاين" : "Modern Skyline Apartment",
      price: 1200,
      bedrooms: 2,
      location: isRTL ? "عنكاوا، أربيل" : "Ankawa, Erbil",
      image: "/house2.png",
      areaSqFt: 1100,
      amenities: [t("amenities.elevator"), t("amenities.security")],
    },
    {
      id: 3,
      title: isRTL ? "استوديو مريح" : "Urban Studio",
      price: 700,
      bedrooms: 1,
      location: isRTL ? "الفاو، البصرة" : "Al-Fao, Basra",
      image: "/house3.png",
      areaSqFt: 550,
      amenities: [t("amenities.security"), t("amenities.parking")],
    },
    {
      id: 5,
      title: isRTL ? "عقار ريفرسايد" : "Riverside Estate",
      price: 3500,
      bedrooms: 5,
      location: isRTL ? "المركز، البصرة" : "City Center, Basra",
      image: "/house5.jpg",
      areaSqFt: 4500,
      amenities: [t("amenities.pool"), t("amenities.beach")],
    },
    {
      id: 6,
      title: isRTL ? "رويال بنتهاوس" : "Royal Penthouse",
      price: 4000,
      bedrooms: 4,
      location: isRTL ? "الكرادة، بغداد" : "Karrada, Baghdad",
      image: "/house6.png",
      areaSqFt: 3800,
      amenities: [t("amenities.terrace"), t("amenities.elevator")],
    },
    {
      id: 10,
      title: isRTL ? "كوندو بريميوم" : "Premium Condo",
      price: 2000,
      bedrooms: 3,
      location: isRTL ? "المركز، أربيل" : "City Center, Erbil",
      image: "/house10.png",
      areaSqFt: 2500,
      amenities: [t("amenities.pool"), t("amenities.gym")],
    },
    {
      id: 11,
      title: isRTL ? "تاون هاوس كلاسيك" : "Classic Townhouse",
      price: 1800,
      bedrooms: 3,
      location: isRTL ? "المعقل، البصرة" : "Al-Maqal, Basra",
      image: "/house11.jpg",
      areaSqFt: 1900,
      amenities: [t("amenities.garage"), t("amenities.garden")],
    },
    {
      id: 12,
      title: isRTL ? "بنجالو حديث" : "Modern Bungalow",
      price: 1400,
      bedrooms: 3,
      location: isRTL ? "المدينة القديمة، الموصل" : "Old City, Mosul",
      image: "/house12.png",
      areaSqFt: 2200,
      amenities: [t("amenities.garden"), t("amenities.parking")],
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-[#FCFCFC] text-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("collection")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              {t("titleMain")}{" "}
              <span className="font-serif italic text-yellow-500">
                {t("titleItalic")}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 font-medium max-w-md">
              {t("description")}
            </p>
          </div>
          <Link
            href="/houses-for-rent"
            className="flex items-center gap-2 text-sm font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors"
          >
            {t("exploreAll")}{" "}
            <ArrowUpRight
              className={`w-4 h-4 ${isRTL ? "rotate-[270deg]" : ""}`}
            />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {houseList.map((house) => (
            <div
              key={house.id}
              className="group bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {t("verified")}
                  </span>
                </div>
                <button
                  onClick={(e) => toggleFav(e, house.id)}
                  className={`absolute top-4 ${
                    isRTL ? "left-4" : "right-4"
                  } bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-sm`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(house.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`absolute bottom-4 ${
                    isRTL ? "right-4" : "left-4"
                  } flex items-center gap-1.5 text-white`}
                >
                  <div className="bg-yellow-500 p-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-xs font-bold drop-shadow-md">
                    {house.location}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                      {house.title}
                    </h3>
                    <div className="flex gap-4 text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4" />
                        <span className="text-xs font-bold text-gray-600">
                          {house.bedrooms}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4" />
                        <span className="text-xs font-bold text-gray-600">
                          {house.areaSqFt}{" "}
                          <span className="text-[9px] uppercase">
                            {t("sqft")}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={isRTL ? "text-left" : "text-right"}>
                    <p className="text-2xl font-black text-gray-900">
                      ${house.price.toLocaleString()}
                    </p>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      / {t("month")}
                    </span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  {house.amenities.map((am, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-black uppercase bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg border border-gray-100"
                    >
                      {am}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={`/${locale}/houses-for-rent/house/${house.id}`}
                  className="group/btn relative flex items-center justify-center gap-3 w-full bg-slate-900 text-white font-bold py-4 rounded-2xl overflow-hidden"
                >
                  <span className="relative z-10 text-xs uppercase tracking-[0.2em]">
                    {t("exploreProperty")}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 z-10 transition-transform ${
                      isRTL
                        ? "rotate-[270deg] group-hover/btn:-translate-x-1"
                        : "group-hover/btn:translate-x-1"
                    } group-hover/btn:-translate-y-1`}
                  />
                  <div className="absolute inset-0 bg-yellow-500 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentHouses;
