"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Scale,
  FileText,
  ShieldAlert,
  Users,
  Gavel,
  Ban,
  Printer,
  ArrowRight,
  Download,
  LucideIcon,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

/* ---------------- Types & Constants ---------------- */

const ICON_MAP: Record<string, LucideIcon> = {
  acceptance: Scale,
  accounts: Users,
  content: FileText,
  prohibited: Ban,
  liability: ShieldAlert,
  governing: Gavel,
};

interface TermItem {
  id: string;
  title: string;
  content: string;
}

/* ---------------- Sub-Components ---------------- */

const NavItem = ({
  item,
  active,
  onClick,
}: {
  item: TermItem;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-2.5 text-sm transition-all border-s-2 -ms-0.5 text-start ${
      active
        ? "border-yellow-600 text-yellow-700 font-semibold bg-yellow-50/50"
        : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
    }`}
  >
    {item.title}
  </button>
);

const Section = ({ item }: { item: TermItem }) => {
  const Icon = ICON_MAP[item.id] || FileText;
  return (
    <section id={item.id} className="scroll-mt-24 group">
      <div className="flex items-center gap-3 mb-4 text-start">
        <div className="p-2 rounded-md bg-slate-100 text-slate-600 group-hover:text-yellow-600 group-hover:bg-yellow-50 transition-colors">
          <Icon size={18} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
      </div>
      <div className="md:ps-12 text-start">
        <p className="text-lg leading-relaxed text-slate-600">{item.content}</p>
      </div>
      <div className="mt-12 h-px bg-slate-100 w-full" />
    </section>
  );
};

/* ---------------- Main Component ---------------- */

export default function TermsOfService() {
  const t = useTranslations("TermsOfService");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const termsData = useMemo(() => t.raw("items") as TermItem[], [t]);
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 100;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      const current = termsData.find((item) => {
        const el = document.getElementById(item.id);
        return (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        );
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [termsData]);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-start">
            <p className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-3">
              {t("badge")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl">
              {t("description")} <br />
              <span className="text-sm">
                {t("lastUpdated", { date: t("date") })}
              </span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <Printer size={16} /> {t("btnPrint")}
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              <Download size={16} /> {t("btnDownload")}
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* SIDEBAR */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-8 text-start">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 px-2">
                {t("sidebarTitle")}
              </h3>
              <nav className="space-y-1 border-s border-slate-200">
                {termsData.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    active={activeSection === item.id}
                    onClick={() => scrollToSection(item.id)}
                  />
                ))}
              </nav>
              <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {t("helpTitle")}
                </p>
                <a
                  href="mailto:legal@albasync.com"
                  className="text-sm font-bold hover:underline"
                >
                  legal@albasync.com
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-16">
              {termsData.map((item) => (
                <Section key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-xl text-start">
              <h4 className="font-bold mb-2">{t("disclaimerTitle")}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t("disclaimerText")}
              </p>
              <div className="mt-6 flex gap-4">
                {["privacy", "cookies"].map((key) => (
                  <button
                    key={key}
                    className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1"
                  >
                    {t(`links.${key}`)}{" "}
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
