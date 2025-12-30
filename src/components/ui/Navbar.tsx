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
  BookOpen,
  Globe,
} from "lucide-react";

import LoginModal from "@/components/Auth/loginModal";
import SignupModal from "@/components/Auth/SignupModal";

/* ---------------- TYPES ---------------- */
type MenuItem = { name: string; href: string; hasDropdown: boolean };
type MegaMenuSubItem = {
  text: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
};
type MegaMenuColumn = {
  title: string;
  items?: MegaMenuSubItem[];
};
type MegaMenuContent = Record<string, { columns: MegaMenuColumn[] }>;

/* ---------------- DATA ---------------- */
const menuItems: MenuItem[] = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "BUY", href: "/buy", hasDropdown: true },
  { name: "SALE", href: "/sell", hasDropdown: true },
  { name: "RENT", href: "/rent", hasDropdown: true },
  { name: "SERVICES", href: "/service", hasDropdown: false },
  { name: "BLOGS", href: "/blog", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
];

const megaMenuContent: MegaMenuContent = {
  BUY: {
    columns: [
      {
        title: "Market Insights",
        items: [{ text: "Sold Homes", href: "/soldhomes", icon: Building }],
      },
      {
        title: "Buying Essentials",
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
          },
          {
            text: "New Construction",
            href: "/new-construction",
            icon: Building,
          },
          {
            text: "Recently Sold",
            href: "/recently-sold-homes",
            icon: House,
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
          },
          {
            text: "Housing Market Trends",
            href: "/housing-market-trends",
            icon: Briefcase,
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
          { text: "Contact Landlord", href: "/contact-rent-landlord", icon: User },
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);

  /* -------- LANGUAGE SWITCHER STATE -------- */
  const [langOpen, setLangOpen] = useState(false);

 const switchLanguage = (lang: "en" | "ar" | "ku") => {
  if (typeof window === "undefined") return;

  window.location.href = `${window.location.origin}/${lang}`;
};


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
      <motion.nav className="bg-[#1B3A57] shadow-sm sticky top-0 z-50 text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center gap-5">
          {/* LOGO */}
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

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-sm lg:text-base">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative px-6"
                onMouseEnter={() =>
                  item.hasDropdown && setHoveredMenu(item.name)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={item.href}>{item.name}</Link>

                <AnimatePresence>
                  {hoveredMenu === item.name &&
                    item.hasDropdown &&
                    megaMenuContent[item.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-yellow-500 shadow-xl rounded-xl w-[600px] z-50"
                      >
                        <div
                          className="p-6 grid gap-6"
                          style={{
                            gridTemplateColumns: `repeat(${megaMenuContent[item.name].columns.length},1fr)`,
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
                                      className="flex gap-3 p-3 rounded-lg hover:bg-yellow-50"
                                    >
                                      <sub.icon className="w-5 h-5 text-gray-500" />
                                      <span className="text-gray-800 text-sm font-semibold">
                                        {sub.text}
                                      </span>
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

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* LANGUAGE SWITCHER */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-md hover:bg-white/10"
              >
                <Globe className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg border z-50"
                  >
                    <button
                      onClick={() => switchLanguage("en")}
                      className="w-full px-4 py-2 text-sm text-left hover:bg-yellow-50"
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLanguage("ar")}
                      className="w-full px-4 py-2 text-sm text-left hover:bg-yellow-50"
                    >
                      Arabic
                    </button>
                    <button
                      onClick={() => switchLanguage("ku")}
                      className="w-full px-4 py-2 text-sm text-left hover:bg-yellow-50"
                    >
                      Kurdish
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* LOGIN / REGISTER */}
            {!isLoggedIn && (
              <div className="hidden xl:flex items-center gap-3">
                <button
                  onClick={() => setAuthModal("login")}
                  className="flex items-center text-sm font-medium hover:text-yellow-500"
                >
                  <User className="w-4 h-4 mr-1" />
                  LOGIN
                </button>

                <button
                  onClick={() => setAuthModal("signup")}
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-black text-sm font-medium hover:bg-yellow-400"
                >
                  REGISTER
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-white/10"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* AUTH MODAL */}
      {authModal === "login" && (
        <LoginModal
          onClose={() => setAuthModal(null)}
          openSignup={() => setAuthModal("signup")}
        />
      )}
    </>
  );
}