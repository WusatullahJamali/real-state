"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
  image: string;
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
      "Expert in smart home wiring, panel upgrades, and emergency electrical repairs.",
  },
  {
    id: 2,
    name: "Clean Home Pro",
    category: "Cleaning",
    location: "Erbil",
    rating: 4.8,
    reviews: 189,
    price: "$50",
    unit: "term",
    badges: ["Verified"],
    image: "/cl.jpg",
    description:
      "Deep cleaning specialists for residential and commercial spaces with eco-friendly products.",
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
      "Full-service HVAC maintenance, installation, and rapid cooling system diagnostics.",
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
      "Solving complex leakages, pipe bursts, and bathroom fixture installations since 2015.",
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
      "Transforming kitchens and living rooms with high-quality craftsmanship and modern designs.",
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
      "Professional lawn care, irrigation setup, and ornamental garden design.",
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
      "Certified technicians for laptop, mobile, and home appliance motherboard repairs.",
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
      "High-precision interior and exterior painting with durable, premium finishes.",
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
      "Advanced security lock installations and 24/7 emergency lockout assistance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const FeaturedProviders = () => {
  return (
    <section className="bg-[#fdfcfb] py-16 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-green-700 mb-2">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Top Rated
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl -mb-9 font-serif font-bold text-gray-800">
            Featured Service Providers
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {providers.map((p) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border py-7 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-md">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-[26px] leading-tight">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500 mt-0.5">
                      <MapPin size={12} className="text-green-600" />
                      <p className="text-sm font-medium">
                        {p.category} • {p.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={
                            i < Math.round(p.rating) ? "currentColor" : "none"
                          }
                        />
                      ))}
                      <span className="text-xs font-bold ml-1 text-gray-700">
                        {p.rating}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        ({p.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-[18px] leading-relaxed mb-4 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {p.badges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1 py-1 px-2 bg-green-50 text-green-700 text-[13px] font-bold rounded-md border border-green-100 uppercase"
                    >
                      <CheckCircle size={13} /> {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer - FIXED */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 mt-auto flex flex-row items-center justify-between gap-3">
                {/* Price */}
                <div className="whitespace-nowrap">
                  <span className="text-[12px] uppercase text-gray-400 font-bold">
                    Starting From
                  </span>
                  <p className="text-md font-bold text-gray-900">
                    {p.price}
                    <span className="text-gray-500 font-normal italic">
                      {" "}
                      / {p.unit}
                    </span>
                  </p>
                </div>

                {/* Book Button */}
                <Link href={`/service/${p.id}`}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-yellow-700 transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Book Now
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
