"use client";

import React, { useState } from "react";

// 1. Define the type for an FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Data for the FAQ
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime, no questions are asked while you cancel, but we would highly appreciate it if you will give us some feedback. Cancellation is instant and can be managed directly from your account settings.",
  },
  {
    id: 2,
    question: "My team has credits. How do we use them?",
    answer:
      "Once your team signs up for a subscription plan, the credits will be automatically applied to your usage. We can also schedule a brief call to walk you through the specifics of credit usage and reporting.",
  },
  {
    id: 3,
    question: "How does our platform's pricing work?",
    answer:
      "Our subscriptions are tiered, based on features and usage volume. We offer flexible monthly and annual options. We focus on providing transparent value, so feel free to contact sales for a custom quote tailored to your needs.",
  },
  {
    id: 4,
    question: "How secure is our data with the platform?",
    answer:
      "Protecting the data you trust to us is our first priority. We use industry-leading encryption, adhere to strict data privacy standards (like GDPR), and perform regular security audits to ensure maximum protection and compliance.",
  },
  {
    id: 5,
    question: "How do I get access to a resource I purchased?",
    answer:
      "If you lose the link for a resource you purchased, don't panic! You can log in to your account, click your avatar in the upper right corner, and navigate to Purchases.",
  },
];

// Arrow Icon
const ChevronDown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
      isOpen ? "rotate-180 text-white" : "text-gray-500"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

interface FAQItemProps {
  item: FAQItem;
  isActive: boolean;
  toggle: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  item,
  isActive,
  toggle,
}) => {
  const activeClasses = isActive
    ? "bg-[#0077c0] text-white shadow-xl"
    : "bg-white text-gray-800 hover:bg-gray-50/50";

  return (
    <div
      className={`p-5 rounded-xl transition-all duration-300 mb-4 border border-gray-200 ${activeClasses}`}
    >
      <button
        onClick={toggle}
        className="flex items-center justify-between gap-x-3 w-full text-left"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            isActive ? "text-white" : "text-gray-900"
          }`}
        >
          {item.question}
        </span>
        <ChevronDown isOpen={isActive} />
      </button>

      <div
        id={`faq-answer-${item.id}`}
        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
          isActive ? "max-h-96 pt-3 opacity-100" : "max-h-0 pt-0 opacity-0"
        }`}
      >
        <p
          className={`mt-2 text-base leading-relaxed ${
            isActive ? "text-white/90" : "text-gray-600"
          }`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// Main Component
const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // FIXED HERE

  const toggleFAQ = (id: number) => {
    setActiveIndex((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="py-14 px-4 sm:px-6 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          {/* Left */}
          <div className="md:col-span-2 p-8 lg:p-12 bg-[#0077c0] text-white flex flex-col justify-center">
            <div className="max-w-md">
              <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                Knowledge Base
              </span>
              <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                Frequently Asked{" "}
                <span className="text-white/90">Questions</span>
              </h1>
              <p className="mt-4 text-white/90 text-lg">
                Find clear and detailed answers to the most common inquiries.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-3 p-8 lg:p-12 bg-white">
            <div className="space-y-4">
              {faqData.map((item) => (
                <FAQItemComponent
                  key={item.id}
                  item={item}
                  isActive={activeIndex === item.id}
                  toggle={() => toggleFAQ(item.id)}
                />
              ))}
            </div>

            {/* Contact */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-base text-gray-500">
                Didn't find your answer? We’re here to help.
              </p>
              <a
                href="#contact"
                className="inline-flex mt-3 items-center text-base font-semibold text-[#0077c0] hover:text-[#005c93] transition group"
              >
                Contact Support Team
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
