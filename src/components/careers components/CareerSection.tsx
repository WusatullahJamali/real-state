"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaBriefcase, FaSearch, FaChevronDown, FaCodeBranch } from "react-icons/fa";

const jobs = [
  { id: 1, title: "Real Estate Agent", department: "Sales", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 2, title: "Property Manager", department: "Operations", location: "Lahore, Pakistan", type: "Full-Time" },
  { id: 3, title: "Real Estate Marketing Executive", department: "Marketing", location: "Hyderabad, Pakistan", type: "Part-Time" },
  { id: 4, title: "Customer Support Specialist", department: "Customer Service", location: "Remote", type: "Full-Time" },
  { id: 5, title: "Real Estate Analyst", department: "Research", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 6, title: "Leasing Coordinator", department: "Operations", location: "Islamabad, Pakistan", type: "Full-Time" },
  { id: 7, title: "Real Estate Photographer", department: "Marketing", location: "Lahore, Pakistan", "type": "Part-Time" },
  { id: 8, title: "Client Relations Manager", department: "Sales", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 9, title: "Investment Analyst", department: "Research", location: "Remote", type: "Full-Time" },
  { id: 10, title: "Digital Marketing Specialist", department: "Marketing", location: "Islamabad, Pakistan", type: "Full-Time" },
  { id: 11, title: "Office Administrator", department: "Operations", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 12, title: "Customer Success Executive", department: "Customer Service", location: "Lahore, Pakistan", type: "Full-Time" },
];

const departments = Array.from(new Set(jobs.map((job) => job.department)));
const locations = Array.from(new Set(jobs.map((job) => job.location)));

export default function ExpandingHoverCareersSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const getTypeClasses = (type: string) => {
    if (type === "Full-Time") {
      return "bg-green-600 text-white font-bold";
    }
    return "bg-orange-600 text-white font-bold";
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <p className="text-md font-extrabold uppercase tracking-[0.3em] text-yellow-700 mb-2">
            JOIN OUR TEAM
          </p>
          <h2 className="text-6xl md:text-7xl font-black text-black tracking-tight mb-4">
            Career Opportunities 🚀
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto font-light">
            Experience growth and innovation. Explore openings and join our highly motivated team.
          </p>
        </div>
        {/* -------------------- */}
        
        {/* --- FILTERS & SEARCH CONTAINER --- */}
        <div className="bg-gray-50 p-7 md:p-10 rounded-2xl border-2 border-gray-200 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Search Input */}
            <div className="relative col-span-1 md:col-span-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 text-lg"
              />
            </div>
            
            {/* Department Filter */}
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none w-full p-4 pl-4 pr-10 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer transition-all duration-200 text-lg"
              >
                <option value="All">All Departments</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none w-full p-4 pl-4 pr-10 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer transition-all duration-200 text-lg"
              >
                <option value="All">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}

        {/* --- JOB LISTINGS (GRID) --- */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length === 0 && (
            <p className="text-xl text-gray-500 col-span-full text-center py-12 border-4 border-dashed border-gray-200 rounded-3xl bg-gray-50">
              😢 No current openings match your selected filters. Please adjust your search.
            </p>
          )}

          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              // Base Card Styles: Position relative and overflow hidden are crucial for the effect
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              
              {/* === 1. EXPANDING YELLOW BACKGROUND (Replaces :before) === */}
              <div 
                className="absolute z-0 top-0 right-0 h-8 w-8 bg-yellow-500 rounded-full 
                           transform scale-0 transition-transform duration-500 ease-out 
                           group-hover:scale-[30] group-focus:scale-[30]" // Scaled up hugely to cover the card
              ></div>
              
              {/* === 2. THE "GO CORNER" ELEMENT (Fixed size top-right) === */}
              <div 
                className="absolute top-0 right-0 w-10 h-10 overflow-hidden z-20 
                           bg-gray-200 transition-colors duration-300 
                           group-hover:bg-yellow-500"
                style={{ borderRadius: '0 8px 0 32px' }} // Custom radius for the diagonal cut
              >
                <span className="absolute text-white font-serif text-xl font-extrabold transform -translate-x-1/2 -translate-y-1/2 opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ top: '50%', left: '50%', marginTop: '-4px', marginRight: '-4px' }}>
                  →
                </span>
              </div>
              {/* ----------------------------------------------------------------- */}
              
              {/* Card Content (z-index 10 to stay above the expanding background) */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Card Header with Icon and Title */}
                <div className="flex items-center mb-6">
                  {/* Icon with white background on hover */}
                  <div className="p-3 bg-yellow-500 rounded-xl shadow-md shadow-yellow-300 mr-4 flex-shrink-0 
                              group-hover:bg-white transition-colors duration-300">
                    <FaBriefcase size={24} className="text-white group-hover:text-yellow-700 transition-colors duration-300" />
                  </div>
                  {/* Heading: Color flips to white on hover */}
                  <h3 className="text-2xl font-extrabold text-gray-900 leading-snug 
                              group-hover:text-white transition-colors duration-300">
                    {job.title}
                  </h3>
                </div>
                
                <div className="flex flex-col flex-grow">
                  
                  {/* Details (Metadata Grid) */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-gray-100 mb-6 flex-grow 
                              group-hover:border-yellow-300/30 transition-colors duration-300">
                      
                      {/* Department */}
                      <div className="flex items-center gap-2 text-gray-700 group-hover:text-yellow-100 transition-colors duration-300">
                        <FaCodeBranch className="text-yellow-500 min-w-4 group-hover:text-white transition-colors duration-300" size={16} />
                        <p className="text-base font-semibold truncate">{job.department}</p>
                      </div>

                      {/* Job Type Badge (Retain existing color for clarity) */}
                      <span className={`justify-self-end px-4 py-1.5 text-xs tracking-wider rounded-full ${getTypeClasses(job.type)}`}>
                          {job.type.toUpperCase()}
                      </span>
                      
                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-700 group-hover:text-yellow-100 transition-colors duration-300">
                        <FaMapMarkerAlt className="text-yellow-500 min-w-4 group-hover:text-white transition-colors duration-300" size={16} />
                        <p className="text-base font-medium truncate">{job.location}</p>
                      </div>
                  </div>

                  {/* Apply Button - style flips on hover */}
                  <button
                    className="w-full bg-yellow-500 text-white font-extrabold px-6 py-4 rounded-full shadow-lg shadow-yellow-300/70 transition duration-300 
                                group-hover:bg-white group-hover:text-yellow-600 group-hover:shadow-none focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* ----------------------------- */}

      </div>
    </section>
  );
}