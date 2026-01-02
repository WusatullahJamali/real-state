"use client";
import React from "react";
import { Mail, Printer, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

type PolicyItem = {
  id: string;
  title: string;
  content: string;
};

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const policies: PolicyItem[] = t.raw("policies");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Simple Header */}
      <header className="border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-wider text-xs mb-3">
                <ShieldCheck size={16} />
                {t("badge")}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
                {t("title")}
              </h1>
              <p className="text-slate-500">{t("lastUpdated")}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-slate-700"
              >
                <Printer size={16} /> {t("btnPrint")}
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                {t("btnContact")}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Sidebar Navigation - Sticky */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-8">
              <h3 className="font-bold text-slate-900 mb-4 px-3">
                {t("sidebarTitle")}
              </h3>
              <nav className="space-y-1">
                {policies.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-sm text-slate-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors px-3 py-2 ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
                <div className="h-px bg-slate-200 my-4 mx-3" />
                <a
                  href="mailto:privacy@albasync.com"
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-900 hover:text-yellow-600 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <Mail size={14} /> privacy@albasync.com
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-2xl">
            <div
              className={`prose prose-slate prose-lg text-slate-600 ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              <p className="lead mb-10 text-lg">{t("intro")}</p>

              <div className="space-y-16">
                {policies.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t("footerTitle")}
                </h3>
                <p className="text-sm">{t("footerText")}</p>
                <div className="mt-6">
                  <a
                    href="#"
                    className={`inline-flex items-center gap-1 text-yellow-600 font-bold hover:underline ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    {t("footerLink")}{" "}
                    <ArrowUpRight
                      size={16}
                      className={isRtl ? "-rotate-90" : ""}
                    />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
