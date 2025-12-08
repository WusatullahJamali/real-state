"use client";

import React, { useState } from "react";
import { Facebook, X, Linkedin, Instagram, Youtube } from "lucide-react";

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
    <footer className="bg-white text-black pt-10 pb-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* COLUMN 1: SOCIAL + GET THE APP */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <h2 className="font-bold text-lg">Connect with us</h2>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-black hover:text-gray-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              ))}
            </div>

            <div className="mt-4">
              <h2 className="font-bold text-lg mb-2">Get the App</h2>
              <p className="text-gray-700 text-sm mb-3">
                Download on Google Play Store or App Store
              </p>
              <div className="flex justify-center sm:justify-start gap-4">
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

          {/* COLUMN 2: ABOUT US */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg mb-2">About Us</h2>
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

          {/* COLUMN 3: SEARCH & EXPLORE */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg mb-2">Search & Explore</h2>
            <ul className="space-y-2 text-sm">
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

          {/* COLUMN 4: APARTMENT TYPES */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg mb-2">Apartment Types</h2>
            <ul className="space-y-2 text-sm">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 mb-4"></div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Samarix Association of REALTORS®. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
