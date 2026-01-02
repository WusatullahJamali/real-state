"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Bed, Bath, Home, ParkingCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
// Ensure the path to your Data file is correct
import { CategoriesDATA } from "@/app/[locale]/CategoriesDATA/[id]/Data";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const t = useTranslations("PropertyDetails");
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";

  const property = CategoriesDATA.find((p) => p.id === Number(id));

  // Access localized content from the TS file
  const content = property ? property[locale] : null;
  const images = property?.images || [];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (!property || !content) {
    return (
      <div
        className="bg-white h-full mx-auto py-20 text-center"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <h1 className="text-3xl font-bold text-yellow-500">{t("notFound")}</h1>
        <Link
          // UPDATED: Added locale prefix for the 404 state
          href={`/${locale}`}
          className="mt-4 inline-block bg-yellow-500 text-white px-5 py-3 rounded-md"
        >
          {t("goBack")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT --- MAIN CONTENT */}
        <div className="lg:col-span-2">
          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3">
              <Image
                src={images[currentImage]}
                alt={content.title}
                width={1200}
                height={500}
                className="rounded-xl shadow-md w-full h-[380px] md:h-[450px] object-cover"
              />
            </div>

            <div className="hidden md:flex flex-col gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-lg overflow-hidden border transition ${
                    currentImage === index
                      ? "border-yellow-500"
                      : "border-gray-300 hover:border-yellow-400"
                  }`}
                >
                  <Image
                    src={img}
                    width={200}
                    height={100}
                    alt="thumb"
                    className="w-full h-[100px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* BADGES */}
          <div className="flex items-center gap-2 mt-6">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">
              {t("featured")}
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              {t("verified")}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-3xl font-bold text-black text-justify">
            {content.title}
          </h1>

          {/* LOCATION */}
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className={`w-5 h-5 ${isRtl ? "ml-1" : "mr-1"}`} />{" "}
            {content.location}
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-4 text-black font-medium">
            <span className="flex items-center gap-1">
              <Bed className="w-5 h-5 text-yellow-500" /> {property.bedrooms}{" "}
              {t("bedrooms")}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-5 h-5 text-yellow-500" /> {property.bathrooms}{" "}
              {t("bathrooms")}
            </span>
            <span className="flex items-center gap-1">
              <Home className="w-5 h-5 text-yellow-500" /> {property.area}{" "}
              {t("sqft")}
            </span>
            <span className="flex items-center gap-1">
              <ParkingCircle className="w-5 h-5 text-yellow-500" />{" "}
              {t("parking")}
            </span>
          </div>

          {/* SECTION — DESCRIPTION */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black">
              {t("description")}
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed whitespace-pre-line text-justify">
              {content.description}
            </p>
          </div>

          {/* AMENITIES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black">{t("amenities")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🏊 {t("amenityList.pool")}
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🌳 {t("amenityList.garden")}
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                ❄️ {t("amenityList.ac")}
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🔒 {t("amenityList.security")}
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🚗 {t("amenityList.garage")}
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                📺 {t("amenityList.smart")}
              </div>
            </div>
          </div>

          {/* LOCATION MAP */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black">{t("location")}</h2>
            <div className="mt-4 h-[300px] rounded-xl border flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-4xl">📍</div>
                <p className="mt-2 text-black font-semibold">
                  {content.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT --- CONTACT SIDEBAR */}
        <div className="w-full">
          <div className="p-6 rounded-xl shadow-md border bg-white sticky top-24">
            <div className="text-3xl font-bold text-black">
              {property.price}
            </div>
            <div className="text-gray-600 text-sm mt-1">{t("negotiable")}</div>

            {/* Agent */}
            <div className="flex items-center gap-3 mt-5">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <div className="font-semibold text-black">Wusat-albaloshi</div>
                <div className="text-gray-600 text-sm">{t("agentTitle")}</div>
                <div className="text-yellow-500 text-sm">
                  ★★★★★ 4.9 (127 reviews)
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="mt-6 space-y-3 text-black">
              <input
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                type="text"
                placeholder={t("form.name")}
              />
              <input
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                type="email"
                placeholder={t("form.email")}
              />
              <input
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                type="tel"
                placeholder={t("form.phone")}
              />
              <textarea
                className="w-full p-3 border rounded-lg h-28 focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder={t("form.message")}
              />

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                {t("requestTour")}
              </button>

              <button
                type="button"
                className="w-full border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("callAgent")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <Link
          // UPDATED: Added locale prefix to the listings back button
          href={`/${locale}/CategoriesDATA/list`}
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center"
        >
          {isRtl ? "← " : "→ "} {t("backToListings")}
        </Link>
      </div>
    </div>
  );
}
