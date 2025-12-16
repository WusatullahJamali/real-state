"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { apartmentList } from "@/components/apartmentsrent-components/ApartmentData";

// ⭐ Lucide Icons
import {
  BedDouble,
  Ruler,
  Mail,
  CalendarDays,
  UserRound,
  MapPin,
  ArrowLeft,
  Check,
} from "lucide-react";

const ApartmentDetail = () => {
  const params = useParams();
  const id = Number(params?.id);

  const apartment = apartmentList.find((apt) => apt.id === id);

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-600">
            Apartment Not Found 😢
          </h1>
          <p className="text-gray-600 mt-2">
            The listing ID ({id}) does not match any current apartments.
          </p>
          <Link
            href="/apartments-for-rent"
            className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft /> Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const {
    title,
    price,
    bedrooms,
    location,
    image,
    description,
    amenities,
    areaSqFt,
  } = apartment;

  const commonAmenities = ["Elevator", "Parking", "Water Supply"];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <Link
          href="/apartments-for-rent"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 font-semibold"
        >
          <ArrowLeft /> Back to Listings
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title */}
            <div className="p-6 bg-white shadow-xl rounded-2xl border-t-4 border-yellow-500">
              <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
              <p className="text-xl text-gray-600 mt-1">{location}</p>

              <div className="mt-4 border-t pt-4 flex justify-between items-center">
                <span className="text-3xl font-black text-yellow-600">
                  ${price}
                  <span className="text-xl text-gray-600 font-normal">
                    /month
                  </span>
                </span>

                <div className="flex gap-4 text-gray-700 font-semibold">
                  <div className="flex items-center gap-1">
                    <BedDouble className="text-yellow-500" />
                    {bedrooms} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="text-yellow-500" />
                    {areaSqFt} Sq Ft
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-3 border-b pb-2">
                Description
              </h2>
              <p className="text-lg text-gray-700">{description}</p>
            </div>

            {/* Amenities */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...commonAmenities, ...amenities].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="text-green-600" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                Location
              </h2>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="text-5xl text-gray-500" />
                <span className="ml-3 text-gray-500">
                  Map Placeholder for {location}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-extrabold border-b pb-3">
                Inquire & Tour
              </h3>

              <div className="flex items-center gap-4 border-b pb-4">
                <UserRound className="text-5xl text-yellow-600" />
                <div>
                  <p className="font-bold text-lg">Agent: Sarah Khan</p>
                  <p className="text-sm text-gray-600">Property Specialist</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-yellow-600 text-white py-4 rounded-xl font-bold hover:bg-yellow-700">
                <Mail /> Contact Agent
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700">
                <CalendarDays /> Schedule Tour
              </button>

              <p className="text-xs text-center text-gray-500">
                Reference ID: <strong>APT-{id}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
