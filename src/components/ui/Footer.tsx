"use client";

import React from "react";
import { Facebook, X, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
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

  return (
    <footer className="bg-gray-50 text-gray-900 pt-12 pb-6 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* COLUMN 1: SOCIAL + GET THE APP */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-bold text-lg">Connect with us</h2>
            <div className="flex space-x-4">
              {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-gray-700 hover:text-yellow-500 transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              ))}
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Get the App</h2>
              <p className="text-gray-600 text-sm mb-3">
                Download on Google Play Store or App Store
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition"
                >
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition"
                >
                  App Store
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ABOUT US */}
          <div>
            <h2 className="font-bold text-lg mb-4">About Us</h2>
            <ul className="space-y-2 text-sm">
              {aboutUsLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-yellow-500 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SEARCH & EXPLORE */}
          <div>
            <h2 className="font-bold text-lg mb-4">Search & Explore</h2>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-yellow-500 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: APARTMENT TYPES */}
          <div>
            <h2 className="font-bold text-lg mb-4">Apartment Types</h2>
            <ul className="space-y-2 text-sm">
              {apartmentLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-yellow-500 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 mb-4"></div>

        {/* Bottom */}
        <div className="text-left text-gray-500 text-sm flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
          <span>© 2025 Samarix Association of REALTORS®. All rights reserved.</span>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
