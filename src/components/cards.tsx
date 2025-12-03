"use client";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  title: string;
  count: number | string;
  img: string;
  href: string;
}

export default function ListingCard({
  title,
  count,
  img,
  href,
}: ListingCardProps) {
  return (
    <Link
      href={href}
      className="block group rounded-xl overflow-hidden shadow-md bg-white"
    >
      <div className="relative w-full h-56">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />

        {/* Overlay hhhhh*/}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Top Overlay Content */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-3">
          <h3 className="text-white text-lg font-semibold">{title}</h3>

          <span className="bg-white text-gray-900 text-sm px-2 py-0.5 rounded-md font-semibold shadow">
            {count}
          </span>
        </div>
      </div>
    </Link>
  );
}
