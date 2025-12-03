"use client"
import React from 'react'

const Footer2 = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Title + Description */}
        <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
          
          <img 
            src="/logo.png" 
            alt="Logo"
            className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow flex-shrink-0"
          />

          <div className="flex flex-col">
            <h2 className="text-base font-bold mb-1 tracking-wide">
              NATIONAL<br />
              ASSOCIATION OF<br />
              REALTORS<sup className="text-xs">®</sup>
            </h2>
            <p className="text-sm font-light mt-2">
              Find out how the NAR works for consumers and REALTORS<sup className="text-xs">®</sup>
            </p>
          </div>

        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-base font-semibold mb-5">For Homeowners</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Look for the R
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  First-Time Buyer
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Real Estate Today
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
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
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Stand out, get found, and win more clients with .RealEstate.
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Exclusive Deals for CRE Members
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Good Neighbor Award Winners Announcement on 11/7
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  NAR Honors Veterans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-semibold mb-5">Learn About N.A.R</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  About NAR
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Agent vs. REALTOR<sup className="text-xs">®</sup>
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Find an Appraiser
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline transition-all">
                  NAR Global Alliances
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer2