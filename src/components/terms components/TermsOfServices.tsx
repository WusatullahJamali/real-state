"use client";
import { Shield, Phone, Home, MessageSquare, Info, ArrowRight, Mail } from "lucide-react"; 
import Link from "next/link"; 
import React, { useState } from 'react';

const TermsOfServices = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const terms = [
    {
      title: "Acceptance of Terms",
      text: "By accessing and using this platform (website, app, and services), you acknowledge and agree to be legally bound by these comprehensive Terms & Conditions.",
      icon: <Shield size={16} />
    },
    {
      title: "Use of the Service",
      text: "You agree to use the service strictly for lawful, permitted purposes, following all local, national, and international laws, rules, and policies. Misuse or disruption is prohibited.",
      icon: <Info size={16} />
    },
    {
      title: "Mobile and Device Usage",
      text: "The service is designed for optimal access on all devices, including desktop and mobile. Data and messaging rates may apply based on your carrier agreement.",
      icon: <Phone size={16} />
    },
    {
      title: "Intellectual Property",
      text: "All content, including text, graphics, logos, and code, is the exclusive property of Modern Living and protected by copyright laws. Unauthorized reuse is strictly prohibited.",
      icon: <Home size={16} />
    },
    {
      title: "Changes to These Terms",
      text: "We reserve the sole right to modify, replace, or update any part of these Terms. We will notify users of significant changes. Continued use constitutes acceptance.",
      icon: <MessageSquare size={16} />
    },
    {
      title: "Governing Law",
      text: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the company is headquartered.",
      icon: <Shield size={16} />
    },
  ];

  return (
    <section className="bg-[#FCFCFC] min-h-screen pb-24 text-slate-900 selection:bg-yellow-100 selection:text-yellow-900">
      
      {/* Decorative Top Accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 w-full" />

      {/* --- HERO HEADER --- */}
      <div className="bg-white border-b border-slate-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
               Legal Framework
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Terms of <span className="text-yellow-500">Service</span>
            </h1>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-3xl leading-relaxed">
              Effective as of December 2025. Please read these terms carefully to understand your rights and responsibilities when using the <span className="text-slate-900 font-bold">Modern Living</span> ecosystem.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* === SIDEBAR (Stays Sticky) === */}
          <aside className="lg:w-1/3 order-2 lg:order-1">
            <div className="sticky top-8 space-y-6">
              
              {/* FAQ Glass Card */}
              <div className="bg-white rounded p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Need Clarification?</h3>
                    <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                        Our FAQ portal covers listings, commissions, and mortgage financing in simple language.
                    </p>
                    <Link
                        href="/faq"
                        className="flex items-center justify-between bg-slate-900 hover:bg-yellow-600 text-white font-bold px-5 py-3 rounded-2xl transition-all group-hover:shadow-lg group-hover:shadow-yellow-500/20 text-sm"
                    >
                        Visit FAQ Center <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-yellow-50 rounded blur-2xl group-hover:bg-yellow-100 transition-colors" />
              </div>

              {/* Quick Jump Links */}
              <div className="bg-slate-50 rounded-[2rem] p-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Navigation</h4>
                <nav className="space-y-2">
                    {terms.map((t, i) => (
                        <button 
                            key={i} 
                            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-yellow-600 transition-colors"
                        >
                            <span className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[9px] text-slate-400">{i+1}</span>
                            {t.title}
                        </button>
                    ))}
                </nav>
              </div>

              <div className="text-center pt-4 text-slate-400 text-[10px] font-medium">
                © {new Date().getFullYear()} Modern Living Global Inc. <br />
                Crafted for transparency and security.
              </div>
            </div>
          </aside>

          {/* === MAIN CONTENT === */}
          <div className="lg:w-2/3 order-1 lg:order-2">
            
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] flex-1 bg-slate-100" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Sectional Breakdown</span>
                <div className="h-[1px] flex-1 bg-slate-100" />
            </div>

            <div className="space-y-10">
              {terms.map((item, i) => (
                <div 
                    key={i} 
                    className="relative pl-6 md:pl-10 border-l border-slate-100 hover:border-yellow-500 transition-colors duration-500 group"
                    onMouseEnter={() => setActiveSection(i)}
                >
                  {/* Number Badge */}
                  <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-white border border-slate-100 group-hover:border-yellow-500 group-hover:bg-yellow-500 flex items-center justify-center text-[10px] font-black transition-all group-hover:text-white">
                    {i + 1}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-yellow-600 group-hover:text-yellow-700 transition-colors mb-2 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  <div className="bg-white p-4 md:p-6 rounded-[2rem] border border-slate-50 shadow-sm group-hover:shadow-md transition-shadow">
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                        {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Support Section */}
            <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-slate-900 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-yellow-500 flex items-center justify-center mb-4">
                        <Mail className="text-white" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Still confused?</h4>
                    <p className="text-slate-400 mb-6 max-w-sm text-sm">
                        Our legal team is available for direct inquiries regarding specific clauses.
                    </p>
                    <a 
                        href="mailto:support@modernliving.com" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-2xl font-black text-sm hover:bg-yellow-500 hover:text-white transition-all"
                    >
                        Email Support <ArrowRight size={16} />
                    </a>
                </div>
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-yellow-500/10 rounded-full blur-[80px]" />
            </div>

          </div> 
        </div> 
      </div>
    </section>
  );
};

export default TermsOfServices;
