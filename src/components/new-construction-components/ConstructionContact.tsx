"use client";
import React from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

const ConstructionContact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-black">
      <h2 className="text-2xl font-bold mb-6">How to buy a home in Iraq</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card: Pre-approval */}
        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col">
          <h3 className="text-lg font-bold mb-4">Be prepared to buy</h3>
          
          <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
            <img 
              src="/a12.jpg" 
              alt="Modern Iraq home"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-auto">
            <h4 className="text-xl font-bold mb-2">Get pre-approved</h4>
            <p className="text-black mb-6">
              A pre-approval letter from a local bank makes your offer stronger and helps you understand your budget.
            </p>
            <button className="px-6 py-2 border-2  rounded-full font-bold hover:border-yellow-600 transition-colors w-fit">
              Get pre-approved
            </button>
          </div>
        </div>

        {/* Right Card: Moving Cost Calculator */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6">Moving cost calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Move From */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Move from</label>
              <input 
                type="text" 
                placeholder="City or District"
                className="w-full p-3 border-2 rounded-lg focus:outline-none"
              />
              <div className="flex items-start gap-1 text-red-700">
               
                
              </div>
            </div>

            {/* Move To */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Move to</label>
              <input 
                type="text" 
                placeholder="City or District"
                className="w-full p-3 border-2 rounded-lg focus:outline-none"
              />
              <div className="flex items-start gap-1 text-red-700">
                
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Size of Move */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Size of move</label>
              <div className="relative">
                <select className="w-full p-3 border-2  rounded-lg appearance-none bg-white focus:outline-none">
                  <option>1-2 bedrooms</option>
                  <option>2-3 bedrooms</option>
                  <option>4+ bedrooms</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Packing */}
            <div className="space-y-2">
              <label className="text-sm font-bold">Packing</label>
              <div className="relative">
                <select className="w-full p-3 border-2  rounded-lg appearance-none bg-white focus:outline-none">
                  <option>None</option>
                  <option>Partial</option>
                  <option>Full Service</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <button className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition-colors">
            Get estimates
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConstructionContact;
