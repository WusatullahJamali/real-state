"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Bed, Ruler, Heart } from "lucide-react";
import { HouseType, houseList } from "./RentHouse"; // Adjust path

export default function RentHouseDetailPage() {
  const { id } = useParams();
  const house: HouseType | undefined = houseList.find((h) => h.id === Number(id));

  const [favorite, setFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = house ? [house.image] : [];

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!house) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
        <h1 className="text-3xl font-bold text-yellow-500">Property Not Found</h1>
        <Link href="/" className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left/Main Content */}
        <div className="lg:col-span-2 space-y-6">

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3">
              <Image
                src={images[currentImage]}
                alt={house.title}
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
                    currentImage === i ? "border-yellow-500" : "border-gray-300 hover:border-yellow-400"
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

          {/* Badges */}
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">Featured</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">Verified</span>
          </div>

          {/* Title & Location */}
          <h1 className="text-3xl font-bold mt-4">{house.title}</h1>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-5 h-5 mr-1" /> {house.location}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-4 text-black font-medium">
            <span className="flex items-center gap-1"><Bed className="w-5 h-5 text-yellow-500" /> {house.bedrooms} Beds</span>
            <span className="flex items-center gap-1"><Ruler className="w-5 h-5 text-yellow-500" /> {house.areaSqFt} Sq Ft</span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-black">Description</h2>
            <p className="text-gray-700 mt-3 leading-relaxed whitespace-pre-line">{house.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-black">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {house.amenities.map((am, i) => (
                <div key={i} className="flex items-center gap-2 p-3 border rounded-lg text-black">
                  {am}
                </div>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black">Location</h2>
            <div className="mt-4 h-[300px] rounded-xl border flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-4xl">📍</div>
                <p className="mt-2 text-black">{house.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full">
          <div className="p-6 rounded-xl shadow-md border bg-white sticky top-24 space-y-4">

            <div className="text-3xl font-bold text-black">${house.price}</div>
            <div className="text-gray-600 text-sm">Negotiable • Financing Available</div>

            {/* Favorite Button */}
            <button
              onClick={() => setFavorite(!favorite)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition ${
                favorite ? "bg-yellow-500 text-yellow-500 hover:bg-yellow-600" : "bg-yellow-600 text-black hover:bg-yellow-700"
              }`}
            >
              <Heart className="w-5 h-5" /> {favorite ? "Favorited" : "Add to Favorites"}
            </button>

            {/* Contact Form */}
            <form className="mt-6 space-y-3 text-black">
              <input className="w-full p-3 border rounded-lg" type="text" placeholder="Your Name" />
              <input className="w-full p-3 border rounded-lg" type="email" placeholder="Your Email" />
              <input className="w-full p-3 border rounded-lg" type="tel" placeholder="Your Phone" />
              <textarea className="w-full p-3 border rounded-lg h-28" placeholder="I'm interested in this property..." />

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600">Request Tour</button>
              <button type="button" className="w-full border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-100">Call Agent</button>
            </form>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <Link href="/houses-for-rent" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
          ← Back to Listings
        </Link>
      </div>
    </div>
  );
}
