"use client";


import { useParams } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Bed, Ruler, Heart } from "lucide-react";
import { HouseType, houseList } from "./RentData";

const RentHouseDetail = () => {
  const params = useParams();
  const houseId = Number(params.id);
  const house: HouseType | undefined = houseList.find((h) => h.id === houseId);

  const [favorite, setFavorite] = useState(false);

  if (!house) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">House Not Found</h2>
        <p className="text-gray-500 mt-4">The house you are looking for does not exist.</p>
        <Link
          href="/house"
          className="mt-6 inline-block bg-yellow-600 text-white py-2 px-6 rounded hover:bg-yellow-700 transition"
        >
          Back to Houses
        </Link>
      </div>
    );
  }

  const toggleFavorite = () => setFavorite(!favorite);

  return (
    <div className="bg-gray-50 min-h-screen py-10 text-black">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Details */}
        <div className="md:w-1/3 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{house.title}</h1>
          <p className="text-yellow-600 font-bold text-xl">${house.price}/month</p>
          <p className="text-gray-600 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {house.location}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">Featured</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">Verified</span>
          </div>

          {/* Title & Location */}
          <h1 className="text-3xl font-bold mt-4">{house.title}</h1>
          <div className="flex items-center text-black mt-1">
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
            <p className="text-black mt-3 leading-relaxed whitespace-pre-line">{house.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Amenities:</h3>
            <div className="flex flex-wrap gap-2">
              {house.amenities.map((am, i) => (
                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  {am}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Description:</h3>
            <p className="text-gray-700">{house.description}</p>
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`mt-6 flex items-center justify-center gap-2 py-3 rounded-full text-white font-bold transition ${
              favorite ? "bg-red-500 hover:bg-red-600" : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            <Heart className="w-5 h-5" /> {favorite ? "Favorited" : "Add to Favorites"}
          </button>

            <div className="text-3xl font-bold text-black">${house.price}</div>
            <div className="text-gray-600 text-sm">Shahzaib</div>

            {/* Favorite Button */}
            <button
              onClick={() => setFavorite(!favorite)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition ${
                favorite ? "bg-yellow-500 text-yellow-500 hover:bg-yellow-600" : "bg-yellow-600 text-white hover:bg-yellow-700"
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
 
  );
};

export default RentHouseDetail;
