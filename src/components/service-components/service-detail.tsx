"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Clock,
  Calendar,
  User,
  Phone,
  ArrowRight,
  Info,
  Award,
} from "lucide-react";

// --- Data ---
interface Provider {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  unit: string;
  badges: string[];
  image?: string;
  description: string;
}

const providers: Provider[] = [
  {
    id: 1,
    name: "Ali Electrical Services",
    category: "Electrical",
    location: "Baghdad",
    rating: 4.9,
    reviews: 234,
    price: "$25",
    unit: "hour",
    badges: ["Verified", "Licensed"],
    image: "/er.jpg",
    description:
      "Expert in smart home wiring, panel upgrades, and emergency electrical repairs. Our team utilizes advanced thermal imaging to detect hidden faults before they become fire hazards. We specialize in the integration of automated lighting systems and energy-efficient climate control panels. Every technician is fully certified and adheres to international safety protocols for residential rewiring.",
  },
  {
    id: 2,
    name: "Clean Home Pro",
    category: "Cleaning",
    location: "Erbil",
    rating: 4.8,
    reviews: 189,
    price: "$50",
    unit: "session",
    badges: ["Verified"],
    image: "/cl.jpg",
    description:
      "Deep cleaning specialists for residential and commercial spaces with eco-friendly products. We employ industrial-grade HEPA filtration vacuums to ensure 99.9% removal of allergens and dust mites. Our multi-stage sanitization process targets high-touch surfaces using hospital-grade, non-toxic cleaning agents.",
  },
  {
    id: 3,
    name: "Cool Air Solutions",
    category: "AC & HVAC",
    location: "Baghdad",
    rating: 4.9,
    reviews: 312,
    price: "$35",
    unit: "visit",
    badges: ["Verified", "24/7"],
    image: "/ca.jpg",
    description:
      "Full-service HVAC maintenance, installation, and rapid cooling system diagnostics. In the intense summer heat, our rapid-response team ensures your cooling system operates at peak efficiency. We specialize in chemical coil cleaning and refrigerant pressure balancing to reduce your energy consumption.",
  },
  // ... (Other providers would be here)
  {
    id: 7,
    name: "Tech Repair Hub",
    category: "Electronics",
    location: "Baghdad",
    rating: 4.8,
    reviews: 201,
    price: "$20",
    unit: "hour",
    badges: ["Verified", "Fast Service"],
    image: "/rh.png",
    description:
      "High-precision micro-soldering and motherboard-level repairs for all modern consumer electronics. We provide dedicated diagnostic services for high-end gaming consoles, professional laptops, and mobile devices.",
  },
];

// --- Reusable Components ---
const FeatureBadge = ({ icon: Icon, text, color = "text-slate-600" }: any) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
    <Icon size={14} className={color} />
    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
      {text}
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
    <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
    {title}
  </h3>
);

// --- Main Page ---
export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock finding ID for demo if providers array is partial
  const service =
    providers.find((p) => p.id === Number(params.id)) || providers[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Booking Request Sent Successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-yellow-500 selection:text-white pb-20">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] lg:h-[500px] w-full bg-slate-900 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 opacity-60">
          {/* Fallback color if image fails, or use actual next/image if available */}
          <div className="w-full h-full bg-slate-800 relative">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3 animate-fade-in-up">
            <span className="bg-yellow-500/20 px-2 py-1 rounded border border-yellow-500/30 backdrop-blur-sm">
              {service.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-200">ID: #{service.id}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 shadow-sm">
            {service.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold">{service.rating}</span>
              <span className="text-xs text-white/60">
                ({service.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={18} className="text-slate-400" />
              <span className="font-medium">{service.location}, Iraq</span>
            </div>
            {service.badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 text-green-400"
              >
                <ShieldCheck size={18} />
                <span className="font-medium text-xs uppercase">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Overview Card */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
              <SectionHeader title="Service Overview" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-yellow-600 shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      Fast Response
                    </h4>
                    <p className="text-xs text-slate-500">
                      Available for same-day emergency calls in{" "}
                      {service.location}.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      Licensed Pro
                    </h4>
                    <p className="text-xs text-slate-500">
                      Verified government ID and professional certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Gallery / Visuals (Placeholder) */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
              <SectionHeader title="Recent Work" />
              <div className="grid grid-cols-3 gap-3 h-48">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:bg-slate-300 transition-colors" />
                    {/* Placeholder for images */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest opacity-50">
                      Project {i}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Safety Notice */}
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex gap-4 items-start">
              <Info className="text-blue-600 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">
                  Satisfaction Guarantee
                </h4>
                <p className="text-sm text-blue-800/80 mt-1 leading-relaxed">
                  All services booked through IraqHomes are protected by our
                  satisfaction guarantee. Funds are only released to the
                  provider once you confirm the job is done.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
                {/* Top Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

                <div className="p-6 md:p-8">
                  {/* Price Header */}
                  <div className="flex justify-between items-end mb-8 pb-8 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Starting From
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-slate-900">
                          {service.price}
                        </span>
                        <span className="text-sm font-medium text-slate-500">
                          /{service.unit}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {service.badges.includes("24/7") && (
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                          <Clock size={10} /> 24/7 Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                        Your Name
                      </label>
                      <div className="relative group">
                        <User
                          size={16}
                          className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-yellow-500 transition-colors"
                        />
                        <input
                          type="text"
                          required
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 pl-10 pr-4 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Phone & Date */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                          Phone
                        </label>
                        <div className="relative group">
                          <Phone
                            size={16}
                            className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-yellow-500 transition-colors"
                          />
                          <input
                            type="tel"
                            required
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 pl-10 pr-2 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all"
                            placeholder="0770..."
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                          Date
                        </label>
                        <div className="relative group">
                          <Calendar
                            size={16}
                            className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-yellow-500 transition-colors"
                          />
                          <input
                            type="date"
                            required
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 pl-10 pr-2 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all"
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                        Requirements
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 px-4 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all resize-none"
                        placeholder="Describe your issue..."
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-slate-900 text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : (
                        <>
                          Book Appointment <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-slate-400 font-medium">
                      No payment required until service completion.
                    </p>
                  </form>
                </div>
              </div>

              {/* Agent Support Box */}
              <div className="mt-6 bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Need Help?
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Call Support: 800-IRAQ-HOME
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
