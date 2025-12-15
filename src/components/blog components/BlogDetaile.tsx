"use client";

import Image from "next/image";
import Link from "next/link";

// ⭐ Lucide Icons
import { Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO BANNER */}
     {/* HERO IMAGE */}
<section className="relative w-full h-[60vh]">
  <Image
    src="/blog[1].jpg"
    alt="Blog Image"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4 max-w-4xl">
    <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
      Market News
    </span>

  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
  Real Estate Market Trends in Iraq – 2025 Outlook
</h1>

<p className="mt-3 text-white/80 text-sm">
  15 December, 2024
</p>



  </div>
</section>


      {/* BODY CONTENT */}
     <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10">
  {/* Intro */}
 <p className="text-lg leading-8 text-gray-700">
  Iraq’s real estate market has shown strong recovery and growth in recent years,
  driven by economic stabilization, infrastructure development, and increasing
  domestic and overseas investment. Major cities such as Baghdad, Erbil, Basra,
  Najaf, and Karbala continue to attract residential, commercial, and rental
  demand. In 2025, analysts expect steady price appreciation, particularly in
  well-planned urban zones and mixed-use developments.
</p>

  {/* Sections */}
 {[
  {
    title: "Baghdad Investment Hotspots",
    content:
      "Baghdad remains the center of commercial and residential activity in Iraq. Areas such as Al-Mansour, Al-Yarmouk, and Al-Karrada continue to see high demand due to proximity to business districts, government institutions, and improved infrastructure.",
  },
  {
    title: "Erbil’s Growing Residential Demand",
    content:
      "Erbil has emerged as one of Iraq’s most stable real estate markets. Modern housing societies, gated communities, and high-rise apartments are attracting both local residents and foreign investors seeking long-term rental income.",
  },
  {
    title: "Basra’s Commercial & Oil-Driven Growth",
    content:
      "Basra’s oil-driven economy fuels strong demand for commercial offices, worker housing, and logistics-related properties. Residential developments near industrial zones continue to gain value.",
  },
  {
    title: "Najaf & Karbala: Tourism-Based Rental ROI",
    content:
      "Religious tourism plays a major role in the real estate markets of Najaf and Karbala. Short-term rentals, hotel apartments, and mixed-use developments offer attractive rental returns throughout the year.",
  },
].map((section, idx) => (
  <div key={idx} className="space-y-3">
    <h2 className="text-2xl font-bold text-gray-900">
      {section.title}
    </h2>
    <p className="text-gray-700 leading-8">
      {section.content}
    </p>
  </div>
))}


  {/* Share */}
  <div className="flex items-center gap-4 pt-10">
    <span className="font-semibold text-gray-800">Share:</span>
    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
      <button
        key={i}
        className="p-2 rounded-full bg-gray-100 hover:bg-yellow-400 hover:text-white transition"
      >
        <Icon size={18} />
      </button>
    ))}
  </div>

  {/* Back */}
  <Link
    href="/blog"
    className="inline-flex items-center gap-2 text-yellow-600 font-medium hover:underline pt-6"
  >
    <ArrowLeft size={18} /> Back to Blog
  </Link>
</div>
</div>
  );
}
