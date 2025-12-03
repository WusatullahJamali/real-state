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
    <footer className="bg-black text-white pt-14 pb-8 relative z-50">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-12 md:grid-cols-5">

        {/* Social */}
        <div className="space-y-5">
          <h2 className="font-bold text-lg">Connect with us</h2>
          <div className="flex space-x-4">
            {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <Icon
                key={i}
                className="w-6 h-6 text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Company</h2>

          <ul
            className="space-y-2 overflow-hidden transition-all duration-300"
            style={{ maxHeight: showMoreCompany ? "650px" : "110px" }}
          >
            {companyLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowMoreCompany(!showMoreCompany)}
            className="flex items-center text-sm text-gray-300 hover:text-white transition"
          >
            {showMoreCompany ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform ${showMoreCompany ? "rotate-180" : ""}`}
            />
          </button>

          <span className="text-gray-500 mt-4 text-sm block hover:text-gray-400 cursor-pointer transition">
            Do Not Sell or Share My Personal Information
          </span>
        </div>

        {/* Get App */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Get the app</h2>

          <a
            href="#"
            className="w-40 block rounded-lg overflow-hidden hover:opacity-90 hover:scale-105 transition"
          >
            <img src="/appstore.png" alt="App Store" />
          </a>

          <a
            href="#"
            className="w-40 block rounded-lg overflow-hidden hover:opacity-90 hover:scale-105 transition"
          >
            <img src="/googleplay.png" alt="Google Play" />
          </a>
        </div>

        {/* Products */}
        <div className="space-y-2">
          <h2 className="font-bold text-lg">Products</h2>

          {[
            "Leads & Branding","ListHub","Moving.com","International Properties",
            "Avail","UpNest","Builder Solutions"
          ].map((link, i) => (
            <li
              key={i}
              className="list-none cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition"
            >
              {link}
            </li>
          ))}
        </div>

        {/* News Corp */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">News Corp</h2>

          <ul
            className="space-y-2 overflow-hidden transition-all duration-300"
            style={{ maxHeight: showMoreNews ? "650px" : "110px" }}
          >
            {newsLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowMoreNews(!showMoreNews)}
            className="flex items-center text-sm text-gray-300 hover:text-white transition"
          >
            {showMoreNews ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform ${showMoreNews ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 mb-6"></div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm">
        © 1995-2025 National Association of REALTORS® and Move, Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
