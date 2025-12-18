"use client";

import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1B3A57] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* ---------- TOP FOOTER GRID ---------- */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-y-10
            gap-x-8
          "
        >
          {/* ---------- BRAND ---------- */}
          <div className="space-y-4 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center -mt-4">
              <Image
                src="/albasync-01.png"
                width={160}
                height={60}
                alt="Albasync Logo"
                priority
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
              />
            </Link>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-200 max-w-sm">
              Iraq’s premier platform for real estate and home services.
              Find your perfect property and book trusted service providers
              all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-5 h-5 text-white hover:text-yellow-400 transition cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* ---------- REAL ESTATE ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Real Estate</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "Buy Property",
                "Rent Property",
                "Sell Property",
                "For Agents",
                "For Developers",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- HOME SERVICES ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Home Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "All Services",
                "Plumbing",
                "Electrical",
                "Cleaning",
                "Join as Provider",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- COMPANY ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Contact",
                "Download App",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- SUPPORT ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "FAQ",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <div className="border-t border-white/20 mt-12 pt-6"></div>

        {/* ---------- BOTTOM FOOTER ---------- */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            text-sm
            text-gray-300
            gap-4
          "
        >
          <p className="text-center sm:text-left">
            © 2025 Albasync. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <span
                key={item}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
