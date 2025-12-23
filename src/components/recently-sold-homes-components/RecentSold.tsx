"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const RecentSold = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState("list");
  const [filters, setFilters] = useState({
    search: "",
    price: "All",
    rooms: "All",
    type: "All",
  });

const properties = [
    {
      id: 1,
      image: "/sold1.jpg",
      status: "Sold - Dec 13, 2025",
      price: 180000,
      beds: 3,
      baths: 2,
      sqft: "1,200",
      acres: null,
      address: "Al-Mansour District",
      city: "Baghdad, Iraq",
      type: "Single-Family Home",
    },
    {
      id: 2,
      image: "/sold2.jpg",
      status: "Sold - Dec 13, 2025",
      price: 240000,
      beds: 4,
      baths: 3,
      sqft: "1,650",
      acres: "0.3",
      address: "Dream City",
      city: "Erbil, Kurdistan Region",
      type: "Single-Family Home",
    },
    {
      id: 3,
      image: "/sold3.jpg",
      status: "Sold - Dec 12, 2025",
      price: 135000,
      beds: 2,
      baths: 1,
      sqft: "980",
      acres: null,
      address: "Al-Jadriya",
      city: "Baghdad, Iraq",
      type: "Condo",
    },
    {
      id: 4,
      image: "/sold1.jpg",
      status: "Sold - Dec 14, 2025",
      price: 320000,
      beds: 5,
      baths: 4,
      sqft: "2,300",
      acres: "0.6",
      address: "Italian Village",
      city: "Erbil, Kurdistan Region",
      type: "Single-Family Home",
    },
    {
      id: 5,
      image: "/sold2.jpg",
      status: "Sold - Dec 14, 2025",
      price: 155000,
      beds: 3,
      baths: 2,
      sqft: "1,300",
      acres: "0.25",
      address: "Al-Ashar",
      city: "Basra, Iraq",
      type: "Townhouse",
    },
    {
      id: 6,
      image: "/sold3.jpg",
      status: "Sold - Dec 11, 2025",
      price: 110000,
      beds: 2,
      baths: 1,
      sqft: "900",
      acres: null,
      address: "Al-Zahraa",
      city: "Najaf, Iraq",
      type: "Condo",
    },
    {
      id: 7,
      image: "/sold1.jpg",
      status: "Sold - Dec 10, 2025",
      price: 210000,
      beds: 4,
      baths: 3,
      sqft: "1,800",
      acres: "0.4",
      address: "Al-Karama",
      city: "Mosul, Iraq",
      type: "Single-Family Home",
    },
    {
      id: 8,
      image: "/sold2.jpg",
      status: "Sold - Dec 09, 2025",
      price: 260000,
      beds: 4,
      baths: 3,
      sqft: "1,950",
      acres: "0.5",
      address: "Royal City",
      city: "Erbil, Kurdistan Region",
      type: "Single-Family Home",
    },
    {
      id: 9,
      image: "/sold3.jpg",
      status: "Sold - Dec 08, 2025",
      price: 145000,
      beds: 3,
      baths: 2,
      sqft: "1,250",
      acres: "0.3",
      address: "Al-Harithiya",
      city: "Baghdad, Iraq",
      type: "Townhouse",
    },
    {
      id: 10,
      image: "/sold1.jpg",
      status: "Sold - Dec 07, 2025",
      price: 295000,
      beds: 5,
      baths: 4,
      sqft: "2,400",
      acres: "0.7",
      address: "English Village",
      city: "Erbil, Kurdistan Region",
      type: "Single-Family Home",
    },
 {
  id: 11,
  image: "/sold1.jpg",
  status: "Sold - Dec 07, 2025",
  price: 120000,
  beds: 2,
  baths: 1,
  sqft: "980",
  acres: null,
  address: "Al-Salam District",
  city: "Najaf, Iraq",
  type: "Condo",
},
{
  id: 12,
  image: "/sold2.jpg",
  status: "Sold - Dec 06, 2025",
  price: 310000,
  beds: 4,
  baths: 3,
  sqft: "2,200",
  acres: "0.6",
  address: "Royal City Compound",
  city: "Erbil, Kurdistan Region",
  type: "Single-Family Home",
},
{
  id: 13,
  image: "/sold3.jpg",
  status: "Sold - Dec 05, 2025",
  price: 185000,
  beds: 3,
  baths: 2,
  sqft: "1,450",
  acres: "0.4",
  address: "Al-Majmooa Al-Thaqafiya",
  city: "Baghdad, Iraq",
  type: "Townhouse",
},
{
  id: 14,
  image: "/sold1.jpg",
  status: "Sold - Dec 04, 2025",
  price: 275000,
  beds: 4,
  baths: 3,
  sqft: "1,850",
  acres: "0.5",
  address: "Italian Village",
  city: "Erbil, Kurdistan Region",
  type: "Single-Family Home",
},
{
  id: 15,
  image: "/sold2.jpg",
  status: "Sold - Dec 03, 2025",
  price: 140000,
  beds: 2,
  baths: 1,
  sqft: "1,000",
  acres: "0.3",
  address: "Al-Ashar",
  city: "Basra, Iraq",
  type: "Condo",
},
{
  id: 16,
  image: "/sold3.jpg",
  status: "Sold - Dec 02, 2025",
  price: 360000,
  beds: 5,
  baths: 4,
  sqft: "2,500",
  acres: "0.8",
  address: "English Village",
  city: "Erbil, Kurdistan Region",
  type: "Single-Family Home",
},
{
  id: 17,
  image: "/sold2.jpg",
  status: "Sold - Dec 01, 2025",
  price: 195000,
  beds: 3,
  baths: 2,
  sqft: "1,350",
  acres: "0.4",
  address: "Al-Karama",
  city: "Mosul, Iraq",
  type: "Townhouse",
},
{
  id: 18,
  image: "/sold1.jpg",
  status: "Sold - Nov 30, 2025",
  price: 325000,
  beds: 4,
  baths: 3,
  sqft: "2,100",
  acres: "0.6",
  address: "Al-Yarmouk",
  city: "Baghdad, Iraq",
  type: "Single-Family Home",
},

];


  const priceOptions = ["All", "Under 150k", "150k - 250k", "250k - 350k", "350k+"];
  const roomsOptions = ["All", "1+", "2+", "3+", "4+", "5+"];
  const typeOptions = ["All", "Single-Family Home", "Condo", "Townhouse"];

  // Filter logic
  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.address.toLowerCase().includes(filters.search.toLowerCase()) ||
      p.city.toLowerCase().includes(filters.search.toLowerCase());

    let matchesPrice = true;
    if (filters.price !== "All") {
      if (filters.price === "Under 150k") matchesPrice = p.price < 150000;
      if (filters.price === "150k - 250k") matchesPrice = p.price >= 150000 && p.price <= 250000;
      if (filters.price === "250k - 350k") matchesPrice = p.price >= 250000 && p.price <= 350000;
      if (filters.price === "350k+") matchesPrice = p.price > 350000;
    }

    let matchesRooms = true;
    if (filters.rooms !== "All") {
      const minBeds = parseInt(filters.rooms[0]);
      matchesRooms = p.beds >= minBeds;
    }

    const matchesType = filters.type === "All" || p.type === filters.type;

    return matchesSearch && matchesPrice && matchesRooms && matchesType;
  });

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto p-6 bg-white">

        {/* ✅ BACK BUTTON BELOW NAVBAR */}
       <div className="mb-6">
  <button
    onClick={() => router.push("/")} // Navigate to home page
    className="bg-yellow-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
  >
    ← Home
  </button>
