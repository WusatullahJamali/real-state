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
    location: "Baghdad, Green Zone",
    image: "/house1.png",
    description: "A spacious and modern 4-bedroom villa with a private garden and pool, located in Baghdad's prestigious Green Zone.",
    amenities: ["24/7 Security", "Swimming Pool", "Gym", "Garage"],
    areaSqFt: 3500,
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: 1200,
    bedrooms: 2,
    location: "Erbil, Ankawa District",
    image: "/house2.png",
    description: "A bright 2-bedroom apartment with balcony views and modern interior, close to cafes and shopping areas.",
    amenities: ["Elevator", "Security", "Gym Access"],
    areaSqFt: 1100,
  },
  {
    id: 3,
    title: "Cozy Studio",
    price: 700,
    bedrooms: 1,
    location: "Basra, Al-Fao Street",
    image: "/house3.png",
    description: "Compact studio apartment ideal for singles, with all necessary amenities and central location.",
    amenities: ["24/7 Security", "Parking"],
    areaSqFt: 550,
  },
  {
    id: 4,
    title: "Family Home",
    price: 1800,
    bedrooms: 3,
    location: "Mosul, Old City",
    image: "/house4.png",
    description: "Comfortable 3-bedroom home with garden space, perfect for small families.",
    amenities: ["Garden", "Garage", "Security Cameras"],
    areaSqFt: 2100,
  },
  {
    id: 5,
    title: "Beachside Villa",
    price: 3500,
    bedrooms: 5,
    location: "Basra, Shatt Al-Arab",
    image: "/house5.jpg",
    description: "Luxury 5-bedroom villa with stunning river views, private pool, and modern interiors.",
    amenities: ["Swimming Pool", "Private Beach Access", "Gym", "Garage"],
    areaSqFt: 4500,
  },
  {
    id: 6,
    title: "Penthouse Suite",
    price: 4000,
    bedrooms: 4,
    location: "Baghdad, Karrada District",
    image: "/house6.png",
    description: "Elegant penthouse with panoramic city views, premium amenities, and rooftop terrace.",
    amenities: ["Elevator", "Rooftop Terrace", "24/7 Security"],
    areaSqFt: 3800,
  },
  {
    id: 7,
    title: "Suburban Family Home",
    price: 1600,
    bedrooms: 3,
    location: "Erbil, Ainkawa Suburbs",
    image: "/house7.jpg",
    description: "Comfortable suburban 3-bedroom home with garden, parking, and easy access to schools.",
    amenities: ["Garage", "Garden", "Pet-Friendly"],
    areaSqFt: 2000,
  },
  {
    id: 8,
    title: "Studio Apartment",
    price: 850,
    bedrooms: 1,
    location: "Kirkuk, Al-Rashid Street",
    image: "/house8.avif",
    description: "Modern 1-bedroom studio with all utilities included and secure building access.",
    amenities: ["Security", "Elevator", "Parking"],
    areaSqFt: 600,
  },
  {
    id: 9,
    title: "Duplex Home",
    price: 2200,
    bedrooms: 4,
    location: "Baghdad, Dora District",
    image: "/house9.jpg",
    description: "Spacious 4-bedroom duplex with open-plan living, balcony, and modern kitchen.",
    amenities: ["Garage", "Garden", "Security System"],
    areaSqFt: 3200,
  },
  {
    id: 10,
    title: "Luxury Condo",
    price: 2000,
    bedrooms: 3,
    location: "Erbil, Center District",
    image: "/house10.png",
    description: "Premium 3-bedroom condo in a gated community with gym, pool, and concierge services.",
    amenities: ["Swimming Pool", "Gym", "Security", "Elevator"],
    areaSqFt: 2500,
  },
  {
    id: 11,
    title: "Modern Townhouse",
    price: 1800,
    bedrooms: 3,
    location: "Basra, Al-Maqal",
    image: "/house11.jpg",
    description: "Stylish 3-bedroom townhouse with garage, small garden, and modern interiors.",
    amenities: ["Garage", "Garden", "24/7 Security"],
    areaSqFt: 1900,
  },
  {
    id: 12,
    title: "Classic Bungalow",
    price: 1400,
    bedrooms: 3,
    location: "Mosul, Nineveh Street",
    image: "/house12.png",
    description: "Traditional 3-bedroom bungalow with spacious living room, garden, and secure parking.",
    amenities: ["Garden", "Parking", "Security Cameras"],
    areaSqFt: 2200,
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
                  <MapPin className="w-4 h-4" /> {house.location}
                </p>
              </div>
              <button
                onClick={() => toggleFav(house.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
              >
                <Heart className={`w-6 h-6 ${favorites.includes(house.id) ? "text-yellow-500" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{house.title}</h3>
              <p className="text-yellow-600 font-bold">${house.price}/month</p>

              {/* Badges */}
              <div className="flex items-center gap-4 text-black">
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
