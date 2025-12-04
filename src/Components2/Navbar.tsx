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

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Mega menu content
  const dropdownContent: { [key: string]: string[] } = {
    "FOR SALE": [
      "Homes for sale",
     
     
      "New Construction For Sale",
      
      
      "Explore the neighborhood",
      "Housing market trends",
      
      
      "Recently sold homes",
    ],
    "FOR RENT": [
      "Apartments for rent",
      "Houses for rent",
      
   
      "Contact rent landlord",
      
      
      "Manage rentals",
      "List your rentals",
     
    ],
    PROPERTY: [
      "Property search",
      "Property types",
      
      "Property valuation",
      "Property investment",
      "Commercial property",
      "Residential property",
      "Property listings",
    ],
    PAGES: [
      "About us",
      "Contact us",
      "FAQ",
      "Blog",
      "Terms of service",
      "Privacy policy",
      "Careers",
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

  return (
    <motion.nav
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white shadow-sm sticky top-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={140}
            height={45}
            className="object-contain"
          />
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

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeMenu === item.name && dropdownContent[item.name] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-xl rounded-lg p-4 z-50"
                  >
                    <ul className="space-y-2">
                      {dropdownContent[item.name].map((row, i) => (
                        <li
                          key={i}
                          className="text-gray-600 hover:text-yellow-500 hover:pl-2 transition-all cursor-pointer text-sm"
                        >
                          {row}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-yellow-500 transition font-medium text-sm"
          >
            <User className="w-4 h-4" />
            REGISTER/LOGIN
          </Link>
          <Link
            href="/add-property"
            className="relative flex items-center justify-center gap-2 px-5 py-2.5 w-[180px] h-[40px] bg-gray-900 text-white font-semibold text-sm cursor-pointer overflow-hidden shadow-md transition-all duration-300 active:translate-x-[5px] active:translate-y-[5px] group"
          >
            <span className="absolute w-[180px] h-[180px] bg-yellow-500 rounded-full -left-full top-0 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-1/2 group-hover:rounded-none"></span>
            <Plus className="w-4 h-4 relative z-10" />
            <span className="relative z-10">ADD PROPERTY</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
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
            className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <ul className="p-4 space-y-3 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.hasDropdown ? (
                    <details className="group">
                      <summary className="py-2 cursor-pointer text-gray-700 hover:text-yellow-500 flex items-center justify-between">
                        {item.name}
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                      </summary>
                      <ul className="pl-4 pt-2 space-y-2">
                        {dropdownContent[item.name].map((row, i) => (
                          <li
                            key={i}
                            className="text-gray-600 hover:text-yellow-500 cursor-pointer"
                          >
                            {row}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 ${
                        item.name === "HOME"
                          ? "text-yellow-500"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}

              {/* Mobile Right-side buttons */}
              <li className="pt-4 flex flex-col space-y-3 border-t">
                <Link
                  href="/login"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-yellow-500"
                >
                  <User className="w-4 h-4" />
                  REGISTER/LOGIN
                </Link>
                <Link
  href="/add-property"
  className="relative flex items-center justify-center gap-2 
  px-6 py-3 w-[230px] h-[48px] 
  bg-gray-900 text-white font-semibold text-sm cursor-pointer 
  overflow-hidden shadow-md transition-all duration-300 
  active:translate-x-[5px] active:translate-y-[5px] group"
  style={{ borderRadius: "0px" }}
>
  <span
    className="absolute w-[230px] h-[230px] bg-yellow-500 -left-full top-0 
    transition-all duration-300 group-hover:translate-x-full 
    group-hover:-translate-y-1/2 group-hover:rounded-none"
    style={{ borderRadius: "0px" }}
  ></span>

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
