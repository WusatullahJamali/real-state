"use client";

import Image from "next/image";
import Link from "next/link";
import { categoriesData } from "../Data";

export default function CategoriesListingPage() {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-black mb-8">
          All Price Reduced Properties
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoriesData.map((property) => (
            <Link
              key={property.id}
              href={`/CategoriesData/${property.id}`}
              className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">
                  {property.title}
                </h2>

                <p className="text-gray-600 text-sm mt-1">{property.location}</p>

                <p className="text-yellow-600 font-bold text-xl mt-2">
                  {property.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
