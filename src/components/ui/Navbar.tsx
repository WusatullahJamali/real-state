"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, Plus } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(y < lastScroll || y < 50);
      setLastScroll(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const dropdownContent: Record<string, { text: string; href: string }[]> = {
    "FOR SALE": [
      { text: "Home for sale", href: "/sell/home-for-sale" },
      { text: "New Construction For Sale", href: "/new-construction" },
      { text: "Explore the neighborhood", href: "/sell/neighbourhood" },
      { text: "Housing market trends", href: "/housing market trends" },
      { text: "Recently sold homes", href: "/recently sold homes" },
    ],
    "FOR RENT": [
      { text: "Apartments for rent", href: "/apartments-for-rent" },
      { text: "Houses for rent", href: "/houses-for-rent" },
      { text: "Contact rent landlord", href: "/contact rent landlord" },
      { text: "Manage rentals", href: "/manage rentals" },
      { text: "List your rentals", href: "/list your rentals" },
    ],
    PROPERTY: [
      { text: "Property search", href: "/property search" },
      { text: "Property types", href: "/property types" },
      { text: "Property valuation", href: "/property valuation" },
      { text: "Property investment", href: "/property investment" },
      { text: "Commercial property", href: "/commercial property" },
      { text: "Residential property", href: "/residential property" },
      { text: "Property listings", href: "/property listings" },
    ],
    PAGES: [
      { text: "About us", href: "/about" },
      { text: "Contact us", href: "/contact" },
      { text: "FAQ", href: "/faq" },
      { text: "Blog", href: "/blog" },
      { text: "Terms of service", href: "/terms-of-service" },
      { text: "Privacy policy", href: "/privacy policy" },

      { text: "Careers", href: "/careers" },
    ],
  };

  const menuItems = [
    { name: "HOME", href: "/", hasDropdown: false },
    { name: "FOR SALE", href: "/sell", hasDropdown: true },
    { name: "FOR RENT", href: "/rent", hasDropdown: true },
    { name: "PROPERTY", href: "/mortgege", hasDropdown: true },
    { name: "PAGES", href: "/pages", hasDropdown: true },
    { name: "CONTACT US", href: "/contact", hasDropdown: false },
  ];

  const renderDropdown = (name: string) => (
    <AnimatePresence>
      {activeMenu === name && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-xl rounded-lg p-4 z-50"
        >
          <ul className="space-y-2">
            {dropdownContent[name].map((i, idx) => (
              <li key={idx}>
                <Link
                  href={i.href}
                  className="block text-gray-600 hover:text-yellow-500 hover:pl-2 transition-all text-sm"
                >
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.nav
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white shadow-sm sticky top-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={140} height={45} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 transition-colors ${
                  item.name === "HOME"
                    ? "text-yellow-500 hover:text-yellow-600"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {item.hasDropdown && renderDropdown(item.name)}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-yellow-500 transition text-sm"
          >
            <User className="w-4 h-4" /> REGISTER/LOGIN
          </Link>

          {/* Add Property */}
          <Link
            href="/add-property"
            className="relative flex items-center justify-center gap-2 px-5 py-2.5 w-[180px] bg-gray-900 text-white text-sm font-semibold overflow-hidden group"
          >
            <span className="absolute w-[180px] h-[180px] bg-yellow-500 -left-full top-0 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-1/2" />
            <Plus className="w-4 h-4 relative z-10" />
            <span className="relative z-10">ADD PROPERTY</span>
          </Link>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <ul className="p-4 space-y-3 text-sm font-medium">
              {menuItems.map((item) => {
                const isOpen = activeMenu === item.name;

                return (
                  <li key={item.name}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href}
                        className="py-2 text-gray-700 hover:text-yellow-500 flex-1"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>

                      {item.hasDropdown && (
                        <button
                          className="p-2"
                          onClick={() =>
                            setActiveMenu(isOpen ? null : item.name)
                          }
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isOpen && "rotate-180"
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.hasDropdown && isOpen && (
                      <ul className="pl-4 pt-2 space-y-2">
                        {dropdownContent[item.name].map((i, idx) => (
                          <li key={idx}>
                            <Link
                              href={i.href}
                              onClick={() => setMobileOpen(false)}
                              className="block text-gray-600 hover:text-yellow-500"
                            >
                              {i.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* Login / Signup */}
              <li className="pt-4 flex flex-col space-y-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline"
                >
                  Register/Login
                </Link>
                <Link
                  href="/SignUp"
                  className="px-4 py-2 bg-black text-white hover:bg-neutral-800 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Signup
                </Link>

                {/* Mobile Add Property */}
                <Link
                  href="/add-property"
                  className="relative flex items-center justify-center gap-2 px-6 py-3 w-[230px] bg-gray-900 text-white overflow-hidden group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="absolute w-[230px] h-[230px] bg-yellow-500 -left-full top-0 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-1/2" />
                  <Plus className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">ADD PROPERTY</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
