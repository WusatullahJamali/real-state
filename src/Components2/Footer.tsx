"use client"

import React, { useState } from "react"
import { Facebook, X, Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react"

const Footer = () => {
  const [showMoreCompany, setShowMoreCompany] = useState(false)
  const [showMoreNews, setShowMoreNews] = useState(false)

  const companyLinks = [
    "About us", "Careers", "Accessibility", "Feedback", "Media room",
    "Ad Choices", "Advertise with us", "Agent support", "Privacy",
    "Terms", "Home Made", "Tech Blog", "Agent Blog", "Sitemap"
  ]

  const newsLinks = [
    "Barrons","Financial News","Harper Collins","Mansion Global","MarketWatch","New York Post",
    "REA Group","Storyful","Wall Street Journal","Makaan.com","Housing.com","PropTiger.com",
    "News Corp Australia","News UK"
  ]

  return (
    <footer className="bg-black text-white pt-12 relative z-50">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-10 md:grid-cols-5">

        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-lg mb-2">Connect with us</h2>
          <div className="flex space-x-4">
            {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <Icon
                key={i}
                className="w-6 h-6 text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg mb-2">Company</h2>

          <ul className="space-y-1 overflow-hidden transition-all duration-300"
              style={{ maxHeight: showMoreCompany ? "1000px" : "120px" }}>
            {companyLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowMoreCompany(!showMoreCompany)}
            className="flex items-center mt-2 text-sm text-white hover:text-gray-300 transition-colors"
          >
            {showMoreCompany ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${showMoreCompany ? "rotate-180" : ""}`}
            />
          </button>

          <span className="text-gray-500 mt-4 text-sm cursor-pointer hover:text-gray-400 transition-colors">
            Do Not Sell or Share My Personal Information
          </span>
        </div>

        {/* Get the App */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-lg mb-2">Get the app</h2>

          <div className="flex flex-col space-y-3">

            {/* App Store Button */}
            <a
              href="#"
              className="w-40 overflow-hidden rounded-lg hover:opacity-90 hover:scale-105 transition transform duration-300"
            >
              <img
                src="/appstore.png"
                alt="Download on the App Store"
                className="w-full h-auto"
              />
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="w-40 overflow-hidden rounded-lg hover:opacity-90 hover:scale-105 transition transform duration-300"
            >
              <img
                src="/googleplay.png"
                alt="Get it on Google Play"
                className="w-full h-auto"
              />
            </a>

          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg mb-2">Products</h2>
          {[
            "Leads & Branding","ListHub","Moving.com","International Properties",
            "Avail","UpNest","Builder Solutions"
          ].map((link, i) => (
            <li
              key={i}
              className="list-none cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {link}
            </li>
          ))}
        </div>

        {/* News Corp */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg mb-2">News Corp</h2>

          <ul className="space-y-1 overflow-hidden transition-all duration-300"
              style={{ maxHeight: showMoreNews ? "1000px" : "120px" }}>
            {newsLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowMoreNews(!showMoreNews)}
            className="flex items-center mt-2 text-sm text-white hover:text-gray-300 transition-colors"
          >
            {showMoreNews ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${showMoreNews ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="bg-black w-full mt-6 flex justify-center pb-6">
        <div className="px-6 text-gray-400 text-sm text-center max-w-4xl">
          <p>© 1995-2025 National Association of REALTORS<sup className="text-xs">®</sup> and Move, Inc. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer