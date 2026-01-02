"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Utensils, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

// --- 1. TYPESCRIPT INTERFACES ---
interface CommunityCardData {
  id: number;
  title: string;
  location: string;
  iconType: "location" | "utensils" | "pawprint";
  imageUrl: string;
}

// Static metadata that stays consistent across languages
const STATIC_METADATA = [
  { iconType: "location" as const, imageUrl: "/featureimge.jpg" },
  { iconType: "utensils" as const, imageUrl: "/featureimge2.webp" },
  { iconType: "pawprint" as const, imageUrl: "/featureimge3.webp" },
];

// --- 3. REUSABLE CARD COMPONENT ---
interface CommunityCardProps {
  card: CommunityCardData;
  isRtl: boolean;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ card, isRtl }) => {
  const Icon =
    card.iconType === "location"
      ? MapPin
      : card.iconType === "utensils"
      ? Utensils
      : PawPrint;

  const hoverClasses =
    "hover:ring-4 hover:ring-amber-500/50 hover:shadow-xl transition-all duration-300";

  return (
    <motion.div
      className={`relative w-full overflow-hidden shadow-lg ${hoverClasses} bg-white border border-gray-100 group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
        <Image
          src={card.imageUrl}
          alt={`Image of ${card.title} community`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />

        {/* Card Footer Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <div className="flex items-end justify-between gap-2">
            <div className="flex flex-col min-w-0">
              <span className="text-xl font-bold text-white leading-none truncate">
                {card.title}
              </span>
              <div
                className={`flex items-center text-amber-400 text-sm mt-1 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <MapPin
                  className={`w-3 h-3 fill-current ${isRtl ? "ml-1" : "mr-1"}`}
                />
                <span className="font-medium truncate">{card.location}</span>
              </div>
            </div>

            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-amber-400 text-amber-400">
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. MAIN FEATURED SECTION COMPONENT ---
const FeaturedCommunitySection: React.FC = () => {
  const t = useTranslations("FeaturedCommunities");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Merge JSON translations with static icon/image metadata
  const communityData: CommunityCardData[] = (
    t.raw("communities") as any[]
  ).map((item, index) => ({
    ...item,
    iconType: STATIC_METADATA[index].iconType,
    imageUrl: STATIC_METADATA[index].imageUrl,
  }));

  return (
    <section
      className="py-12 bg-gray-50 sm:py-16 lg:py-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-3xl font-extrabold text-gray-900 mb-8 sm:text-4xl ${
            isRtl ? "text-right" : "text-left"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {t("sectionTitle")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityData.map((card) => (
            <CommunityCard key={card.id} card={card} isRtl={isRtl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommunitySection;
