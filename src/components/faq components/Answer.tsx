"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    q: "What is the process of buying a home?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Buying",
  },
  {
    q: "What is the process of selling a home?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Selling",
  },
  {
    q: "How do I determine the value of my property?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Property",
  },
  {
    q: "What should I look for in a property inspection?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Property",
  },
  {
    q: "What is the role of a real estate agent in the negotiation process?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Agents",
  },
  {
    q: "What are some common contingencies in a purchase agreement?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Buying",
  },
  {
    q: "How long does it typically take to sell a property?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
    category: "Selling",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFAQs = faqs.filter(
    (f) =>
      (selectedCategory === "All" || f.category === selectedCategory) &&
      f.q.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            FAQs & Answers
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Find answers to the most common questions about real estate buying, selling, and property management.
          </p>
        </div>

        {/* Search & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-72 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm"
          />
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-medium transition ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-yellow-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 && (
            <p className="text-gray-600 text-center py-6">
              No FAQs match your search.
            </p>
          )}
          {filteredFAQs.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <motion.div
                key={index}
                layout
                initial={{ borderRadius: 16 }}
                className={`bg-white p-6 rounded-xl shadow-md cursor-pointer border transition-all hover:shadow-lg hover:border-yellow-400 ${
                  isOpen ? "border-yellow-500" : "border-gray-200"
                }`}
                onClick={() => toggleIndex(index)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-600 w-6 h-6" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
