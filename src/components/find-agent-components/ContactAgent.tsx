"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Building2,
  Home,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const UI = {
  label:
    "text-[10px] uppercase font-bold tracking-widest text-black mb-1 block px-1",
  input:
    "w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-black placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:shadow-md outline-none transition-all resize-none",
};

const ContactDetail = ({ icon: Icon, title, value }: any) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-yellow-500 flex items-center justify-center shrink-0 border border-gray-100">
      <Icon size={20} />
    </div>
    <div>
      <p className={UI.label}>{title}</p>
      <p className="text-black font-semibold">{value}</p>
    </div>
  </div>
);

const PremiumInput = ({ label, isArea, ...props }: any) => {
  const InputTag = isArea ? "textarea" : "input";
  return (
    <div className="space-y-1">
      <label className={UI.label}>{label}</label>
      <InputTag rows={isArea ? 3 : undefined} className={UI.input} {...props} />
    </div>
  );
};

export default function ContactAgent() {
  const t = useTranslations("IraqAgentContact");
  const isRtl = useLocale() === "ar";
  const [activeType, setActiveType] = useState("Buying");

  const propertyTypes = useMemo(
    () => [
      { key: "Buying", icon: Home },
      { key: "Selling", icon: Building2 },
      { key: "Invest", icon: BarChart3 },
    ],
    []
  );

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="min-h-screen text-black bg-gray-50/30 flex items-center justify-center p-4 lg:p-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-12 bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 p-8 md:p-16 border-e border-gray-50 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold text-xl">
                {t("brand.first")}
                <span className="text-yellow-500">{t("brand.second")}</span>
              </span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-light leading-tight mb-6">
              {t.rich("brand.concierge", {
                br: () => <br />,
                realEstate: (c) => (
                  <span className="font-bold text-yellow-500 italic">{c}</span>
                ),
              })}
            </h1>
            <p className="text-gray-600 text-lg max-w-sm mb-12">
              {t("brand.description")}
            </p>
            <div className="space-y-4">
              <ContactDetail
                icon={Phone}
                title={t("details.phone")}
                value="+964 770 000 0000"
              />
              <ContactDetail
                icon={Mail}
                title={t("details.email")}
                value="hello@iraqhomes.iq"
              />
              <ContactDetail
                icon={MapPin}
                title={t("details.office")}
                value={t("details.address")}
              />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex justify-between text-[20px] font-bold opacity-60">
            <span>{t("brand.copyright")}</span>
            <div className="flex gap-4">
              {["FB", "IG", "LN"].map((s) => (
                <span key={s} className="hover:text-yellow-500 cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: Form */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 p-8 md:p-16 lg:p-20 bg-white"
        >
          <div className="max-w-xl mx-auto">
            <header className="mb-10 text-center lg:text-start">
              <h2 className="text-4xl font-black uppercase tracking-tight">
                {t("form.header")}
              </h2>
              <div className="w-16 h-1.5 bg-yellow-400 my-4 mx-auto lg:mx-0 rounded-full" />
              <p className="text-gray-500">{t("form.confidentiality")}</p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className={UI.label}>{t("form.intent")}</label>
                <div className="grid grid-cols-3 gap-4">
                  {propertyTypes.map(({ key, icon: Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveType(key)}
                      className={`flex flex-col items-center gap-2 py-4 rounded-2xl border-2 transition-all ${
                        activeType === key
                          ? "border-yellow-500 bg-yellow-50 shadow-sm"
                          : "border-gray-50 bg-gray-50 hover:border-gray-200"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-[10px] font-bold uppercase">
                        {t(`types.${key}`)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <PremiumInput
                  label={t("inputs.name.label")}
                  placeholder={t("inputs.name.placeholder")}
                />
                <PremiumInput
                  label={t("inputs.phone.label")}
                  type="tel"
                  placeholder={t("inputs.phone.placeholder")}
                />
              </div>

              <PremiumInput
                label={t("inputs.email.label")}
                type="email"
                placeholder={t("inputs.email.placeholder")}
              />
              <PremiumInput
                label={t("inputs.msg.label")}
                isArea
                placeholder={t("inputs.msg.placeholder")}
              />

              <button className="group w-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-all py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg">
                {t("form.submit")}
                <ArrowIcon
                  size={20}
                  className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold mt-6">
                <ShieldCheck size={14} className="text-yellow-500" />{" "}
                {t("form.secure")}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
