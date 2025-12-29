"use client";
import React from "react";
import { Mail, Printer, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "December 26, 2025";

  const policies = [
    {
      id: "identity",
      title: "1. Data Identity & Collection",
      content:
        "We collect essential identifiers including your full name, encrypted email address, and verified phone number. This data allows us to create a secure environment for property transactions and prevents unauthorized access to your sensitive real estate documents. We act as the data controller for the information you provide during account registration.",
    },
    {
      id: "analytics",
      title: "2. Usage Analytics",
      content:
        "Our systems analyze search patterns, saved properties, and duration of sessions. We use this anonymized data to train our recommendation engine, ensuring that the properties you see first are the ones most relevant to your lifestyle needs. This data is aggregated and does not identify individual users outside of the platform.",
    },
    {
      id: "cookies",
      title: "3. Tracking & Cookies",
      content:
        "We use 'strictly necessary' cookies for security and 'functional' cookies to remember your filters. You can opt-out of performance cookies through our preference center without losing access to core search features. We do not sell your personal browsing data to third-party ad networks.",
    },
    {
      id: "third-party",
      title: "4. Third-Party Sharing",
      content:
        "Information is only shared with licensed agents and financial institutions when you explicitly request a viewing or pre-approval. We perform quarterly security audits on all third-party vendors to ensure they meet our 'Zero-Leak' standards. We do not share data with external real estate aggregators without consent.",
    },
    {
      id: "encryption",
      title: "5. Security & Encryption",
      content:
        "All property documents and personal chat logs are protected by AES-256 encryption. We utilize hardware security modules (HSM) and multi-factor authentication (MFA) to ensure that only you can access your private data. In the event of a breach, we are committed to notifying affected users within 72 hours.",
    },
    {
      id: "rights",
      title: "6. Your Legal Rights",
      content:
        "Under global privacy laws (including GDPR and CCPA), you have the right to request a full export of your data or its permanent deletion. We process all 'Right to be Forgotten' requests within 48 business hours via our automated dashboard or direct contact with our Privacy Officer.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Simple Header */}
      <header className="border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-wider text-xs mb-3">
                <ShieldCheck size={16} />
                Legal Documentation
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
                Privacy Policy
              </h1>
              <p className="text-slate-500">Last updated: {lastUpdated}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-slate-700"
              >
                <Printer size={16} /> Print
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                Contact Support
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
              <h3 className="font-bold text-slate-900 mb-4 px-3">Contents</h3>
              <nav className="space-y-1">
                {policies.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                  >
                    {item.title}
                  </button>
                ))}
                <div className="h-px bg-slate-200 my-4 mx-3" />
                <a
                  href="mailto:privacy@realchoice.com"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-900 hover:text-yellow-600"
                >
                  <Mail size={14} /> privacy@albasync.com
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-2xl">
            <div className="prose prose-slate prose-lg text-slate-600">
              <p className="lead mb-10 text-lg">
                At <strong>RealChoice</strong>, we value your trust. This
                Privacy Policy outlines how we handle your personal data when
                you use our website and services to buy, sell, or rent
                properties. By using our platform, you agree to the collection
                and use of information in accordance with this policy.
              </p>

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
                  Changes to This Policy
                </h3>
                <p className="text-sm">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date at the top of
                  this Privacy Policy.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-yellow-600 font-bold hover:underline"
                  >
                    View Terms of Service <ArrowUpRight size={16} />
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
