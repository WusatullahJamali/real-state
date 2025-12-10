

"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Home, Phone, Share2 } from "lucide-react";
import { CategoriesDATA } from "../../app/CategoriesDATA/[id]/Data"
export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = CategoriesDATA.find((p) => p.id === Number(id));
  if (!property) {
    return (
      <div className=" bg-white h-full mx-auto py-20 text-center">
        
        <h1 className="text-3xl font-bold text-yellow-500">
          Property Not Found
        </h1>
        <Link
          href="/"
          className="mt-4 inline-block bg-yellow-500 text-white px-5 py-3 rounded-md"
        >
          
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-white min-h-screen py-10">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-3xl font-bold text-black">{property.title}</h1>
        <div className="flex items-center text-gray-600 mt-2">
          
          <MapPin className="w-5 h-5 mr-1" /> <span>{property.location}</span>
        </div>
        <div className="w-full mt-6">
          
          <Image
            src={property.image}
            alt={property.title}
            width={1200}
            height={600}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <h2 className="text-4xl font-bold text-black">
            {property.price}
          </h2>
          <div className="flex gap-3 mt-4 md:mt-0">
            
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
              
              Contact Agent
            </button>
            <button className="px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-100 flex items-center gap-2">
              
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          
          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3">
            
            <Bed className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">
              {property.bedrooms} Beds
            </span>
          </div>
          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3">
            
            <Bath className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">
              {property.bathrooms} Baths
            </span>
          </div>
          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3">
            
            <Home className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">
              {property.area} Sq Ft
            </span>
          </div>
          <div className="p-4 rounded-lg border shadow-sm flex items-center gap-3">
            
            <Phone className="w-6 h-6 text-yellow-500" />
            <span className="text-black font-medium">+1 888 456 789</span>
          </div>
        </div>
        <div className="mt-12">
          
          <h2 className="text-2xl font-bold text-black">Description</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            {property.description}
          </p>
        </div>
        <div className="mt-12">
          
          <Link
            href="/"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
          >
            
            ← Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}




