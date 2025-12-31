"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
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

const serviceIcons = [
  { id: "plumbing", icon: Wrench },
  { id: "electrical", icon: Zap },
  { id: "repairing", icon: Paintbrush },
  { id: "hvac", icon: Fan },
  { id: "painting", icon: PaintRoller },
  { id: "gardening", icon: Leaf },
  { id: "landscaping", icon: Shovel },
  { id: "cleaning", icon: SprayCan },
];

const FeatureService: React.FC = () => {
  const t = useTranslations("FeatureService");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="bg-[#f3f4f6] py-20 px-4" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group rounded-[45px] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:bg-[#1b3a57] hover:shadow-xl"
              >
                {/* Animated Icon Container - Styling Kept Exactly as Previous */}
                <motion.div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e7eeee] group-hover:bg-white"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: isRtl ? -8 : 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Icon
                    size={70} // Restored to your original size
                    strokeWidth={1.4}
                    className="text-[#5d8585]"
                  />
                </motion.div>

                {/* Title - Styling Kept Exactly as Previous */}
                <h3 className="mb-3 text-lg font-extrabold tracking-widest text-gray-900 transition-colors duration-300 group-hover:text-white uppercase">
                  {t(`items.${item.id}.title`)}
                </h3>

                {/* Description - Styling Kept Exactly as Previous */}
                <p className="text-sm font-medium leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-100">
                  {t(`items.${item.id}.desc`)}
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
