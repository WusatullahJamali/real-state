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
  batch?: "Hot Offer" | "New Listing" | null;
}



const FOR_SALE_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Harmony House",
    city: "Panama City",
    beds: "03 Beds",
    baths: "03 Baths",
    size: "Sq.ft- 234,560",
    price: "$7,656.00",
    image: "/property1.jpg",
  
    batch: "New Listing",
  },
  {
    id: 2,
    title: "Mountain View Villa",
    city: "Sydney City",
    beds: "02 Beds",
    baths: "02+ Baths",
    size: "Sq.ft- 345,556",
    price: "$3,650.00",
    image: "/property2.webp",
   
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
    
    batch: "Hot Offer",
  },
  {
    id: 4,
    title: "Sunflower Cottage",
    city: "Canberra City",
    beds: "04 Beds",
    baths: "02 Baths",
    size: "Sq.ft- 124,560",
    price: "$9,610.00",
    image: "/property4.jpg",
   
    batch: null,
  },
  {
    id: 5,
    title: "Coastal Dream Home",
    city: "Melbourne City",
    beds: "06 Beds",
    baths: "05 Baths",
    size: "Sq.ft- 234,560",
    price: "$6,656.00",
    image: "/property5.webp",
    
    batch: "Hot Offer",
  },
  {
    id: 6,
    title: "Starlight Manor",
    city: "London",
    beds: "03 Beds",
    baths: "03 Baths",
    size: "Sq.ft- 234,560",
    price: "$7,570.00",
    image: "/property6.webp",
   
    batch: null,
  },
];

const FOR_RENT_PROPERTIES: Property[] = [
  // Using the same data for rent section for simplicity
  ...FOR_SALE_PROPERTIES,
];

// --- 3. PRODUCT CARD COMPONENT ---

const HeartIcon: React.FC<{ filled?: boolean }> = ({ filled = false }) => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <path
      d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"
      fill={filled ? "#EF4444" : "#ffffff"} // Fill heart red if favorited
      stroke={filled ? "none" : "#ffffff"} // Outline if not filled
    />
  </svg>
);

const ProductCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg text-black shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Product Image Section */}
      <div className="relative h-56 w-full">
        {/* Batch / Hot Offer */}
        {property.batch === "Hot Offer" && (
          <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Hot Offer
          </div>
        )}

        {/* Favorite Icon */}
        <button
          className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Add to favorites"
        >
          <HeartIcon />
        </button>

        {/* Image - Simplified static image instead of nested Swiper */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">
        {/* Location */}
        <div className="mb-2 text-sm text-gray-500 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-yellow-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a href="#" className="hover:text-yellow-700 transition-colors">
            {property.city}
          </a>
        </div>

        {/* Title */}
        <h5 className="text-xl font-semibold mb-3">
          <a href="#" className="hover:text-yellow-700 transition-colors">
            {property.title}
          </a>
        </h5>

        {/* Features */}
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 border-b pb-4 mb-4">
          <li className="flex items-center gap-1">
            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">
              {property.beds}
            </span>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">
              {property.baths}
            </span>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">
              {property.size}
            </span>
          </li>
        </ul>

        {/* Price & Details Button */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {property.price}
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN SECTION COMPONENT ---

type Tab = "sale" | "rent";

export default function RecentPropertiesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("rent");

  const propertiesToShow =
    activeTab === "sale" ? FOR_SALE_PROPERTIES : FOR_RENT_PROPERTIES;

  const TabButton: React.FC<{ id: Tab; label: string }> = ({ id, label }) => {
    const isActive = activeTab === id;
    const activeClasses = "text-white bg-yellow-600";
    const inactiveClasses =
      "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50";

    return (
      <button
        className={`px-6 py-2 text-sm font-semibold rounded-lg transition-colors ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={() => setActiveTab(id)}
        aria-selected={isActive}
        role="tab"
      >
        {label}
      </button>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Replaces: <div class="container"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Replaces: <div class="row mb-50 wow fadeInUp" data-wow-delay="200ms"> */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          {/* Section Title */}
          <div className="mb-6 lg:mb-0">
            <span className="text-sm font-medium text-[#efb93f] uppercase tracking-wider">
              Comfort Building
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-1">
              Recent Property
            </h2>
          </div>

          {/* Tab Navigation */}
          {/* Replaces: <ul class="nav nav-tabs" id="myTab6" role="tablist"> */}
          <div className="flex flex-wrap gap-4" role="tablist">
            <TabButton id="sale" label="For Sale" />
            <TabButton id="rent" label="For Rent" />
          </div>
        </div>

        {/* Tab Content */}
        {/* Replaces: <div class="row">...<div class="tab-content" id="myTabContent6"> */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesToShow.map((property) => (
              // Replaces: <div class="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" ...>
              // The animation is represented here by the group-hover effects on the card itself
              <ProductCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Since the original had a "Load More" section, we can add a button here */}
        {/* <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
            Load More Properties
          </button>
        </div> */}
      </div>
    </section>
  );
}
