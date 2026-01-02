"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { Heart } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const Apartment = () => {
  const t = useTranslations("apartments");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  /**
   * Safe Translation Helper
   * Prevents "MISSING_MESSAGE" errors by checking if key exists before calling t()
   */
  const getLoc = (neighborhood: string, cityName: string) => {
    const n = t.has(`locations.neighborhoods.${neighborhood}`)
      ? t(`locations.neighborhoods.${neighborhood}`)
      : neighborhood;
    const sep = t.has("locations.separator") ? t("locations.separator") : ", ";
    const c = t.has(`locations.${cityName}`)
      ? t(`locations.${cityName}`)
      : cityName;

    return `${n}${sep}${c}`;
  };

  // Data synchronized with your JSON (Missing keys removed)
  const apartments = useMemo(
    () => [
      {
        id: 1,
        title: t("data.luxury"),
        price: 1200,
        bedrooms: 3,
        location: getLoc("greenZone", "baghdad"),
        image: "/a1.jpg",
      },
      {
        id: 2,
        title: t("data.studio"),
        price: 800,
        bedrooms: 1,
        location: getLoc("ankawa", "erbil"),
        image: "/a2.jpg",
      },
      {
        id: 3,
        title: t("data.family"),
        price: 1000,
        bedrooms: 2,
        location: getLoc("alFao", "basra"),
        image: "/a3.jpg",
      },
      {
        id: 4,
        title: t("data.penthouse"),
        price: 1500,
        bedrooms: 4,
        location: getLoc("karrada", "baghdad"),
        image: "/a4.jpg",
      },
      {
        id: 5,
        title: t("data.executive"),
        price: 1100,
        bedrooms: 3,
        location: getLoc("center", "erbil"),
        image: "/a5.jpg",
      },
      {
        id: 6,
        title: t("data.loft"),
        price: 950,
        bedrooms: 2,
        location: getLoc("alMaqal", "basra"),
        image: "/a6.avif",
      },
    ],
    [t]
  );

  const filtered = apartments
    .filter((apt) => {
      const searchLower = search.toLowerCase();
      return (
        apt.title.toLowerCase().includes(searchLower) ||
        apt.location.toLowerCase().includes(searchLower)
      );
    })
    .filter((apt) => (bedrooms ? apt.bedrooms === Number(bedrooms) : true))
    .filter((apt) => (city ? apt.location.includes(city) : true))
    .sort((a, b) => {
      if (sort === "high") return b.price - a.price;
      if (sort === "low") return a.price - b.price;
      return 0;
    });

  return (
    <section
      className="py-14 px-6 bg-white text-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl font-bold text-center mb-10">{t("heading")}</h2>

      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
        <input
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />

        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white cursor-pointer"
        >
          <option value="">{t("filterBedrooms")}</option>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {t("filterBedUnit", { count: n })}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white cursor-pointer"
        >
          <option value="">{t("filterCities")}</option>
          {/* Removed "kirkuk" and "mosul" as they were causing errors */}
          {["baghdad", "erbil", "basra"].map((cKey) => (
            <option key={cKey} value={t(`locations.${cKey}`)}>
              {t(`locations.${cKey}`)}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white cursor-pointer"
        >
          <option value="">{t("filterSort")}</option>
          <option value="low">{t("sortLow")}</option>
          <option value="high">{t("sortHigh")}</option>
        </select>
      </div>

      {/* LISTINGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((apt) => (
            <div
              key={apt.id}
              className="bg-white shadow-md border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFav(apt.id)}
                  className={`absolute top-3 ${
                    isRTL ? "left-3" : "right-3"
                  } bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(apt.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {apt.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{apt.location}</p>
                <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-50">
                  <span className="text-blue-600 font-extrabold text-lg">
                    ${apt.price}{" "}
                    <span className="text-xs font-medium text-gray-400">
                      /{t("month")}
                    </span>
                  </span>
                  <span className="text-sm font-medium bg-slate-100 px-2 py-1 rounded text-slate-600">
                    {apt.bedrooms} {t("beds")}
                  </span>
                </div>

                <Link
                  href={`/${locale}/apartment/${apt.id}`}
                  className="mt-6 block bg-yellow-500 text-slate-900 py-3 text-center rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  {t("viewDetails")}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400">
            No apartments found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Apartment;
