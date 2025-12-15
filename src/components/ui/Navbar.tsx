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
  Home,
  Building,
  House,
  Briefcase,
  Layers,Info, BookOpen,
} from "lucide-react";

import LoginModal from "@/components/Auth/loginModal";
import SignupModal from "@/components/Auth/SignupModal";
import { usePathname } from "next/navigation";


// --- TYPES ---
type MenuItem = { name: string; href: string; hasDropdown: boolean };
type MegaMenuSubItem = {
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
type MegaMenuContent = Record<string, { columns: MegaMenuColumn[] }>;

// --- MENU DATA ---
const menuItems: MenuItem[] = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "SALE", href: "/sell", hasDropdown: true },
  { name: "FOR RENT", href: "/rent", hasDropdown: true },
  { name: "PROPERTY", href: "/mortgage", hasDropdown: true },
  { name: "SERVICES", href: "/pages", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
];

const megaMenuContent: MegaMenuContent = {
  "SALE": {
    columns: [
      {
        title: "Buying Essentials",
        items: [
          {
            text: "Homes for Sale",
            href: "/sell/home-for-sale",
            icon: Home,
            description: "Find your dream house.",
          },
          {
            text: "New Construction",
            href: "/new-construction",
            icon: Building,
            description: "Latest properties.",
          },
          {
            text: "Recently Sold",
            href: "/recently-sold-homes",
            icon: House,
            description: "Market values.",
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
            description: "Area guides.",
          },
          {
            text: "Housing Market Trends",
            href: "/housing-market-trends",
            icon: Briefcase,
            description: "Analysis.",
          },
        ],
      },
    ],
  },
  "FOR RENT": {
    columns: [
      {
        title: "Rental Types",
        items: [
          { text: "Apartments", href: "/apartments-for-rent", icon: Building },
          { text: "Houses", href: "/houses-for-rent", icon: House },
        ],
      },
      {
        title: "Landlord Resources",
        items: [
          { text: "Manage Rentals", href: "/manage-rentals", icon: Briefcase },
          { text: "List Rentals", href: "/list-your-rentals", icon: Plus },
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
        title: "Investment",
        items: [
          { text: "Investment", href: "/property-investment", icon: Briefcase },
          { text: "Commercial", href: "/commercial-property", icon: Building },
          { text: "Residential", href: "/residential-property", icon: House },
        ],
      },
    ],
  },
  SERVICES: {
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
        items: [
          { text: "Blog", href: "/blog", icon: BookOpen },
          { text: "FAQ", href: "/faq", icon: Info },
        ],
      },
      {
        title: "Legal",
        items: [
          { text: "Terms", href: "/terms-of-service", icon: Layers },
          { text: "Privacy", href: "/privacy-policy", icon: Layers },
        ],
      },
    ],
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // dummy login
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname?.startsWith(path));

  // MODIFIED navClass function to set text to white and hover to primary blue (assuming 'yellow-500' is primary blue in this context)
  const navClass = (path: string, mobile = false) =>
    mobile
      ? `block p-3 rounded-lg ${
          isActive(path)
            ? "bg-yellow-50 text-yellow-600 font-bold"
            : "text-gray-700 hover:bg-gray-50 hover:text-yellow-500"
        }`
      : `px-3 py-2 text-sm xl:text-base font-medium ${
          isActive(path)
            ? "text-yellow-500 font-bold" // Active link color remains yellow-500
            : "text-white hover:text-yellow-500" // Text is white, hover is yellow-500
        }`;

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
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden xl:flex items-center  space-x-1">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setHoveredMenu(item.name)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={item.href} className={navClass(item.href)}>
                  {item.name}
                </Link>
                <AnimatePresence>
                  {hoveredMenu === item.name &&
                    item.hasDropdown &&
                    megaMenuContent[item.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-yellow-500 shadow-xl rounded-xl overflow-hidden z-50 w-[600px] max-w-[90vw]"
                      >
                        <div
                          className="p-6 grid gap-6"
                          style={{
                            gridTemplateColumns: `repeat(${
                              megaMenuContent[item.name].columns.length
                            },1fr)`,
                          }}
                        >
                          {megaMenuContent[item.name].columns.map((col, i) => (
                            <div key={i}>
                              <h4 className="uppercase text-xs font-bold text-gray-500 mb-4">
                                {col.title}
                              </h4>
                              <ul className="space-y-1">
                                {col.items?.map((sub, j) => (
                                  <li key={j}>
                                    <Link
                                      href={sub.href}
                                      className="group flex gap-3 p-3 rounded-lg hover:bg-yellow-50 transition"
                                    >
                                      <sub.icon className="w-5 h-5 text-gray-500 group-hover:text-yellow-600" />
                                      <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-yellow-600 text-sm">
                                          {sub.text}
                                        </div>
                                        {sub.description && (
                                          <p className="text-xs text-gray-500">
                                            {sub.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
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
              <button
                onClick={() => setAuthModal("login")}
                // Changed text color to white and hover to yellow-500 (primary blue)
                className="hidden xl:flex items-center text-sm font-medium text-white hover:text-yellow-500"
              >
                <User className="w-4 h-4 mr-1" /> LOGIN / REGISTER
              </button>
            ) : (
              <div className="hidden xl:flex items-center gap-2 relative">
                <button
                  className="flex items-center gap-2 px-3 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200"
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
                            onClick={() => alert("Change Password")}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-sm"
                          >
                            Change Password
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLoggedIn(false)}
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

            {isLoggedIn && (
              <Link
                href="/add-property"
                className="hidden md:flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600"
              >
                <Plus className="w-4 h-4 mr-1" /> ADD PROPERTY
              </Link>
            )}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed left-0 top-0 h-full w-72 bg-white z-50 p-5 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                {/* Note: changed to /logo-svg-01.svg for consistency with desktop logo path in this example */}
                <Image src="/logo-svg-01.svg" width={90} height={60} alt="logo" />
                <button
                  className="text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  <X />
                </button>
              </div>
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const isOpen = mobileExpanded === item.name;
                  const hasData =
                    item.hasDropdown && megaMenuContent[item.name];
                  return (
                    <li
                      key={item.name}
                      className="border-b border-gray-100 last:border-0"
                    >
                      {hasData ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileExpanded(isOpen ? null : item.name)
                            }
                            className={`flex justify-between w-full text-left ${navClass(
                              item.href,
                              true
                            )}`}
                          >
                            {item.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-gray-50 rounded-b-lg"
                              >
                                <div className="p-4 space-y-4">
                                  {megaMenuContent[item.name].columns.map(
                                    (col, i) => (
                                      <div key={i}>
                                        <h4 className="uppercase text-[10px] font-bold text-black mb-2">
                                          {col.title}
                                        </h4>
                                        <ul className="space-y-1">
                                          {col.items?.map((sub, j) => (
                                            <li key={j}>
                                              <Link
                                                href={sub.href}
                                                onClick={() =>
                                                  setMobileOpen(false)
                                                }
                                                // Mobile Sub-link: set text to gray-700 and hover to yellow-600
                                                // Note: The previous code had "text-white" here, which seems incorrect for a mobile menu on a white background. I'm defaulting to a readable color (gray-700) with the requested hover color (yellow-600)
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
                          className={navClass(item.href, true)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setAuthModal("login");
                    setMobileOpen(false);
                  }}
                  className="mt-6 w-full border text-black py-2 rounded-lg font-medium"
                >
                  LOGIN / REGISTER
                </button>
              ) : (
                <>
                  <Link
                    href="/add-property"
                    className="mt-6 block bg-yellow-500 text-white py-3 text-center rounded-lg font-bold"
                  >
                    ADD PROPERTY
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="mt-2 w-full border py-2 rounded-lg font-medium"
                  >
                    Logout
                  </button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* AUTH MODALS */}
      {authModal === "login" && (
        <LoginModal
          onClose={() => setAuthModal(null)}
          openSignup={() => setAuthModal("signup")}
        />
      )}
      {authModal === "signup" && (
        <SignupModal
          onClose={() => setAuthModal(null)}
          openLogin={() => setAuthModal("login")}
        />
      )}
    </>
  );
}
