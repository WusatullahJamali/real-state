"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Zap,
  Paintbrush,
  Fan,
  PaintRoller,
  Leaf,
  Shovel,
  SprayCan,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: "1",
    title: "PLUMBING",
    description: "Leak repairs, drain cleaning, water heater installation",
    icon: Wrench,
  },
  {
    id: "2",
    title: "ELECTRICAL",
    description: "Wiring, outlets, lighting, panel upgrades",
    icon: Zap,
  },
  {
    id: "3",
    title: "REPAIRING",
    description: "Installation, repair, maintenance",
    icon: Paintbrush,
  },
  {
    id: "4",
    title: "AC & HVAC",
    description: "Installation, repair, maintenance, air quality",
    icon: Fan,
  },
  {
    id: "5",
    title: "PAINTING",
    description: "Interior, maintenance, commercial",
    icon: PaintRoller,
  },
  {
    id: "6",
    title: "GARDENING",
    description: "Design, exterior, gardening",
    icon: Leaf,
  },
  {
    id: "7",
    title: "LANDSCAPING",
    description: "Design, maintenance, irrigation",
    icon: Shovel,
  },
  {
    id: "8",
    title: "CLEANING",
    description: "Deep cleaning, move in/out, regular service",
    icon: SprayCan,
  },
];

const FeatureService: React.FC = () => {
  return (
    <section className="bg-[#f3f4f6] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group rounded-[45px] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:bg-[#1b3a57] hover:shadow-xl"
              >
                {/* Animated Icon */}
                <motion.div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e7eeee] group-hover:bg-white"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Icon
                    size={70}
                    strokeWidth={1.4}
                    className="text-[#5d8585]"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-extrabold tracking-widest text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-100">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
