"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
  Star,
  MapPin,
  ShieldCheck,
  Zap,
  Clock,
  Calendar,
  User,
  Phone,
  ArrowRight,
  Info,
  Award,
  Mail,
} from "lucide-react";

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const t = useTranslations("ServiceDetail");
  const tp = useTranslations("Providers");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const providerKey = `p${id}`;

  const service = {
    name: tp(`${providerKey}.name`),
    category: tp(`${providerKey}.category`),
    location: tp(`${providerKey}.location`),
    price: tp(`${providerKey}.price`),
    unit: tp(`${providerKey}.unit`),
    description: tp(`${providerKey}.description`),
    badges: ["Verified"],
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    note: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(t("success"));
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#FAFAFA] text-slate-900 pb-20 ${
        isRtl ? "text-right" : "text-left"
      }`}
    >
      {/* --- HERO SECTION (NO BACKGROUND IMAGE) --- */}
      <div className="relative h-[350px] lg:h-[450px] w-full bg-slate-900 overflow-hidden flex flex-col justify-end">
        {/* Styled "ALBASYNC SERVICES" Text Branding */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[8vw] font-black text-white/[0.03] whitespace-nowrap tracking-tighter">
            ALBASYNC SERVICES
          </span>
        </div>

        {/* Decorative Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 lg:pb-16 w-full">
          <div
            className={`flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 ${
              isRtl ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <span className="bg-yellow-500/10 px-3 py-1 rounded border border-yellow-500/20 backdrop-blur-sm">
              {service.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">ID: #{id}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {service.name}
          </h1>

          <div
            className={`flex flex-wrap items-center gap-6 text-white/80 ${
              isRtl ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-white">4.9</span>
              <span className="text-xs text-slate-400">
                (120 {t("reviews")})
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={18} className="text-yellow-500/70" />
              <span className="font-medium">
                {service.location}, {isRtl ? "العراق" : "Iraq"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: INFO */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
                {t("overview")}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4 border border-slate-100">
                  <Zap size={20} className="text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {t("fastResponse")}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {t("fastResponseDesc", { location: service.location })}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4 border border-slate-100">
                  <Award size={20} className="text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {t("licensedPro")}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {t("licensedProDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex gap-4 items-start">
              <Info className="text-blue-600 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">
                  {t("satisfactionTitle")}
                </h4>
                <p className="text-sm text-blue-800/80 mt-1 leading-relaxed">
                  {t("satisfactionDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: BOOKING CARD */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 to-yellow-600" />
                <div className="p-6 md:p-8">
                  <div
                    className={`flex justify-between items-end mb-8 pb-8 border-b border-slate-100 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {t("startingFrom")}
                      </p>
                      <div
                        className={`flex items-baseline gap-1 ${
                          isRtl ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span className="text-4xl font-extrabold text-slate-900">
                          {service.price}
                        </span>
                        <span className="text-sm font-medium text-slate-500">
                          /{service.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">
                        {t("labels.name")}
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className={`absolute ${
                            isRtl ? "right-3" : "left-3"
                          } top-3.5 text-slate-400`}
                        />
                        <input
                          type="text"
                          required
                          placeholder={t("placeholders.name")}
                          className={`w-full bg-slate-50 border border-slate-200 text-sm rounded-xl py-3 ${
                            isRtl ? "pr-10 pl-4" : "pl-10 pr-4"
                          } outline-none focus:border-yellow-500`}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">
                        {t("labels.email")}
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className={`absolute ${
                            isRtl ? "right-3" : "left-3"
                          } top-3.5 text-slate-400`}
                        />
                        <input
                          type="email"
                          required
                          placeholder={t("placeholders.email")}
                          className={`w-full bg-slate-50 border border-slate-200 text-sm rounded-xl py-3 ${
                            isRtl ? "pr-10 pl-4" : "pl-10 pr-4"
                          } outline-none focus:border-yellow-500`}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-slate-900 transition-all"
                    >
                      {isSubmitting ? (
                        t("processing")
                      ) : (
                        <>
                          {t("bookBtn")}{" "}
                          <ArrowRight
                            size={18}
                            className={isRtl ? "rotate-180" : ""}
                          />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-slate-400">
                      {t("noPayment")}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
