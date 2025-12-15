"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  User,
  Plus,
  Menu,
  X,
} from "lucide-react";

// --- Types ---
type MenuItemType = {
  text: string;
  href: string;
  icon: any;
  description?: string;
};

type MegaMenuColumn = {
  title: string;
  items?: MenuItemType[];
  isFeatured?: boolean;
  image?: string;
  cta?: { text: string; href: string };
};

type MegaMenuContent = {
  [key: string]: { columns: MegaMenuColumn[] };
};

// --- Mega Menu Data ---
const megaMenuContent: MegaMenuContent = {
  "FOR SALE": {
    columns: [
      {
        title: "Buying Essentials",
        items: [
          {
            text: "Homes for Sale",
            href: "/home-for-sale",
            icon: null,
            description: "Find your dream house or apartment.",
          },
          {
            text: "New Construction",
            href: "/new-construction",
            icon: null,
            description: "Discover the latest properties.",
          },
          {
            text: "Recently Sold",
            href: "/recently-sold-homes",
            icon: null,
            description: "View current market values.",
          },
        ],
      },
      {
        title: "Market Insight",
        items: [
          {
            text: "Explore Neighborhoods",
            href: "/neighbourhood",
            icon: null,
            description: "Detailed area guides and statistics.",
          },
          {
            text: "Housing Market Trends",
            href: "/housing-market-trends",
            icon: null,
            description: "Analysis and forecasts.",
          },
        ],
      },
      {
        title: "Featured Service",
        isFeatured: true,
        image: "/images/featured-sale.jpg",
        cta: {
          text: "Get a Free Home Valuation",
          href: "/free-valuation",
        },
      },
    ],
  },

  "FOR RENT": {
    columns: [
      {
        title: "Rental Types",
        items: [
          { text: "Apartments for Rent", href: "/apartments-for-rent", icon: null },
          { text: "Houses for Rent", href: "/houses-for-rent", icon: null },
        ],
      },
      {
        title: "Landlord Resources",
        items: [
          { text: "Manage Rentals", href: "/manage-rentals", icon: null },
          { text: "List Your Rentals", href: "/list-your-rentals", icon: null },
          { text: "Contact Landlord", href: "/contact-rent-landlord", icon: null },
        ],
      },
    ],
  },

  PROPERTY: {
    columns: [
      {
        title: "Search & Valuation",
        items: [
          { text: "Property Search", href: "/property-search", icon: null },
          { text: "Property Listings", href: "/property-listings", icon: null },
          { text: "Property Valuation", href: "/property-valuation", icon: null },
        ],
      },
      {
        title: "Investment & Types",
        items: [
          { text: "Property Investment", href: "/property-investment", icon: null },
          { text: "Commercial Property", href: "/commercial-property", icon: null },
          { text: "Residential Property", href: "/residential-property", icon: null },
          { text: "Property Types", href: "/property-types", icon: null },
        ],
      },
    ],
  },

  PAGES: {
    columns: [
      {
        title: "Company",
        items: [
          { text: "About Us", href: "/about", icon: null },
          { text: "Contact Us", href: "/contact", icon: null },
          { text: "Careers", href: "/careers", icon: null },
        ],
      },
      {
        title: "Resources",
        items: [
          { text: "Blog", href: "/blog", icon: null },
          { text: "FAQ", href: "/faq", icon: null },
        ],
      },
      {
        title: "Legal",
        items: [
          { text: "Terms of Service", href: "/terms-of-service", icon: null },
          { text: "Privacy Policy", href: "/privacy-policy", icon: null },
        ],
      },
    ],
  },
};

// Menu Items
const menuItems = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "FOR SALE", href: "/sell", hasDropdown: true },
  { name: "FOR RENT", href: "/rent", hasDropdown: true },
  { name: "PROPERTY", href: "/mortgege", hasDropdown: true },
  { name: "PAGES", href: "/pages", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
   
];

