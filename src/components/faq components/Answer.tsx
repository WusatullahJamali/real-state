"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the process of buying a home?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "What is the process of selling a home?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "How do I determine the value of my property?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "What should I look for in a property inspection?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "What is the role of a real estate agent in the negotiation process?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "What are some common contingencies in a purchase agreement?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
  {
    q: "How long does it typically take to sell a property?",
    a: "Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.",
  },
];

export default function Answer() {
  const [openIndex, setOpenIndex] = useState(-1); // start closed

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            FAQ’s & Latest Answers
          </h1>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              className="bg-white p-6 rounded-xl shadow cursor-pointer border hover:border-yellow-400 transition-all"
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.q}
                </h3>
                <ChevronDown
                  className={`text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-3 leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
