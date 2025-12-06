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

  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl text-black font-bold mb-6">
          Property Collections
        </h2>

        <div className="relative pb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full h-full"
          >
            {collections.map((item, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <Link
                  href={item.href}
                  className="relative group cursor-pointer rounded-lg overflow-hidden w-full"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={350}
                    height={220}
                    priority
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white text-sm">{item.count} properties</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination mt-4 flex justify-center"></div>
        </div>
      </main>
    </div>
  );
}
