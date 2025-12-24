import React from 'react';
import { MoveRight } from 'lucide-react';

const HomeValueTracker = () => {
  return (
    <div className="flex items-center justify-center bg-white py-16 px-4">
      <div className="w-full max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Chart overlay */}
              <div className="absolute top-6 left-6 bg-white rounded-lg shadow-xl p-6 z-10 w-64">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  RealEstimate<sup className="text-xs">SM</sup>
                </h3>
                
                {/* Simple chart representation */}
                <div className="relative h-40 mb-4">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="0" y1="80" x2="200" y2="80" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="60" x2="200" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="40" x2="200" y2="40" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#e5e7eb" strokeWidth="1"/>
                    
                    {/* Line 1 - Purple dashed */}
                    <polyline
                      points="0,75 50,70 100,50 150,45 200,25"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    
                    {/* Line 2 - Teal solid */}
                    <polyline
                      points="0,70 50,65 100,48 150,40 200,20"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                    />
                    
                    {/* Line 3 - Blue dashed */}
                    <polyline
                      points="0,80 50,75 100,60 150,55 200,40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    
                    {/* Indicator dot */}
                    <circle cx="200" cy="20" r="4" fill="#14b8a6"/>
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-purple-500"></div>
                      <span className="text-gray-600">Collateral Analytics</span>
                    </div>
                    <span className="font-semibold text-gray-800">$446K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-teal-500"></div>
                      <span className="text-gray-600">CoreLogic<sup>™</sup></span>
                    </div>
                    <span className="font-semibold text-gray-800">$445K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-yellow-500"></div>
                      <span className="text-black">Quantarium</span>
                    </div>
                    <span className="font-semibold text-black">$438K</span>
                  </div>
                </div>
              </div>
              
              {/* Building Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/track.webp" 
                  alt="Red brick building"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Text and CTA */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Track your home value
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our <span className="font-semibold">RealEstimate<sup className="text-xs">SM</sup></span> data is sourced from multiple valuation providers independent of Realtor.com and trusted by the lending industry.
              </p>
            </div>

            <button
              className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-lg border-2  rounded-full hover:border-yellow-500 transition-all duration-300"
            >
              <span>Start tracking</span>
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomeValueTracker;