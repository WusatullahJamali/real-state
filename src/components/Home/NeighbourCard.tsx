"use client";

import Image from "next/image";
import Link from "next/link";

export default function NeighborhoodCards() {
  const cards = [
    { title: "Jackson", count: "522", price: "$195,000", img: "/map1.png", link: "/jackson" },
    { title: "49201", count: "271", price: "$309,000", img: "/map2.png", link: "/49201" },
    { title: "49230", count: "120", price: "$341,000", img: "/map3.png", link: "/49230" },
    { title: "49203", count: "170", price: "$170,950", img: "/map4.png", link: "/49203" },
  ];

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          gap-4 sm:gap-6
        ">
          {cards.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                         transition-all duration-300 bg-white border border-gray-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-44 md:h-48">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-1 text-black flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold truncate">{card.title}</h3>

                <p className="text-sm">
                  <span className="font-medium">{card.count}</span> Listings for sale
                </p>

                <p className="text-sm">
                  <span className="font-medium">{card.price}</span> Median Listing Home Price
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
