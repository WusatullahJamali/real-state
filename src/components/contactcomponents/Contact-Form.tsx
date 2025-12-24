"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Building2,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

/* ---------------- Info Card ---------------- */
const InfoCard = ({ icon: Icon, title, value }: any) => (
  <div className="group bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Icon size={18} className="text-white" />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold mb-0.5">
        {title}
      </p>
      <p className="text-sm text-white font-medium">{value}</p>
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
  <div className="space-y-2">
    <label className="text-xs font-semibold text-slate-700 ml-1">{label}</label>
    <div
      className={`relative flex items-center rounded-xl border transition-all duration-300 ${
        focus === name
          ? "border-slate-800 bg-white ring-2 ring-slate-800/10"
          : "border-slate-200 bg-slate-50/80 hover:border-slate-300"
      }`}
    >
      {isArea ? (
        <textarea
          rows={4}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3 outline-none text-slate-900 placeholder:text-slate-400 resize-none text-sm"
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3 outline-none text-slate-900 placeholder:text-slate-400 text-sm"
        />
      )}
      {Icon && (
        <Icon
          size={16}
          className={`mr-3 transition-colors ${
            focus === name ? "text-slate-800" : "text-slate-300"
          }`}
        />
      )}
    </div>
  </div>
);

/* ---------------- Main Component ---------------- */
export default function ContactBanner() {
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* LEFT BANNER PANEL */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl lg:rounded-r-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-12 flex flex-col justify-between min-h-[600px]">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Building2 size={16} className="text-blue-300" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Premium Real Estate
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dream Home
                  </span>
                  <Sparkles
                    className="absolute -top-2 -right-8 text-yellow-300"
                    size={24}
                  />
                </span>
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
                Expert real estate consultancy across Iraq. We transform your
                property dreams into reality with personalized service.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-emerald-300" />
                  </div>
                  <span className="text-sm font-medium">
                    Advanced market analytics
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-emerald-300" />
                  </div>
                  <span className="text-sm font-medium">
                    Personalized property matching
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-emerald-300" />
                  </div>
                  <span className="text-sm font-medium">
                    24/7 dedicated support team
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <MapPin size={20} className="text-blue-300 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">
                    Visit Our Office
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Baghdad Business District, Iraq
                    <br />
                    Open Mon-Sat, 9AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoCard
                icon={Phone}
                title="Call Us"
                value="+964 770 123 4567"
              />
              <InfoCard icon={Mail} title="Email" value="hello@iraqhomes.iq" />
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl lg:rounded-l-none shadow-2xl p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  Let's Connect
                </h2>
                <p className="text-slate-500">
                  Share your requirements and our team will reach out within 24
                  hours.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField
                    label="Full Name"
                    placeholder="John Doe"
                    focus={focus}
                    setFocus={setFocus}
                    name="name"
                  />
                  <InputField
                    label="Phone Number"
                    type="tel"
                    placeholder="+964 770 000 0000"
                    focus={focus}
                    setFocus={setFocus}
                    name="phone"
                  />
                </div>

                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  icon={Mail}
                  focus={focus}
                  setFocus={setFocus}
                  name="email"
                />

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 ml-1">
                    I'm Interested In
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Buying", "Renting", "Selling"].map((type) => (
                      <label key={type} className="group cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          className="peer sr-only"
                        />
                        <div className="text-center py-3 rounded-xl border-2 border-slate-200 bg-white text-sm font-semibold text-slate-600 transition-all duration-300 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 peer-checked:shadow-lg group-hover:border-slate-400">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <InputField
                  label="Your Message"
                  isArea
                  placeholder="Tell us about your ideal property..."
                  focus={focus}
                  setFocus={setFocus}
                  name="message"
                />

                <button className="w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 active:scale-[0.98] shadow-lg shadow-slate-900/20 mt-6">
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
