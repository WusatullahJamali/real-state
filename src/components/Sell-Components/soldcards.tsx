"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Bed,
  Bath,
  LayoutGrid,
  ArrowRight,
  ArrowLeft,
  MoveRight,
  DollarSign,
} from "lucide-react";

// Interfaces
interface HomeDetail {
  beds: number;
  baths: number;
  sqft: number;
}

interface HomeCardProps {
  id: string;
  status: string;
  price: string;
  details: HomeDetail;
  address1: string;
  address2: string;
  imageUrl: string;
}

// Mock Data
const homesData: HomeCardProps[] = [
  {
    id: crypto.randomUUID(),
    status: "Sold - Sep 5, 2025",
    price: "Contact for price",
    details: { beds: 4, baths: 3, sqft: 3268 },
    address1: "927 Walters Pt",
    address2: "Monument, CO 80132",
    imageUrl: "/home1.jpeg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 15, 2025",
    price: "$397,000",
    details: { beds: 2, baths: 2, sqft: 1432 },
    address1: "2717 S Troy Way",
    address2: "Aurora, CO 80014",
    imageUrl: "/home2.jpeg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 15, 2025",
    price: "$545,000",
    details: { beds: 4, baths: 2, sqft: 2500 },
    address1: "1007 N Weber St",
    address2: "Colorado Springs, CO 80903",
    imageUrl: "/home3.jpg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 4, 2025",
    price: "$512,500",
    details: { beds: 4, baths: 3, sqft: 3174 },
    address1: "6330 Wind River Pt",
    address2: "Colorado Springs, CO 80923",
    imageUrl: "/home4.jpg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Jul 30, 2025",
    price: "Contact for price",
    details: { beds: 3, baths: 2.5, sqft: 1850 },
    address1: "7246 Clove Hill Ct",
    address2: "Colorado Springs, CO 80922",
    imageUrl: "/home5.jpg",
  },
];

// CARD COMPONENT
const HomeCard: React.FC<HomeCardProps> = ({
  status,
  price,
  details,
  address1,
  address2,
  imageUrl,
}) => {
  const isContact = price.toLowerCase().includes("contact");

  return (
    <div
      className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[32%] lg:w-[27%] mx-3 
      rounded-2xl bg-white shadow-md overflow-hidden transition-transform 
      duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="relative h-52 md:h-60 overflow-hidden group">
        <img
          src={imageUrl}
          alt={address1}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span className="absolute top-3 left-3 bg-[#301366] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          SOLD
        </span>
        <div className="absolute bottom-0 w-full h-[3px] bg-yellow-400"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-black font-bold mb-1">{status}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          {isContact ? (
            <>
              <DollarSign className="w-4 h-4 mr-1 text-yellow-500" />
              {price}
            </>
          ) : (
            price
          )}
        </h3>

        {/* Details */}
        <div className="flex justify-between text-sm font-medium border-t pt-3 mb-2">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-yellow-500" />
            {details.beds} Bed
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-yellow-500" />
            {details.baths} Bath
          </div>
          <div className="flex items-center gap-1">
            <LayoutGrid className="w-4 h-4 text-yellow-500" />
            {details.sqft.toLocaleString()} sqft
          </div>
        </div>

        {/* Address */}
        <div className="text-sm text-black leading-tight">
          <p>{address1}</p>
          <p>{address2}</p>
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT
export default function RecentlySoldHomes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cards] = useState([...homesData, ...homesData, ...homesData]);

  // Infinite auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const speed = 1;
    let animation: number;

    const step = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0;
      }
      animation = requestAnimationFrame(step);
    };

    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Manual scroll
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-7xl relative p-6 md:p-8 rounded-3xl bg-white">
        {/* Header */}
        <div className="flex items-start md:items-end justify-between border-b pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">
              Recently Sold Homes
            </h1>
            <p className="text-black">
              Colorado's top-performing homes for 2025
            </p>
          </div>
          <a
            href="#"
            className="font-semibold flex items-center text-yellow-600 hover:text-yellow-500"
          >
            Homes like yours
            <MoveRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:scale-110 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:scale-110 transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 py-4 overflow-x-auto no-scrollbar"
          style={{
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
          {cards.map((home, i) => (
            <HomeCard key={home.id + i} {...home} />
          ))}
        </div>
      </div>
    </div>
  );
}
