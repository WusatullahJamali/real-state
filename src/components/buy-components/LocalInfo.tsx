"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ---------------- BUTTON ---------------- */
const GradientButton: React.FC = () => {
  return (
    <button
      className="
        inline-flex justify-center
        w-44 sm:w-48
        rounded-full bg-black
        py-3
        text-sm font-medium text-white
        hover:bg-gray-800 transition
      "
    >
      Get pre-approved now
    </button>
  );
};

/* ---------------- SEARCH BAR ---------------- */
const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (!value.trim()) return;
    alert(`Searching for: ${value}`);
  };

  return (
    <div className="w-full max-w-full sm:max-w-md">
      <div className="flex items-center rounded-full border bg-white p-1 shadow focus-within:ring-2 focus-within:ring-[#1B3A57]">
        <input
          type="text"
          placeholder="Address, City, Zip or Neighbourhood"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-transparent px-4 sm:px-5 py-3 text-sm text-gray-700 focus:outline-none"
        />

        {value && (
          <button
            onClick={() => setValue("")}
            className="px-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}

        <button
          onClick={handleSearch}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A57] hover:bg-gray-800 transition"
        >
          <Search className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

/* ---------------- ANIMATION VARIANTS ---------------- */
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------------- MAIN COMPONENT ---------------- */
const CombinedAd: React.FC = () => {
  return (
    <section className="w-full bg-white mt-16 overflow-hidden">
      {/* -------- SECTION 1 -------- */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* IMAGE */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[260px] sm:h-[360px] lg:h-[520px]"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/boy.avif"
            alt="Home loan"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-16 py-8 sm:py-10 flex flex-col justify-center"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B3A57] mb-4">
            Need a home loan? Get pre-approved
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg">
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </p>

          <GradientButton />

          <a
            href="#"
            className="mt-6 text-xs text-gray-500 underline hover:text-gray-700"
          >
            Advertising disclosure
          </a>
        </motion.div>
      </div>

      {/* -------- SECTION 2 -------- */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center">
        {/* CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-16 py-8 sm:py-10 flex flex-col justify-center"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B3A57] mb-4">
            Get Local Info
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg">
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you are most interested in.
          </p>

          <SearchBar />
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[260px] sm:h-[360px] lg:h-[520px]"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/boy2.avif"
            alt="Local info"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedAd;
