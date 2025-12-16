"use client";

import React, { useState } from "react";
import {
  Shield,
  Users,
  Activity,
  Share2,
  Lock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ArrowUp,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
    setTimeout(() => {
      const el = document.getElementById(`policy-section-${index}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const policies = [
    {
      icon: <Shield />,
      title: "Information Collection",
      shortDesc:
        "We collect information you provide when contacting us or submitting property forms.",
      fullDesc:
        "This includes your name, email address, phone number, property details, and any other information you voluntarily provide. We collect this data through forms, account registration, property listings, consultation requests, and direct communication. We may also collect technical information such as IP addresses, browser type, and device information to improve our services.",
      color: "white",
      bgColor: "bg-white",
    },
    {
      icon: <Activity />,
      title: "Use of Information",
      shortDesc:
        "Your information helps improve services, communication, and support.",
      fullDesc:
        "We use your data to provide real estate services, match you with suitable properties, send alerts, improve platform functionality, respond to inquiries, conduct analytics, personalize your experience, and comply with legal obligations. We never use your information beyond your consent.",
      color: "white",
      bgColor: "bg-white",
    },
    {
      icon: <Users />,
      title: "Cookies & Tracking",
      shortDesc: "Cookies personalize browsing and enhance user experience.",
      fullDesc:
        "We use cookies and similar technologies to remember preferences, analyze traffic, provide personalized content, enable social media features, and deliver targeted advertising. You can control cookie settings, but disabling may limit features.",
      color: "white",
      bgColor: "bg-white",
    },
    {
      icon: <Share2 />,
      title: "Information Sharing",
      shortDesc:
        "We only share data with trusted partners under strict conditions.",
      fullDesc:
        "We may share information with real estate agents (with consent), service providers, legal authorities, business partners for transactions, and potential buyers/sellers with authorization. All third parties are bound by confidentiality agreements and data protection standards.",
      color: "white",
      bgColor: "bg-white",
    },
    {
      icon: <Lock />,
      title: "Security Measures",
      shortDesc: "Industry-standard security protects your information.",
      fullDesc:
        "Our security includes SSL encryption, secure servers, regular audits, access control, employee training, and incident response procedures. While we strive for maximum security, no method over the internet is 100% secure.",
      color: "white",
      bgColor: "bg-white",
    },
    {
      icon: <RefreshCw />,
      title: "Changes to this Policy",
      shortDesc:
        "We update this policy periodically. Latest version appears here.",
      fullDesc:
        "We reserve the right to modify this policy at any time. Changes will be posted here with revision date. Significant changes may be emailed or prominently displayed. Continued use constitutes acceptance of updates. Review regularly.",
      color: "white",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 font-bold px-8 py-3 rounded-full mb-8">
            <Shield className="w-6 h-6" />
            YOUR PRIVACY MATTERS
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            At <span className="font-semibold text-yellow-500">RealChoice</span>
            , we are committed to protecting your data and being transparent.
          </p>
        </header>

        {/* QUICK NAV */}
        <section className="bg-white rounded-3xl p-8 mb-12 border">
          <h3 className="font-black text-2xl mb-6">Quick Navigation</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {policies.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleSection(i)}
                className="text-left font-semibold p-4 rounded-xl hover:bg-yellow-50"
              >
                {item.title}
              </button>
            ))}
          </div>
        </section>

        {/* POLICY SECTIONS */}
        <section className="space-y-8">
          {policies.map((item, i) => (
            <div
              key={i}
              id={`policy-section-${i}`}
              className={`rounded-3xl border-2 transition-all ${
                expandedSection === i
                  ? "border-yellow-400 shadow-xl"
                  : "border-gray-100"
              }`}
            >
              <button
                onClick={() => toggleSection(i)}
                className="w-full p-8 flex gap-6 text-left"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-yellow-500">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-black">
                      {i + 1}. {item.title}
                    </h2>
                    {expandedSection === i ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  <p className="text-gray-700">{item.shortDesc}</p>
                </div>
              </button>

              {expandedSection === i && (
                <div className="px-8 pb-8">
                  <p className="text-gray-800 leading-relaxed">
                    {item.fullDesc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* BACK TO TOP */}
      {expandedSection !== null && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setExpandedSection(null);
          }}
          className="fixed bottom-8 right-8 bg-white p-5 rounded-xl shadow-lg"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
