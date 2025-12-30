"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Ruler,
  Car,
  Star,
  CheckCircle2,
} from "lucide-react";

import {
  newListings,
  exploreApartments,
  petFriendlyRentals,
  onlineApplications,
  inUnitLaundryRentals,
  RentListing,
} from "./RentData";

/* --------------------------------
   Merge ALL rent listings
-------------------------------- */
const allListings: RentListing[] = [
  ...newListings,
  ...exploreApartments,
  ...petFriendlyRentals,
  ...onlineApplications,
  ...inUnitLaundryRentals,
];

export default function RentDetailPage() {
  const { id } = useParams();
  const listing = allListings.find(
    (item) => item.id === Number(id)
  );

  const [currentImage, setCurrentImage] = useState(0);

  const images = listing
    ? [listing.image, listing.image, listing.image]
    : [];

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10 text-black">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-red-600">
            Listing Not Found
          </h1>
          <Link
            href="/rent"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const {
    price,
    beds,
    baths,
    sqft,
    address,
    city,
    type,
  } = listing;

  return (
    <div className="bg-gray-50 min-h-screen py-8 text-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT --- MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE GALLERY */}
          <div className="flex gap-3">
            <div className="flex-1 relative h-[400px]">
              <Image
                src={images[currentImage]}
                alt={address}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 w-28">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                    currentImage === i
                      ? "ring-2 ring-yellow-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`thumb-${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* TITLE */}
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-black leading-tight">
              {address}
            </h1>

            <div className="flex items-center text-gray-700 text-sm">
              <MapPin className="w-4 h-4 mr-1.5" />
              {city}
            </div>
          </div>

          {/* SPECS BAR */}
          <div className="flex flex-wrap items-center gap-6 py-4 text-sm text-black">
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
            <h2 className="text-xl font-semibold text-black">
              Description
            </h2>
            <p className="text-black leading-relaxed text-sm">
              This {type.toLowerCase()} is located at {address}, {city}.
              Featuring {beds} bedrooms, {baths} bathrooms and approximately{" "}
              {sqft} square feet of living space. Ideal for comfortable
              modern living.
            </p>
          </div>

          {/* AMENITIES */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Air Conditioning",
                "Parking",
                "Security",
                "Modern Kitchen",
                "Balcony",
                "24/7 Electricity",
              ].map((am, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg text-sm hover:shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{am}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black">
              Location
            </h2>
            <div className="h-64 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center">
              <div className="bg-gray-100 p-4 rounded-full mb-2">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <span className="font-medium text-sm text-black">
                {city}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT --- CONTACT SIDEBAR */}
        <div className="w-full">
          <div className="p-6 rounded-lg bg-white border border-gray-200 sticky top-8 shadow-sm">

            <div className="mb-6">
              <div className="text-3xl font-bold text-black">
                {price}
              </div>
              <p className="text-gray-400 text-xs mt-1">
                Negotiable
              </p>
            </div>

            {/* AGENT */}
            <div className="flex items-center gap-3 py-4 border-t border-b border-gray-100 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-black">
                SA
              </div>
              <div>
                <p className="font-medium text-sm">
                  Shahzaib Ahmed
                </p>
                <p className="text-black text-xs">
                  Premier Specialist
                </p>
                <div className="flex gap-0.5 mt-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="space-y-3">
              <input
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Your Email"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Your Phone"
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg text-sm h-24 resize-none"
                placeholder="I'm interested in this property..."
              />

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold text-sm hover:bg-yellow-600">
                Request Info
              </button>

              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50"
              >
                Call Agent
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <Link href="/rent">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-600">
            ← Back to Listings
          </button>
        </Link>
      </div>
    </div>
  );
}
