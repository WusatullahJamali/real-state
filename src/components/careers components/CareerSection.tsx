"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaBriefcase, FaSearch } from "react-icons/fa";

const jobs = [
  { id: 1, title: "Real Estate Agent", department: "Sales", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 2, title: "Property Manager", department: "Operations", location: "Lahore, Pakistan", type: "Full-Time" },
  { id: 3, title: "Real Estate Marketing Executive", department: "Marketing", location: "Hyderabad, Pakistan", type: "Part-Time" },
  { id: 4, title: "Customer Support Specialist", department: "Customer Service", location: "Remote", type: "Full-Time" },
  { id: 5, title: "Real Estate Analyst", department: "Research", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 6, title: "Leasing Coordinator", department: "Operations", location: "Islamabad, Pakistan", type: "Full-Time" },
  { id: 7, title: "Real Estate Photographer", department: "Marketing", location: "Lahore, Pakistan", type: "Part-Time" },
  { id: 8, title: "Client Relations Manager", department: "Sales", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 9, title: "Investment Analyst", department: "Research", location: "Remote", type: "Full-Time" },
  { id: 10, title: "Digital Marketing Specialist", department: "Marketing", location: "Islamabad, Pakistan", type: "Full-Time" },
  { id: 11, title: "Office Administrator", department: "Operations", location: "Karachi, Pakistan", type: "Full-Time" },
  { id: 12, title: "Customer Success Executive", department: "Customer Service", location: "Lahore, Pakistan", type: "Full-Time" },
];

const departments = Array.from(new Set(jobs.map((job) => job.department)));
const locations = Array.from(new Set(jobs.map((job) => job.location)));

export default function CareersSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <section className="bg-[#fffdf5] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          Join Our Real Estate Team
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          We are looking for talented individuals passionate about real estate.
          Explore current openings and apply today.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-wrap justify-center gap-4">
        {/* Department Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {["All", ...departments].map((dep) => (
            <button
              key={dep}
              onClick={() => setSelectedDepartment(dep)}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                selectedDepartment === dep
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {dep}
            </button>
          ))}
        </div>

        {/* Location Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-3">
          {["All", ...locations].map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`px-4 py-2 rounded-xl font-medium shadow transition ${
                selectedLocation === loc
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 mt-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>
      </div>

      {/* Job Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length === 0 && (
          <p className="text-gray-600 col-span-full text-center text-lg">
            No jobs match your filters.
          </p>
        )}

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl transition transform hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <FaMapMarkerAlt className="text-yellow-500" /> {job.location}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <FaBriefcase className="text-yellow-500" /> {job.type}
              </p>
              <p className="mt-2 text-gray-500 text-sm font-medium">
                Department: {job.department}
              </p>
            </div>

            <Link
              href={`/careers/${job.id}`}
              className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-1 text-center"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
