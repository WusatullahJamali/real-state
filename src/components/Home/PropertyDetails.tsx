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
  Phone,
  Share2,
  CookingPot,
  Sofa,
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
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Main Image */}
          <div className="col-span-3">
            <Image
              src={images[currentImage]}
              alt={property.title}
              width={1200}
              height={500}
              className="rounded-xl shadow-md w-full h-[360px] sm:h-[420px] md:h-[480px] object-cover transition-all duration-500"
            />
          </div>

          {/* Sidebar Thumbnails */}
          <div className="hidden md:flex flex-col gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`border rounded-lg overflow-hidden transition ${
                  currentImage === index
                    ? "border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                }`}
              >
                <Image
                  src={img}
                  width={200}
                  height={100}
                  alt="thumbnail"
                  className="w-full h-[110px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* TITLE BELOW IMAGE */}
        <h1 className="text-3xl font-bold text-black mt-6">{property.title}</h1>

        {/* Location */}
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin className="w-5 h-5 mr-1" />
          <span>{property.location}</span>
        </div>

        {/* PRICE + BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-4xl font-bold text-black">{property.price}</h2>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
              Contact Agent
            </button>
            <button className="px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-100 flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <h2 className="text-2xl font-bold text-black mt-10 mb-4">Specifications</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <Bed className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">{property.bedrooms} Bedrooms</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <Bath className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">{property.bathrooms} Bathrooms</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <CookingPot className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">1 Kitchen</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <Home className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">{property.area} Sq Ft</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <ParkingCircle className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">Parking Available</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <Sofa className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">Fully Furnished</span>
          </div>

          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3 bg-white">
            <Phone className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">+1 888 456 789</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black">Description</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">{property.description}</p>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-12">
          <Link
            href="/"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}
