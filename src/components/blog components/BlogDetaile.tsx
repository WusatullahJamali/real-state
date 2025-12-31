"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  Calendar,
  User,
  Clock,
} from "lucide-react";

export default function BlogDetails() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/blog[1].jpg"
          alt="Iraq Real Estate Market"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-center"
        >
          <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Market Insights
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Iraq Real Estate Market Trends  
            <span className="block text-yellow-400">2025 Investment Outlook</span>
          </h1>

          <div className="mt-6 flex justify-center gap-6 text-white/80 text-sm flex-wrap">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> Dec 15, 2024
            </span>
            <span className="flex items-center gap-2">
              <User size={16} /> Market Research Team
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> 6 min read
            </span>
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-20 space-y-12"
      >
        {/* Intro */}
        <p className="text-xl leading-9 text-slate-700">
          Iraq’s real estate sector is entering a new phase of opportunity in 2025,
          driven by economic recovery, infrastructure investment, and rising housing demand.
          From Baghdad’s commercial corridors to Erbil’s residential expansion, investors are
          closely watching Iraq’s evolving property landscape.
        </p>

        {/* Sections */}
        {[
          {
            title: "Baghdad: The Core of Commercial Growth",
            text:
              "Baghdad continues to dominate Iraq’s commercial real estate market. Office spaces, mixed-use developments, and retail hubs are experiencing increased demand due to government projects and private-sector expansion.",
          },
          {
            title: "Erbil: Stability Driving Residential Demand",
            text:
              "Erbil remains one of Iraq’s most stable and investor-friendly cities. Gated communities, luxury apartments, and serviced residences are seeing consistent appreciation, especially among expatriates and business professionals.",
          },
          {
            title: "Basra: Oil Economy Fueling Commercial Expansion",
            text:
              "Basra’s strategic importance in Iraq’s oil sector drives strong demand for warehouses, logistics centers, and staff housing. Infrastructure upgrades are further strengthening investor confidence.",
          },
          {
            title: "Najaf & Karbala: Tourism-Based Rental Returns",
            text:
              "Religious tourism continues to generate high-yield rental opportunities. Hotels, furnished apartments, and short-term rentals benefit from year-round pilgrimage traffic.",
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              {section.title}
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              {section.text}
            </p>
          </motion.section>
        ))}

        {/* Quote Highlight */}
        <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-xl text-slate-800 bg-yellow-50 py-6 rounded-r-xl">
          “Iraq’s real estate market in 2025 offers long-term value for investors
          willing to enter early and focus on high-growth regions.”
        </blockquote>

        {/* Share */}
        <div className="pt-10 border-t">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-800">Share this article:</span>
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="p-3 rounded-full border hover:bg-yellow-400 hover:text-white transition-all"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:underline pt-6"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
      </motion.article>
    </div>
  );
}
