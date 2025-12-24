"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, ArrowRight, 
  Building2, Home, BarChart3, ShieldCheck 
} from "lucide-react";

/* ---------------- Reusable Info Card ---------------- */
const ContactDetail = ({ icon: Icon, title, value }: any) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-yellow-500 flex items-center justify-center shrink-0 border border-gray-100">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold tracking-widest text-black mb-0.5">
        {title}
      </p>
      <p className="text-black font-semibold">{value}</p>
    </div>
  </div>
);

/* ---------------- Styled Input ---------------- */
const PremiumInput = ({ label, type = "text", placeholder, name, focus, setFocus, isArea = false }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
      {label}
    </label>
    <div className={`relative transition-all duration-300 rounded-xl ${
      focus === name ? "ring-2 ring-yellow-500 shadow-md" : ""
    }`}>
      {isArea ? (
        <textarea
          rows={3}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-black placeholder:text-black focus:bg-white outline-none transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          placeholder={placeholder}
          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-black placeholder:text-black focus:bg-white outline-none transition-all"
        />
      )}
    </div>
  </div>
);

/* ---------------- Main Component ---------------- */
export default function IraqAgentContact() {
  const [focus, setFocus] = useState<string | null>(null);
  const [activeType, setActiveType] = useState("Buying");

  const propertyTypes = [
    { name: "Buying", icon: Home },
    { name: "Selling", icon: Building2 },
    { name: "Invest", icon: BarChart3 },
  ];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-12 font-sans">
      <div className="max-w-7xl w-full grid lg:grid-cols-12 bg-white rounded-[2.5rem] overflow-hidden border border-gray-100">
        
        {/* LEFT PANEL: White/Yellow Brand Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 bg-white p-8 md:p-16 text-black flex flex-col justify-between relative border-r border-gray-50"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-black" size={24} />
              </div>
              <span className="font-bold tracking-tighter text-xl">IRAQ<span className="text-yellow-500">HOMES</span></span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-light leading-[1.1] mb-6 text-black">
              Exclusive <br />
              <span className="font-bold text-yellow-500 italic">Real Estate</span> <br />
              Concierge.
            </h1>
            
            <p className="text-black text-lg max-w-sm leading-relaxed mb-12">
              Connect with luxury property experts from Baghdad to Erbil. 
              Secure your future today.
            </p>

            <div className="space-y-4">
              <ContactDetail icon={Phone} title="Direct Line" value="+964 770 000 0000" />
              <ContactDetail icon={Mail} title="Email Address" value="hello@iraqhomes.iq" />
              <ContactDetail icon={MapPin} title="Office" value="Al-Mansour, Baghdad" />
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-black text-[10px] font-bold tracking-widest">
            <span>© 2025 IRAQ HOMES PVT.</span>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-yellow-500 transition">FB</span>
              <span className="cursor-pointer hover:text-yellow-500 transition">IG</span>
              <span className="cursor-pointer hover:text-yellow-500 transition">LN</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white"
        >
          <div className="max-w-xl w-full mx-auto">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black text-black mb-2 uppercase tracking-tight">Send a Message</h2>
              <div className="w-16 h-1.5 bg-yellow-400 mb-4 mx-auto lg:ml-0 rounded-full" />
              <p className="text-gray-500">Your information is handled with absolute confidentiality.</p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Toggle Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">I am looking to</label>
                <div className="grid grid-cols-3 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.name}
                      type="button"
                      onClick={() => setActiveType(type.name)}
                      className={`flex flex-col items-center gap-2 py-4 rounded-2xl border-2 transition-all ${
                        activeType === type.name 
                        ? "border-yellow-500 bg-yellow-50 text-black shadow-sm" 
                        : "border-gray-50 bg-gray-50 text-black hover:border-gray-200"
                      }`}
                    >
                      <type.icon size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-black">
                <PremiumInput 
                  label="Full Name" 
                  name="user" 
                  placeholder="John Doe" 
                  focus={focus} setFocus={setFocus} 
                />
                <PremiumInput 
                  label="Contact Number" 
                  name="phone" 
                  type="tel" 
                  placeholder="+964 --- --- ----" 
                  focus={focus} setFocus={setFocus} 
                />
              </div>

              <PremiumInput 
                label="Email" 
                name="email" 
                type="email" 
                placeholder="office@company.iq" 
                focus={focus} setFocus={setFocus} 
              />

              <PremiumInput 
                label="Message" 
                name="msg" 
                isArea 
                placeholder="How can we assist you?" 
                focus={focus} setFocus={setFocus} 
              />

              <button className="group w-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg">
                Submit Request
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-black text-[10px] uppercase font-bold tracking-widest mt-6">
                <ShieldCheck size={14} className="text-yellow-500" />
                Secure Professional Connection
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}