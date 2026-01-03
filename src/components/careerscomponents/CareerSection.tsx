"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight, Building2 } from "lucide-react";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  posted: string;
}

// Data tailored for an Iraqi Real Estate context
const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Sales Consultant (Luxury)",
    department: "Sales",
    location: "Al-Mansour, Baghdad",
    type: "Full-Time",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Commercial Property Manager",
    department: "Operations",
    location: "Basra, Iraq",
    type: "Full-Time",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Real Estate Legal Advisor",
    department: "Legal",
    location: "Baghdad HQ",
    type: "Part-Time",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Regional Area Manager",
    department: "Management",
    location: "Erbil, Kurdistan",
    type: "Full-Time",
    posted: "Just now",
  },
  {
    id: 5,
    title: "Property Valuation Analyst",
    department: "Finance",
    location: "Karada, Baghdad",
    type: "Full-Time",
    posted: "5 days ago",
  },
  {
    id: 6,
    title: "Bilingual Client Support (Arabic/Kurdish)",
    department: "Customer Service",
    location: "Remote / Erbil",
    type: "Full-Time",
    posted: "1 week ago",
  },
  {
    id: 7,
    title: "Frontend Engineer (PropTech)",
    department: "Technology",
    location: "Remote",
    type: "Contract",
    posted: "2 weeks ago",
  },
  {
    id: 8,
    title: "Leasing Broker (Residential)",
    department: "Sales",
    location: "Najaf, Iraq",
    type: "Commission",
    posted: "3 days ago",
  },
  {
    id: 9,
    title: "Site Inspection Coordinator",
    department: "Operations",
    location: "Mosul, Iraq",
    type: "Internship",
    posted: "4 days ago",
  },
];

export default function CareersSection() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            We are hiring
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Build the Future of <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10">Iraqi Real Estate</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/60 z-0 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Join the leading property marketplace in Iraq , from Baghdad to
            Basra, we are connecting people with their dream homes and
            investment opportunities.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="group flex flex-col bg-white rounded-2xl p-6 border border-slate-200 hover:border-yellow-400 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Type Badge + Department */}
              <div className="flex justify-between items-start mb-4">
                {/* MOBILE: bg-slate-800 text-white (High Contrast)
                   DESKTOP: bg-slate-100 -> hover:bg-slate-800 
                */}
                <span
                  className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors
                                 bg-slate-800 text-white 
                                 lg:bg-slate-100 lg:text-slate-600 lg:group-hover:bg-slate-800 lg:group-hover:text-white"
                >
                  {job.department}
                </span>

                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    job.type === "Full-Time"
                      ? "bg-green-50 text-green-700"
                      : job.type === "Remote"
                      ? "bg-purple-50 text-purple-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {job.type}
                </span>
              </div>

              {/* Job Title */}
              {/* MOBILE: text-yellow-600 (Always colored)
                  DESKTOP: text-slate-900 -> hover:text-yellow-600 
              */}
              <h3
                className="text-xl font-bold mb-3 transition-colors
                             text-yellow-600 
                             lg:text-slate-900 lg:group-hover:text-yellow-600"
              >
                {job.title}
              </h3>

              {/* Metadata */}
              <div className="flex flex-col gap-2 mb-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Posted {job.posted}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  View Details
                </span>

                {/* MOBILE: Yellow Background + White Text
                   DESKTOP: Gray Background + Dark Text -> Hover Yellow
                */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45
                                bg-yellow-500 text-white
                                lg:bg-slate-100 lg:text-slate-900 lg:group-hover:bg-yellow-500 lg:group-hover:text-white"
                >
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
