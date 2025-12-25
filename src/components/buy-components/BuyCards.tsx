"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// --- Types ---
type PropertyType = "Single-Family Home" | "Condo" | "Land";

interface Property {
  id: string;
  image: string;
  type: PropertyType;
  price: number;
  address: string;
  cityStateZip: string;
  tags?: string[];
  specs: {
    beds?: number;
    baths?: number;
    sqft?: number;
    lotSize?: string;
  };
}

interface BuyCardsProps {
  title: string;
  linkText: string;
  linkHref: string;
  properties: Property[];
}

export default function BuyCards({
  title,
  linkText,
  linkHref,
  properties,
}: BuyCardsProps) {
  if (!properties || properties.length === 0) return null;

  return (
    <div className="w-full bg-white">
      <section className="w-full sm:max-w-7xl mx-auto px-4 sm:px-15 py-6">
        {/* Header */}
        <div className="mb-4 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Link
            href={linkHref}
            className="text-sm text-gray-700 hover:text-gray-900 hover:underline w-fit"
          >
            {linkText} →
          </Link>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {properties.slice(0, 4).map((property) => (
            <motion.div
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

// ------------------- SUB-COMPONENT: INDIVIDUAL CARD ----------------------
const PropertyCard = ({ property }: { property: Property }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the Link from triggering
    e.stopPropagation(); // Prevents the event from bubbling up
    setIsFavorited((prev) => !prev);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(price) + " IQD";

  return (
    <Link href={`/buy/${property.id}`} className="block">
      <motion.div
        className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg cursor-pointer h-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Image Section */}
        <div className="relative h-44 w-full bg-gray-100">
          <Image
            src={property.image}
            alt={property.type}
            fill
            className="object-cover"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-10">
            {property.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-yellow-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Favorite Button */}
          <motion.button
            onClick={handleFavoriteToggle}
            className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md z-20"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <Heart
              size={18}
              className={isFavorited ? "text-yellow-600" : "text-gray-700"}
              fill={isFavorited ? "#ca8a04" : "none"}
              strokeWidth={1.5}
            />
          </motion.button>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-600" />
            <span className="text-sm text-gray-700">{property.type}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </h3>

          <div className="text-gray-700 text-sm font-medium">
            {property.specs.lotSize ? (
              <span>{property.specs.lotSize}</span>
            ) : (
              <div className="flex items-center gap-3">
                <span>
                  <span className="font-bold">{property.specs.beds}</span> bed
                </span>
                <span>
                  <span className="font-bold">{property.specs.baths}</span> bath
                </span>
                <span>
                  <span className="font-bold">
                    {property.specs.sqft?.toLocaleString()}
                  </span>{" "}
                  sqft
                </span>
              </div>
            )}
          </div>

          <div className="mt-1 text-sm text-gray-500 leading-snug">
            <p className="truncate">{property.address}</p>
            <p className="truncate">{property.cityStateZip}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
