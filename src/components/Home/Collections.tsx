"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ListingCard from "@/components/Home/cards";

export default function CollectionsSection() {
  const collections = [
    { title: "Recommended Homes", count: 17, img: "/img1.webp", href: "/recommended" },
    { title: "New Listings", count: 7, img: "/img2.avif", href: "/new-listings" },
    { title: "Price Reduced", count: 14, img: "/img3.webp", href: "/price-reduced" },
    { title: "Open Houses", count: 3, img: "/img4.jpeg", href: "/open-houses" },
    { title: "Recently Sold", count: 168, img: "/img5.jpg", href: "/open-houses" },
    { title: "New Constructions", count: 32, img: "/img6.webp", href: "/open-houses" },
    { title: "New Home Communities", count: 2, img: "/img7.jpg", href: "/open-houses" },
    { title: "Land", count: 29, img: "/img8.jpg", href: "/open-houses" },
  ];

  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl text-black font-bold mb-6">Property Collections</h2>

        <div className="relative pb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom",
            }}
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
                <ListingCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination container below slider */}
          <div className="swiper-pagination-custom flex justify-center mt-4 space-x-2">
            {/* Tailwind styling will be applied via Swiper classes */}
          </div>
        </div>
      </main>
    </div>
  );
}
