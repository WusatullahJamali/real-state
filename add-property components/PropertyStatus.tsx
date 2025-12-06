"use client";

import React from "react";
import { Home } from "lucide-react";

const PropertyStatus = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* LEFT SIDE — ICON */}
        <div className="flex justify-center md:justify-start items-start pt-10">
          <div className=" bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full shadow-sm">
            <Home size={80} className="text-white" />
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Property Status</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Property Location */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Property Location</label>
              <input
                type="text"
                placeholder="Hyderabad, Pakistan"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Property Status */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Property Status</label>
              <select className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Property Type*</label>
              <select className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Apartment</option>
                <option>Commercial</option>
                <option>Land</option>
                <option>Villa</option>
              </select>
            </div>

            {/* Property Condition */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Property Condition*</label>
              <select className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>New</option>
                <option>Used</option>
                <option>Renovated</option>
              </select>
            </div>

            {/* Built Year */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Built Year*</label>
              <input
                type="number"
                placeholder="2020"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dimension */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Dimension*</label>
              <input
                type="text"
                placeholder="2000 sq ft"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Country*</label>
              <select className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Pakistan</option>
                <option>USA</option>
              </select>
            </div>

            {/* Property City */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Property City*</label>
              <input
                type="text"
                placeholder="Hyderabad,"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-gray-600">Location*</label>
              <input
                type="text"
                placeholder="Example: Hyderabad, Pakistan"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyStatus;
