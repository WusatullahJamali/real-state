"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CtaButton = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-white">
      <button className="group relative flex items-center gap-3 bg-white border-2 border-yellow-500 px-8 py-4 rounded-full transition-all duration-500 ease-in-out hover:bg-yellow-500 shadow-lg hover:shadow-yellow-200/50">
        
        {/* Sparkle Icon that changes color on hover */}
        <Sparkles className="w-5 h-5 text-yellow-600 transition-colors duration-500 group-hover:text-white" />
        
        <div className="relative">
          <span className="text-lg font-bold text-black transition-colors duration-500 group-hover:text-white tracking-wide uppercase">
            Start Your Journey
          </span>
          
          {/* Animated Underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
        </div>

        {/* Arrow Icon */}
        <ArrowRight className="w-5 h-5 text-yellow-600 transition-all duration-500 group-hover:text-white group-hover:translate-x-1" />

        {/* Subtle background pulse effect */}
        <span className="absolute inset-0 rounded-full scale-100 group-hover:scale-105 bg-yellow-400/20 transition-transform duration-500 -z-10"></span>
      </button>
    </div>
  );
};

export default CtaButton;