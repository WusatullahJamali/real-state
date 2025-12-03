"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll behavior: hide on scroll up, show on scroll down
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
    Buy: [
      "Homes for sale",
      "15747 homes for sale",
      "Home homes for sale",
      "Home foreclosures",
      "Home open houses",
      "New Construction For Sale",
      "All Home new construction",
      "Home new home communities",
      "Home new construction and plans",
      "Explore the neighborhood",
      "15747 housing market trends",
      "Top Schools in 15747",
      "15747 property records",
      "Recently sold homes in 15747",
      "Home housing market trends",
      "Top Schools in Home",
      "Home property records",
      "Recently sold homes in Home",
      "Home buying tips",
      "Home buying checklist",
      "Home buyers reveal: 'What I wish I had known before buying my first home'",
      "First-time home buyer resource center",
      "More home buying insights",
      "Success stories",
    ],
    Sell: [
      "Home selling tools",
      "Compare agents & pick the right one",
      "Find the right selling option for you",
      "How much can you make selling your home?",
      "See what your home is worth",
      "Home selling advice",
      "Complete guide to selling your home",
      "Should I sell my home now?",
      "How much is my home worth?",
      "How should I sell my home?",
      "How to select an agent?",
      "How to prepare your home for sale?",
      "See more home selling insights",
      "Recently sold",
      "Recently sold homes in 15747",
      "Recently sold homes in Home",
    ],
    Rent: [
      "Apartments for rent",
      "All 15747 rentals",
      "Apartments for rent in Home",
      "Houses for rent in Home",
      "All Home rentals",
      "Renter tools",
      "Contacted rentals",
      "Apply now online",
      "Landlord tools",
      "Manage rentals",
      "List your rentals",
      "Screen tenants",
      "Create a lease",
      "Collect rent online",
      "Home renting tips",
      "Renter's resource center",
      "Should I rent or buy?",
      "Debunked! 8 myths about renting",
      "More renting insights",
    ],
    Mortgage: [
      "Mortgage rates",
      "Get pre-approved",
      "Home mortgage rates",
      "Home equity financing rates",
      "Refinance rates",
      "Finance advice",
      "For veterans",
      "Calculators",
      "Mortgage calculator",
      "Refinance calculator",
      "How much house can I afford",
      "Rent vs. buy",
      "Financial advice",
      "6 ways home buyers mess up getting a mortgage",
      "Mortgage guide",
      "Learn about home insurance",
      "More finance insights",
    ],
    "Find an Agent": [
      "Find a real estate agent",
      "Find a local agent",
      "Top rated Home agents",
      "Compare agent proposals",
      "Find teams and companies",
      "Why use a REALTOR®",
      "6 reasons you should never buy or sell a home without an agent",
      "Difference between agent, broker & REALTOR®",
      "Listing vs. buyer agent",
      "How to find a REALTOR®",
      "News around REALTORS®",
      "Real estate agents reveal the toughest home buyers they've ever met",
      "More news around REALTORS®",
    ],
    "News & Insights": [
      "News",
      "The latest news",
      "Housing trends",
      "Real estate news",
      "Celebrity real estate",
      "Unique homes",
      "For PROs",
      "Corporate blog",
      "Insights",
      "Buying",
      "Selling",
      "Renting",
      "Financing",
      "Moving",
      "Living",
      "Home improvement",
      "Research",
      "2025 housing market predictions",
      "NEW",
      "2025 hottest zip codes",
      "Guides & more",
      "All guides",
      "Complete guide on how to sell your home",
      "First-time home buyer resource center",
      "Mortgage guide",
      "Veterans home buyer guide",
      "USDA home loan guide",
      "Home insurance guide",
      "Real estate videos",
      "Housing resources",
      "About us",
    ],
  };

  const menuItems = ["Buy", "Sell", "Rent", "Mortgage", "Find an Agent", "My Home", "News & Insights"];

  return (
    <motion.nav
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white shadow sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo-brand2.svg" alt="Logo" width={120} height={40} className="object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* If Buy, Sell, or Rent, make it a Link */}
              {item === "Buy" ? (
                <Link href="/" className="hover:underline">{item}</Link>
              ) : item === "Sell" ? (
                <Link href="/sell" className="hover:underline">{item}</Link>
              ) : item === "Rent" ? (
                <Link href="/rent" className="hover:underline">{item}</Link>
              ) : item === "Mortgage" ? (
                <Link href="/mortgege" className="hover:underline">{item}</Link>
              ): item === "Find an Agent" ?(
                <Link href="/find an agent" className="hover:underline">{item}</Link>
              ): item === "My Home" ?(
                <Link href="/myhome" className="hover:underline">{item}</Link>
              ):(
                <span className="hover:underline">{item}</span>
              )}

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeMenu === item && dropdownContent[item] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-full mt-2 w-[650px] bg-white border shadow-xl rounded-lg p-6 grid grid-cols-3 gap-6 z-50 text-sm"
                  >
                    {Array.from({ length: 3 }).map((_, colIndex) => {
                      const start = Math.floor((dropdownContent[item].length / 3) * colIndex);
                      const end = Math.floor((dropdownContent[item].length / 3) * (colIndex + 1));
                      const columnItems = dropdownContent[item].slice(start, end);
                      return (
                        <ul key={colIndex} className="space-y-2">
                          {columnItems.map((row, i) => (
                            <li key={i} className="hover:text-black transition">
                              {row}
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Right Side Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/managerentals" className="hover:underline font-medium">Manage Rentals</Link>
          <Link href="advertise" className="hover:underline font-medium">Advertise</Link>
          <Link href="/login" className="hover:underline font-medium">Login</Link>
          <Link href="signUp" className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800 transition">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <ul className="p-4 space-y-4 font-medium">
              {menuItems.map((item) => (
                <li key={item}>
                  {item === "Buy" ? (
                    <Link href="/" className="hover:underline">{item}</Link>
                  ) : item === "Sell" ? (
                    <Link href="/sell" className="hover:underline">{item}</Link>
                  ) : item === "Rent" ? (
                    <Link href="/rent" className="hover:underline">{item}</Link>
                  ) : (
                    <details className="border-b pb-2">
                      <summary className="py-2 cursor-pointer">{item}</summary>
                      <ul className="pl-4 pt-2 space-y-2 text-sm">
                        {dropdownContent[item].map((row, i) => (
                          <li key={i}>{row}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}

              {/* Right-side links */}
              <li className="pt-4 flex flex-col space-y-2">
                <Link href="#" className="hover:underline">Manage Rentals</Link>
                <Link href="#" className="hover:underline">Advertise</Link>
                <Link href="/login" className="hover:underline">Login</Link>
                <Link href="/signUp" className="px-4 py-2 bg-black text-white hover:bg-neutral-800 transition">
                  Signup
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
