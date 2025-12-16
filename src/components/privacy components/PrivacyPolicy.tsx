"use client"
import React, { useState } from 'react';
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
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => { 
    setExpandedSection(expandedSection === index ? null : index);
    setTimeout(() => {
      const el = document.getElementById(`policy-section-${index}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const policies = [
    {
      icon: <Shield />,
      title: "Information Collection",
      shortDesc: "We collect information you provide when contacting us or submitting property forms.",
      fullDesc: "This includes your name, email address, phone number, property details, and any other information you voluntarily provide. We collect this data through forms, account registration, property listings, consultation requests, and direct communication. We may also collect technical information such as IP addresses, browser type, and device information to improve our services.",
      color: "white",
      bgColor: "bg-white"
    },
    {
      icon: <Activity />,
      title: "Use of Information",
      shortDesc: "Your information helps improve services, communication, and support.",
      fullDesc: "We use your data to provide real estate services, match you with suitable properties, send alerts, improve platform functionality, respond to inquiries, conduct analytics, personalize your experience, and comply with legal obligations. We never use your information beyond your consent.",
      color: "white",
      bgColor: "bg-white"
    },
    {
      icon: <Users />,
      title: "Cookies & Tracking",
      shortDesc: "Cookies personalize browsing and enhance user experience.",
      fullDesc: "We use cookies and similar technologies to remember preferences, analyze traffic, provide personalized content, enable social media features, and deliver targeted advertising. You can control cookie settings, but disabling may limit features.",
      color: "white",
      bgColor: "bg-white"
    },
    {
      icon: <Share2 />,
      title: "Information Sharing",
      shortDesc: "We only share data with trusted partners under strict conditions.",
      fullDesc: "We may share information with real estate agents (with consent), service providers, legal authorities, business partners for transactions, and potential buyers/sellers with authorization. All third parties are bound by confidentiality agreements and data protection standards.",
      color: "white",
      bgColor: "bg-white"
    },
    {
      icon: <Lock />,
      title: "Security Measures",
      shortDesc: "Industry-standard security protects your information.",
      fullDesc: "Our security includes SSL encryption, secure servers, regular audits, access control, employee training, and incident response procedures. While we strive for maximum security, no method over the internet is 100% secure.",
      color: "white",
      bgColor: "bg-white"
    },
    {
      icon: <RefreshCw />,
      title: "Changes to this Policy",
      shortDesc: "We update this policy periodically. Latest version appears here.",
      fullDesc: "We reserve the right to modify this policy at any time. Changes will be posted here with revision date. Significant changes may be emailed or prominently displayed. Continued use constitutes acceptance of updates. Review regularly.",
      color: "white",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 relative overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <header className="relative rounded-3xl p-12 md:p-20 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-black text-sm font-bold px-8 py-3 rounded-full mb-8 animate-pulse">
              <Shield className="text-xl" /> 
              YOUR PRIVACY MATTERS
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-tight tracking-tight">
              Privacy <span className="text-black bg-clip-text">Policy</span>
            </h1>

            <p className="text-black text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
              At <span className="font-semibold text-yellow-400">RealChoice</span>, your privacy is our top priority. We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-base text-black">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full backdrop-blur-sm">📅 Last Updated: December 2025</span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full backdrop-blur-sm">⏱️ 5 min read</span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full backdrop-blur-sm">🔒 GDPR Compliant</span>
            </div>
          </div>
        </header>

        {/* Quick Navigation */}
        <section className="bg-white rounded-3xl p-8 mb-12 border border-gray-100">
          <h3 className="font-black text-2xl text-black mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span> 
            Quick Navigation
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {policies.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleSection(i)}
                className="text-left text-base font-semibold text-black hover:text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 p-4 rounded-xl transition-all border border-transparent hover:border-yellow-200"
              >
                {item.title}
              </button>
            ))}
          </div>
        </section>

        {/* Policy Sections */}
        <section className="space-y-8">
          {policies.map((item, i) => (
            <div key={i} id={`policy-section-${i}`} className={`bg-white rounded-3xl transition-all duration-500 overflow-hidden border-2 ${expandedSection === i ? 'border-yellow-400 shadow-2xl' : 'border-gray-100'}`}>
              <button onClick={() => toggleSection(i)} className="w-full p-8 md:p-10 flex items-start gap-6 text-left hover:bg-gray-50 transition-colors group">
                <div className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-yellow-500 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {i + 1}. {item.title}
                    </h2>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-yellow-100 flex items-center justify-center text-gray-600 group-hover:text-yellow-600 transition-all">
                      {expandedSection === i ? <ChevronUp className="text-xl" /> : <ChevronDown className="text-xl" />}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">{item.shortDesc}</p>
                </div>
              </button>

              {expandedSection === i && (
                <div className="px-8 md:px-10 pb-8 md:pb-10 animate-fadeIn">
                  <div className={`ml-0 md:ml-[88px] p-8 ${item.bgColor} rounded-2xl border-l-4 ${item.color.includes('blue') ? 'border-blue-500' : item.color.includes('yellow') ? 'border-yellow-500' : item.color.includes('purple') ? 'border-purple-500' : item.color.includes('green') ? 'border-green-500' : item.color.includes('red') ? 'border-red-500' : 'border-indigo-500'} shadow-inner`}>
                    <p className="text-gray-800 text-lg leading-relaxed font-medium">{item.fullDesc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* Back to Top */}
      {expandedSection !== null && (
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setExpandedSection(null); }}
          className="fixed bottom-8 right-8 bg-white text-black font-bold p-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50 group"
          aria-label="Back to top"
        >
          <ArrowUp className="text-2xl group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 60px) scale(1.05); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
      `}</style>
    </div>
  );
}
