"use client";

import React, { useRef, useCallback } from "react";
import {
  Bed,
  Bath,
  LayoutGrid,
  ArrowRight,
  ArrowLeft,
  MoveRight,
  DollarSign,
} from "lucide-react";

// --- Interfaces ---
interface HomeDetail {
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
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

// --- Mock Data ---
const homesData: HomeCardProps[] = [
  {
    id: crypto.randomUUID(),
    status: "Sold - Sep 5, 2025",
    price: "Contact for price",
    details: { beds: 4, baths: 3, sqft: 3268 },
    address1: "927 Walters Pt",
    address2: "Monument, CO 80132",
    imageUrl: "home1.jpeg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 15, 2025",
    price: "$397,000",
    details: { beds: 2, baths: 2, sqft: 1432 },
    address1: "2717 S Troy Way",
    address2: "Aurora, CO 80014",
    imageUrl: "home2.jpeg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 15, 2025",
    price: "$545,000",
    details: { beds: 4, baths: 2, sqft: 2500, lotSize: "4,094 sqft lot" },
    address1: "1007 N Weber St",
    address2: "Colorado Springs, CO 80903",
    imageUrl: "home3.jpg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Aug 4, 2025",
    price: "$512,500",
    details: { beds: 4, baths: 3, sqft: 3174 },
    address1: "6330 Wind River Pt",
    address2: "Colorado Springs, CO 80923",
    imageUrl: "home4.jpg",
  },
  {
    id: crypto.randomUUID(),
    status: "Sold - Jul 30, 2025",
    price: "Contact for price",
    details: { beds: 3, baths: 2.5, sqft: 1850 },
    address1: "7246 Clove Hill Ct",
    address2: "Colorado Springs, CO 80922",
    imageUrl: "home5.jpg",
  },
];

// --- Home Card Component ---
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
    <div className="w-64 shrink-0 mx-2 bg-white rounded-xl shadow-md transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.03] border border-gray-100">
      {/* Image */}
      <div className="relative h-40 overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={address1}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x300/E5E7EB/4B5563?text=Image+Unavailable";
            e.currentTarget.onerror = null;
          }}
        />
        <span className="absolute top-2 left-2 bg-[#301366] text-white text-xs font-bold px-2 py-1 rounded-full">
          SOLD
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs font-semibold text-gray-500 mb-1 tracking-wide uppercase">
          {status}
        </p>

        <h3 className="text-lg font-bold mb-2 flex items-center text-gray-900">
          {isContact ? (
            <>
              <DollarSign className="w-4 h-4 mr-1 text-yellow-500" />
              {price}
            </>
          ) : (
            price
          )}
        </h3>

        <div className="flex justify-between text-xs font-medium text-gray-700 mb-1.5 -mt-3 pt-1 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <Bed className="w-3 h-3 text-yellow-500" />
            <span className="font-bold">{details.beds}</span>
            <span className="text-gray-500">bed</span>
          </div>

          <div className="flex items-center space-x-1">
            <Bath className="w-3 h-3 text-yellow-500" />
            <span className="font-bold">{details.baths}</span>
            <span className="text-gray-500">bath</span>
          </div>

          <div className="flex items-center space-x-1">
            <LayoutGrid className="w-3 h-3 text-yellow-500" />
            <span className="font-bold">{details.sqft.toLocaleString()}</span>
            <span className="text-gray-500">sqft</span>
          </div>
        </div>

        <div className="mt-2 text-xs text-gray-600">
          <p>{address1}</p>
          <p>{address2}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
export default function RecentlySoldHomes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidthWithGap = 264; // card width + margin
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? cardWidthWithGap : -cardWidthWithGap,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-7xl bg-white p-6 md:p-8 rounded-3xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Recently Sold Homes in Colorado Springs, CO
            </h1>
            <p className="text-sm text-gray-500">
              Homes that have sold in the last 6 months in our top housing
              market for 2025
            </p>
          </div>
          <a
            href="#"
            className="flex items-center text-yellow-500 hover:text-yellow-400 font-bold mt-3 md:mt-0 transition text-sm"
          >
            Homes similar to yours
            <MoveRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg hidden lg:block"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-2 py-3 scrollbar-hide snap-x snap-mandatory"
          >
            {homesData.map((home) => (
              <div key={home.id} className="snap-start">
                <HomeCard {...home} />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg hidden lg:block"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Hide scrollbars */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}