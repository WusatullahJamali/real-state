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
{ id: 13, title: "Real Estate Intern", department: "Sales", location: "Karachi, Pakistan", type: "Internship" },
{ id: 14, title: "Leasing Intern", department: "Operations", location: "Islamabad, Pakistan", type: "Internship" },
{ id: 15, title: "Property Inspection Intern", department: "Operations", location: "Lahore, Pakistan", type: "Internship" },
{ id: 16, title: "Rental Operations Intern", department: "Operations", location: "Karachi, Pakistan", type: "Internship" },
{ id: 17, title: "Property Acquisition Intern", department: "Sales", location: "Hyderabad, Pakistan", type: "Internship" },
{ id: 18, title: "Property Research Intern", department: "Research", location: "Remote", type: "Internship" },
{ id: 19, title: "Real Estate Documentation Intern", department: "Operations", location: "Karachi, Pakistan", type: "Internship" },
{ id: 20, title: "Real Estate Compliance Intern", department: "Operations", location: "Lahore, Pakistan", type: "Internship" },
{ id: 21, title: "Investment Property Intern", department: "Research", location: "Islamabad, Pakistan", type: "Internship" },
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

  const getTypeClasses = (type: string) => {
    if (type === "Full-Time") {
      return "bg-green-600 text-white font-bold";
    }
    return "bg-orange-600 text-white font-bold";
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-md font-extrabold uppercase tracking-[0.3em] text-yellow-700 mb-2">
            JOIN OUR TEAM
          </p>
          <h2 className="text-6xl md:text-7xl font-black text-black tracking-tight mb-4">
            Career Opportunities 
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto font-light">
            Experience growth and innovation. Explore openings and join our highly motivated team.
          </p>
        </div>

        {/* FILTERS */}
        <div className="bg-gray-50 p-7 md:p-10 rounded-2xl border-2 border-gray-200 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 rounded-xl border-2 border-gray-200 bg-white"
              />
            </div>

            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none w-full p-4 rounded-xl border-2 border-gray-200 bg-white"
              >
                <option value="All">All Departments</option>
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none w-full p-4 rounded-xl border-2 border-gray-200 bg-white"
              >
                <option value="All">All Locations</option>
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

          </div>
        </div>

        {/* JOBS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="relative rounded-xl p-8 border border-gray-200 flex flex-col justify-between"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-500 rounded-xl mr-4 flex-shrink-0">
                  <FaBriefcase size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {job.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-gray-100 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaCodeBranch className="text-yellow-500" size={16} />
                  <p>{job.department}</p>
                </div>

                <span className={`justify-self-end px-4 py-1.5 rounded-full ${getTypeClasses(job.type)}`}>
                  {job.type.toUpperCase()}
                </span>

                <div className="flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-yellow-500" size={16} />
                  <p>{job.location}</p>
                </div>
              </div>

              <button className="w-full bg-yellow-500 text-white font-extrabold px-6 py-4 rounded-full">
                View Details & Apply
              </button>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
