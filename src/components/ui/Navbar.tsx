"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  User,
  Plus,
  Home,
  Building,
  House,
  Briefcase,
  Layers,
  Info,
  BookOpen,
  X,
  Menu,
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
  cta?: {
    text: string;
    href: string;
  };
};

type MegaMenuContent = {
  [key: string]: {
    columns: MegaMenuColumn[];
  };
};

// --- Mega Menu Data (NO CHANGE) ---
const megaMenuContent: MegaMenuContent = {
  "FOR SALE": {
    columns: [
      {
        title: "Buying Essentials",
        items: [
          {
            text: "Homes for Sale",
            href: "/sell/home-for-sale",
            icon: Home,
            description: "Find your dream house or apartment.",
          },
          {
            text: "New Construction",
            href: "/new-construction",
            icon: Building,
            description: "Discover the latest properties.",
          },
          {
            text: "Recently Sold",
            href: "/recently-sold-homes",
            icon: House,
            description: "View current market values.",
          },
        ],
      },
      {
        title: "Market Insight",
        items: [
          {
            text: "Explore Neighborhoods",
            href: "/sell/neighbourhood",
            icon: Info,
            description: "Detailed area guides and statistics.",
          },
          {
            text: "Housing Market Trends",
            href: "/housing-market-trends",
            icon: Briefcase,
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
          {
            text: "Apartments for Rent",
            href: "/apartments-for-rent",
            icon: Building,
          },
          {
            text: "Houses for Rent",
            href: "/houses-for-rent",
            icon: House,
          },
        ],
      },
      {
        title: "Landlord Resources",
        items: [
          { text: "Manage Rentals", href: "/manage-rentals", icon: Briefcase },
          { text: "List Your Rentals", href: "/list-your-rentals", icon: Plus },
          {
            text: "Contact Landlord",
            href: "/contact-rent-landlord",
            icon: User,
          },
        ],
      },
    ],
  },

  PROPERTY: {
    columns: [
      {
        title: "Search & Valuation",
        items: [
          { text: "Property Search", href: "/property-search", icon: Layers },
          { text: "Property Listings", href: "/property-listings", icon: Home },
          {
            text: "Property Valuation",
            href: "/property-valuation",
            icon: Info,
          },
        ],
      },
      {
        title: "Investment & Types",
        items: [
          {
            text: "Property Investment",
            href: "/property-investment",
            icon: Briefcase,
          },
          { text: "Commercial Property", href: "/commercial-property", icon: Building },
          { text: "Residential Property", href: "/residential-property", icon: House },
          { text: "Property Types", href: "/property-types", icon: Layers },
        ],
      },
    ],
  },

  PAGES: {
    columns: [
      {
        title: "Company",
        items: [
          { text: "About Us", href: "/about", icon: Info },
          { text: "Contact Us", href: "/contact", icon: BookOpen },
          { text: "Careers", href: "/careers", icon: Briefcase },
        ],
      },
      {
        title: "Resources",
        items: [{ text: "Blog", href: "/blog", icon: BookOpen }, { text: "FAQ", href: "/faq", icon: Info }],
      },
      {
        title: "Legal",
        items: [
          { text: "Terms of Service", href: "/terms-of-service", icon: Layers },
          { text: "Privacy Policy", href: "/privacy-policy", icon: Layers },
        ],
      },
    ],
  },
};

const menuItems = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "FOR SALE", href: "/sell", hasDropdown: true },
  { name: "FOR RENT", href: "/rent", hasDropdown: true },
  { name: "PROPERTY", href: "/mortgege", hasDropdown: true },
  { name: "PAGES", href: "/pages", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
];

// --- Reusable Mega Item ---
const MegaMenuItem = ({ item, onClick = () => {} }: { item: MenuItemType; onClick?: () => void }) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex gap-3 p-3 rounded-lg hover:bg-yellow-50 transition"
    >
      <Icon className="w-5 h-5 text-gray-500 group-hover:text-yellow-600" />
      <div>
        <div className="font-semibold text-gray-800 group-hover:text-yellow-600 text-sm">{item.text}</div>
        {item.description && <p className="text-xs text-gray-500">{item.description}</p>}
      </div>
    </Link>
  );
};

// --- NAVBAR ---
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const getMegaMenu = (name: string) => megaMenuContent[name as keyof typeof megaMenuContent];

  return (
    <>
      {/* MAIN NAV */}
      <motion.nav className="bg-white border-b shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" width={140} height={45} alt="logo" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex space-x-3 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 transition-colors ${
                    activeMenu === item.name ? "text-yellow-500" : "text-gray-700 hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Desktop Mega Menu – unchanged */}
                <AnimatePresence>
                  {activeMenu === item.name && item.hasDropdown && getMegaMenu(item.name) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-white border-t-2 border-yellow-500 shadow-xl rounded-xl overflow-hidden z-50"
                      style={{ minWidth: "600px" }}
                    >
                      <div
                        className="p-6 grid gap-6"
                        style={{
                          gridTemplateColumns: `repeat(${getMegaMenu(item.name).columns.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {getMegaMenu(item.name).columns.map((col, i) => (
                          <div key={i}>
                            <h4 className="uppercase text-xs font-bold text-gray-500 mb-4">{col.title}</h4>

                            {col.isFeatured && col.cta ? (
                              <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="h-24 bg-gray-200 rounded mb-3 flex items-center justify-center text-xs text-gray-500">
                                  [Image Placeholder]
                                </div>
                                <Link
                                  href={col.cta.href}
                                  className="block text-center bg-yellow-600 text-white py-2 rounded-md text-sm font-bold"
                                >
                                  {col.cta.text}
                                </Link>
                              </div>
                            ) : (
                              <ul className="space-y-1">
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/login" className="px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium">
              <User className="w-4 h-4 inline mr-1" /> REGISTER/LOGIN
            </Link>

            <Link
              href="/add-property"
              className="px-5 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600"
            >
              <Plus className="w-4 h-4 inline mr-1" />
              ADD PROPERTY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </motion.nav>

     

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* LEFT Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 p-5 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-5">
                <Image src="/logo.svg" width={120} height={40} alt="Logo" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-700 hover:text-yellow-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <ul className="space-y-3">
                {menuItems.map((item) => {
                  const isOpen = activeMenu === item.name;
                  const data = getMegaMenu(item.name);

                  return (
                    <li key={item.name}>
                      {item.hasDropdown && data ? (
                        <>
                          <button
                            onClick={() => setActiveMenu(isOpen ? null : item.name)}
                            className="flex justify-between items-center w-full text-left text-gray-700 hover:text-yellow-500 text-base p-2"
                          >
                            {item.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Dropdown Items */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="pl-4 overflow-hidden"
                              >
                                {data.columns.map((col, i) => (
                                  <div key={i} className="mb-4">
                                    <h4 className="uppercase text-xs font-bold text-yellow-600 mb-2">
                                      {col.title}
                                    </h4>

                                    <ul>
                                      {col.items?.map((sub, idx) => (
                                        <li key={idx}>
                                          <Link
                                            href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-1.5 text-gray-600 hover:text-yellow-500"
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
                          className="block p-2 text-gray-700 hover:text-yellow-500"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Buttons */}
              <div className="mt-5 border-t pt-5 space-y-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="w-5 h-5" /> REGISTER/LOGIN
                </Link>

                <Link
                  href="/add-property"
                  className="block text-center bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600"
                  onClick={() => setMobileOpen(false)}
                >
                  <Plus className="w-5 h-5 inline mr-1" />
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
