"use client"
import React from 'react';
import { motion, Variants } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const ContactDesign = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white w-full max-w-6xl rounded-[2.5rem] overflow-hidden relative border border-white/50"
      >
        
        <div className="h-2 bg-yellow-600 w-full" />

        {/* Header */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-end p-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-600 flex items-center justify-center rounded">
              <span className="text-white font-black text-xs">IQ</span>
            </div>
            <span className="font-bold tracking-tight text-black">
              IRAQ REAL ESTATE
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 px-8 md:px-16 pb-20">
          
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={fadeUp} custom={1}>
              <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-[#B48A00] uppercase bg-[#FFF9E6] rounded-full">
                Contact Our Team
              </span>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-black mb-4">
                Your property journey <br />
                starts <span className="text-yellow-600">here</span>
              </h1>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} custom={2} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-[1.5rem] flex items-center gap-4 border border-slate-100"
              >
                <Phone size={20} className="text-yellow-600" />
                <span className="font-bold text-black">
                  +964 770 123 4567
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-[1.5rem] flex flex-wrap items-center gap-8 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-yellow-600" />
                  <span className="font-bold text-black text-sm">
                    contact@iraqhomes.iq
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-yellow-600" />
                  <span className="font-bold text-black text-sm">
                    Baghdad • Erbil • Basra
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="bg-yellow-600 p-8 rounded-[2rem] relative overflow-hidden"
            >
              <h3 className="text-white font-black text-xl mb-6">
                Follow Iraq’s Property Market
              </h3>
              <div className="flex gap-3">
                {[Instagram, Twitter, Linkedin, Globe].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-yellow-600 transition-all"
                  >
                    <Icon size={20} />
                  </motion.button>
                ))}
              </div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24  rounded-full" />
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-50 relative z-10">
              <h2 className="text-2xl font-black text-black mb-8">
                Request Property Details
              </h2>
              
              <form className="space-y-5">
                {["Full Name", "Email Address", "Property Interest"].map((label, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="space-y-1.5"
                  >
                    <label className="text-xs font-bold text-black ml-1">
                      {label}
                    </label>
                    <input className="w-full bg-white rounded-xl py-4 px-6 outline-none focus:ring-2 ring-[#FFC107]" />
                  </motion.div>
                ))}

                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  rows={3}
                  placeholder="I'm interested in a property in Baghdad..."
                  className="w-full bg-white rounded-2xl py-4 px-6 outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#333333] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-yellow-600 transition-all duration-300 shadow-lg"
                >
                  Contact Our Agents
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#FFC107] rounded-full blur-[80px] opacity-40 -z-0"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactDesign;
