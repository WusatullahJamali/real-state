"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, Bed, Ruler, MapPin } from "lucide-react";

// House type
export interface HouseType {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
  image: string;
  description: string;
  amenities: string[];
  areaSqFt: number;
}

// Expanded house list
export const houseList: HouseType[] = [
  {
    id: 1,
    title: "Luxury Villa",
    price: 2500,
    bedrooms: 4,
    location: "DHA Phase 6, Karachi",
    image: "/house1.png",
    description:
      "A spacious and modern 4-bedroom villa with a private garden and pool, located in Karachi's premium neighborhood.",
    amenities: ["24/7 Security", "Swimming Pool", "Gym", "Garage"],
    areaSqFt: 3500,
  },
  // ... other houses remain unchanged
];

const RentHouses = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="py-14 px-6 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Houses for Rent</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {houseList.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img src={house.image} alt={house.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p className="text-white font-semibold text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {house.location}
                </p>
              </div>
              <button
                onClick={() => toggleFav(house.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
              >
                <Heart className={`w-6 h-6 ${favorites.includes(house.id) ? "text-red-500" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{house.title}</h3>
              <p className="text-blue-600 font-bold">${house.price}/month</p>

              {/* Badges */}
              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" /> {house.bedrooms} Beds
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="w-4 h-4" /> {house.areaSqFt} sqft
                </div>
              </div>

              {/* Amenities (first 3) */}
              <div className="flex gap-3 mt-2 flex-wrap">
                {house.amenities.slice(0, 3).map((am, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {am}
                  </span>
                ))}
              </div>

              <Link
                key={house.id}
                href={`/houses-for-rent/house/${house.id}`}
                className="mt-4 block bg-yellow-600 text-white py-2 text-center rounded hover:bg-yellow-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentHouses;
