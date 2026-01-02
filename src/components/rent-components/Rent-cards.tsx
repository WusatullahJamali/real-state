"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const ACards = () => {
  // We use the full path here to be safe
  const t = useTranslations("rent.aCards");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const cards = [
    {
      img: "/apartment.avif",
      text: t("card1.text"),
      linkText: t("card1.linkText"),
      href: "/apartments-for-rent",
    },
    {
      img: "/rentcards.svg",
      text: t("card2.text"),
      linkText: t("card2.linkText"),
      href: "/landlord-tools",
    },
  ];

  return (
    <section className="bg-white py-12 text-black" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            <div
              className={`w-24 h-24 md:w-32 md:h-32 relative shrink-0 mb-4 md:mb-0 ${
                isRTL ? "md:ml-6" : "md:mr-6"
              }`}
            >
              <Image
                src={card.img}
                alt={card.linkText}
                fill
                className="object-contain"
              />
            </div>
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <p className="text-black text-lg md:text-xl leading-relaxed">
                {card.text}{" "}
                <Link href={card.href}>
                  <span className="text-yellow-600 font-bold underline cursor-pointer hover:text-yellow-700 transition">
                    {card.linkText}
                  </span>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ACards;
