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
        <div className=" grid grid-cols-2 md:grid-cols-3   lg:grid-cols-5 gap-y-10 gap-x-8 ">
          {/* ---------- BRAND ---------- */}
          <div className="space-y-4 col-span-2 md:col-span-1">
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
              Iraq’s premier platform for real estate and home services. Find
              your perfect property and book trusted service providers all in
              one place.
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
                { text: "Buy Property", href: "/buy" },
                { text: "Rent Property", href: "/rent" },
                { text: "Sell Property", href: "/sell" },
                { text: "Find Agents", href: "/find-agent" },
                // { text: "For Developers", href: "/for-developers" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- HOME SERVICES ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Home Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { text: "All Services", href: "/service" },
                { text: "Plumbing", href: "/service/4" },
                { text: "Electrical", href: "/service/1" },
                { text: "Cleaning", href: "/service/2" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- COMPANY ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { text: "About Us", href: "/about" },
                { text: "Careers", href: "/careers" },
                { text: "Blog", href: "/blog" },
                { text: "Contact", href: "/contact" },
                // { text: "Download App", href: "/download-app" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- SUPPORT ---------- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { text: "FAQ", href: "/faq" },
                // { text: "Help Center", href: "/help-center" },
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Terms of Service", href: "/terms-of-service" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <div className="border-t border-white/20 mt-12 pt-6"></div>

        {/* ---------- BOTTOM FOOTER ---------- */}
        <div className=" flex flex-col   sm:flex-row items-center justify-between text-sm text-gray-300 gap-4 ">
          <p className="text-center sm:text-left">
            © 2025 Albasync. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {[
              { text: "Privacy", href: "/privacy-policy" },
              { text: "Terms", href: "/terms-of-service" },
              // { text: "Cookies", href: "/cookies-policy" },
            ].map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
