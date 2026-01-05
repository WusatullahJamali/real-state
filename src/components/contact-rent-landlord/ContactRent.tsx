"use client";

import React, { useState, useCallback, memo } from "react";
import { MapPin, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const S = {
  input:
    "w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-yellow-500 outline-none transition-all bg-white",
  card: "bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100",
};

const Field = memo(
  ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 ms-1">
        {label}
      </label>
      {children}
    </div>
  )
);

const ContactRent = () => {
  const t = useTranslations("ContactRent");
  const isRtl = useLocale() === "ar";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "scheduleVisit",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = useCallback((e: any) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  if (submitted)
    return (
      <div className="flex flex-col items-center py-20 text-center animate-in fade-in zoom-in">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold">{t("form.successTitle")}</h2>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-8 py-2 bg-slate-900 text-white rounded-xl"
        >
          {t("form.resetBtn")}
        </button>
      </div>
    );

  return (
    <section
      className="py-16 text-black px-4 max-w-6xl mx-auto"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900">
          {t("header.title")}
        </h1>
        <p className="text-yellow-600 font-medium">{t("header.subtitle")}</p>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className={`${S.card} lg:col-span-7 space-y-4`}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label={t("form.fullName")}>
              <input
                name="fullName"
                onChange={onChange}
                className={S.input}
                required
              />
            </Field>
            <Field label={t("form.phone")}>
              <input
                name="phone"
                type="tel"
                onChange={onChange}
                className={S.input}
              />
            </Field>
          </div>
          <Field label={t("form.email")}>
            <input
              name="email"
              type="email"
              onChange={onChange}
              className={S.input}
              required
            />
          </Field>
          <Field label={t("form.inquiryType")}>
            <select name="inquiryType" onChange={onChange} className={S.input}>
              {t.raw("form.options").map((o: any) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("form.message")}>
            <textarea
              name="message"
              rows={3}
              onChange={onChange}
              className={`${S.input} resize-none`}
              required
            />
          </Field>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold py-4 rounded-xl hover:bg-yellow-700 transition"
          >
            {t("form.submitBtn")}
          </button>
        </form>

        <aside className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="/l1.jpg"
              alt="Property"
              className="object-cover w-full h-full"
            />
            <span className="absolute top-4 start-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              {t("property.badge")}
            </span>
          </div>
          <div className={S.card}>
            <div className="flex items-center gap-2 text-yellow-600 text-xs font-bold mb-2">
              <MapPin className="w-4 h-4" />
              {t("property.locationTag")}
            </div>
            <h3 className="text-2xl font-black">
              {t("property.price")}{" "}
              <span className="text-sm font-normal text-slate-400">
                {t("property.period")}
              </span>
            </h3>
            <p className="text-slate-600 my-4">{t("property.address")}</p>
            <a
              href="#"
              className="flex items-center justify-between w-full p-4 bg-slate-900 text-white rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              {t("property.viewDetails")}{" "}
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactRent;
