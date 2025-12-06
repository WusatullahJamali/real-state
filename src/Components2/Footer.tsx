"use client";

import React, { useState } from "react";
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  const [showMoreNews, setShowMoreNews] = useState(false);

  const exploreLinks = [
    "Search & Explore",
    "Home For Sale",
    "Home For Rent",
    "To Buy Home",
    "Sell Your Home",
    "Shop Now",
    "Sitemap",
  ];

  const aboutUsLinks = ["Feedback", "Privacy", "Terms", "FAQs", "Contact Us"];

  const apartmentLinks = [
    "Industrial",
    "Development",
    "Home Town",
    "Office",
    "Health Care",
    "Banglow",
    "House",
    "Flat Share",
    "Park Home",
  ];

  const productLinks = [
    "Leads & Branding",
    "ListHub",
    "Moving.com",
    "International Properties",
    "Avail",
    "UpNest",
    "Builder Solutions",
  ];

  return (
    <footer className="bg-white text-black pt-14 pb-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID: 4 Columns on Desktop (Linear Line) */}
        {/* This structure puts the four main sections on one line for large screens */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12">
          {/* ------------ COLUMN 1: SOCIAL + GET THE APP ------------ */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg">Connect with us</h2>

            <div className="flex space-x-4">
              {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-black hover:text-gray-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              ))}
            </div>

            {/* Get the App */}
            <div>
              <h2 className="font-bold text-lg mb-3">Get the App</h2>
              <p className="text-gray-700 text-sm mb-3">
                Download on Google Play Store or App Store
              </p>

              <div className="flex flex-row items-center gap-4">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition">
                    Google Play
                  </div>
                </a>

                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition">
                    App Store
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Search & Explore */}
          <div>
            <h2 className="font-bold text-lg mb-3">Search & Explore</h2>
            <ul className="space-y-1 text-sm">
              {exploreLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Apartment Types */}
          <div>
            <h2 className="font-bold text-lg mb-3">Apartment Types</h2>
            <ul className="space-y-1 text-sm">
              {apartmentLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------ COLUMN 4: ABOUT US + PRODUCTS ------------ */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-lg mb-3">About Us</h2>
              <ul className="space-y-2 text-sm">
                {aboutUsLinks.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        </div>
        
        {/* Divider and Bottom elements are correctly placed outside the grid to span full width */}
        <div className="border-t border-gray-300 mt-12 mb-6"></div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © 1995-2025 National Association of REALTORS® and Move, Inc. All
          rights reserved.
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
                className="cursor-pointer text-gray-600 hover:text-black hover:underline hover:underline-offset-4 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowMoreNews(!showMoreNews)}
            className="flex items-center text-sm text-gray-600 hover:text-black transition"
          >
            {showMoreNews ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform ${
                showMoreNews ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 mb-6"></div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm">
        © 1995-2025 National Association of REALTORS® and Move, Inc. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;