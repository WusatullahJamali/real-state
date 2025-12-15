"use client";

import React from "react";
import Image from "next/image";

const ACards = () => {
  const cards = [
    {
      img: "/apartment.avif", 
      text: "Looking for apartments for rent in your area?",
      linkText: "Find apartments near you",
    },
    {
      img: "/rentcards.svg", 
      text: "Want to list your rental for free in minutes?",
      linkText: "Learn about landlord tools by Avail",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src={card.img}
                alt={card.linkText}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-black text-lg md:text-xl">
              {card.text}{" "}
              <span className="text-yellow-600 font-bold underline cursor-pointer hover:text-yellow-700 transition">
                {card.linkText}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ACards;
