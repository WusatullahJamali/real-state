"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Bed,
  Ruler,
  Bath,
  Car,
  Star,
  CheckCircle2,
} from "lucide-react";
import { properties } from "./RecentSoldData";

export default function RecentSoldDetail() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);

  // Triple image stack (same image reused like ConstructionDetail)
  const images = property
    ? [property.image, property.image, property.image]
    : [];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-red-600">
            Property Not Found
          </h1>
          <Link
            href="/recently-sold-homes"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold"
          >
            ← Back to Sold Listings
          </Link>
        </div>
      </div>
    );
  }

  const {
    address,
    city,
    price,
    beds,
    baths,
    sqft,
    status,
    type,
    acres,
  } = property;

  return (
    <div className="bg-gray-50 min-h-screen py-8 text-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE GALLERY */}
          <div className="flex gap-3">
            <div className="flex-1 relative h-[400px]">
              <Image
                src={images[currentImage]}
                alt={address}
                fill
                className="rounded-lg object-cover shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-3 w-28">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative h-24 rounded-lg overflow-hidden transition ${
                    currentImage === i
                      ? "ring-2 ring-yellow-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* TITLE */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                {status}
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                Sold
              </span>
            </div>

            <h1 className="text-3xl font-semibold uppercase">
              {address}
            </h1>

            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1.5 text-yellow-600" />
              {city}
            </div>
          </div>

          {/* SPECS */}
          <div className="flex flex-wrap gap-6 py-4 border-t border-b border-gray-100 text-sm text-black">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" /> {beds} Bedrooms
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" /> {baths} Bathrooms
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5" /> {sqft} Sq Ft
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5" /> Parking
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Property Overview</h2>
            <p className="text-black text-sm leading-relaxed">
              This {type} located in {address}, {city}, was recently sold.
              Featuring {beds} bedrooms, {baths} bathrooms, and approximately{" "}
              {sqft} square feet of living space.
              {acres && ` Lot size: ${acres} acres.`}
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                `${beds} Bedrooms`,
                `${baths} Bathrooms`,
                `${sqft} Sq Ft`,
                type,
                "Prime Location",
                "Verified Sale",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-white border rounded-lg text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <div className="h-64 bg-white rounded-lg border flex flex-col items-center justify-center">
              <MapPin className="w-8 h-8 text-red-500 mb-2" />
              <span className="uppercase tracking-widest text-sm font-medium">
                {city}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full">
          <div className="p-6 rounded-lg bg-white border sticky top-8 shadow-sm">

            <div className="mb-6">
              <div className="text-3xl font-bold">
                ${price.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Final Sold Price
              </p>
            </div>

            {/* AGENT */}
            <div className="flex items-center gap-3 py-4 border-t border-b mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
                SA
              </div>
              <div>
                <p className="font-medium text-sm">Shahzaib Ahmed</p>
                <p className="text-xs text-gray-400">Property Specialist</p>
                <div className="flex gap-0.5 mt-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="space-y-3">
              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold text-sm">
                Request Similar Homes
              </button>
              <button className="w-full border py-3 rounded-lg font-semibold text-sm">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto px-4 mt-12 mb-10">
        <Link href="/recently-sold-homes">
          <button className="bg-yellow-500 px-6 py-3 rounded-lg font-bold text-sm">
            ← Back to Recently Sold
          </button>
        </Link>
      </div>
    </div>
  );
}
