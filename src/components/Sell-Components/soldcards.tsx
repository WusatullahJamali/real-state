"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Bed,
  Bath,
  LayoutGrid,
  ArrowRight,
  ArrowLeft,
  MoveRight,
  DollarSign,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

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

// Static metadata that doesn't need translation
const STATIC_METADATA = [
  { imageUrl: "/home1.jpeg", beds: 4, baths: 3, sqft: 3268 },
  { imageUrl: "/home2.jpeg", beds: 2, baths: 2, sqft: 1432 },
  { imageUrl: "/home3.jpg", beds: 4, baths: 2, sqft: 2500 },
  { imageUrl: "/home4.jpg", beds: 4, baths: 3, sqft: 3174 },
  { imageUrl: "/hourse2.png", beds: 3, baths: 2.5, sqft: 1850 },
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
  const t = useTranslations("RecentlySold");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const isContact =
    price.toLowerCase().includes("contact") || price.includes("اتصل");

  return (
    <div
      className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[32%] lg:w-[27%] mx-3 
      rounded-2xl bg-white shadow-md overflow-hidden transition-transform 
      duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="relative h-52 md:h-60 overflow-hidden group">
        <Image
          src={imageUrl}
          alt={address1}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 32vw, 27vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span
          className={`absolute top-3 bg-[#301366] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
            isRtl ? "right-3" : "left-3"
          }`}
        >
          {t("badge")}
        </span>
        <div className="absolute bottom-0 w-full h-[3px] bg-yellow-400"></div>
      </div>

      <div className="p-5">
        <p className="text-xs text-black font-bold mb-1">{status}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          {isContact ? (
            <>
              <DollarSign
                className={`w-4 h-4 text-yellow-500 ${isRtl ? "ml-1" : "mr-1"}`}
              />
              {price}
            </>
          ) : (
            <span dir="ltr">{price}</span>
          )}
        </h3>

        <div className="flex justify-between text-sm font-medium border-t pt-3 mb-2">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-yellow-500" />
            {details.beds} {t("labels.bed")}
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-yellow-500" />
            {details.baths} {t("labels.bath")}
          </div>
          <div className="flex items-center gap-1">
            <LayoutGrid className="w-4 h-4 text-yellow-500" />
            {details.sqft.toLocaleString()} {t("labels.sqft")}
          </div>
        </div>

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
  const t = useTranslations("RecentlySold");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const scrollRef = useRef<HTMLDivElement>(null);

  // Merge JSON data with static metadata
  const initialHomes: HomeCardProps[] = (t.raw("homes") as any[]).map(
    (home, index) => ({
      id: `home-${index}`,
      ...home,
      imageUrl: STATIC_METADATA[index].imageUrl,
      details: {
        beds: STATIC_METADATA[index].beds,
        baths: STATIC_METADATA[index].baths,
        sqft: STATIC_METADATA[index].sqft,
      },
    })
  );

  const [cards] = useState([...initialHomes, ...initialHomes, ...initialHomes]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isHovered) return;

    const speed = isRtl ? -1 : 1; // Reverse scroll for RTL
    let animation: number;

    const step = () => {
      if (container) {
        container.scrollLeft += speed;

        // Infinite loop logic
        const third = container.scrollWidth / 3;
        if (isRtl) {
          if (Math.abs(container.scrollLeft) >= third * 2)
            container.scrollLeft = -third;
        } else {
          if (container.scrollLeft >= third * 2) container.scrollLeft = third;
        }
      }
      animation = requestAnimationFrame(step);
    };

    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [isHovered, isRtl]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.querySelector("div");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24;
    // For RTL, "right" actually means negative scrollLeft
    const multiplier = isRtl ? -1 : 1;
    const scrollAmount =
      (dir === "right" ? cardWidth : -cardWidth) * multiplier;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="min-h-[70vh] flex items-center justify-center p-6 bg-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className="w-full max-w-7xl relative p-6 md:p-8 rounded-3xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="flex items-start md:items-end justify-between border-b pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">{t("title")}</h1>
            <p className="text-black">{t("subTitle")}</p>
          </div>
          <a
            href="#"
            className="font-semibold flex items-center text-yellow-600 hover:text-yellow-500"
          >
            {t("linkText")}
            <MoveRight
              className={`w-4 h-4 ${isRtl ? "mr-1 rotate-180" : "ml-1"}`}
            />
          </a>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className={`absolute top-1/2 -translate-y-1/2 bg-white p-3 text-black rounded-full shadow-lg z-20 hover:scale-110 active:scale-95 transition ${
            isRtl ? "right-2" : "left-2"
          }`}
        >
          {isRtl ? (
            <ArrowRight className="w-5 h-5" />
          ) : (
            <ArrowLeft className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className={`absolute top-1/2 -translate-y-1/2 bg-white p-3 text-black rounded-full shadow-lg z-20 hover:scale-110 active:scale-95 transition ${
            isRtl ? "left-2" : "right-2"
          }`}
        >
          {isRtl ? (
            <ArrowLeft className="w-5 h-5" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-0 py-4 text-black overflow-x-auto no-scrollbar scroll-smooth"
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
