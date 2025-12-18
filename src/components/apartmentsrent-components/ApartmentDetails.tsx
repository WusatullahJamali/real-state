"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Bed, Ruler } from "lucide-react";
import { apartmentList } from "@/components/apartmentsrent-components/ApartmentData";

export default function ApartmentDetailPage() {
  const { id } = useParams();
  const apartment = apartmentList.find((apt) => apt.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  const images = apartment ? [apartment.image] : [];

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-600">
            Apartment Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The listing ID ({id}) does not match any current apartments.
          </p>
          <Link
            href="/apartments-for-rent"
            className="mt-5 inline-block text-blue-600 hover:underline font-semibold"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const { title, price, bedrooms, location, description, amenities, areaSqFt } =
    apartment;

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT --- MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3">
              <Image
                src={images[currentImage]}
                alt={title}
                width={1200}
                height={500}
                className="rounded-xl shadow-md w-full h-[400px] object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`rounded-lg overflow-hidden border transition ${
                    currentImage === i
                      ? "border-yellow-500"
                      : "border-gray-300 hover:border-yellow-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`thumb-${i}`}
                    width={200}
                    height={100}
                    className="w-full h-[100px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* BADGES */}
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">
              Featured
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              Verified
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-3xl font-bold text-black">{title}</h1>

          {/* LOCATION */}
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-5 h-5 mr-1" /> {location}
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-4 text-black font-medium">
            <span className="flex items-center gap-1">
              <Bed className="w-5 h-5 text-yellow-500" /> {bedrooms} Bedrooms
            </span>
            <span className="flex items-center gap-1">
              <Ruler className="w-5 h-5 text-yellow-500" /> {areaSqFt} Sq Ft
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6 p-6 bg-gray-50 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-3 border-b pb-2">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* AMENITIES */}
          <div className="mt-6 p-6 bg-gray-50 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((am, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 border rounded-lg text-black"
                >
                  ✓ {am}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION MAP */}
          <div className="mt-6 p-6 bg-gray-50 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Location</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
              Map Placeholder for {location}
            </div>
          </div>
        </div>

        {/* RIGHT --- CONTACT SIDEBAR */}
        <div className="w-full">
          <div className="p-6 rounded-xl shadow-md border bg-white sticky top-24 space-y-6">
            <div className="text-3xl font-bold text-black">${price}</div>
            <div className="text-gray-600 text-sm mt-1">
              Negotiable • Financing Available
            </div>

            {/* Agent */}
            <div className="flex items-center gap-3 mt-5">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <div className="font-semibold text-black">Sarah Khan</div>
                <div className="text-gray-600 text-sm">Property Specialist</div>
                <div className="text-yellow-500 text-sm">
                  ★★★★★ 4.9 (127 reviews)
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="mt-6 space-y-3 text-black">
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 border rounded-lg"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="w-full p-3 border rounded-lg"
                type="tel"
                placeholder="Your Phone"
              />
              <textarea
                className="w-full p-3 border rounded-lg h-28"
                placeholder="I'm interested in this property..."
              />

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600">
                Request Tour
              </button>

              <button
                type="button"
                className="w-full border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Call Agent
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <Link
          href="/apartments-for-rent"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
        >
          ← Back to Listings
        </Link>
      </div>
    </div>
  );
}
