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

/* ---------------- Reusable Sub-Components ---------------- */
const ContactDetail = ({ icon: Icon, title, value }: any) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-yellow-500 flex items-center justify-center shrink-0 border border-gray-100">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold tracking-widest text-black mb-0.5">
        {title}
      </p>
      <p className="text-black font-semibold">{value}</p>
    </div>
  </div>
);

const PremiumInput = ({
  label,
  type = "text",
  placeholder,
  name,
  focus,
  setFocus,
  isArea = false,
}: any) => {
  const InputTag = isArea ? "textarea" : "input";
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-black uppercase tracking-wider block px-1">
        {label}
      </label>
      <div
        className={`relative transition-all duration-300 rounded-xl ${
          focus === name ? "ring-2 ring-yellow-500 shadow-md" : ""
        }`}
      >
        <InputTag
          rows={isArea ? 3 : undefined}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-black placeholder:text-gray-400 focus:bg-white outline-none transition-all resize-none"
        />
      </div>
    </div>
  );
};

/* ---------------- Main Component ---------------- */
export default function ContactAgent() {
  const t = useTranslations("IraqAgentContact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [focus, setFocus] = useState<string | null>(null);
  const [activeType, setActiveType] = useState("Buying");

  const propertyTypes = useMemo(
    () => [
      { key: "Buying", icon: Home },
      { key: "Selling", icon: Building2 },
      { key: "Invest", icon: BarChart3 },
    ],
    []
  );

  return (
    <section
      className="min-h-screen bg-gray-50/30 flex items-center justify-center p-4 lg:p-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-12 bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 bg-white p-8 md:p-16 text-black flex flex-col justify-between relative border-e border-gray-50"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-black" size={24} />
              </div>
              <span className="font-bold tracking-tighter text-xl text-black">
                {t("brand.first")}
                <span className="text-yellow-500">{t("brand.second")}</span>
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-light leading-[1.2] mb-6 text-black">
              {t.rich("brand.concierge", {
                br: () => <br />,
                realEstate: (chunks) => (
                  <span className="font-bold text-yellow-500 italic">
                    {chunks}
                  </span>
                ),
              })}
            </h1>

            <p className="text-gray-600 text-lg max-w-sm leading-relaxed mb-12">
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

          <div className="relative z-10 mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-black text-[10px] font-bold tracking-widest opacity-60">
            <span>{t("brand.copyright")}</span>
            <div className="flex gap-4">
              {["FB", "IG", "LN"].map((social) => (
                <span
                  key={social}
                  className="cursor-pointer hover:text-yellow-500 transition"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: Form */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white"
        >
          <div className="max-w-xl w-full mx-auto">
            <header className="mb-10 text-center lg:text-start">
              <h2 className="text-4xl font-black text-black mb-2 uppercase tracking-tight">
                {t("form.header")}
              </h2>
              <div className="w-16 h-1.5 bg-yellow-400 mb-4 mx-auto lg:mx-0 rounded-full" />
              <p className="text-gray-500">{t("form.confidentiality")}</p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-xs font-bold text-black uppercase tracking-wider px-1">
                  {t("form.intent")}
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.key}
                      type="button"
                      onClick={() => setActiveType(type.key)}
                      className={`flex flex-col items-center gap-2 py-4 rounded-2xl border-2 transition-all ${
                        activeType === type.key
                          ? "border-yellow-500 bg-yellow-50 text-black shadow-sm"
                          : "border-gray-50 bg-gray-50 text-black hover:border-gray-200"
                      }`}
                    >
                      <type.icon size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {t(`types.${type.key}`)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <PremiumInput
                  label={t("inputs.name.label")}
                  name="user"
                  placeholder={t("inputs.name.placeholder")}
                  focus={focus}
                  setFocus={setFocus}
                />
                <PremiumInput
                  label={t("inputs.phone.label")}
                  name="phone"
                  type="tel"
                  placeholder={t("inputs.phone.placeholder")}
                  focus={focus}
                  setFocus={setFocus}
                />
              </div>

              <PremiumInput
                label={t("inputs.email.label")}
                name="email"
                type="email"
                placeholder={t("inputs.email.placeholder")}
                focus={focus}
                setFocus={setFocus}
              />

              <PremiumInput
                label={t("inputs.msg.label")}
                name="msg"
                isArea
                placeholder={t("inputs.msg.placeholder")}
                focus={focus}
                setFocus={setFocus}
              />

              <button className="group w-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg">
                {t("form.submit")}
                {isRtl ? (
                  <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                ) : (
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-black text-[10px] uppercase font-bold tracking-widest mt-6">
                <ShieldCheck size={14} className="text-yellow-500" />
                {t("form.secure")}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