</div>


        {/* Search Bar */}
        <div className="mb-6 flex flex-wrap gap-3 text-black">
          <div className="flex-1 relative min-w-[250px]">
            <input
              type="text"
              placeholder="Search by address or city"
              className="w-full px-6 py-3 pr-12 border-2 text-black border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button className="px-6 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 font-medium">
            Save search
          </button>

          <button
            onClick={() => setActiveView("list")}
            className={`px-6 py-3 rounded-full font-medium ${
              activeView === "list" ? "bg-gray-200" : "border-2 border-gray-300 hover:bg-gray-50"
            }`}
          >
            List
          </button>

          <button
            onClick={() => setActiveView("map")}
            className={`px-6 py-3 rounded-full font-medium ${
              activeView === "map" ? "bg-gray-200" : "border-2 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Map
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 text-black border-2 border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium text-black">Filters</span>
          </div>

          <select
            className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            {priceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
            value={filters.rooms}
            onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
          >
            {roomsOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            {typeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src={property.image}
                alt={property.address}
                width={200}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">{property.status}</span>
                </div>

                <div className="text-2xl font-bold mb-3">${property.price.toLocaleString()}</div>

                <div className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">{property.beds}</span> bed •{" "}
                  <span className="font-semibold">{property.baths}</span> bath •{" "}
                  <span className="font-semibold">{property.sqft}</span> sqft
                  {property.acres && (
                    <>
                      {" • "}
                      <span className="font-semibold">{property.acres}</span> acre lot
                    </>
                  )}
                </div>

                <div className="text-sm text-gray-700">
                  <div className="font-medium">{property.address}</div>
                  <div>{property.city}</div>
                </div>
              </div>
            </div>
          ))}
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No properties found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSold;
