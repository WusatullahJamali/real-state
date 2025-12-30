"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- Data Structure ---
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
    setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
  };

  return (
    <section className="py-24 bg-[#F8FAFC] min-h-screen font-sans selection:bg-indigo-100 selection:text-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-yellow-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Support Center
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">
            Frequently Asked <span className="text-yellow-600">Questions</span>
          </h1>
          <p className="text-black text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about the modern real estate market, simplified by our team of experts.
          </p>
        </div>

        {/* --- Search & Filter Bar --- */}
        <div className="mb-12 space-y-6">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-black group-focus-within:text-yellow-500 transition-colors" />
            <input
              type="text"
              placeholder="Search topics, keywords, or processes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-500/5 focus:border-yellow-500 transition-all text-black shadow-sm placeholder:text-gray-600"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-200"
                    : "bg-white border-slate-200 text-black hover:border-yellow-300 hover:text-yellow-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <motion.div
                    key={item.q}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className={`overflow-hidden rounded-2xl transition-all duration-500 border ${
                      isOpen 
                        ? "bg-white border-indigo-200 shadow-xl shadow-indigo-500/5" 
                        : "bg-white border-slate-200 hover:border-yellow-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
                    >
                      <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-yellow-600' : 'text-black'}`}>
                        {item.q}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-yellow-600 text-white rotate-180' : 'bg-slate-100 text-black'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8 text-black leading-relaxed border-t border-slate-50 pt-6">
                            <p className="max-w-[90%]">
                              {item.a}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-600 cursor-pointer hover:underline">
                              Learn more about this <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Search className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-black font-medium">No results found</h3>
                <p className="text-black text-sm mt-1">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 text-center">
          <p className="text-black text-sm">
            Still have questions? <span className="text-yellow-600 font-semibold cursor-pointer hover:text-yellow-700 transition-colors"><Link href="/contact">Contact our support team</Link></span> for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}