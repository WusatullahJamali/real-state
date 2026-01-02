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
  Download
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const ICON_MAP: Record<string, React.ReactNode> = {
  acceptance: <Scale size={18} />,
  accounts: <Users size={18} />,
  content: <FileText size={18} />,
  prohibited: <Ban size={18} />,
  liability: <ShieldAlert size={18} />,
  governing: <Gavel size={18} />,
};

interface TermItem {
  id: string;
  title: string;
  content: string;
}

export default function TermsOfService() {
  const t = useTranslations("TermsOfService");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Memoize data to prevent re-parsing on every render
  const termsData = useMemo(() => t.raw("items") as TermItem[], [t]);

  const [activeSection, setActiveSection] = useState<string>(
    () => termsData[0]?.id || ""
  );

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of termsData) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break; // Exit loop once found
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [termsData]);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Header */}
      <header className="border-b border-slate-200 bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className={isRtl ? "text-right" : "text-left"}>
              <p className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-3">
                {t("badge")}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                {t("title")}
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl">
                {t("description")}
                <br />
                <span className="text-sm">
                  {t("lastUpdated", { date: t("date") })}
                </span>
              </p>
            </div>

            <div className={`flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-slate-700"
              >
                <Printer size={16} /> {t("btnPrint")}
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                <Download size={16} /> {t("btnDownload")}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-8">
              <h3
                className={`text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 px-2 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {t("sidebarTitle")}
              </h3>
                {termsData.map((item) => (
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full px-4 py-2.5 text-sm transition-all border-slate-600 ${
                      isRtl
                        ? "border-r-2 -mr-0.5 text-right"
                        : "border-l-2 -ml-0.5 text-left"
                    } ${
                      activeSection === item.id
                        ? "border-yellow-600 text-yellow-700 font-semibold bg-yellow-50/50"
                        : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              <div
                className={`mt-8 p-6 bg-slate-50 rounded-lg border border-slate-100 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {t("helpTitle")}
                </p>
                <a
                  href="mailto:legal@albasync.com"
                  className="text-sm font-bold text-slate-900 hover:underline"
                >
                  legal@albasync.com
                </a>
              </div>
            </div>
          </aside>

          <main className="flex-1 max-w-3xl">
            <div className="space-y-16">
              {termsData.map((item) => (
                <section 
                  key={item.id} 
                  id={item.id} 
                  className="scroll-mt-24 group"
                >
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      isRtl ? "flex-row text-right" : "flex-row text-left"
                    }`}
                  >
                    <div className="p-2 rounded-md bg-slate-100 text-slate-600 group-hover:text-yellow-600 group-hover:bg-yellow-50 transition-colors">
                      {ICON_MAP[item.id] || <FileText size={18} />}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h2>
                  </div>

                  <div
                    className={
                      isRtl ? "md:pr-12 text-right" : "md:pl-12 text-left"
                    }
                  >
                    <p className="text-lg leading-relaxed text-slate-600">
                      {item.content}
                    </p>
                  </div>
                  <div className="mt-12 h-px bg-slate-100 w-full" />
                </section>
              ))}
            </div>

            <div
              className={`mt-16 p-8 bg-slate-50 border border-slate-200 rounded-xl ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              <h4 className="font-bold text-slate-900 mb-2">
                {t("disclaimerTitle")}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t("disclaimerText")}
              </p>
              <div
                className={`mt-6 flex gap-4 ${
                  isRtl ? "justify-start flex-row-reverse" : "justify-start"
                }`}
              >
                {["privacy", "cookies"].map((key) => (
                  <button
                    key={key}
                    className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1"
                  >
                    {t(`links.${key}`)}{" "}
                    <ArrowRight
                      size={14}
                      className={isRtl ? "rotate-180" : ""}
                    />
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