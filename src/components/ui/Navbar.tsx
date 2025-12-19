"use client";

import { useState, useEffect } from "react";
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
  Layers,
  Info,
} from "lucide-react";
import LoginModal from "@/components/Auth/loginModal";
import SignupModal from "@/components/Auth/SignupModal";

// --- TYPES & DATA ---
type MenuItem = { name: string; href: string; hasDropdown: boolean };
type MegaMenuSubItem = {
  text: string;
  href: string;
  icon: React.ElementType;
  description?: string;
};
type MegaMenuContent = Record<
  string,
  { columns: { title: string; items?: MegaMenuSubItem[] }[] }
>;

const menuItems: MenuItem[] = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "BUY", href: "/buy", hasDropdown: true },
  { name: "SALE", href: "/sell", hasDropdown: true },
  { name: "RENT", href: "/rent", hasDropdown: true },
  { name: "BLOG", href: "/#", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
];

const megaMenuContent: MegaMenuContent = {
  BUY: {
    columns: [
      {
        title: "Market  Insights",
        items: [{ text: "Sold Homes", href: "/soldhomes", icon: Building }],
      },
      {
        title: "Buying  Essentials",
        items: [{ text: "Property", href: "/property", icon: Briefcase }],
      },
    ],
  },

  SALE: {
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

  RENT: {
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

  // SERVICES: {
  //   columns: [
  //     { title: "Company", items: [{ text: "About Us", href: "/about", icon: Info }, { text: "Contact Us", href: "/contact", icon: BookOpen }, { text: "Careers", href: "/careers", icon: Briefcase }] },
  //     { title: "Resources", items: [{ text: "Blog", href: "/blog", icon: BookOpen }, { text: "FAQ", href: "/faq", icon: Info }] },
  //     { title: "Legal", items: [{ text: "Terms", href: "/terms-of-service", icon: Layers }, { text: "Privacy", href: "/privacy-policy", icon: Layers }] },
  //   ],
  // },
};

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav className="bg-[#1B3A57]  shadow-sm sticky top-0 z-50 block ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center gap-5">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/albasync-01.png"
              width={150}
              height={50}
              alt="logo"
              priority
              className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP / TABLET MENU */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 h-full text-sm md:text-sm lg:text-base">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative px-2 md:px-1 lg:px-4 h-full flex items-center"
                onMouseEnter={() =>
                  item.hasDropdown && setHoveredMenu(item.name)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={item.href}
                  className="py-2 md:py-1 lg:py-2 text-white hover:text-yellow-500 transition-colors whitespace-nowrap"
                >
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
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-yellow-500 shadow-xl rounded-b-xl overflow-hidden z-50 w-[600px] max-w-[90vw]"
                      >
                        <div
                          className="p-4 lg:p-6 grid gap-4 lg:gap-6"
                          style={{
                            gridTemplateColumns: `repeat(${
                              megaMenuContent[item.name].columns.length
                            },1fr)`,
                          }}
                        >
                          {megaMenuContent[item.name].columns.map((col, i) => (
                            <div key={i}>
                              <h4 className="uppercase text-[10px] lg:text-xs font-bold text-gray-500 mb-2 lg:mb-4">
                                {col.title}
                              </h4>
                              <ul className="space-y-1">
                                {col.items?.map((sub, j) => (
                                  <li key={j}>
                                    <Link
                                      href={sub.href}
                                      className="group flex gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg hover:bg-yellow-50 transition"
                                    >
                                      <sub.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500 group-hover:text-yellow-600 shrink-0" />
                                      <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-yellow-600 text-xs lg:text-sm">
                                          {sub.text}
                                        </div>
                                        {sub.description && (
                                          <p className="text-[9px] lg:text-xs text-gray-500">
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

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2 md:gap-3">
            {!isLoggedIn ? (
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setAuthModal("login")}
                  className="flex items-center text-xs md:text-sm lg:text-sm font-medium text-white hover:text-yellow-500 whitespace-nowrap"
                >
                  <User className="w-3 h-3 md:w-4 md:h-4 mr-1" /> LOGIN
                </button>
                <button
                  onClick={() => setAuthModal("signup")}
                  className="flex items-center text-xs md:text-sm lg:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition whitespace-nowrap"
                >
                  REGISTER
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2 relative">
                <button
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "profile" ? null : "profile"
                    )
                  }
                >
                  <User className="w-3 h-3 md:w-4 md:h-4" /> Profile{" "}
                  <ChevronDown
                    className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${
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
                      className="absolute right-0 top-full mt-2 w-40 md:w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <button
                            onClick={() => alert("Change Password")}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50"
                          >
                            Change Password
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLoggedIn(false)}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50"
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
                className="hidden md:flex items-center bg-yellow-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold hover:bg-yellow-600 whitespace-nowrap"
              >
                <Plus className="w-3 h-3 md:w-4 md:h-4 mr-1" /> ADD PROPERTY
              </Link>
            )}

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
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
              className="fixed left-0 top-0 h-full w-full max-w-xs bg-white text-black z-50 p-5 overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <Image
                  src="/albasync-04.png"
                  width={120}
                  height={60}
                  alt="logo"
                  className="h-10 w-auto object-contain"
                />
                <button
                  className="text-black p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const isOpen = mobileExpanded === item.name;
                  return (
                    <li
                      key={item.name}
                      className="border-b border-gray-100 last:border-0"
                    >
                      {item.hasDropdown && megaMenuContent[item.name] ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileExpanded(isOpen ? null : item.name)
                            }
                            className="flex justify-between items-center w-full text-left py-3 font-medium text-gray-800 hover:text-yellow-600"
                          >
                            {item.name}{" "}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-gray-50 rounded-lg"
                              >
                                <div className="p-4 space-y-4">
                                  {megaMenuContent[item.name].columns.map(
                                    (col, i) => (
                                      <div key={i}>
                                        <h4 className="uppercase text-[10px] font-bold text-gray-500 mb-2 tracking-wider">
                                          {col.title}
                                        </h4>
                                        <ul className="space-y-2">
                                          {col.items?.map((sub, j) => (
                                            <li key={j}>
                                              <Link
                                                href={sub.href}
                                                onClick={() =>
                                                  setMobileOpen(false)
                                                }
                                                className="flex items-center text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all"
                                              >
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 opacity-60"></span>
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
                          className="block py-3 font-medium text-gray-800 hover:text-yellow-600"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
              {!isLoggedIn ? (
                <div className="mt-8 space-y-3 ">
                  <button
                    onClick={() => {
                      setAuthModal("login");
                      setMobileOpen(false);
                    }}
                    className="w-full border  border-gray-300 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-50"
                  >
                    LOGIN
                  </button>
                  <button
                    onClick={() => {
                      setAuthModal("signup");
                      setMobileOpen(false);
                    }}
                    className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 shadow-sm"
                  >
                    REGISTER
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/add-property"
                    className="mt-8 flex justify-center items-center bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 shadow-md"
                  >
                    <Plus className="w-5 h-5 mr-2" /> ADD PROPERTY
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="mt-3 w-full border border-gray-300 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-50"
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
