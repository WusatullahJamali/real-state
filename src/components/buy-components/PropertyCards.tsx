"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";

/* ---------------- TYPES ---------------- */
interface CardData {
  id: number;
  category: string;
  categoryColor: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  badgeContent?: string;
  badgeBgColor?: string;
}

/* ---------------- DATA ---------------- */
const cardData: CardData[] = [
  {
    id: 1,
    category: "Trends",
    categoryColor: "bg-green-500",
    imageSrc: "/p1.jpg",
    imageAlt: "City view covered in snow with money symbols",
    title: "These Top Housing Markets Will Deliver Better Value Than Their...",
  },
  {
    id: 2,
    category: "Unique homes",
    categoryColor: "bg-indigo-600",
    imageSrc: "/p2.jpg",
    imageAlt: "Entrance to an old mine bunker",
    title:
      "Old Gold Mine Bunker Carved Into the Side of Arizona Mountain Hits...",
    badgeContent: "Most Popular Homes",
    badgeBgColor: "bg-red-600",
  },
  {
    id: 3,
    category: "Celebrity real estate",
    categoryColor: "bg-blue-500",
    imageSrc: "/p3.jpg",
    imageAlt: "Shannen Doherty next to her Malibu Mansion",
    title: "EXCLUSIVE: Late Shannen Doherty's Beloved Malibu Mansion...",
  },
  {
    id: 4,
    category: "Weather",
    categoryColor: "bg-red-500",
    imageSrc: "/p4.jpg",
    imageAlt: "Storm trackers map",
    title: "Tropical Storms Humberto and Imelda: Trackers See Storm's Path...",
  },
];

/* ---------------- CARD ---------------- */
const InfoCard: React.FC<{ data: CardData; index: number }> = ({
  data,
  index,
}) => {
  const {
    category,
    categoryColor,
    imageSrc,
    imageAlt,
    title,
    badgeContent,
    badgeBgColor,
  } = data;

  // Right-to-left pop-up animation
  const popRightToLeft: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      },
    },
  };

  // Hover effect
  const hoverVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      variants={popRightToLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-sm overflow-hidden rounded-xl bg-white cursor-pointer"
      >
        {/* IMAGE */}
        <div className="relative h-48 sm:h-52">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* CATEGORY BADGE */}
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full ${categoryColor}`}
          >
            {category}
          </span>

          {/* OPTIONAL BADGE */}
          {badgeContent && (
            <span
              className={`absolute bottom-3 left-3 px-3 py-1 text-xs sm:text-sm font-bold text-white rounded-full ${badgeBgColor}`}
            >
              {badgeContent}
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <p className="text-sm font-medium text-gray-800 line-clamp-2">
            {title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------- GRID ---------------- */
const PropertyCards: React.FC = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {cardData.map((card, index) => (
            <InfoCard key={card.id} data={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCards;
