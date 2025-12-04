"use client"
import React from 'react'
import Image from 'next/image'

const Footer2 = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN WRAPPER - LEFT + RIGHT */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="md:w-1/3 flex flex-col items-start">

            {/* Logo */}
            <div className="relative w-20 h-20 mb-4"> 
              <Image
                src="/footer2.avif"
                alt="NAR Logo"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-base font-bold tracking-wide">
              Samarix<br />
              ASSOCIATION OF<br />
              REAL-Estate<sup className="text-xs">®</sup>
            </h2>

            <p className="text-sm font-light mt-3">
              Find out how the SAR works for consumers and REALTORS
              <sup className="text-xs">®</sup>
            </p>
          </div>

          {/* VERTICAL LINE */}
          <div className="hidden md:block w-px bg-gray-300" />

          {/* RIGHT SIDE */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12">

            {/* Column 1 */}
            <div>
              <h3 className="text-base font-semibold mb-5">For Homeowners</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:underline">Looking for the Rent</a></li>
                <li><a href="#" className="hover:underline">First-Time Buyer</a></li>
                <li><a href="#" className="hover:underline">Real Estate Today</a></li>
                <li>
                  <a href="#" className="hover:underline">
                    Reasons to work with a REALTOR<sup className="text-xs">®</sup>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-base font-semibold mb-5">
                For REALTORS<sup className="text-xs">®</sup>
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:underline">Stand out with .RealEstate</a></li>
                <li><a href="#" className="hover:underline">Exclusive Deals for CRE Members</a></li>
                <li><a href="#" className="hover:underline">Good Neighbor Award Winners</a></li>
                <li><a href="#" className="hover:underline">SAR Honors Veterans</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-base font-semibold mb-5">Learn About S.A.R</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:underline">About SAR</a></li>
                <li><a href="#" className="hover:underline">Agent vs. REALTOR<sup className="text-xs">®</sup></a></li>
                <li><a href="#" className="hover:underline">Find an Appraiser</a></li>
                <li><a href="#" className="hover:underline">Commercial Services</a></li>
                <li><a href="#" className="hover:underline">SAR Global Alliances</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2
