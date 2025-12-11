"use client";

import Image from "next/image";
import Link from "next/link";

// ⭐ Lucide Icons
import { Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO BANNER */}
      <section className="relative bg-white shadow-lg rounded-xl overflow-hidden max-w-[1200px] mx-auto pt-2 ">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="relative w-full md:w-1/3 h-64 md:h-80">
            <Image
              src="/b1.jpg"
              alt="Blog Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold inline-block shadow-sm">
              Market News
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Real Estate Market Trends in Karachi 2025
            </h1>

            <p className="mt-3 text-gray-600 text-sm sm:text-base">
              10 December, 2024
            </p>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Intro Paragraph */}
        <div className="bg-white shadow-lg rounded-xl border-l-4 border-yellow-400 p-6 transition-transform hover:scale-[1.01]">
          <p className="leading-8 text-gray-700 text-lg">
            Karachi has consistently remained the strongest real estate market
            in Pakistan due to its port, corporate sector, foreign investment
            and strong rental demand. In 2025, majority of analysts expect
            apartment prices to continue rising especially in waterfront areas
            including DHA, Clifton and Emaar Crescent Bay…
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: "Karachi Investment Hotspots",
            content:
              "Current most active investor areas include DHA Phase 8, Scheme 33 and Bahria Town Karachi. These zones are benefiting from expanding road networks, commercial zones and improved security situation…",
          },
          {
            title: "Apartment Demand Is Rising",
            content:
              "Unlike previous years, vertical construction is now being supported at government level. Families prefer high-rise communities due to gated access, facilities, foreign buyers and rental income potential…",
          },
          {
            title: "Overseas Pakistanis Are Driving Prices",
            content:
              "The rise of overseas buying through online Zoom bookings and digital agreements continues to boost luxury projects in Clifton and Emaar. Developers increasingly target UAE and UK Pakistanis…",
          },
          {
            title: "Construction Material Price Trends",
            content:
              "Steel and cement price fluctuations slowed down in mid 2024, however long term inflation pressure remains and this may keep pushing construction costs upwards by 6% to 9% in 2025…",
          },
          {
            title: "Residential vs Commercial Investment",
            content:
              "Commercial units remain profitable but require higher capital. Meanwhile small apartments in Bahria Town Karachi are becoming a strong long-term rental asset due to lifestyle demand…",
          },
          {
            title: "Rental ROI Expectations",
            content:
              "Rental returns for apartments currently range between 6% to 12% depending on amenities and location. DHA apartments offer strongest corporate rent due to international companies presence…",
          },
          {
            title: "What Will Happen By 2030?",
            content:
              "Karachi is projected to become the largest real estate market in South Asia due to population growth, port economy, Gwadar link and continuous international investment especially from Gulf countries…",
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl border-l-4 border-yellow-500 p-6 transition-all hover:shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 text-lg leading-8">{section.content}</p>
          </div>
        ))}

        {/* Share Section */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-900">Share:</span>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 cursor-pointer text-white transition-transform hover:scale-110 shadow-md"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex gap-2 items-center bg-yellow-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-yellow-600 transition-all"
        >
          <ArrowLeft size={20} /> Back to Blog
        </Link>
      </div>
    </div>
  );
}
