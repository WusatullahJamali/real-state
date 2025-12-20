"use client";

import React from "react";
import Link from "next/link";
import { Send, FileText } from "lucide-react";

const CareerFooter = () => {
  return (
    <div className="bg-white text-center py-20 px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Can't Find a Role That Fits?
      </h3>
      <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Submit your resume and we will keep you in mind for future real estate opportunities.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-1"
      >
        Submit Resume
      </Link>
    </div>
  );
};

export default CareerFooter;