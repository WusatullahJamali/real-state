"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { HouseType,houseList } from "./RentHouse"; // adjust the import path
import { FaHeart, FaBed, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

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
        <Link href="/house" className="mt-6 inline-block bg-yellow-600 text-white py-2 px-6 rounded hover:bg-yellow-700 transition">
          Back to Houses
        </Link>
      </div>
    );
  }

  const toggleFavorite = () => setFavorite(!favorite);

  return (
    <section className="py-14 px-6 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="md:w-2/3">
          <img
            src={house.image}
            alt={house.title}
            className="w-full h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/3 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{house.title}</h1>
          <p className="text-yellow-600 font-bold text-xl">${house.price}/month</p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt /> {house.location}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-6 text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <FaBed /> {house.bedrooms} Beds
            </div>
            <div className="flex items-center gap-1">
              <FaRulerCombined /> {house.areaSqFt} sqft
            </div>
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
            <FaHeart /> {favorite ? "Favorited" : "Add to Favorites"}
          </button>

          <Link
            href="/houses-for-rent"
            className="mt-4 inline-block bg-gray-300 text-black py-2 px-6 rounded hover:bg-gray-400 transition"
          >
            Back to Houses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RentHouseDetail;
