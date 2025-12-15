"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function CollectionsSection() {
  const collections = [
    { title: "Recommended Homes", count: 17, img: "/img1.webp", href: "/recommended" },
    { title: "New Listings", count: 7, img: "/img2.avif", href: "/new-listings" },
    { title: "Price Reduced", count: 14, img: "/img3.webp", href: "/price-reduced" },
    { title: "Open Houses", count: 3, img: "/img4.jpeg", href: "/open-houses" },
    { title: "Recently Sold", count: 168, img: "/img5.jpg", href: "/recently-sold" },
    { title: "New Constructions", count: 32, img: "/img6.webp", href: "/new-constructions" },
    { title: "New Home Communities", count: 2, img: "/img7.jpg", href: "/communities" },
    { title: "Land", count: 29, img: "/img8.jpg", href: "/land" },
  ];

  const rows = [collections.slice(0, 4), collections.slice(4)];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">Property Collections</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our curated property collections for every buyer and investor.
          </p>
        </div>

        {/* Two Rows of Swipers */}
        {rows.map((row, idx) => (
          <Swiper
            key={idx}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="mb-12"
          >
            {row.map((item, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <Link
                  href={item.href}
                  className="relative w-full group cursor-pointer rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105"
                >
                  {/* Image container to maintain rounded corners */}
                  <div className="w-full h-72 md:h-80 relative rounded-lg overflow-hidden shadow-lg group">

                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/40 to-transparent rounded-xl">
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                      <p className="text-white text-sm">{item.count} properties</p>
                      <span className="mt-2 inline-block px-6 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-lg transition-all group-hover:bg-yellow-400">
                        View Collection
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
}
