"use client";

import Image from "next/image";
import Link from "next/link";

export default function CollectionsSection() {
  const collections = [
    {
      title: "Recommended Homes",
      count: 17,
      img: "/img1.webp",
      href: "/CategoriesDATA/recommend",
    },
    {
      title: "New Listings",
      count: 7,
      img: "/img2.avif",
      href: "/CategoriesDATA/new-listings",
    },
    {
      title: "Price Reduced",
      count: 14,
      img: "/img3.webp",
      href: "/CategoriesDATA/price-reduced",
    },
    {
      title: "Open Houses",
      count: 3,
      img: "/img4.jpeg",
      href: "/CategoriesDATA/open-houses",
    },
    {
      title: "Recently Sold",
      count: 168,
      img: "/img5.jpg",
      href: "/CategoriesDATA/recently-sold",
    },
    {
      title: "New Constructions",
      count: 32,
      img: "/img6(2).jpg",
      href: "/CategoriesDATA/new-constructions",
    },
    {
      title: "New Home Communities",
      count: 2,
      img: "/img7.jpg",
      href: "/CategoriesDATA/communities",
    },
    {
      title: "Land",
      count: 29,
      img: "/img8.jpg",
      href: "/CategoriesDATA/land",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">
            Property Collections
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our curated property collections for every buyer and
            investor.
          </p>
        </div>

        {/* MOBILE: Slider | DESKTOP: Grid */}
        <div
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth
            md:grid md:grid-cols-4 md:overflow-visible
          "
        >
          {collections.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
                min-w-[85%] snap-center
                md:min-w-0
                group rounded-xl overflow-hidden
                transition-transform hover:scale-105
              "
            >
              {/* Card */}
              <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0 flex flex-col justify-end
                    items-center md:items-start
                    p-4 bg-gradient-to-t from-black/50 to-transparent
                  "
                >
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  <p className="text-white text-sm">{item.count} properties</p>

                  <span
                    className="
                      mt-3 px-6 py-1 bg-yellow-500 text-black
                      text-sm font-semibold rounded-lg
                      transition group-hover:bg-yellow-400
                    "
                  >
                    View Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile slide indicator */}
      <div className="mt-6 flex justify-center md:hidden">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-gray-300 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      <p className="mt-2 text-center text-sm text-gray-800 md:hidden">
        Swipe to explore
      </p>
    </section>
  );
}
