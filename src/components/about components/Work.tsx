"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Phone, Home, CheckCircle } from "lucide-react";

const steps = [
   {
    number: "01",
    title: "Select Your Preferred Area",
    text: "Browse residential and commercial properties in key Iraqi cities, from central urban locations to peaceful suburban neighborhoods.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Consult with Property Experts",
    text: "Our experienced local advisors guide you with market insights, pricing details, and legal support tailored to Iraqi real estate regulations.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Complete Secure Transactions",
    text: "Proceed with confidence through our transparent, secure, and legally verified payment and documentation process.",
    icon: Home,
  },
  {
    number: "04",
    title: "Receive Property Ownership",
    text: "Collect your keys and official ownership documents, ensuring your property investment is fully protected and verified.",
    icon: CheckCircle,
  },
];

export default function Work() {
  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-600 shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
             Simple & Reliable Process
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">
             How It <span className="text-yellow-600 italic">Works</span>
          </h2>

          <p className="max-w-2xl text-black text-lg leading-relaxed font-light">
            We make buying and investing in Iraqi real estate{" "}
            <span className="font-medium text-black">simple, secure, and completely transparent</span>.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(234,179,8,0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 flex items-center gap-4 bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold"
          >
            <Play size={18} fill="currentColor" />
           Watch the Process
          </motion.button>
        </div>

        {/* STEPS */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-yellow-600 to-transparent -z-10" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-200 p-8 rounded-[2.5rem] hover:border-yellow-500/40 transition-all duration-500 overflow-hidden"
              >
                {/* Watermark Number */}
                

                <div className="flex items-start justify-between mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <span className="text-yellow-600 font-mono text-sm">
                    STEP_{item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>

                <p className="text-black leading-relaxed text-sm italic">
                  {item.text}
                </p>

                {/* Hover Progress */}
                <div className="absolute bottom-0 left-0 h-1 bg-yellow-600 w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
