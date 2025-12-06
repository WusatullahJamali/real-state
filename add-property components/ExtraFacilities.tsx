"use client";
import React from "react";
import { MapPinHouse } from "lucide-react";

const ExtraFacilities = () => {
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT ICON */}
        <div className="flex justify-center md:justify-start items-start pt-10">
          <div className=" bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full shadow-sm">
            <MapPinHouse size={80} className="text-white" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Extra Facilities</h2>
          <p className="text-gray-600">Extra Facilities</p>

          <div className="space-y-6">

            {/* Facility Row Component */}
            {[
              "City Center",
              "Hospital",
              "Shop",
              "Park",
            ].map((label, index) => (
              <FacilityInput key={index} label={label} />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ExtraFacilities;

/* ----- Facility Input Component ----- */
const FacilityInput = ({ label }: { label: string }) => {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}*</label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {/* Distance Input */}
        <input
          type="text"
          placeholder="Type area distance"
          className="w-full border rounded-lg p-3 shadow-sm"
        />

        {/* Unit Selector */}
        <select
          className="w-full border rounded-lg p-3 shadow-sm bg-white"
        >
          <option value="">Select Unit</option>
          <option value="km">KM</option>
          <option value="miles">Miles</option>
          <option value="minutes">Minutes</option>
        </select>

      </div>
    </div>
  );
};
