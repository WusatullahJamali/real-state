"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const categories = ["All", "Market", "Investment", "Mortgage"];

const blogs = [
  {
    id: 1,
    title: "Real Estate Market Trends in Karachi 2025",
    snippet:
      "Pakistan’s real estate market is expected to grow steadily in 2025 due to increasing overseas investment and major projects...",
    image: "/b1.jpg",
    category: "Market",
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "How to Buy Your First Investment Property in Pakistan",
    snippet:
      "Learn step by step how to invest in your first property in Pakistan, including legal, financial, and location tips...",
    image: "/b2.avif",
    category: "Investment",
    date: "Nov 2024",
  },
  {
    id: 3,
    title: "Mortgage & Loan Rules Updated for 2025 (Pakistan)",
    snippet:
      "Important updates on mortgage policies and home loans in Pakistan for 2025 you need to know before investing...",
    image: "/b3.avif",
    category: "Mortgage",
    date: "Oct 2024",
  },
  {
    id: 4,
    title: "Top Property Locations for Overseas Pakistanis in 2025",
    snippet:
      "From Islamabad to Bahria Town, overseas buying trends are shaping how investment performs in 2025...",
    image: "/b4.avif",
    category: "Investment",
    date: "Sep 2024",
  },
  {
    id: 5,
    title: "Apartment vs House – Which Gives Better ROI?",
    snippet:
      "With vertical construction rising, apartments are becoming a stronger investment in Pakistan’s major cities...",
    image: "/b5.avif",
    category: "Market",
    date: "Aug 2024",
  },
  {
    id: 6,
    title: "Construction Material Prices Expected to Rise",
    snippet:
      "Cement, steel and labour cost are set to increase in 2025 leading to higher construction cost across Pakistan...",
    image: "/b8.png",
    category: "Market",
    date: "Jul 2024",
  },
  {
    id: 7,
    title: "Best Rental Return Areas in Karachi",
    snippet:
      "Looking for passive rental income? These top neighborhoods in Karachi are delivering strong cash flow...",
    image: "/b7.avif",
    category: "Investment",
    date: "Jun 2024",
  },
  {
    id: 8,
    title: "Pakistan Real Estate Forecast 2025–2030",
    snippet:
      "Long-term projections suggest major price appreciation due to population growth and infrastructure progress...",
    image: "/bl6.png",
    category: "Market",
    date: "May 2024",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative py-12 text-center overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-400">
        {/* Overlay for subtle effect */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-xl" />

        <div className="relative max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Real Estate Blogs
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
            News, market insights & property investment research across
            Pakistan.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      {/* <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-xl ${
                selectedCategory === c
                  ? "bg-yellow-400 text-black shadow"
                  : "bg-white text-gray-700 shadow hover:bg-yellow-400 hover:text-black transition"
              } font-medium`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center bg-white shadow px-4 py-2 rounded-xl gap-2">
          <FiSearch className="text-gray-600" />
          <input
            placeholder="Search…"
            className="outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div> */}

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group rounded-2xl overflow-hidden  bg-white hover:shadow-3xl transition duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  width={500}
                  height={300}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <span className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs text-yellow-400">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{post.date}</p>
                <p className="mt-3 text-gray-700 leading-6">{post.snippet}</p>

                <span className="mt-4 block text-yellow-600 font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No blogs found.
          </p>
        )}
      </div>
    </div>
  );
}
