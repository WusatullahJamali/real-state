"use client";

import React from "react";
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  ChevronDown, // Keeping ChevronDown import just in case, but it's not used in the final JSX
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  // Removed useState for showMoreCompany and showApartments

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
    <footer className="bg-white text-black pt-14 pb-8 relative z-50">

        {/* ----------- 5 COLUMNS IN ONE ROW ----------- */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 pb-12">

        {/* Social */}
        <div className="space-y-5">
          <h2 className="font-bold text-lg">Connect with us</h2>
          <div className="flex space-x-4">
            {[Facebook, X, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <Icon
                key={i}
                className="w-6 h-6 text-black hover:text-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              />
            ))}
          </div>

          {/* 2. SEARCH & EXPLORE */}
          <div>
            <h2 className="font-bold text-lg mb-3">Search & Explore</h2>
            {/* Using <ul> for semantic list structure */}
            <ul className="space-y-1 text-sm">
              {exploreLinks.map((link, i) => (
                <li
                  key={i}
                  className="list-none cursor-pointer hover:underline hover:underline-offset-4 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. APARTMENT TYPES - All links visible */}
          <div>
            <h2 className="font-bold text-lg mb-3">Apartment Types</h2>

            {/* Removed dynamic maxHeight style */}
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
            {/* Removed Show More/Less button */}
          </div>

          {/* 4. ABOUT US - All links visible */}
          <div>
            <h2 className="font-bold text-lg mb-3">About Us</h2>

            {/* Removed dynamic maxHeight style */}
            <ul className="space-y-1 text-sm">
              {aboutUsLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline hover:underline-offset-4 transition-all"
                >
                  {link}
                </li>
              ))}
            </ul>
            {/* Removed Show More/Less button */}
          </div>

          {/* 5. GET THE APP */}
          <div>
            <h2 className="font-bold text-lg mb-3">Get the App</h2>
            <p className="text-gray-700 text-sm mb-3">
              Download on Google Play Store or App Store
            </p>

            <div className="flex flex-row items-center gap-4">
              <a href="https://play.google.com/store/apps" target="_blank">
                <Image
                  src="/playstore2.png"
                  alt="Google Play"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>

              <a href="https://apps.apple.com/" target="_blank">
                <Image
                  src="/appstore2.png"
                  alt="App Store"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

          <a
            href="#"
            className="w-40 block rounded-lg overflow-hidden hover:opacity-80 hover:scale-105 transition"
          >
            <img src="/app_store.svg" alt="App Store" />
          </a>

          <a
            href="#"
            className="w-40 block rounded-lg overflow-hidden hover:opacity-80 hover:scale-105 transition"
          >
            <img src="/playstor3.png" alt="Google Play" />
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
              className="list-none cursor-pointer text-gray-600 hover:text-black hover:underline hover:underline-offset-4 transition"
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
              className={`w-4 h-4 ml-1 transition-transform ${showMoreNews ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 mb-6"></div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm">
        © 1995-2025 National Association of REALTORS® and Move, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
