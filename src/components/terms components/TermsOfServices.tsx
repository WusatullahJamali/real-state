"use client";

import { Shield, FileText, Phone } from "lucide-react";

export default function TermsConditions() {
  return (
    <section className="bg-[#fffdf5] min-h-screen flex justify-center items-center py-16 px-4">

      <div className="w-full max-w-3xl rounded-3xl 
        overflow-hidden border border-yellow-500/50 bg-[#0c0c0c]/90 backdrop-blur-xl animate-fadeIn">

        {/* HEADER */}
        <div className=" bg-gradient-to-b from-yellow-500 to-yellow-400 text-center py-10">
          <div className="flex justify-center mb-4 text-black">
            <Shield size={46} />
          </div>

          <h2 className="text-black text-4xl font-extrabold tracking-wide">
            Terms & Conditions
          </h2>
          <p className="text-black/70 text-sm mt-2 font-medium">
            Please read carefully before using our platform.
          </p>
        </div>

        {/* SCROLL AREA */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh] text-gray-200 customScroll">

          {/* list */}
          {[
            {
              title: "Acceptance of Terms",
              text: "By accessing this website, you agree to be bound by these Terms & Conditions...",
            },
            {
              title: "Use of the Service",
              text: "You agree to use the service for lawful purposes and follow all policies.",
            },
            {
              title: "Mobile Usage",
              text: "The service may be accessed on all devices including mobile phones.",
            },
            {
              title: "Intellectual Property",
              text: "All content is protected by copyright. Do not copy or reuse without permission.",
            },
            {
              title: "Changes to Terms",
              text: "We reserve the right to update these terms at any time. Continued use means acceptance.",
            },
            {
              title: "Governing Law",
              text: "These terms are governed by applicable laws and regulations.",
            }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl text-yellow-400 font-bold">{i + 1}. {item.title}</h3>
              <p className="text-gray-400 mt-2 leading-7">
                {item.text}
              </p>
            </div>
          ))}

          {/* Contact */}
          <div className="border-t border-yellow-500/30 pt-8">
            <h3 className="text-xl text-yellow-400 font-bold flex items-center gap-2">
              <Phone /> Contact Us
            </h3>
            <p className="mt-3 text-gray-300">
              Email: support@realestate.com <br />
              Phone: +92 300 0000000
            </p>
          </div>
        </div>
      </div>

      {/* animation */}
      <style>{`
        .animate-fadeIn {
          animation: fade .6s ease forwards;
        }
        @keyframes fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .customScroll::-webkit-scrollbar{
          width:6px;
        }
        .customScroll::-webkit-scrollbar-thumb{
          background: linear-gradient(#ffd900,#ffa600);
          border-radius:8px;
        }
      `}</style>
    </section>
  );
}
