"use client";
import React from "react";
import { HousePlug } from "lucide-react";

const Price = () => {
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE ICON */}
         <div className="flex justify-center md:justify-start items-start pt-10">
          <div className=" bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full shadow-sm">
            <HousePlug size={80} className="text-white" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Price & Area</h2>
          <p className="text-gray-600">Price & Area</p>

          <div className="space-y-6">

            {/* AREA SIZE */}
            <div>
              <label className="block font-semibold mb-2">Area Size*</label>
              <input
                type="text"
                placeholder="Type area size"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block font-semibold mb-2">Price*</label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                {/* PRICE INPUT */}
                <input
                  type="text"
                  placeholder="Type price"
                  className="w-full border rounded-lg p-3 shadow-sm"
                />

                {/* CURRENCY SELECT */}
                <select
                  className="w-full border rounded-lg p-3 shadow-sm bg-white"
                >
                  <option value="">Currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="BDT">BDT</option>
                  <option value="INR">INR</option>
                  <option value="PKR">PKR</option>
                </select>

                {/* UNIT SELECT */}
                <select
                  className="w-full border rounded-lg p-3 shadow-sm bg-white"
                >
                  <option value="">Select Unit</option>
                  <option value="SQFT">Sq Ft</option>
                  <option value="SQM">Sq Meter</option>
                </select>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Price;
