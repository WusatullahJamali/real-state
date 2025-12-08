"use client";

import {
  FiShield,
  FiUsers,
  FiActivity,
  FiShare2,
  FiLock,
  FiRefreshCw,
} from "react-icons/fi";

export default function PrivacyPolicy() {
  const policies = [
    {
      icon: <FiShield />,
      title: "Information Collection",
      desc: "We collect the information you provide when contacting, registering, or submitting property forms.",
    },
    {
      icon: <FiActivity />,
      title: "Use of Information",
      desc: "Your information helps us improve our property services, communication, and digital customer support.",
    },
    {
      icon: <FiUsers />,
      title: "Cookies & Tracking",
      desc: "Cookies help personalize your browsing, improve performance and enhance user experience on our real estate platform.",
    },
    {
      icon: <FiShare2 />,
      title: "Information Sharing",
      desc: "We don't sell your data. We only share with trusted agencies under law, compliance or service integrations.",
    },
    {
      icon: <FiLock />,
      title: "Security",
      desc: "We apply proper technical security to protect real estate customer information from unauthorized access.",
    },
    {
      icon: <FiRefreshCw />,
      title: "Changes to this Policy",
      desc: "We may update this without notice. The latest version appears here along with a date.",
    }
  ];

  return (
    <section className="bg-[#fffdf5] min-h-screen flex justify-center py-16 px-4">

      <div className="max-w-3xl w-full rounded-3xl bg-[#0c0c0c]/90
      shadow-[0_0_50px_rgba(0,0,0,.4)]
      backdrop-blur-xl border border-yellow-500/40 overflow-hidden animate-fadeIn">

        {/* HEADER */}
        <div className="p-10 bg-gradient-to-b from-yellow-500 to-yellow-400 text-black text-center">
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="text-black/80 text-sm mt-2">
            Your privacy is a top priority
          </p>
        </div>

        {/* SCROLL AREA */}
        <div className="p-8 space-y-10 overflow-y-auto max-h-[70vh] customScroll text-gray-200">

          {policies.map((item, i) => (
            <div
              key={i}
              className="bg-[#111]/70 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-400 transition-all shadow-lg"
            >
              <div className="flex gap-3 items-center mb-3">
                <div className="w-12 h-12 rounded-full border border-yellow-400 flex justify-center items-center text-yellow-400 text-xl">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold text-yellow-400">
                  {i + 1}. {item.title}
                </h2>
              </div>
              <p className="text-gray-300 leading-7">{item.desc}</p>
            </div>
          ))}

          <p className="text-center text-gray-400 text-sm pt-10 border-t border-yellow-500/20">
            Last updated: December 2025
          </p>
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn .6s ease forwards;
        }
        @keyframes fadeIn {
          0% { opacity:0; transform:translateY(10px);}
          100% { opacity:1; transform:translateY(0);}
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
