
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  DollarSign,
  FileQuestionMark,
  House,
} from "lucide-react";

const guides = [
  {
    title: "Should I sell my home now?",
    description:
      "Questions to ask to help you figure out if selling makes sense for you right now.",
    link: "/sell/seller-guides/should-i-sell-my-home-now",
    icon: <FileQuestionMark className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "How much is my home worth?",
    description:
      "Tools and advice to help you understand your home's value.",
    link: "/sell/seller-guides/how-much-is-my-home-worth",
    icon: <House className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "How should I sell my home?",
    description:
      "Steps and tips to make the selling process easier and stress-free.",
    link: "/sell/seller-guides/how-should-i-sell-my-home",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "What costs should I expect?",
    description:
      "A breakdown of fees, commissions, and closing costs when selling.",
    link: "/sell/seller-guides/selling-costs",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
];

export default function SellerGuides() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Seller Guides
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              Everything you need to know before selling your home — clear,
              simple, and trusted.
            </p>
          </div>

          <Link
            href="/guides/home-selling-guide"
            className="flex items-center font-semibold text-yellow-600 hover:text-yellow-500 transition"
          >
            Complete guide
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Cards Grid – 2 x 2 */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={`${guide.title}-${index}`}
              href={guide.link}
              className="
                group relative overflow-hidden
                rounded-3xl bg-white p-8
                border border-gray-100
                
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl hover:border-yellow-200
              "
            >
              {/* Subtle Gradient Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition">
                {guide.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 leading-relaxed max-w-md">
                {guide.description}
              </p>

              {/* Arrow */}
              <div className="absolute right-6 bottom-6 text-gray-400 group-hover:text-yellow-600 transition-transform duration-300">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
