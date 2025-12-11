// components/RecentPropertiesSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  city: string;
  beds: string;
  baths: string;
  size: string;
  price: string;
  image: string;
  status: "sale" | "rent";
  batch?: "Hot Offer" | "New Listing" | null;
}

// ----- SALE PROPERTIES -----
export const FOR_SALE_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Harmony House",
    city: "Panama City",
    beds: "03 Beds",
    baths: "03 Baths",
    size: "Sq.ft- 234,560",
    price: "$7,656.00",
    image: "/property1.jpg",
    status: "sale",
    batch: "New Listing",
  },
  {
    id: 2,
    title: "Mountain View Villa",
    city: "Sydney City",
    beds: "02 Beds",
    baths: "02 Baths",
    size: "Sq.ft- 345,556",
    price: "$3,650.00",
    image: "/property2.webp",
    status: "sale",
    batch: null,
  },
  {
    id: 3,
    title: "Paradise Heights",
    city: "Karachi",
    beds: "04 Beds",
    baths: "04 Baths",
    size: "Sq.ft- 234,560",
    price: "$17,780.00",
    image: "/property3.webp",
    status: "sale",
    batch: "Hot Offer",
  },
  {
    id: 4,
    title: "Golden Estate House",
    city: "Dubai",
    beds: "05 Beds",
    baths: "04 Baths",
    size: "Sq.ft- 400,000",
    price: "$25,900.00",
    image: "/h1.jpeg",
    status: "sale",
    batch: "New Listing",
  },
  {
    id: 5,
    title: "Royal Palm Residency",
    city: "Islamabad",
    beds: "06 Beds",
    baths: "05 Baths",
    size: "Sq.ft- 500,230",
    price: "$32,500.00",
    image: "/h2.jpg",
    status: "sale",
    batch: "Hot Offer",
  },
  {
    id: 6,
    title: "Elite Signature Villa",
    city: "Doha",
    beds: "04 Beds",
    baths: "04 Baths",
    size: "Sq.ft- 350,000",
    price: "$21,750.00",
    image: "/h3.jpeg",
    status: "sale",
    batch: null,
  },
];

// ----- RENT PROPERTIES -----
export const FOR_RENT_PROPERTIES: Property[] = [
  {
    id: 10,
    title: "Urban Comfort Apartment",
    city: "Melbourne",
    beds: "02 Beds",
    baths: "01 Bath",
    size: "Sq.ft- 120,000",
    price: "$1,200.00 /mo",
    image: "/property4.jpg",
    status: "rent",
    batch: "Hot Offer",
  },
  {
    id: 11,
    title: "City Center Condo",
    city: "Toronto",
    beds: "03 Beds",
    baths: "02 Baths",
    size: "Sq.ft- 150,340",
    price: "$2,560.00 /mo",
    image: "/property5.webp",
    status: "rent",
    batch: null,
  },
  {
    id: 12,
    title: "Budget Family Home",
    city: "London",
    beds: "04 Beds",
    baths: "03 Baths",
    size: "Sq.ft- 200,000",
    price: "$1,850.00 /mo",
    image: "/property6.webp",
    status: "rent",
    batch: "New Listing",
  },
  {
    id: 13,
    title: "Modern Studio Flat",
    city: "Berlin",
    beds: "01 Bed",
    baths: "01 Bath",
    size: "Sq.ft- 80,000",
    price: "$950.00 /mo",
    image: "/h4.avif",
    status: "rent",
    batch: "New Listing",
  },
  {
    id: 14,
    title: "Luxury Penthouse",
    city: "New York",
    beds: "03 Beds",
    baths: "03 Baths",
    size: "Sq.ft- 210,000",
    price: "$4,900.00 /mo",
    image: "/h5.jpg",
    status: "rent",
    batch: "Hot Offer",
  },
  {
    id: 15,
    title: "Cozy Suburban Home",
    city: "Manchester",
    beds: "03 Beds",
    baths: "02 Baths",
    size: "Sq.ft- 150,000",
    price: "$1,450.00 /mo",
    image: "/h6.jpg",
    status: "rent",
    batch: null,
  },
];
interface TabButtonProps {
  id: "sale" | "rent";
  label: string;
  active?: boolean;
  onClick?: (id: "sale" | "rent") => void;
}
const TabButton: React.FC<TabButtonProps> = ({ id, label, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-lg font-semibold transition ${
      active ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={() => onClick && onClick(id)}
  >
    {label}
  </button>
);



// --- PRODUCT CARD ---
const ProductCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg text-black shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-56 w-full">
        <div
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
            property.status === "sale"
              ? "bg-green-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          {property.status === "sale" ? "For Sale" : "For Rent"}
        </div>

        {property.batch === "New Listing" && (
          <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW LISTING
          </div>
        )}
        {property.batch === "Hot Offer" && (
          <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            HOT OFFER
          </div>
        )}

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 text-sm text-gray-500 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
          {property.city}
        </div>

        <h5 className="text-xl font-semibold mb-3">{property.title}</h5>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 border-b pb-4 mb-4">
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.beds}
            </span>
          </li>
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.baths}
            </span>
          </li>
          <li>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
              {property.size}
            </span>
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {property.price}
          </div>
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
type Tab = "sale" | "rent";
type FilterType = "all" | "new" | "hot";

export default function RecentPropertiesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("sale");
  const [filter, setFilter] = useState<FilterType>("all");

  const selectedList =
    activeTab === "sale" ? FOR_SALE_PROPERTIES : FOR_RENT_PROPERTIES;

  const filteredProperties = selectedList.filter((p) => {
    if (filter === "all") return true;
    if (filter === "new") return p.batch === "New Listing";
    if (filter === "hot") return p.batch === "Hot Offer";
    return true;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-yellow-500 uppercase">
              Comfort Building
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-1">
              Recent Property
            </h2>
          </div>

          
          <div className="flex flex-wrap gap-4 text-yellow-500" role="tablist">
            <TabButton id="sale" label="For Sale" />
            <TabButton id="rent" label="For Rent" />
          </div>
        </div>

   
       <div className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {selectedList.map((property) => (
      <ProductCard key={property.id} property={property} />
    ))}
  </div>
</div>


      
      </div>
    </section>
  );
}
