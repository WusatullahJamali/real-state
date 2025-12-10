"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Bed, Bath, Maximize2, Heart } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    title: "Harmony House",
    city: "Panama City",
    beds: 3,
    baths: 3,
    size: "234,560",
    price: "$7,656.00",
    image: "/slider1.jpg",
    badge: null,
  },
  {
    id: 2,
    title: "Oakwood Estate",
    city: "Melbourne City",
    beds: 6,
    baths: 3,
    size: "453,234",
    price: "$9,656.00",
    image: "/slider2.jpg",
    badge: "For Sale",
  },
  {
    id: 3,
    title: "Willow Creek Residence",
    city: "Melbourne City",
    beds: 2,
    baths: 3,
    size: "244,560",
    price: "$6,656.00",
    image: "/slider3.jpg",
    badge: "For Sale",
  },
  {
    id: 4,
    title: "Meadowview Manor",
    city: "Sydney City",
    beds: 5,
    baths: 4,
    size: "256,560",
    price: "$6,656.00",
    image: "/slider4.jpg",
    badge: "For Rent",
  },
  {
    id: 5,
    title: "Sunset Villa",
    city: "Sydney City",
    beds: 5,
    baths: 4,
    size: "256,560",
    price: "$6,656.00",
    image: "/slider5.jpg",
    badge: "For Rent",
  },
  {
    id: 6,
    title: "Riverside Cottage",
    city: "Sydney City",
    beds: 5,
    baths: 4,
    size: "256,560",
    price: "$6,656.00",
    image: "/slider6.jpg",
    badge: "For Rent",
  },
];

export default function ProductSlider() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties available now
          </p>
        </div>

        {/* 🔥 Fade Effect on Left & Right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-30"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-30"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          grabCursor
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 18 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          className="py-4"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} className="flex justify-center">
              <article className="group w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                {/* Image */}
                <div className="relative w-full h-48 md:h-56 lg:h-60 overflow-hidden">
                  {p.badge && (
                    <span
                      className={`absolute z-10 top-4 left-4 px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${
                        p.badge === "For Sale"
                          ? "bg-yellow-400 text-gray-900"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}

                  {/* Favorite Button */}
                  <button className="absolute z-10 top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 hover:fill-red-500 transition-colors" />
                  </button>

                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{p.city}</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{p.price}</p>
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900 mb-4 group-hover:text-yellow-500 transition-colors">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-gray-400" /> <span>{p.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-gray-400" /> <span>{p.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-gray-400" /> <span>{p.size} sq.ft</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 group/btn"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-swiper-pagination mt-8 flex justify-center gap-2"></div>
      </div>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #111827;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: #eab308;
          color: white;
          transform: scale(1.1);
        }
        :global(.custom-swiper-pagination .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        :global(.custom-swiper-pagination .swiper-pagination-bullet-active) {
          background: #111827;
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
