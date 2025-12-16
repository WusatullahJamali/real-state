"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, Plus, Menu, X } from "lucide-react";

// --- Types ---
type MenuItemType = {
  text: string;
  href: string;
  // Corrected icon type: it should be optional and allow null based on data
  icon: any | null;
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
            href: "/sell/home-for-sale",
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
            href: "/sell/neighbourhood",
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
          {
            text: "Apartments for Rent",
            href: "/apartments-for-rent",
            icon: null,
          },
          { text: "Houses for Rent", href: "/houses-for-rent", icon: null },
        ],
      },
      {
        title: "Landlord Resources",
        items: [
          { text: "Manage Rentals", href: "/manage-rentals", icon: null },
          { text: "List Your Rentals", href: "/list-your-rentals", icon: null },
          {
            text: "Contact Landlord",
            href: "/contact-rent-landlord",
            icon: null,
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
          { text: "Property Search", href: "/property-search", icon: null },
          { text: "Property Listings", href: "/property-listings", icon: null },
          {
            text: "Property Valuation",
            href: "/property-valuation",
            icon: null,
          },
        ],
      },
      {
        title: "Investment & Types",
        items: [
          {
            text: "Property Investment",
            href: "/property-investment",
            icon: null,
          },
          {
            text: "Commercial Property",
            href: "/commercial-property",
            icon: null,
          },
          {
            text: "Residential Property",
            href: "/residential-property",
            icon: null,
          },
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
  { name: "PROPERTY", href: "/mortgage", hasDropdown: true },
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
  // ERROR FIX: Added missing state declarations
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const getMegaMenu = (name: string) =>
    megaMenuContent[name as keyof typeof megaMenuContent];

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.nav className="bg-[#1B3A57]  border-b shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-svg-01.svg"
              width={90}
              height={60}
              alt="logo"
              className="h-14 w-aut md:invert scale-250"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex space-x-4 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.name}
                // ERROR FIX: Removed duplicate `className="relative"`
                className="relative px-6 "
                onMouseEnter={() =>
                  item.hasDropdown && setActiveMenu(item.name)
                }
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 transition text-white ${
                    // Changed text-gray-700 to text-white for visibility on the dark navbar background
                    activeMenu === item.name
                      ? "text-yellow-500"
                      : "hover:text-yellow-500"
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
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white  border-t-2 border-yellow-500 shadow-xl rounded-xl overflow-hidden z-50 w-[600px] max-w-[90vw]"
                      >
                        <div
                          className="p-6 grid gap-6" // Added p-6 here for padding
                          style={{
                            gridTemplateColumns: `repeat(${
                              getMegaMenu(item.name).columns.length
                            }, 1fr)`,
                          }}
                        >
                          {getMegaMenu(item.name).columns.map((col, i) => (
                            <div key={i}>
                              <h4 className="uppercase text-xs font-bold text-gray-500 mb-3">
                                {col.title}
                              </h4>

                              {col.isFeatured && col.cta ? (
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                  {/* Featured Image Placeholder */}
                                  <div className="relative h-24 bg-gray-200 rounded mb-3 overflow-hidden">
                                    {col.image && (
                                      <Image
                                        src={col.image}
                                        alt={col.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded"
                                      />
                                    )}
                                  </div>
                                  <Link
                                    href={col.cta.href}
                                    className="block bg-yellow-600 text-white text-center py-2 rounded-lg hover:bg-yellow-700 transition"
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

          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <div className="hidden xl:flex items-center gap-3">
                {/* LOGIN */}
                <button
                  onClick={() => setAuthModal("login")}
                  className="flex items-center text-sm font-medium text-white hover:text-yellow-500"
                >
                  <User className="w-4 h-4 mr-1 cursor-pointer" />
                  LOGIN
                </button>

                {/* REGISTER */}
                <button
                  onClick={() => setAuthModal("signup")}
                  className="flex items-center cursor-pointer text-sm font-medium px-4  py-2 rounded-lg
             bg-yellow-500 text-black hover:bg-yellow-400 transition"
                >
                  REGISTER
                </button>
              </div>
            ) : (
              <div className="hidden xl:flex items-center gap-2 relative">
                {/* PROFILE BUTTON */}
                <button
                  className="flex items-center gap-2 px-3 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 text-black"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "profile" ? null : "profile"
                    )
                  }
                >
                  <User className="w-4 h-4" /> Profile
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "profile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "profile" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                    >
                      <ul className="py-2">
                        <li>
                          <button
                            onClick={() => {
                              alert("Change Password");
                              setMobileExpanded(null); // Close after action
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-sm"
                          >
                            Change Password
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setIsLoggedIn(false);
                              setMobileExpanded(null); // Close after action
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-sm"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <Link
              href="/add-property"
              className="px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-semibold"
            >
              <Plus className="inline w-4 h-4 mr-1" />
              ADD PROPERTY
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2">
            {/* Changed text-gray-700 to text-white for visibility on the dark navbar background */}
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </motion.nav>

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
              className="fixed left-0 top-0 h-full w-72 bg-white text-black z-50 p-5 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                {/* Note: changed to /logo-svg-01.svg for consistency with desktop logo path in this example */}
                <Image
                  src="/logo-svg-01.svg"
                  width={90}
                  height={60}
                  alt="logo"
                />
                <button
                  className="text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  <X />
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
                                className="overflow-hidden bg-white rounded-b-lg"
                              >
                                <div className="p-4 space-y-4">
                                  {megaMenuContent[item.name].columns.map(
                                    (col, i) => (
                                      <div key={i}>
                                        <h4 className="uppercase text-[10px] font-bold text-black mb-2">
                                          {col.title}
                                        </h4>
                                        <ul className="space-y-1 text-gray-500">
                                          {col.items?.map((sub, j) => (
                                            <li key={j}>
                                              <Link
                                                href={sub.href}
                                                onClick={() =>
                                                  setMobileOpen(false)
                                                }
                                                // Corrected mobile sub-link styling:
                                                className="block py-1.5 text-sm text-gray-700 hover:text-yellow-600 hover:pl-1 transition-all"
                                              >
                                                {sub.text}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
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

              {!isLoggedIn ? (
                <div className="mt-6 space-y-3">
                  {/* LOGIN */}
                  <button
                    onClick={() => {
                      setAuthModal("login");
                      setMobileOpen(false);
                    }}
                    className="w-full border text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    LOGIN
                  </button>

                  {/* REGISTER */}
                  <button
                    onClick={() => {
                      setAuthModal("signup");
                      setMobileOpen(false);
                    }}
                    className="w-full bg-yellow-500 text-black py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                  >
                    REGISTER
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/add-property"
                    onClick={() => setMobileOpen(false)} // Added to close menu on navigation
                    className="mt-6 block bg-yellow-500 text-white py-3 text-center rounded-lg font-bold hover:bg-yellow-600 transition"
                  >
                    ADD PROPERTY
                  </Link>

                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setMobileOpen(false); // Close menu on logout
                    }}
                    className="mt-2 w-full border py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
