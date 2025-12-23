"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Heart } from "lucide-react";


// apartmentData.ts (Mock Data)
export interface ApartmentType {
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



const Apartment = () => {
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const apartments = [
  {
    id: 1,
    title: "Luxury Apartment",
    price: 1200,
    bedrooms: 3,
    location: "Green Zone, Baghdad",
    image: "/a1.jpg",
  },
  {
    id: 2,
    title: "Modern Studio",
    price: 800,
    bedrooms: 1,
    location: "Ankawa, Erbil",
    image: "/a2.jpg",
  },
  {
    id: 3,
    title: "Family Apartment",
    price: 1000,
    bedrooms: 2,
    location: "Al-Fao Street, Basra",
    image: "/a3.jpg",
  },
  {
    id: 4,
    title: "Penthouse View",
    price: 1500,
    bedrooms: 4,
    location: "Karrada, Baghdad",
    image: "/a4.jpg",
  },
  {
    id: 5,
    title: "Executive Residence",
    price: 1100,
    bedrooms: 3,
    location: "Center District, Erbil",
    image: "/a5.jpg",
  },
  {
    id: 6,
    title: "Stylish Loft",
    price: 950,
    bedrooms: 2,
    location: "Al-Maqal, Basra",
    image: "/a6.avif",
  },
  {
    id: 7,
    title: "Budget Studio",
    price: 650,
    bedrooms: 1,
    location: "Al-Rashid Street, Kirkuk",
    image: "/a7.jpg",
  },
  {
    id: 8,
    title: "Corner Apartment",
    price: 1050,
    bedrooms: 3,
    location: "Old City, Mosul",
    image: "/a8.jpg",
  },
  {
    id: 9,
    title: "Luxury High Rise",
    price: 1300,
    bedrooms: 3,
    location: "Baghdad Tower Area, Baghdad",
    image: "/a9.jpg",
  },
  {
    id: 10,
    title: "Student Apartment",
    price: 550,
    bedrooms: 1,
    location: "University District, Erbil",
    image: "/a10.webp",
  },
  {
    id: 11,
    title: "Serviced Apartment",
    price: 1600,
    bedrooms: 4,
    location: "Green Zone, Baghdad",
    image: "/a11.jpg",
  },
  {
    id: 12,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Al-Mutanabbi Street, Baghdad",
    image: "/a12.jpg",
  },
  {
    id: 13,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Center District, Basra",
    image: "/ap14.jpg",
  },
  {
    id: 14,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Faihaa District, Mosul",
    image: "/ap15.jpg",
  },
  {
    id: 15,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Al-Sa’a District, Erbil",
    image: "/a16.webp",
  },
];


  // FILTER + SORT
  const filtered = apartments
    .filter((apt) => apt.title.toLowerCase().includes(search.toLowerCase()))
    .filter((apt) => (bedrooms ? apt.bedrooms === Number(bedrooms) : true))
    .filter((apt) => (city ? apt.location.toLowerCase().includes(city.toLowerCase()) : true))
    .sort((a, b) => {
      if (sort === "high") return b.price - a.price;
      if (sort === "low") return a.price - b.price;
      return 0;
    });

  return (
    <section className="py-14 px-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Apartments for Rent</h2>

      {/* FILTERS */}
      <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
  {/* Search */}
  <input
    placeholder="Search apartments, locations..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      w-full
      rounded-lg
      border border-gray-300
      px-4 py-3
      text-sm
      text-gray-700
      placeholder-gray-400
      shadow-sm
      transition
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      focus:border-yellow-400
    "
  />

  {/* Bedrooms */}
  <select
    onChange={(e) => setBedrooms(e.target.value)}
    className="
      w-full
      rounded-lg
      border border-gray-300
      px-4 py-3
      text-sm
      text-gray-700
      shadow-sm
      transition
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      focus:border-yellow-400
      bg-white
    "
  >
    <option value="">Bedrooms</option>
    <option value="1">1 Bed</option>
    <option value="2">2 Bed</option>
    <option value="3">3 Bed</option>
    <option value="4">4 Bed</option>
  </select>

  {/* City */}
  <select
    onChange={(e) => setCity(e.target.value)}
    className="
      w-full
      rounded-lg
      border border-gray-300
      px-4 py-3
      text-sm
      text-gray-700
      shadow-sm
      transition
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      focus:border-yellow-400
      bg-white
    "
  >
    <option value="">All Cities</option>
    <option value="Baghdad">Baghdad</option>
    <option value="Erbil">Erbil</option>
    <option value="Basra">Basra</option>
    <option value="Mosul">Mosul</option>
    <option value="Kirkuk">Kirkuk</option>
  </select>

  {/* Sort */}
  <select
    onChange={(e) => setSort(e.target.value)}
    className="
      w-full
      rounded-lg
      border border-gray-300
      px-4 py-3
      text-sm
      text-gray-700
      shadow-sm
      transition
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      focus:border-yellow-400
      bg-white
    "
  >
    <option value="">Sort Price</option>
    <option value="low">Low to High</option>
    <option value="high">High to Low</option>
  </select>
</div>

      {/* LISTINGS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((apt) => (
          <div key={apt.id} className="bg-white shadow border border-gray-500 rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
            <div className="relative">
              <img src={apt.image} className="w-full h-56 object-cover" />
              <button
                onClick={() => toggleFav(apt.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
              >
                <Heart
                  className={`text-xl ${favorites.includes(apt.id) ? "text-red-500" : "text-gray-400"}`}
                />
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">{apt.title}</h3>
              <p className="text-gray-500">{apt.location}</p>

              <p className="text-blue-600 font-semibold mt-2">${apt.price}/month</p>
              <p className="text-sm text-gray-600">{apt.bedrooms} Bedrooms</p>

              <Link
  // The path is correct, assuming app/apartment/[id]/page.tsx exists
  href={`/apartment/${apt.id}`} 
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

export default Apartment;
