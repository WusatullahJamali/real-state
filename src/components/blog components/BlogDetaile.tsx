"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogDetails() {

  return (
    <div className="min-h-screen bg-[#fffdf5] text-black">

      {/* HERO */}
      <section className="relative h-[520px]">
        <Image src="/b1.jpg" alt="" fill className="object-cover brightness-50" />

        <div className="absolute bottom-14 left-6 max-w-2xl text-white">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold">
            Market News
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight drop-shadow-xl">
            Real Estate Market Trends in Karachi 2025
          </h1>
          <p className="mt-2 text-gray-200 text-sm">December, 2024</p>
        </div>
      </section>

      {/* BODY CONTENT */}
      <div className="max-w-[850px] mx-auto px-6 py-16 space-y-14">

        <p className="leading-8 text-gray-700 text-lg bg-white shadow rounded-xl p-6 border-l-4 border-yellow-400">
          Karachi has consistently remained the strongest real estate market in Pakistan due to its port, corporate sector,
          foreign investment and strong rental demand. In 2025, majority of analysts expect apartment prices to continue rising
          especially in waterfront areas including DHA, Clifton and Emaar Crescent Bay…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Karachi Investment Hotspots
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Current most active investor areas include DHA Phase 8, Scheme 33 and Bahria Town Karachi. These zones are benefiting
          from expanding road networks, commercial zones and improved security situation…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Apartment Demand Is Rising
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Unlike previous years, vertical construction is now being supported at government level. Families prefer high-rise
          communities due to gated access, facilities, foreign buyers and rental income potential…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Overseas Pakistanis Are Driving Prices
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          The rise of overseas buying through online Zoom bookings and digital agreements continues to boost luxury projects
          in Clifton and Emaar. Developers increasingly target UAE and UK Pakistanis…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Construction Material Price Trends
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Steel and cement price fluctuations slowed down in mid 2024, however long term inflation pressure remains and this
          may keep pushing construction costs upwards by 6% to 9% in 2025…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Residential vs Commercial Investment
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Commercial units remain profitable but require higher capital. Meanwhile small apartments in Bahria Town Karachi
          are becoming a strong long-term rental asset due to lifestyle demand…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          Rental ROI Expectations
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Rental returns for apartments currently range between 6% to 12% depending on amenities and location. DHA apartments
          offer strongest corporate rent due to international companies presence…
        </p>

        {/* SECTION */}
        <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-yellow-500 pl-4">
          What Will Happen By 2030?
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          Karachi is projected to become the largest real estate market in South Asia due to population growth, port economy,
          Gwadar link and continuous international investment especially from Gulf countries…
        </p>

        {/* Share */}
        <div className="mt-10 flex gap-6 items-center">
          <span className="text-gray-900 font-semibold">Share:</span>

          {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
            <button
              key={i}
              className="p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 text-white transition-transform hover:scale-110"
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* BACK */}
        <Link
          href="/blog"
          className="inline-flex gap-2 items-center bg-black text-white px-6 py-3 rounded-xl"
        >
          <FiArrowLeft /> Back to Blog
        </Link>

      </div>

    </div>
  );
}
