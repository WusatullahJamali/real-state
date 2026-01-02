"use client";

import React, { useState } from "react";
import { MapPin, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const PropertyImage = ({ badge }: { badge: string }) => {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
      <img
        src="/l1.jpg"
        alt="Property"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span
        className={`absolute top-4 ${
          isRtl ? "right-4" : "left-4"
        } bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md`}
      >
        {badge}
      </span>
    </div>
  );
};

const ContactRent = () => {
  const t = useTranslations("ContactRent");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "scheduleVisit",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = t.raw("form.options");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className="bg-gray-50/50 py-16 lg:py-24 px-4 min-h-screen"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div
          className={`mb-12 text-center ${
            isRtl ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("header.title")}
          </h1>
          <p className="text-yellow-600 font-medium mt-1">
            {t("header.subtitle")}
          </p>
          <p className={`text-black mt-3 max-w-xl ${isRtl ? "mr-0" : "ml-0"}`}>
            {t("header.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: FORM COLUMN */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  {t("form.successTitle")}
                </h2>
                <p className="text-slate-600 mb-8 max-w-xs">
                  {t("form.successDesc")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                >
                  {t("form.resetBtn")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NAME */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-semibold text-slate-700 ${
                        isRtl ? "mr-1" : "ml-1"
                      }`}
                    >
                      {t("form.fullName")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("form.fullNamePlaceholder")}
                      className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-semibold text-slate-700 ${
                        isRtl ? "mr-1" : "ml-1"
                      }`}
                    >
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label
                    className={`text-sm font-semibold text-slate-700 ${
                      isRtl ? "mr-1" : "ml-1"
                    }`}
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all"
                    required
                  />
                </div>

                {/* INQUIRY TYPE */}
                <div className="space-y-2">
                  <label
                    className={`text-sm font-semibold text-slate-700 ${
                      isRtl ? "mr-1" : "ml-1"
                    }`}
                  >
                    {t("form.inquiryType")}
                  </label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border-slate-200 border-2 px-4 py-3 bg-white focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all cursor-pointer"
                    >
                      {inquiryOptions.map((opt: any) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div
                      className={`absolute ${
                        isRtl ? "left-4" : "right-4"
                      } top-1/2 -translate-y-1/2 pointer-events-none text-slate-400`}
                    >
                      <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label
                    className={`text-sm font-semibold text-slate-700 ${
                      isRtl ? "mr-1" : "ml-1"
                    }`}
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white font-semibold py-4 rounded-xl transition shadow-md"
                >
                  {t("form.submitBtn")}
                </button>

                <p className="text-[12px] text-slate-400 text-center leading-relaxed">
                  {t("form.agreement")}
                </p>
              </form>
            )}
          </div>

          {/* RIGHT: PROPERTY CARD COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-6">
            <PropertyImage badge={t("property.badge")} />

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100">
              <div className="flex items-center gap-2 mb-3 text-yellow-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  {t("property.locationTag")}
                </span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-2">
                {t("property.price")}
                <span className="text-lg font-normal text-slate-400">
                  {" "}
                  {t("property.period")}
                </span>
              </h3>

              <p className="text-slate-600 font-medium mb-6 flex items-center gap-2">
                {t("property.address")}
              </p>

              <div className="grid grid-cols-1 gap-4 py-6 border-y border-slate-100 mb-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("property.details")}
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-yellow-500 hover:text-black transition-all"
              >
                {t("property.viewDetails")}
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    isRtl
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </a>
            </div>

            {/* TRUST BADGE */}
            <div className="flex items-center gap-4 px-6 py-4 bg-yellow-50/50 rounded-2xl border border-yellow-100">
              <div className="bg-yellow-500 p-2 rounded-full text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs text-yellow-800 font-medium leading-tight">
                {t("property.trustBadge")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactRent;
