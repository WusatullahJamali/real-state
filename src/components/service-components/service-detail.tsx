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
  Mail,
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
  {
    id: 4,
    name: "Perfect Plumbing",
    category: "Plumbing",
    location: "Basra",
    rating: 4.7,
    reviews: 156,
    price: "$30",
    unit: "hour",
    badges: ["Verified", "Emergency"],
    image: "/pl.jpg",
    description:
      "Solving complex leakages, pipe bursts, and bathroom fixture installations since 2015. Our master plumbers handle everything from minor drips to major sewer line replacements. We use advanced leak detection technology including thermal imaging and acoustic sensors to locate hidden water damage. Specializing in modern fixture installations such as rainfall showerheads, tankless water heaters, and smart faucets. Our drain cleaning services utilize hydro-jetting equipment that clears even the toughest blockages without damaging pipes. We provide detailed estimates before starting any work and guarantee all repairs for 12 months. Emergency callouts include rapid response for burst pipes and water heater failures.",
  },
  {
    id: 5,
    name: "Home Renovators",
    category: "Renovation",
    location: "Baghdad",
    rating: 4.9,
    reviews: 278,
    price: "$100",
    unit: "project",
    badges: ["Verified", "Licensed"],
    image: "/hr.jpg",
    description:
      "Transforming kitchens and living rooms with high-quality craftsmanship and modern designs. Our renovation team consists of skilled carpenters, designers, and project managers who bring your vision to life. We handle complete home makeovers including flooring replacement, custom cabinetry, and architectural modifications. Each project begins with 3D design visualization to ensure you're satisfied before construction begins. We source premium materials from trusted suppliers and maintain strict quality control at every stage. Our commitment to staying on schedule and within budget has earned us a reputation for reliability. Post-completion walkthroughs ensure every detail meets your expectations.",
  },
  {
    id: 6,
    name: "Garden Masters",
    category: "Landscaping",
    location: "Erbil",
    rating: 4.6,
    reviews: 142,
    price: "$40",
    unit: "visit",
    badges: ["Verified"],
    image: "/gm.jpg",
    description:
      "Professional lawn care, irrigation setup, and ornamental garden design. Our horticulture experts create stunning outdoor spaces tailored to your climate and soil conditions. Services include automated sprinkler system installation, seasonal planting, and pest control management. We design drought-resistant landscapes that minimize water usage while maximizing visual appeal. Regular maintenance packages keep your lawn lush and your flower beds vibrant year-round. Stone pathway construction, outdoor lighting installation, and decorative water features are also part of our specialty services. Let us transform your backyard into a tranquil oasis.",
  },
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
      "Our facility specializes in high-precision micro-soldering and motherboard-level repairs for all consumer electronics. We provide dedicated diagnostic services for gaming consoles, professional-grade laptops, and advanced mobile hardware. Using industry-standard ESD-safe environments, our technicians ensure that every internal component is handled with extreme care, restoring your critical devices to their peak performance levels within a guaranteed 48-hour window. We stock genuine replacement parts for all major brands and offer data recovery services for damaged devices. Screen replacements, battery upgrades, and software troubleshooting are completed while you wait. Our warranty covers all repairs for 90 days, giving you confidence in our workmanship.",
  },
  {
    id: 8,
    name: "Paint Pro",
    category: "Painting",
    location: "Mosul",
    rating: 4.7,
    reviews: 167,
    price: "$45",
    unit: "room",
    badges: ["Verified", "Licensed"],
    image: "/ppp.jpg",
    description:
      "We provide a bespoke interior and exterior finishing service tailored to modern architectural aesthetics. Our process includes comprehensive surface preparation, moisture barrier application, and the use of premium-grade, low-VOC paints for a healthy indoor environment. Whether it is a luxury villa or a commercial office space, our painters focus on sharp edges, uniform texture, and a high-durability finish that maintains its vibrant color against UV exposure and humidity for years to come. Color consultation services help you choose the perfect palette to match your décor. We also offer decorative techniques like faux finishes, textured walls, and accent murals. All furniture is carefully protected, and job sites are left spotless upon completion.",
  },
  {
    id: 9,
    name: "Secure Locks",
    category: "Locksmith",
    location: "Baghdad",
    rating: 4.9,
    reviews: 289,
    price: "$35",
    unit: "service",
    badges: ["Verified", "24/7"],
    image: "/locks.jpg",
    description:
      "Specializing in advanced physical security solutions, we offer everything from biometric lock integration to high-security deadbolt installations. Our mobile rapid-response units are equipped with state-of-the-art key-cutting technology and non-destructive entry tools for emergency situations. We don't just fix locks; we provide comprehensive security consulting to ensure your home or business is fortified against unauthorized access using the latest global standards in locksmithing technology. Services include master key system setup, safe installation and repair, and access control systems for commercial properties. Lock rekeying after property purchases ensures previous key holders can't gain entry. Our 24/7 emergency service means you're never locked out for long, with average response times under 30 minutes citywide.",
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
    email: "",
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
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />

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
                <div className="h-1.5 w-full bg-linear-to-r from-yellow-400 to-yellow-600" />

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

                    {/* Email (New Block) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                        Email Address
                      </label>
                      <div className="relative group">
                        <Mail
                          size={16}
                          className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-yellow-500 transition-colors"
                        />
                        <input
                          type="email"
                          required
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 pl-10 pr-4 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all"
                          placeholder="example@mail.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Phone Block (Previously in a grid) */}
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
                          placeholder="0770xxxxxxxx"
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

                    {/* Date Block (Previously in a grid) */}
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

                    {/* Note */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase ml-1">
                        Requirements
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 px-4 outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all resize-none"
                        placeholder="Describe your Requirements"
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

                    <p className="text-[15px] text-center text-slate-400 font-medium">
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
