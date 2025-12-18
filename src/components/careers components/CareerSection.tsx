"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, Search, ChevronDown, GitBranch, ArrowUpRight } from "lucide-react";

// Types for better clarity
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

const jobs: Job[] = [
  { id: 1, title: "Real Estate Agent", department: "Sales", location: "Baghdad, Iraq", type: "Full-Time" },
  { id: 2, title: "Property Manager", department: "Operations", location: "Erbil, Iraq", type: "Full-Time" },
  { id: 3, title: "Real Estate Marketing Executive", department: "Marketing", location: "Basra, Iraq", type: "Part-Time" },
  { id: 4, title: "Customer Support Specialist", department: "Customer Service", location: "Remote", type: "Full-Time" },
  { id: 5, title: "Real Estate Analyst", department: "Research", location: "Baghdad, Iraq", type: "Full-Time" },
  { id: 6, title: "Leasing Coordinator", department: "Operations", location: "Najaf, Iraq", type: "Full-Time" },
  { id: 7, title: "Real Estate Photographer", department: "Marketing", location: "Erbil, Iraq", type: "Part-Time" },
  { id: 8, title: "Client Relations Manager", department: "Sales", location: "Baghdad, Iraq", type: "Full-Time" },
  { id: 9, title: "Investment Analyst", department: "Research", location: "Remote", type: "Full-Time" },
  { id: 10, title: "Digital Marketing Specialist", department: "Marketing", location: "Najaf, Iraq", type: "Full-Time" },
  { id: 11, title: "Office Administrator", department: "Operations", location: "Baghdad, Iraq", type: "Full-Time" },
  { id: 12, title: "Customer Success Executive", department: "Customer Service", location: "Erbil, Iraq", type: "Full-Time" },
  { id: 13, title: "Real Estate Intern", department: "Sales", location: "Baghdad, Iraq", type: "Internship" },
  { id: 14, title: "Leasing Intern", department: "Operations", location: "Najaf, Iraq", type: "Internship" },
  { id: 15, title: "Property Inspection Intern", department: "Operations", location: "Erbil, Iraq", type: "Internship" },
  { id: 16, title: "Rental Operations Intern", department: "Operations", location: "Baghdad, Iraq", type: "Internship" },
  { id: 17, title: "Property Acquisition Intern", department: "Sales", location: "Basra, Iraq", type: "Internship" },
  { id: 18, title: "Property Research Intern", department: "Research", location: "Remote", type: "Internship" },
  { id: 19, title: "Real Estate Documentation Intern", department: "Operations", location: "Baghdad, Iraq", type: "Internship" },
  { id: 20, title: "Real Estate Compliance Intern", department: "Operations", location: "Erbil, Iraq", type: "Internship" },
  { id: 21, title: "Investment Property Intern", department: "Research", location: "Najaf, Iraq", type: "Internship" },
  { id: 22, title: "Real Estate Transactions Intern", department: "Sales", location: "Remote", type: "Internship" },

];

const departments = Array.from(new Set(jobs.map((job) => job.department)));
const locations = Array.from(new Set(jobs.map((job) => job.location)));

export default function ExpandingHoverCareersSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredJobs = jobs.filter((job) => {
    const dep = selectedDepartment === "All" || job.department === selectedDepartment;
    const loc = selectedLocation === "All" || job.location === selectedLocation;
    const search = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return dep && loc && search;
  });

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "Full-Time": return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Part-Time": return "bg-amber-50 text-amber-700 border-amber-100";
      case "Internship": return "bg-indigo-50 text-indigo-700 border-indigo-100";
      default: return "bg-gray-50 text-gray-700 border-gray-100";
    }
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <span className="text-yellow-600 font-bold tracking-[0.2em] text-sm uppercase">Join Our Mission</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
            Build the future <br /> of Real Estate.
          </h2>
          <p className="text-yellow-600 text-lg max-w-2xl leading-relaxed">
            We're looking for passionate individuals to join our team in Iraq and Remote.
          </p>
        </div>

        {/* REFINED FILTERS */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
            />
          </div>
          <div className="flex gap-4">
             <select 
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="bg-white px-6 py-4 rounded-2xl border font-medium text-slate-700 outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
             >
                <option value="All">All Departments</option>
                {departments.map(d => <option key={d} value={d}>{d}</option>)}
             </select>
             <select 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-white px-6 py-4 rounded-2xl border font-medium text-slate-700 outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
             >
                <option value="All">All Locations</option>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
             </select>
          </div>
        </div>

        {/* JOBS GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="group relative bg-white rounded-[32px] p-8 border border-slate-200 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 flex flex-col h-full"
            >
              {/* Card Decoration */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-yellow-600" size={24} />
              </div>

              <div className="mb-8">
                <div className={`inline-flex items-center px-3 py-1 rounded-lg border text-[11px] font-bold uppercase tracking-wider mb-6 ${getBadgeStyles(job.type)}`}>
                  {job.type}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors leading-tight">
                  {job.title}
                </h3>
              </div>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                    <GitBranch size={14} className="group-hover:text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium">{job.department}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                    <MapPin size={14} className="group-hover:text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium">{job.location}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-400 text-sm font-medium italic">Apply before 30th Dec</span>
                <span className="text-yellow-600 font-bold text-sm hidden group-hover:block animate-in fade-in slide-in-from-right-2">
                  Apply Now →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No positions found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </section>
  );
}