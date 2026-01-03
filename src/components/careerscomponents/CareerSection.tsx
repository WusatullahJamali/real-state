"use client";

import React, { memo } from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Shared styles for cleaner JSX
const STYLES = {
  badge:
    "px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors",
  card: "group flex flex-col bg-white rounded-2xl p-6 border border-slate-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden",
};

// --- JobCard Component (Receives translated data) ---
const JobCard = memo(({ job, t }: { job: any; t: any }) => (
  <Link href={`/careers/${job.id}`} className={STYLES.card}>
    <div className="flex justify-between items-start mb-4">
      <span
        className={`${STYLES.badge} bg-slate-800 text-white lg:bg-slate-100 lg:text-slate-600 lg:group-hover:bg-slate-800 lg:group-hover:text-white`}
      >
        {job.dept}
      </span>
      <span className="text-xs font-medium px-2 py-1 rounded bg-yellow-50 text-yellow-700">
        {job.type}
      </span>
    </div>

    <h3 className="text-xl font-bold mb-3 text-yellow-600 lg:text-slate-900 lg:group-hover:text-yellow-600 transition-colors">
      {job.title}
    </h3>

    <div className="flex flex-col gap-2 mb-8 text-sm text-black">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-black" />
        {job.loc}
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-black" />
        {t("postedLabel")} {job.time}
      </div>
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
      <span className="text-sm font-bold text-black">{t("viewDetails")}</span>
      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 bg-yellow-500 text-white lg:bg-slate-100 lg:text-slate-900 lg:group-hover:bg-yellow-500 lg:group-hover:text-white">
        <ArrowRight size={18} />
      </div>
    </div>
  </Link>
));
JobCard.displayName = "JobCard";

// --- Main Careers Component ---
export default function CareersSection() {
  const t = useTranslations("Careers");
  const isRtl = useLocale() === "ar";

  // Fetching the array directly from JSON files
  const translatedJobs = t.raw("jobs");

  return (
    <section className="bg-gray-50/50 py-20 px-4" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            {t("badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {t("title")} <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10">{t("titleAccent")}</span>
              <span className="absolute bottom-2 start-0 w-full h-3 bg-yellow-200/60 -z-10 transform -rotate-1" />
            </span>
          </h2>
          <p className="text-lg text-black leading-relaxed">
            {t("description")}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {translatedJobs.map((job: any) => (
            <JobCard key={job.id} job={job} t={t} />
          ))}
        </div>

        <footer className="bg-white rounded-3xl p-10 md:p-16 text-center border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t("footerTitle")}
            </h3>
            <p className="text-black text-lg mb-8">{t("footerDesc")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-1"
            >
              {t("submitBtn")}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
