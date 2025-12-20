"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Activity,
  Share2,
  Lock,
  RefreshCw,
  ChevronRight,
  Mail,
  ArrowUpRight,
  Fingerprint,
  EyeOff,
  Scale,
  Globe,
  LucideIcon,
} from "lucide-react";

type PolicyItem = {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  gradient: string;
  bgLight: string;
};

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const policies: PolicyItem[] = [
    {
      icon: Fingerprint,
      title: "Data Identity",
      shortDesc:
        "What personal identifiers we collect to verify your account.",
      fullDesc:
        "We collect essential identifiers including your full name, encrypted email address, and verified phone number. This data allows us to create a secure environment for property transactions and prevents unauthorized access to your sensitive real estate documents.",
      gradient: "from-indigo-600 to-violet-600",
      bgLight: "bg-indigo-50/50",
    },
    {
      icon: Activity,
      title: "Usage Analytics",
      shortDesc: "How we analyze interactions to simplify your search.",
      fullDesc:
        "Our systems analyze search patterns, saved properties, and duration of sessions. We use this anonymized data to train our recommendation engine, ensuring that the properties you see first are the ones most relevant to your lifestyle needs.",
      gradient: "from-blue-600 to-cyan-500",
      bgLight: "bg-blue-50/50",
    },
    {
      icon: EyeOff,
      title: "Tracking & Cookies",
      shortDesc: "Transparency regarding pixels and session storage.",
      fullDesc:
        "We use strictly necessary cookies for security and functional cookies to remember your filters. You can opt-out of performance cookies through our preference center without losing access to core search features.",
      gradient: "from-emerald-600 to-teal-500",
      bgLight: "bg-emerald-50/50",
    },
    {
      icon: Share2,
      title: "Third-Party Sync",
      shortDesc: "The strict protocols for our verified partner network.",
      fullDesc:
        "Information is only shared with licensed agents and financial institutions when you explicitly request a viewing or pre-approval. We perform quarterly security audits on all third-party vendors to ensure they meet our Zero-Leak standards.",
      gradient: "from-amber-600 to-orange-500",
      bgLight: "bg-amber-50/50",
    },
    {
      icon: Lock,
      title: "Encryption Layer",
      shortDesc: "Our military-grade protection for your documents.",
      fullDesc:
        "All property documents and personal chat logs are protected by AES-256 encryption. We utilize hardware security modules (HSM) and multi-factor authentication (MFA) to ensure that only you can access your private data.",
      gradient: "from-rose-600 to-red-500",
      bgLight: "bg-rose-50/50",
    },
    {
      icon: Scale,
      title: "Legal Rights",
      shortDesc: "Your right to be forgotten and data portability.",
      fullDesc:
        "Under global privacy laws, you have the right to request a full export of your data or its permanent deletion. We process all requests within 48 business hours via our automated dashboard.",
      gradient: "from-slate-800 to-slate-600",
      bgLight: "bg-slate-50/50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Progress Bar */}
      <div
        className="fixed top-16 left-0 h-1.5 bg-gradient-to-r from-yellow-600 to-yellow-500 z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-yellow-700 text-xs font-bold uppercase mb-4">
                  <Shield size={14} /> Global Standard
                </div>
                <h1 className="text-5xl font-black mb-6">
                  Privacy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-600">
                    Protocol
                  </span>
                </h1>
                <p className="text-slate-500 text-lg">
                  Last revised:{" "}
                  <span className="text-black font-semibold">Dec 2025</span>
                </p>
              </div>

              <nav className="hidden lg:block space-y-2">
                {policies.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setExpandedSection(i)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                      expandedSection === i
                        ? "bg-white shadow-lg border-l-4 border-yellow-600"
                        : "hover:bg-slate-100 text-slate-400"
                    }`}
                  >
                    <span className="font-bold">
                      0{i + 1}. {item.title}
                    </span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:w-2/3 space-y-10">
            {policies.map((item, i) => (
              <section
                key={i}
                onMouseEnter={() => setExpandedSection(i)}
                className={`p-8 md:p-12 rounded-[2.5rem] transition-all border ${
                  expandedSection === i
                    ? "bg-white border-yellow-100"
                    : "opacity-60 grayscale"
                }`}
              >
                <div className="flex gap-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xl`}
                  >
                    <item.icon size={28} />
                  </div>

                  <div>
                    <h2 className="text-3xl font-extrabold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xl font-semibold text-slate-700 mb-6">
                      {item.shortDesc}
                    </p>
                    <div
                      className={`p-6 rounded-3xl ${item.bgLight} border`}
                    >
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {item.fullDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Support Section */}
            <div className="grid md:grid-cols-2 gap-6 pt-10">
              <div className="p-8 rounded bg-yellow-600 text-white">
                <Globe size={32} className="mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2">
                  Regional Compliance
                </h3>
                <p className="mb-6">
                  Learn how we handle CCPA and GDPR regulations.
                </p>
                <button className="px-6 py-3 bg-white text-yellow-600 rounded font-bold">
                  View Local Rules
                </button>
              </div>

              <div className="p-8 rounded bg-white border">
                <Mail size={32} className="mb-4 text-yellow-600" />
                <h3 className="text-2xl font-bold mb-2">Privacy Officer</h3>
                <a
                  href="mailto:privacy@realchoice.com"
                  className="text-yellow-600 font-bold flex items-center gap-2"
                >
                  privacy@realchoice.com <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}