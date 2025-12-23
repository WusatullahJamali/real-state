"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Props = {
  searchTerm: string;
  priceRange: string;
  rooms: string;
};

/* ======================
   FRAMER VARIANTS (TYPED)
====================== */
const containerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Construction = ({ searchTerm, priceRange, rooms }: Props) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const listings = [
    { id: 1, price: 185000, beds: 3, baths: 2, sqft: 2100, address: "Al Mansour District", city: "Baghdad, Iraq", image: "/a1.jpg", status: "New", type: "House for sale" },
    { id: 2, price: 95000, beds: 2, baths: 2, sqft: 1450, address: "100m Street Apartment", city: "Erbil, Iraq", image: "/a2.jpg", status: "New", type: "Apartment for sale" },
    { id: 3, price: 420000, beds: 6, baths: 5, sqft: 5200, address: "Dream City Villa", city: "Erbil, Iraq", image: "/a3.jpg", status: "New", type: "Luxury villa" },
    { id: 4, price: 110000, beds: 3, baths: 2, sqft: 1900, address: "Al Ashar Area", city: "Basra, Iraq", image: "/a4.jpg", status: "New", type: "House for sale" },
    { id: 5, price: 78000, beds: 2, baths: 1, sqft: 1250, address: "University District", city: "Najaf, Iraq", image: "/a5.jpg", status: "New", type: "Apartment for sale" },
    { id: 6, price: 260000, beds: 5, baths: 4, sqft: 4100, address: "Al Jadriya", city: "Baghdad, Iraq", image: "/a11.jpg", status: "New", type: "Villa for sale" },
    { id: 7, price: 135000, beds: 3, baths: 2, sqft: 2300, address: "New Sulaymaniyah", city: "Sulaymaniyah, Iraq", image: "/a7.jpg", status: "New", type: "House for sale" },
    { id: 8, price: 89000, beds: 2, baths: 2, sqft: 1500, address: "Al Zubair", city: "Basra, Iraq", image: "/a8.jpg", status: "New", type: "Apartment for sale" },
    { id: 9, price: 510000, beds: 7, baths: 6, sqft: 6000, address: "Royal City Compound", city: "Erbil, Iraq", image: "/a9.jpg", status: "New", type: "Premium villa" },
  ];

  const filteredListings = listings.filter((l) => {
    const matchesSearch =
      l.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "0-100000" && l.price < 100000) ||
      (priceRange === "100000-250000" && l.price >= 100000 && l.price <= 250000) ||
      (priceRange === "250000-500000" && l.price >= 250000 && l.price <= 500000) ||
      (priceRange === "500000+" && l.price >= 500000);

    const matchesRooms = rooms === "all" || l.beds >= Number(rooms);

    return matchesSearch && matchesPrice && matchesRooms;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white py-16 text-black">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredListings.map((l) => (
            <motion.div
              key={l.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl border border-gray-500 overflow-hidden"
            >
              <div className="relative h-56 group">
                <Image
                  src={l.image}
                  alt={l.address}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <span className="absolute top-4 left-4 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
                  {l.status}
                </span>

                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => toggleFavorite(l.id)}
                  className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(l.id)
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-700"
                    }`}
                  />
                </motion.button>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-sm">{l.type}</p>
                <h3 className="text-2xl font-bold">${l.price.toLocaleString()}</h3>

                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{l.beds}</span>
                  <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{l.baths}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{l.sqft} sqft</span>
                </div>

                <div className="flex gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <div>
                    <p className="font-medium">{l.address}</p>
                    <p>{l.city}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border-2 border-black py-2 rounded-lg hover:bg-black hover:text-white transition"
                >
                  Contact Agent
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Construction;
