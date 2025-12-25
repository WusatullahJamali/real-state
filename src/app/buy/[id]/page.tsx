"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Home,
  ParkingCircle,
  ChevronLeft,
} from "lucide-react";
import { getPropertyById } from "@/data/properties";

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const property = getPropertyById(params.id as string);

  const images = property?.image
    ? [property.image, property.image, property.image]
    : [];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (!property) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold text-yellow-500">
          Property Not Found
        </h1>
        <p className="text-gray-600 mt-2">
          The listing you are looking for does not exist.
        </p>
        <Link
          href="/buy"
          className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-bold"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const formatPrice = (num: number) =>
    new Intl.NumberFormat("en-US").format(num) + " IQD";

  // --- MAP LOGIC ---
  // This creates a URL-safe string from the address to show on Google Maps
  const mapQuery = encodeURIComponent(
    `${property.address}, ${property.cityStateZip}`
  );
  const googleMapsUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3 relative">
              <Image
                src={images[currentImage]}
                alt={property.type}
                width={1200}
                height={500}
                className="rounded-2xl shadow-md w-full h-[380px] md:h-[480px] object-cover transition-opacity duration-500"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative rounded-xl overflow-hidden border-2 h-[110px] ${
                    currentImage === index
                      ? "border-yellow-500"
                      : "border-transparent"
                  }`}
                >
                  <Image src={img} fill alt="thumb" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* BADGES & TITLE */}
          <div className="flex items-center gap-2 mt-6">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-xs font-bold">
              FEATURED
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs font-bold">
              VERIFIED
            </span>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-extrabold text-black">
              {property.type} in {property.cityStateZip.split(",")[0]}
            </h1>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin className="w-5 h-5 mr-1 text-yellow-600" />
              {property.address}, {property.cityStateZip}
            </div>
          </div>

          {/* STATS BAR */}
          <div className="flex flex-wrap gap-6 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-black font-semibold">
            {"lotSize" in property.specs ? (
              <span className="flex items-center gap-2">
                📏 {property.specs.lotSize}
              </span>
            ) : (
              <>
                <span className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-yellow-600" />{" "}
                  {property.specs.beds} Beds
                </span>
                <span className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-yellow-600" />{" "}
                  {property.specs.baths} Baths
                </span>
                <span className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-yellow-600" />{" "}
                  {property.specs.sqft} Sq Ft
                </span>
              </>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black border-b pb-2">
              Description
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              This stunning {property.type.toLowerCase()} located at{" "}
              {property.address} offers a modern lifestyle in a prime district.
              The property features high-quality finishes and breathtaking city
              views.
            </p>
          </div>

          {/* AMENITIES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black border-b pb-2">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[
                "Private Pool",
                "Garden",
                "Central AC",
                "Security System",
                "Garage",
                "Smart Home",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 border rounded-xl text-gray-800 bg-white shadow-sm"
                >
                  <span className="text-yellow-600 font-bold">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* --- VISIBLE MAP SECTION --- */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black border-b pb-2">
              Location
            </h2>
            <div className="mt-6 w-full h-[400px] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner relative">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={googleMapsUrl}
                title="Property Location"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-center italic">
              * Exact location details are provided upon verified inquiry.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT SIDEBAR */}
        <div className="relative">
          <div className="p-8 rounded-2xl shadow-xl border border-gray-100 bg-white sticky top-10">
            <div className="text-3xl font-black text-black">
              {formatPrice(property.price)}
            </div>
            <div className="text-gray-500 text-sm mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Negotiable • Financing Available
            </div>

            {/* Agent Info */}
            <div className="flex items-center gap-4 mt-8 pb-6 border-b">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white">
                SM
              </div>
              <div>
                <div className="font-bold text-black">Sahil Meymon</div>
                <div className="text-gray-500 text-xs">Licensed Agent</div>
              </div>
            </div>

            <form className="mt-6 space-y-4">
              <input
                className="w-full p-3 bg-gray-50 border rounded-xl text-black outline-none focus:border-yellow-500"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full p-3 bg-gray-50 border rounded-xl text-black outline-none focus:border-yellow-500"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="w-full p-3 bg-gray-50 border rounded-xl h-24 text-black outline-none focus:border-yellow-500"
                placeholder="I'm interested..."
              ></textarea>
              <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg">
                Request Tour
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 border-t pt-8">
        <Link
          href="/buy"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl transition"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Listings
        </Link>
      </div>
    </div>
  );
}
