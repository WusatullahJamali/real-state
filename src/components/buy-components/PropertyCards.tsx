import { motion } from "framer-motion";
import React from "react";

// --- 1. TypeScript Interface (Unchanged) ---
interface CardData {
  id: number;
  category: string;
  categoryColor: string; // Tailwind color class for the category badge
  imageSrc: string;
  imageAlt: string;
  title: string;
  badgeContent?: string; // Optional: for the "Most Popular Homes" badge
  badgeBgColor?: string; // Optional: background color for the main content badge
}

// --- 2. Mock Data (Unchanged) ---
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
    imageAlt: "Map showing two tropical storm trackers (Humberto and Imelda)",
    title: "Tropical Storms Humberto and Imelda: Trackers See Storm's Pat...",
  },
];

// --- 3. InfoCard Component (Updated for Bottom-Left Badge and Framer Motion) ---
const InfoCard: React.FC<{ data: CardData }> = ({ data }) => {
  const {
    category,
    categoryColor,
    imageSrc,
    imageAlt,
    title,
    badgeContent,
    badgeBgColor,
  } = data;

  // Framer Motion variants for the hover animation (Scale and Shadow)
  const cardVariants = {
    initial: {
      scale: 1,
      // Default shadow
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.02, // Slightly larger on hover
      // Deeper shadow on hover
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  return (
    <motion.div
      className="w-full max-w-xs overflow-hidden rounded-xl bg-white cursor-pointer"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Container */}
      <div className="relative h-48">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />

        {/* Category Badge (Top Left) */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md ${categoryColor}`}
        >
          {category}
        </span>

        {/* Optional Main Content Badge (Bottom Left) */}
        {badgeContent && (
          <span
            // Positioned at bottom-3 and left-3
            className={`absolute bottom-3 left-3 px-3 py-1 text-sm font-bold text-white rounded-full shadow-md ${badgeBgColor}`}
          >
            {badgeContent}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 pt-3">
        <p className="text-sm font-medium text-gray-800 line-clamp-2">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

// --- 4. CardGrid Component (Default Export - Unchanged) ---
const PropertyCards: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card) => (
            <div key={card.id} className="flex justify-center">
              <InfoCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
