"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Bed, Ruler, Bath, Car, Star, CheckCircle2 } from "lucide-react";
import { listings } from "./ConstructionData";

export default function ConstructionDetail() {
  const { id } = useParams();
  const property = listings.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  // Using the main image for the triple-stack look as per your style guide
  const images = property ? [property.image, property.image, property.image] : [];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-red-600">Property Not Found</h1>
          <Link href="/new-construction" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg">
            ← Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const { address, city, price, beds, baths, sqft, description, amenities, status } = property;

  return (
    <div className="bg-gray-50 min-h-screen py-8 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT --- MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE GALLERY - Matching your exact gallery style */}
          <div className="flex gap-3">
            {/* Left main image */}
            <div className="flex-1 relative h-[400px]">
              <Image
                src={images[currentImage]}
                alt={address}
                fill
                className="rounded-lg object-cover shadow-sm"
              />
            </div>
            
            {/* Right thumbnails */}
            <div className="flex flex-col gap-3 w-28">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                    currentImage === i ? "ring-2 ring-yellow-500" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* TITLE & BADGES */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {status || "Featured"}
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </span>
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 leading-tight uppercase">{address}</h1>
            
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1.5 text-yellow-600" /> {city}
            </div>
          </div>

          {/* SPECS BAR */}
          <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-gray-100 text-sm text-gray-600">
            <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-gray-400" /> {beds} Bedrooms
            </div>
            <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-gray-400" /> {baths} Bathrooms
            </div>
            <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-gray-400" /> {sqft} Sq Ft
            </div>
            <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-gray-400" /> Parking
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Description</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
          </div>

          {/* AMENITIES */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenities.map((am, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg text-sm hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700">{am}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION MAP */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Location</h2>
            <div className="h-64 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col items-center justify-center">
               <div className="bg-gray-50 p-4 rounded-full mb-2">
                 <MapPin className="w-8 h-8 text-red-500" />
               </div>
               <span className="font-medium text-sm text-gray-700 uppercase tracking-widest">{city}</span>
            </div>
          </div>
        </div>

        {/* RIGHT --- CONTACT SIDEBAR */}
        <div className="w-full">
          <div className="p-6 rounded-lg bg-white border border-gray-200 sticky top-8 shadow-sm">
            
            <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">${price.toLocaleString()}</div>
                <p className="text-gray-400 text-xs mt-1 font-medium">Negotiable • Financing Available</p>
            </div>

            {/* Agent Section */}
            <div className="flex items-center gap-3 py-4 border-t border-b border-gray-100 mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center font-semibold text-white">
                SA
              </div>
              <div>
                <p className="font-medium text-sm">Shahzaib Ahmed</p>
                <p className="text-gray-400 text-xs">Premier Specialist</p>
                <div className="flex gap-0.5 mt-1 text-yellow-500">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="space-y-3">
              <div className="space-y-3">
                <input className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 outline-none focus:border-yellow-500 transition-colors" type="text" placeholder="Your Name" />
                <input className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 outline-none focus:border-yellow-500 transition-colors" type="email" placeholder="Your Email" />
                <input className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 outline-none focus:border-yellow-500 transition-colors" type="tel" placeholder="Your Phone" />
                <textarea className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 outline-none focus:border-yellow-500 transition-colors h-24 resize-none" placeholder="I'm interested in this project..." />
              </div>

              <div className="pt-3 space-y-3">
                <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold text-sm hover:bg-yellow-600 transition-colors">
                  Request Info
                </button>
                <button type="button" className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
                  Call Agent
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* FOOTER ACTION */}
      <div className="max-w-6xl mx-auto px-4 mt-12 mb-10">
        <Link href="/new-construction">
            <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-600 transition-colors shadow-sm">
                ← Back to Construction Listings
            </button>
        </Link>
      </div>
    </div>
  );
}