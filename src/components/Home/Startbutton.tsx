"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="w-full bg-white flex justify-center py-6">
      <div className="w-full max-w-6xl bg-white border border-gray-200 shadow-sm rounded-xl 
                      p-4 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">

        {/* Left Image */}
        <div className="relative w-28 h-16 sm:w-36 sm:h-20 flex-shrink-0">
          <Image
            src="/promo2.webp"
            alt="Promo"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Discover Top Neighborhoods
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
            Explore homes in the best areas tailored just for you.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/explore"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-base 
                     hover:bg-blue-700 transition flex-shrink-0"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}
