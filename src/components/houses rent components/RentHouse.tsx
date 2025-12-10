"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaBed, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

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
  {
    id: 2,
    title: "Family House",
    price: 1800,
    bedrooms: 3,
    location: "Gulberg, Lahore",
    image: "/house2.png",
    description:
      "Comfortable 3-bedroom family house with a cozy backyard, perfect for small families in Lahore.",
    amenities: ["Garden", "Parking", "Nearby Park"],
    areaSqFt: 2200,
  },
  {
    id: 3,
    title: "Modern Bungalow",
    price: 2000,
    bedrooms: 3,
    location: "Islamabad",
    image: "/house3.png",
    description:
      "A modern 3-bedroom bungalow with open floor plan, close to city amenities and schools.",
    amenities: ["Garage", "Security", "Gym"],
    areaSqFt: 2500,
  },
  {
    id: 4,
    title: "Cozy Villa",
    price: 1500,
    bedrooms: 2,
    location: "Clifton, Karachi",
    image: "/house4.png",
    description: "Perfect 2-bedroom villa for small families with a quiet neighborhood view.",
    amenities: ["Parking", "Nearby Market", "Garden"],
    areaSqFt: 1800,
  },
  {
    id: 5,
    title: "Elegant Townhouse",
    price: 1700,
    bedrooms: 3,
    location: "F-10, Islamabad",
    image: "/house5.jpg",
    description: "Modern 3-bedroom townhouse in a gated community with family-friendly amenities.",
    amenities: ["Parking", "Garden", "Security"],
    areaSqFt: 2100,
  },
  {
    id: 6,
    title: "Suburban Family Home",
    price: 1200,
    bedrooms: 2,
    location: "Johar Town, Lahore",
    image: "/house6.png",
    description: "Comfortable 2-bedroom home ideal for couples and small families.",
    amenities: ["Nearby School", "Parking", "Backyard"],
    areaSqFt: 1600,
  },
  {
    id: 7,
    title: "Seaside Villa",
    price: 3000,
    bedrooms: 5,
    location: "Clifton, Karachi",
    image: "/house7.jpg",
    description: "Luxurious 5-bedroom villa with sea view, private pool, and modern interiors.",
    amenities: ["Swimming Pool", "Garage", "Garden", "Security"],
    areaSqFt: 4500,
  },
  {
    id: 8,
    title: "Compact Studio House",
    price: 800,
    bedrooms: 1,
    location: "Bahria Town, Lahore",
    image: "/house8.avif",
    description: "Perfect for singles or students, this studio offers a cozy living space with modern amenities.",
    amenities: ["Laundry", "Parking", "Security"],
    areaSqFt: 600,
  },
  {
    id: 9,
    title: "Hill View Villa",
    price: 2200,
    bedrooms: 4,
    location: "Murree",
    image: "/house9.jpg",
    description: "4-bedroom villa with stunning hill views, perfect for a serene lifestyle.",
    amenities: ["Garden", "Garage", "Balcony", "Fireplace"],
    areaSqFt: 3200,
  },
  {
    id: 10,
    title: "Urban Luxury House",
    price: 2700,
    bedrooms: 4,
    location: "Blue Area, Islamabad",
    image: "/house10.png",
    description: "Modern 4-bedroom house located in the heart of Islamabad with premium finishes.",
    amenities: ["Gym", "Garage", "Security", "Swimming Pool"],
    areaSqFt: 3800,
  },
  {
    id: 11,
    title: "Cozy Cottage",
    price: 900,
    bedrooms: 2,
    location: "Hyderabad",
    image: "/house11.jpg",
    description: "2-bedroom cottage in a peaceful area, ideal for couples and small families.",
    amenities: ["Garden", "Parking", "Nearby Market"],
    areaSqFt: 1500,
  },
  {
    id: 12,
    title: "Spacious Family Villa",
    price: 2600,
    bedrooms: 5,
    location: "DHA Lahore",
    image: "/house12.png",
    description: "Large 5-bedroom villa perfect for big families, with a private garden and pool.",
    amenities: ["Swimming Pool", "Garage", "Garden", "Security"],
    areaSqFt: 4200,
  },
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
                  <FaMapMarkerAlt /> {house.location}
                </p>
              </div>
              <button
                onClick={() => toggleFav(house.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
              >
                <FaHeart className={`text-xl ${favorites.includes(house.id) ? "text-red-500" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{house.title}</h3>
              <p className="text-blue-600 font-bold">${house.price}/month</p>

              {/* Badges */}
              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-1">
                  <FaBed /> {house.bedrooms} Beds
                </div>
                <div className="flex items-center gap-1">
                  <FaRulerCombined /> {house.areaSqFt} sqft
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
