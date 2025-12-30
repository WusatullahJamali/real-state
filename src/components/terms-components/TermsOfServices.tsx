"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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

const termsData = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: "By accessing or using the Albasync platform (the \"Service\"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.",
    icon: <Scale size={18} />
  },
  {
    id: "accounts",
    title: "2. User Accounts & Security",
    content: "When you create an account with us, you must provide information that is accurate, complete, and current. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Service.",
    icon: <Users size={18} />
  },
  {
    id: "content",
    title: "3. Content & Listings",
    content: "Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (\"Content\"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness. Albasync reserves the right to remove any listing that violates our quality standards.",
    icon: <FileText size={18} />
  },
  {
    id: "prohibited",
    title: "4. Prohibited Activities",
    content: "You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Service in any medium; (ii) using any automated system, including \"robots\" and \"spiders,\" to access the Service; (iii) attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.",
    icon: <Ban size={18} />
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    content: "In no event shall Albasync, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.",
    icon: <ShieldAlert size={18} />
  },
  {
    id: "governing",
    title: "6. Governing Law",
    content: "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Albasync operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
    icon: <Gavel size={18} />
  }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");

  // Handle Scroll to Section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of termsData) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. Minimal Header */}
      <header className="border-b border-slate-200 bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-3">
                Legal Compliance
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl">
                Please read these terms carefully before using our services.
                <br />
                <span className="text-sm">Last updated: <span className="text-slate-900 font-semibold">December 26, 2025</span></span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-700"
              >
                <Printer size={16} /> Print
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                <Download size={16} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 px-2">
                Contents
              </h3>
              <nav className="space-y-1 border-l border-slate-200">
                {termsData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center justify-between w-full text-left px-4 py-2.5 text-sm transition-all border-l-2 -ml-[2px] ${
                      activeSection === item.id
                        ? "border-yellow-600 text-yellow-700 font-semibold bg-yellow-50/50"
                        : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <span>{item.title}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-xs font-semibold text-slate-500 mb-2">Need legal help?</p>
                <a href="mailto:legal@realchoice.com" className="text-sm font-bold text-slate-900 hover:underline">
                  legal@Albasync.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right: Main Terms Content */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-16">
              {termsData.map((item) => (
                <section 
                  key={item.id} 
                  id={item.id} 
                  className="scroll-mt-24 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-slate-100 text-slate-600 group-hover:text-yellow-600 group-hover:bg-yellow-50 transition-colors">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h2>
                  </div>
                  
                  <div className="pl-0 md:pl-12">
                    <p className="text-lg leading-relaxed text-slate-600 text-justify">
                      {item.content}
                    </p>
                  </div>
                  
                  {/* Visual Divider (except last item) */}
                  <div className="mt-12 h-px bg-slate-100 w-full" />
                </section>
              ))}
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Disclaimer</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                The materials on Albasync website are provided on an 'as is' basis. Albasync makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <div className="mt-6 flex gap-4">
  <Link href="/privacy-policy" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
    Privacy Policy <ArrowRight size={14} />
  </Link>
  <button className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
    Cookie Settings <ArrowRight size={14} />
  </button>
</div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}