// Mega Item Component
const MegaMenuItem = ({ item }: { item: MenuItemType }) => {
  return (
    <Link
      href={item.href}
      className="group flex gap-3 p-2 rounded-lg hover:bg-yellow-50 transition"
    >
      <div>
        <div className="font-semibold text-gray-800 group-hover:text-yellow-600 text-sm">
          {item.text}
        </div>
        {item.description && (
          <p className="text-xs text-gray-500">{item.description}</p>
        )}
      </div>
    </Link>
  );
};

// MAIN NAVBAR
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const getMegaMenu = (name: string) =>
    megaMenuContent[name as keyof typeof megaMenuContent];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.svg" width={140} height={45} alt="logo" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex space-x-4 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() =>
                  item.hasDropdown && setActiveMenu(item.name)
                }
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 transition ${
                    activeMenu === item.name
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                </Link>

                {/* DESKTOP MEGA MENU */}
                <AnimatePresence>
                  {item.hasDropdown &&
                    activeMenu === item.name &&
                    getMegaMenu(item.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-xl border-t-2 border-yellow-500 rounded-xl p-6 z-50"
                        style={{ minWidth: "650px" }}
                      >
                        <div
                          className="grid gap-6"
                          style={{
                            gridTemplateColumns: `repeat(${getMegaMenu(item.name).columns.length}, 1fr)`,
                          }}
                        >
                          {getMegaMenu(item.name).columns.map((col, i) => (
                            <div key={i}>
                              <h4 className="uppercase text-xs font-bold text-gray-500 mb-3">
                                {col.title}
                              </h4>

                              {col.isFeatured && col.cta ? (
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                  <div className="h-24 bg-gray-200 rounded mb-3"></div>
                                  <Link
                                    href={col.cta.href}
                                    className="block bg-yellow-600 text-white text-center py-2 rounded-lg"
                                  >
                                    {col.cta.text}
                                  </Link>
                                </div>
                              ) : (
                                <ul className="space-y-2">
                                  {col.items?.map((sub, idx) => (
                                    <li key={idx}>
                                      <MegaMenuItem item={sub} />
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-yellow-500">
              <User className="inline w-4 h-4 mr-1" />
              REGISTER/LOGIN
            </Link>

            <Link
              href="/add-property"
              className="px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-semibold"
            >
              <Plus className="inline w-4 h-4 mr-1" />
              ADD PROPERTY
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 p-5 overflow-y-auto"
            >
              {/* Close */}
              <div className="flex justify-between items-center mb-5">
                <Image src="/logo.svg" width={120} height={40} alt="logo" />
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <ul className="space-y-4">
                {menuItems.map((item) => {
                  const isOpen = activeMenu === item.name;
                  const data = getMegaMenu(item.name);

                  return (
                    <li key={item.name}>
                      {item.hasDropdown && data ? (
                        <>
                          <button
                            onClick={() =>
                              setActiveMenu(isOpen ? null : item.name)
                            }
                            className="flex justify-between w-full text-left text-gray-700 hover:text-yellow-500 p-2"
                          >
                            {item.name}
                            <ChevronDown
                              className={`w-5 h-5 transition ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* DROPDOWN */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="pl-4 overflow-hidden"
                              >
                                {data.columns.map((col, idx) => (
                                  <div key={idx} className="mb-3">
                                    <h4 className="text-xs font-bold text-yellow-600">
                                      {col.title}
                                    </h4>

                                    <ul className="mt-1">
                                      {col.items?.map((sub, idx2) => (
                                        <li key={idx2}>
                                          <Link
                                            href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-1 text-gray-600 hover:text-yellow-500"
                                          >
                                            {sub.text}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-700 hover:text-yellow-500 p-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* MOBILE BUTTONS */}
              <div className="mt-6 border-t pt-4 space-y-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="w-5 h-5" /> REGISTER/LOGIN
                </Link>

                <Link
                  href="/add-property"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-md font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  <Plus className="w-4 h-4" />
                  ADD PROPERTY
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
