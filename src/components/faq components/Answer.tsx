// components/FAQ.tsx (Shadows Removed)

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Zap } from "lucide-react"; // Added Zap for flair

// --- Data Structure (Keep as is) ---
type FAQItem = {
  q: string;
  a: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    q: "What is the process of buying a home?",
    a: "The buying process typically involves pre-approval for a mortgage, searching for properties, making an offer, conducting inspections and appraisals, and finally, closing the deal. Consulting with a real estate professional is highly recommended.",
    category: "Buying",
  },
  {
    q: "What is the process of selling a home?",
    a: "Selling a home involves determining market value, preparing the property (repairs/staging), listing, showing the home, negotiating offers, and completing the necessary legal paperwork and closing procedures.",
    category: "Selling",
  },
  {
    q: "How do I determine the value of my property?",
    a: "Property value is primarily determined through a Comparative Market Analysis (CMA) conducted by an agent, or a formal appraisal by a licensed appraiser. They evaluate recent sales of comparable homes in your area.",
    category: "Property",
  },
  {
    q: "What should I look for in a property inspection?",
    a: "A thorough inspection should cover structural integrity, roofing, foundation, electrical systems, plumbing, and HVAC systems. It helps identify any major hidden defects before finalizing the purchase.",
    category: "Property",
  },
  {
    q: "What is the role of a real estate agent in the negotiation process?",
    a: "A real estate agent acts as your advocate, providing market data, advising on price and terms, preparing all documents, and communicating with the other party's agent to achieve the best possible outcome for you.",
    category: "Agents",
  },
  {
    q: "What are some common contingencies in a purchase agreement?",
    a: "Common contingencies include financing (loan approval), inspection (passing the property inspection), and appraisal (the property value meeting the loan amount). These protect the buyer if certain conditions aren't met.",
    category: "Buying",
  },
  {
    q: "How long does it typically take to sell a property?",
    a: "The time to sell varies greatly by market, but generally, from listing to closing, it can take anywhere from 60 to 120 days. Proper pricing and preparation are the biggest factors in speeding up the timeline.",
    category: "Selling",
  },
];

// --- Component ---
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
    // Only allow one open at a time (Accordion behavior)
    if (openIndexes.includes(index)) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes([index]);
    }
  };

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600 mb-2 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" /> Quick Answers
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Real Estate FAQs
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Find clarity on the complex world of property transactions. Your reliable source for buying, selling, and general property insights.
          </p>
        </div>

        {/* Filters & Search Container - **Shadow Removed** */}
        <div className="bg-white p-6 rounded-2xl mb-12 border border-gray-100">
          
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by keyword, e.g., 'contingency' or 'value'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // **Shadow Removed** (Used border and background for definition instead)
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition bg-gray-50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  selectedCategory === cat
                    // **Shadow Removed** (Active state uses color and scale transform)
                    ? "bg-yellow-500 text-white transform scale-105" 
                    : "bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {filteredFAQs.length === 0 && (
            <p className="text-gray-600 text-center py-10 text-xl italic border-y border-gray-200">
              No FAQs match your search or category selection. Try a different query.
            </p>
          )}
          {filteredFAQs.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <motion.div
                key={index}
                layout
                initial={{ borderRadius: 16 }}
                className={`bg-white p-7 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isOpen 
                    // **Shadow Removed** (Focus state uses ring and border)
                    ? "ring-4 ring-yellow-100 border border-yellow-500" 
                    // **Shadow Removed** (No shadow on hover)
                    : "border border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => toggleIndex(index)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900 pr-4">
                    {item.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }} 
                      className="text-gray-700 leading-relaxed pt-4 border-t border-gray-100" 
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