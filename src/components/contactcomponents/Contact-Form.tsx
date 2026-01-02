"use client ";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

/* ---------------- Info Card ---------------- */
const InfoCard = ({ icon: Icon, title, value, fullWidth = false }: any) => (
  <div
    className={`bg-white p-5 rounded-2xl border border-gray-200 flex items-center gap-4 ${
      fullWidth ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
    }`}
  >
    <div className="w-10 h-10 rounded-full bg-gray-100 text-yellow-500 flex items-center justify-center shrink-0">
      <Icon size={18} />
    </div>

    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
        {title}
      </p>
      <p className="text-base text-gray-900">{value}</p>
    </div>
  </div>
);

/* ---------------- Input Field ---------------- */
const InputField = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  isArea = false,
  focus,
  setFocus,
  name,
  isRtl,
}: any) => (
  <div className="space-y-1.5">
    <label className={`text-sm text-gray-800 ${isRtl ? "mr-1" : "ml-1"}`}>
      {label}
    </label>

    <div
      className={`flex items-center px-4 py-3 rounded-xl border transition ${
        focus === name
          ? "border-gray-400 bg-gray-100"
          : "border-gray-200 bg-gray-100"
      }`}
    >
      {isArea ? (
        <textarea
          rows={4}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 resize-none"
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
        />
      )}

      {Icon && <Icon size={18} className="text-gray-400" />}
    </div>
  </div>
);

/* ---------------- Main Component ---------------- */
export default function ContactSection() {
  const [focus, setFocus] = useState<string | null>(null);
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="min-h-screen bg-white flex flex-col lg:flex-row font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-full lg:w-5/12 bg-white flex flex-col justify-between p-8 md:p-12 lg:p-16 border-gray-200 ${
          isRtl ? "border-l" : "border-r"
        }`}
      >
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-gray-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-gray-700 tracking-widest text-[10px] uppercase">
              {t("badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-4">
            {t("heroTitle")} <br />
            <span className="text-yellow-500">{t("heroLegacy")}</span>
          </h1>

          <p className="text-gray-500 text-sm max-w-md">{t("heroDesc")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <InfoCard
            icon={Phone}
            title={t("info.phone")}
            value="+964 770 123 4567"
          />
          <InfoCard
            icon={Mail}
            title={t("info.email")}
            value="info@iraqhomes.iq"
          />
          <InfoCard
            icon={MapPin}
            title={t("info.address")}
            value={t("info.addressValue")}
            fullWidth
          />
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-7/12 flex items-center justify-center p-6 sm:p-12 lg:p-24"
      >
        <div className="w-full max-w-xl space-y-8">
          <div>
            <h2 className="text-3xl text-gray-900">{t("form.title")}</h2>
            <p className="text-gray-500 text-sm">{t("form.subTitle")}</p>
          </div>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                label={t("form.nameLabel")}
                placeholder={t("form.namePlaceholder")}
                focus={focus}
                setFocus={setFocus}
                name="name"
                isRtl={isRtl}
              />
              <InputField
                label={t("form.phoneLabel")}
                type="tel"
                placeholder={t("form.phonePlaceholder")}
                focus={focus}
                setFocus={setFocus}
                name="phone"
                isRtl={isRtl}
              />
            </div>

            <InputField
              label={t("form.emailLabel")}
              type="email"
              placeholder={t("form.emailPlaceholder")}
              icon={Mail}
              focus={focus}
              setFocus={setFocus}
              name="email"
              isRtl={isRtl}
            />

            {/* Radio */}
            <div className="space-y-1.5">
              <label
                className={`text-sm text-gray-800 ${isRtl ? "mr-1" : "ml-1"}`}
              >
                {t("form.interestLabel")}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "buying", label: t("form.interests.buying") },
                  { key: "renting", label: t("form.interests.renting") },
                  { key: "selling", label: t("form.interests.selling") },
                ].map((item) => (
                  <label key={item.key} className="cursor-pointer">
                    <input type="radio" name="type" className="peer sr-only" />
                    <div className="text-center py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm text-gray-600 peer-checked:bg-yellow-500 peer-checked:text-white peer-checked:border-yellow-500">
                      {item.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <InputField
              label={t("form.messageLabel")}
              isArea
              placeholder={t("form.messagePlaceholder")}
              focus={focus}
              setFocus={setFocus}
              name="message"
              isRtl={isRtl}
            />

            <button className="w-full bg-gray-700 text-white hover:bg-yellow-500 cursor-pointer text-lg py-4 rounded-xl flex items-center justify-center gap-3">
              {t("form.submit")}
              <ArrowRight size={18} className={isRtl ? "rotate-180" : ""} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
