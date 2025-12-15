"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Home,
  
  ParkingCircle,
} from "lucide-react";
import { CategoriesDATA } from "../../app/CategoriesDATA/[id]/Data";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = CategoriesDATA.find((p) => p.id === Number(id));

  const images = property?.images || [];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!property) {
    return (
      <div className="bg-white h-full mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-yellow-500">Property Not Found</h1>
        <Link
          href="/"
          className="mt-4 inline-block bg-yellow-500 text-white px-5 py-3 rounded-md"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT --- MAIN CONTENT */}
        <div className="lg:col-span-2">

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Big Image */}
            <div className="col-span-3">
              <Image
                src={images[currentImage]}
                alt={property.title}
                width={1200}
                height={500}
                className="rounded-xl shadow-md w-full h-[380px] md:h-[450px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="hidden md:flex flex-col gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-lg overflow-hidden border transition ${
                    currentImage === index
                      ? "border-yellow-500"
                      : "border-gray-300 hover:border-yellow-400"
                  }`}
                >
                  <Image
                    src={img}
                    width={200}
                    height={100}
                    alt="thumb"
                    className="w-full h-[100px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* BADGES */}
          <div className="flex items-center gap-2 mt-6">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">
              Featured
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              Verified
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-3xl font-bold text-black">
            {property.title}
          </h1>

          {/* LOCATION */}
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-5 h-5 mr-1" /> {property.location}
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-4 text-black font-medium">
            <span className="flex items-center gap-1"><Bed className="w-5 h-5 text-yellow-500" /> {property.bedrooms} Bedrooms</span>
            <span className="flex items-center gap-1"><Bath className="w-5 h-5 text-yellow-500" /> {property.bathrooms} Bathrooms</span>
            <span className="flex items-center gap-1"><Home className="w-5 h-5 text-yellow-500" /> {property.area} Sq Ft</span>
            <span className="flex items-center gap-1"><ParkingCircle className="w-5 h-5 text-yellow-500" /> Parking</span>
          </div>

          {/* SECTION — DESCRIPTION */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black">Description</h2>
            <p className="text-gray-700 mt-3 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* AMENITIES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black">Amenities</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🏊 Private Pool
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🌳 Garden
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                ❄️ Central AC
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🔒 Security System
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                🚗 Garage
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-lg text-black">
                📺 Smart Home
              </div>
            </div>
          </div>

          {/* LOCATION MAP */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black">Location</h2>

            <div className="mt-4 h-[300px] rounded-xl border flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-4xl">📍</div>
                <p className="mt-2 text-black">{property.location}</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT --- CONTACT SIDEBAR */}
        <div className="w-full ">
          <div className="p-6 rounded-xl shadow-md border bg-white sticky  top-24">
            
            <div className="text-3xl font-bold text-black">{property.price}</div>
            <div className="text-gray-600 text-sm mt-1">
              Negotiable • Financing Available
            </div>

            {/* Agent */}
            <div className="flex items-center gap-3 mt-5">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <div className="font-semibold text-black">Wusat-albaloshi</div>
                <div className="text-gray-600 text-sm">Licensed Agent</div>
                <div className="text-yellow-500 text-sm">★★★★★ 4.9 (127 reviews)</div>
              </div>
            </div>

            {/* FORM */}
            <form className="mt-6 space-y-3 text-black">
              <input className="w-full p-3 border rounded-lg" type="text" placeholder="Your Name" />
              <input className="w-full p-3 border rounded-lg" type="email" placeholder="Your Email" />
              <input className="w-full p-3 border rounded-lg" type="tel" placeholder="Your Phone" />
              <textarea className="w-full p-3 border rounded-lg h-28" placeholder="I'm interested in this property..." />

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
          href="/"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
        >
          ← Back to Listings
        </Link>
      </div>
    </div>
  );
}
