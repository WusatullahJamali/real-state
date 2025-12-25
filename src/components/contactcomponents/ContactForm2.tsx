"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ---------------- Motion Variants ---------------- */
const fadeIn = (direction: "up" | "down", delay: number) => ({
  hidden: { y: direction === "up" ? 20 : -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

/* ---------------- Info Card ---------------- */
const InfoCard = ({ icon: Icon, title, value, fullWidth = false }: any) => (
  <div
    className={`bg-white p-5 rounded-2xl border border-gray-200 flex items-center gap-4 ${
      fullWidth ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
    }`}
  >
    <div className="w-10 h-10 rounded-full bg-gray-100 text-yellow-500 flex items-center justify-center shrink-0">
      <Icon size={18} />
    </div>

    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
        {title}
      </p>
      <p className="text-base text-gray-900">{value}</p>
    </div>
  </div>
);

/* ---------------- Input Field ---------------- */
const InputField = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  isArea = false,
  focus,
  setFocus,
  name,
}: any) => (
  <div className="space-y-1.5">
    <label className="text-sm text-gray-800 ml-1">{label}</label>

    <div
      className={`flex items-center px-4 py-3 rounded-xl border transition ${
        focus === name
          ? "border-gray-400 bg-gray-100"
          : "border-gray-200 bg-gray-100"
      }`}
    >
      {isArea ? (
        <textarea
          rows={4}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 resize-none"
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
        />
      )}

      {Icon && <Icon size={18} className="text-gray-400" />}
    </div>
  </div>
);

/* ---------------- MAIN PAGE ---------------- */
export default function ContactPage() {
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <section className="w-full font-sans">
      {/* ================= HERO BANNER ================= */}
      <div className="relative h-[30vh] lg:h-[35vh] bg-[#0A192F] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            <Sparkles size={14} className="text-yellow-500" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">
              Premium Iraq Properties
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Consult With{" "}
            <span className="text-yellow-500">Industry Leaders</span>
          </motion.h1>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <section className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 bg-white flex flex-col justify-between p-8 md:p-12 lg:p-16 border-r border-gray-200"
        >
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-gray-200">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="text-gray-700 tracking-widest text-[10px] uppercase">
                Iraq Real Estate
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 mb-4">
              Let's build your <br />
              <span className="text-yellow-500">legacy.</span>
            </h2>

            <p className="text-gray-500 text-sm max-w-md">
              Connect with Iraq's premier property consultants. From Baghdad to
              Basra, we are here for you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <InfoCard icon={Phone} title="Direct Line" value="+964 770 123 4567" />
            <InfoCard icon={Mail} title="Email Us" value="info@iraqhomes.iq" />
            <InfoCard
              icon={MapPin}
              title="Headquarters"
              value="Al-Mansour, Baghdad"
              fullWidth
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-7/12 flex items-center justify-center p-6 sm:p-12 lg:p-24"
        >
          <div className="w-full max-w-xl space-y-8">
            <div>
              <h3 className="text-3xl text-gray-900">Send a Message</h3>
              <p className="text-gray-500 text-sm">
                We typically reply within 2 hours.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Full Name"
                  placeholder="Wusat"
                  focus={focus}
                  setFocus={setFocus}
                  name="name"
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  placeholder="+964 1234 567 89"
                  focus={focus}
                  setFocus={setFocus}
                  name="phone"
                />
              </div>

              <InputField
                label="Email Address"
                type="email"
                placeholder="example@email.com"
                icon={Mail}
                focus={focus}
                setFocus={setFocus}
                name="email"
              />

              <InputField
                label="Message"
                isArea
                placeholder="Tell us about the property..."
                focus={focus}
                setFocus={setFocus}
                name="message"
              />

              <button className="w-full bg-gray-700 hover:bg-yellow-500 text-white text-lg py-4 rounded-xl flex items-center justify-center gap-3">
                Send Request <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
