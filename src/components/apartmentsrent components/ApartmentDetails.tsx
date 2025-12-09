// components/apartmentsrent components/ApartmentDetails.tsx

"use client";
import Link from "next/link";
import React from "react";
// Import icons needed for richer detail layout
import { FaBed, FaRulerCombined, FaEnvelope, FaCalendarAlt, FaUserCircle, FaMapMarkedAlt } from "react-icons/fa"; 
import { FiArrowLeft } from "react-icons/fi"; 

// Assume this data array is defined/exported once in a shared file 
// (e.g., 'data/apartmentData.ts' or kept outside the components as an export).
// FOR THIS EXAMPLE, I'll place a unified mock data array here for simplicity.

interface ApartmentType {
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

// Unified Mock Data (Include descriptions/amenities for all entries for detail page)
const apartmentList: ApartmentType[] = [
    { id: 1, title: "Luxury Apartment", price: 1200, bedrooms: 3, location: "Downtown, Karachi", image: "/a1.jpg", description: "A spacious and modern 3-bedroom apartment located in the heart of Downtown, offering panoramic city views and premium finishes.", amenities: ["24/7 Security", "Gym Access", "Pool", "Dedicated Parking"], areaSqFt: 1850 },
    { id: 2, title: "Modern Studio", price: 800, bedrooms: 1, location: "Bahria Town, Lahore", image: "/a2.jpg", description: "Ideal for students or young professionals, this efficient studio offers modern living in a secured community.", amenities: ["Balcony", "Gated Community", "Laundry Facilities"], areaSqFt: 750 },
    { id: 3, title: "Family Apartment", price: 1000, bedrooms: 2, location: "Clifton, Karachi", image: "/a3.jpg", description: "Comfortable and cozy 2-bedroom unit perfect for a small family, steps away from the Clifton beach.", amenities: ["Kids Play Area", "Power Backup", "Nearby Park"], areaSqFt: 1100 },
    { id: 4, title: "Penthouse View", price: 1500, bedrooms: 4, location: "DHA Phase 6, Karachi", image: "/a4.jpg", description: "Exclusive penthouse with an expansive terrace, offering a luxurious lifestyle in Karachi's most sought-after defense housing authority.", amenities: ["Private Terrace", "Smart Home Tech", "Servant Quarter"], areaSqFt: 2800 },
    { id: 5, title: "Executive Residence", price: 1100, bedrooms: 3, location: "Gulberg, Lahore", image: "/a5.jpg", description: "High-end finishing and excellent location in Gulberg.", amenities: ["24/7 Security", "Gym Access"], areaSqFt: 1500 },
    // NOTE: You need to add description, amenities, and areaSqFt to ALL 15 of your mock items 
    // for the detail page to display correctly, otherwise they will show 'Not Found'.
];

interface ApartmentDetailProps {
    id: number; // Receive ID as prop from the parent page
}

const ApartmentDetail = ({ id }: ApartmentDetailProps) => {
    // Find the apartment using the ID prop
    const apartment = apartmentList.find((apt) => apt.id === id);

    if (!apartment) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-red-600">Apartment Not Found 😢</h1>
                    <p className="text-gray-600 mt-2">The listing ID ({id}) does not match any current apartments.</p>
                    <Link href="/" className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:underline">
                        <FiArrowLeft /> Back to Listings
                    </Link>
                </div>
            </div>
        );
    }
    
    // Destructure for easier access
    const { title, price, bedrooms, location, image, description, amenities, areaSqFt } = apartment;
    const commonAmenities = ["Elevator", "Parking", "Water Supply"]; // Add some generic ones

    return (
        <div className="bg-white min-h-screen">
            
            <div className="bg-gray-50 py-4 px-6 border-b border-gray-200">
                <Link
                    href="/" // Link back to the main list page
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition font-semibold"
                >
                    <FiArrowLeft /> Back to Listings
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* --- COLUMN 1: PROPERTY DETAILS --- */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl mb-6">
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Title & Price Info */}
                        <div className="p-6 bg-white shadow-xl rounded-2xl border-t-4 border-yellow-500">
                            <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
                            <p className="text-xl text-gray-600 mt-1">{location}</p>
                            <div className="mt-4 border-t pt-4 flex items-center justify-between">
                                <span className="text-3xl font-black text-yellow-600">
                                    ${price}<span className="text-xl font-normal text-gray-600">/month</span>
                                </span>
                                <div className="flex items-center space-x-4 text-gray-700 font-semibold">
                                    <div className="flex items-center gap-1">
                                        <FaBed className="text-xl text-yellow-500" />
                                        <span>{bedrooms} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaRulerCombined className="text-lg text-yellow-500" />
                                        <span>{areaSqFt} Sq Ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Description */}
                        <div className="p-6 bg-gray-50 rounded-2xl shadow">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Description</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                        </div>
                        
                        {/* Amenities */}
                        <div className="p-6 bg-gray-50 rounded-2xl shadow">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {commonAmenities.concat(amenities).map((amenity, index) => (
                                    <div key={index} className="flex items-center text-gray-700 font-medium">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Location Map (Placeholder) */}
                        <div className="p-6 bg-gray-50 rounded-2xl shadow">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Location</h2>
                            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                                <FaMapMarkedAlt className="text-5xl text-gray-500"/>
                                <p className="ml-4 text-gray-500">Map Placeholder for {location}</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Exact address provided upon tour scheduling.</p>
                        </div>
                    </div>
                    
                    {/* --- COLUMN 2: AGENT CONTACT (Sticky) --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-20 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-2xl shadow-2xl space-y-6">
                            
                            <h3 className="text-2xl font-extrabold text-gray-900 border-b pb-3">Inquire & Tour</h3>
                            
                            {/* Agent Profile (Mock) */}
                            <div className="flex items-center space-x-4 pb-4 border-b">
                                <FaUserCircle className="text-5xl text-yellow-600" />
                                <div>
                                    <p className="text-lg font-bold text-gray-900">Agent: Sarah Khan</p>
                                    <p className="text-sm text-gray-600">Property Specialist</p>
                                </div>
                            </div>

                            <button
                                onClick={() => alert(`Contacting agent for ${title}`)}
                                className="w-full flex items-center justify-center gap-2 bg-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg transition hover:bg-yellow-700 text-lg"
                            >
                                <FaEnvelope /> Contact Agent
                            </button>

                            <button
                                onClick={() => alert(`Scheduling tour for ${title}`)}
                                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition hover:bg-green-700 text-lg"
                            >
                                <FaCalendarAlt /> Schedule Tour
                            </button>

                            <p className="text-xs text-center text-gray-500 pt-2">
                                Reference ID: **APT-{id}**
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApartmentDetail;