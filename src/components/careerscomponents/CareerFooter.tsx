"use client";

import React from "react";
import Link from "next/link";
import { Send, FileText } from "lucide-react";

const CareerFooter = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Pattern (Dot Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white border border-slate-100 rounded-[40px] p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-50 mb-8 transition-transform hover:rotate-12 duration-300">
            <FileText className="text-yellow-600" size={32} />
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Can’t Find a Role <br className="hidden md:block" /> That Fits?
          </h3>

          <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-medium">
            We’re always on the lookout for exceptional talent. Submit your details 
            and we’ll reach out when a perfect match opens up.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-black text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-slate-200 transition-all active:scale-95 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <span className="relative">Submit Resume</span>
              <Send size={18} className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              href="/culture"
              className="px-10 py-5 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Learn about our culture
            </Link>
          </div>

          {/* Trust Caption */}
          <p className="mt-10 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Privacy Guaranteed • 100% Confidential
          </p>
        </div>
      </div>

      {/* Tailwind Custom Animation for Shimmer */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default CareerFooter;