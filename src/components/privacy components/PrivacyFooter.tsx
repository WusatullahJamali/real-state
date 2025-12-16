"use client"
import React from "react";
import { Mail, Phone, Shield } from "lucide-react";

const PrivacyFooter = () => {
  const rights = [
    { title: "Access Your Data", desc: "Request a copy of all personal information we hold.", icon: "📋" },
    { title: "Correct Information", desc: "Update or correct any inaccurate personal data.", icon: "✏️" },
    { title: "Delete Your Data", desc: "Request deletion of your personal information.", icon: "🗑️" },
    { title: "Opt-Out", desc: "Unsubscribe from marketing communications anytime.", icon: "🔕" }
  ];

  return (
    <section className="bg-white relative mt-32 py-20 md:py-28 overflow-hidden">

      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-yellow-50/25 to-white pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 space-y-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Rights */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_6px_32px_rgba(0,0,0,0.05)] border border-yellow-200/60">
            <h2 className="text-4xl font-black text-black mb-10 flex items-center gap-3">
              <Shield className="text-yellow-600 text-5xl" />
              Your Privacy Rights
            </h2>

            <div className="space-y-7">
              {rights.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-yellow-100 hover:border-yellow-300 rounded-2xl p-6 flex gap-5 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="text-4xl">{item.icon}</span>

                  <div>
                    <h3 className="font-extrabold text-gray-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white relative overflow-hidden rounded-3xl p-12 text-center shadow-[0_6px_32px_rgba(0,0,0,0.05)] border border-yellow-100 flex items-center justify-center">
            <div className="absolute top-12 right-10 w-96 h-96 rounded-full bg-yellow-200/40 blur-3xl"></div>
            <div className="absolute bottom-16 left-10 w-96 h-96 rounded-full bg-yellow-100/40 blur-3xl"></div>

            <div className="relative z-10 max-w-lg">
              <h2 className="text-5xl font-extrabold text-black mb-6">
                Questions About Your Privacy?
              </h2>

              <p className="text-gray-700 font-medium text-lg mb-10">
                Our privacy team is here to help. Reach out with any concerns or requests regarding your personal data.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a className="bg-black text-white hover:bg-gray-800 px-8 py-5 rounded-2xl text-lg font-bold flex gap-3 items-center shadow-lg hover:shadow-xl">
                  <Mail className="text-2xl" /> privacy@realchoice.com
                </a>
                <a className="bg-white text-black border border-gray-200 px-8 py-5 rounded-2xl text-lg font-bold flex gap-3 items-center shadow-lg hover:shadow-xl">
                  <Phone className="text-2xl" /> +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <footer className="text-center">
          <div className="h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6"></div>

          <p className="text-gray-600 text-lg mb-2">
            Effective as of <span className="font-black text-black">December 9, 2025</span>
          </p>
          <p className="text-gray-500 font-medium tracking-wide">
            RealChoice™ | Professional Real Estate Platform
          </p>
        </footer>
      </div>
    </section>
  );
};

export default PrivacyFooter;
