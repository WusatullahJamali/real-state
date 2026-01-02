"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Added this

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
type MenuItem = { nameKey: string; href: string; hasDropdown: boolean };
type MegaMenuSubItem = {
  textKey: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};
type MegaMenuColumn = {
  titleKey: string;
  items?: MegaMenuSubItem[];
};
type MegaMenuContent = Record<string, { columns: MegaMenuColumn[] }>;

export default function Navbar() {
  const t = useTranslations("navbar"); // Hook for translations
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  /* ---------------- DATA MAPPED TO KEYS ---------------- */
  const menuItems: MenuItem[] = [
    { nameKey: "home", href: "/", hasDropdown: false },
    { nameKey: "buy", href: "/buy", hasDropdown: true },
    { nameKey: "sale", href: "/sell", hasDropdown: true },
    { nameKey: "rent", href: "/rent", hasDropdown: true },
    { nameKey: "services", href: "/service", hasDropdown: false },
    { nameKey: "blogs", href: "/blog", hasDropdown: true },
    { nameKey: "contact", href: "/contact", hasDropdown: false },
  ];

  const megaMenuContent: MegaMenuContent = {
    buy: {
      columns: [
        {
          titleKey: "marketInsights",
          items: [{ textKey: "soldHomes", href: "/soldhomes", icon: Building }],
        },
        {
          titleKey: "buyingEssentials",
          items: [{ textKey: "property", href: "/property", icon: Briefcase }],
        },
      ],
    },
    sale: {
      columns: [
        {
          titleKey: "buyingEssentials",
          items: [
            {
              textKey: "homesForSale",
              href: "/sell/home-for-sale",
              icon: Home,
            },

            {
              textKey: "recentlySold",
              href: "/recently-sold-homes",
              icon: House,
            },
          ],
        },
        {
          titleKey: "marketInsights",
          items: [
            {
              textKey: "exploreNeighborhoods",
              href: "/sell/neighbourhood",
              icon: Info,
            },
            {
              textKey: "marketTrends",
              href: "/housing-market-trends",
              icon: Briefcase,
            },
          ],
        },
      ],
    },
    rent: {
      columns: [
        {
          titleKey: "rentalTypes",
          items: [
            {
              textKey: "apartments",
              href: "/apartments-for-rent",
              icon: Building,
            },
            { textKey: "houses", href: "/houses-for-rent", icon: House },
          ],
        },
        {
          titleKey: "landlordResources",
          items: [
            {
              textKey: "manageRentals",
              href: "/manage-rentals",
              icon: Briefcase,
            },
            { textKey: "listRentals", href: "/list-your-rentals", icon: Plus },
            {
              textKey: "contactLandlord",
              href: "/contact-rent-landlord",
              icon: User,
            },
          ],
        },
      ],
    },
  };

  const switchLanguage = (lang: "en" | "ar" | "ku") => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const cleanedUrl = url.replace(/\/(en|ar|ku)(?=\/|$)/, "");
    const newUrl = cleanedUrl.replace(
      window.location.origin,
      `${window.location.origin}/${lang}`
    );
    window.location.href = newUrl;
  };

  const getLangPrefix = () => {
    if (typeof window === "undefined") return "";
    const url = window.location.href;
    const match = url.match(/https?:\/\/[^\/]+\/(en|ar|ku)/);
    return match ? `/${match[1]}` : "";
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
      <motion.nav className="bg-[#1B3A57] shadow-sm sticky top-0 z-50 text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center gap-5">
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

          <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-sm lg:text-base">
            {menuItems.map((item) => (
              <li
                key={item.nameKey}
                className="relative px-3 lg:px-4 xl:px-6"
                onMouseEnter={() =>
                  item.hasDropdown && setHoveredMenu(item.nameKey)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={`${getLangPrefix()}${item.href}`}>
                  {t(`menu.${item.nameKey}`)}
                </Link>
                <AnimatePresence>
                  {hoveredMenu === item.nameKey &&
                    item.hasDropdown &&
                    megaMenuContent[item.nameKey] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-yellow-500 shadow-xl rounded-xl w-[600px] z-50"
                      >
                        <div
                          className="p-6 grid gap-6"
                          style={{
                            gridTemplateColumns: `repeat(${
                              megaMenuContent[item.nameKey].columns.length
                            },1fr)`,
                          }}
                        >
                          {megaMenuContent[item.nameKey].columns.map(
                            (col, i) => (
                              <div key={i}>
                                <h4 className="uppercase text-xs font-bold text-gray-500 mb-4">
                                  {t(`titles.${col.titleKey}`)}
                                </h4>
                                <ul className="space-y-1">
                                  {col.items?.map((sub, j) => (
                                    <li key={j}>
                                      <Link
                                        href={`${getLangPrefix()}${sub.href}`}
                                        className="flex gap-3 p-3 rounded-lg hover:bg-yellow-50"
                                      >
                                        <sub.icon className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-800 text-sm font-semibold">
                                          {t(`items.${sub.textKey}`)}
                                        </span>
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
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
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

            {!isLoggedIn && (
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={() => setAuthModal("login")}
                  className="flex items-center text-sm font-medium hover:text-yellow-500"
                >
                  <User className="w-4 h-4 mr-1" />
                  {t("auth.login")}
                </button>
                <button
                  onClick={() => setAuthModal("signup")}
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-black text-sm font-medium hover:bg-yellow-400"
                >
                  {t("auth.register")}
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-[70%] sm:w-[60%] md:w-auto md:hidden h-screen overflow-y-auto z-50 bg-white text-black"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
              <span className="text-lg font-semibold">{t("auth.menu")}</span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>
            <ul className="flex flex-col px-4 py-6 space-y-2">
              {menuItems.map((item) => {
                const isOpen = mobileExpanded === item.nameKey;
                return (
                  <li
                    key={item.nameKey}
                    className="border-b border-white/10 pb-2"
                  >
                    <div className="w-full flex items-center justify-between py-2">
                      <Link
                        href={`${getLangPrefix()}${item.href}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-base font-medium"
                      >
                        {t(`menu.${item.nameKey}`)}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() =>
                            setMobileExpanded(isOpen ? null : item.nameKey)
                          }
                          className="p-1"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {isOpen && megaMenuContent[item.nameKey] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 pb-3"
                        >
                          {megaMenuContent[item.nameKey].columns.map(
                            (col, i) => (
                              <div key={i} className="mb-3">
                                <h4 className="text-xs uppercase text-white/60 mb-2">
                                  {t(`titles.${col.titleKey}`)}
                                </h4>
                                <ul className="space-y-2">
                                  {col.items?.map((sub, j) => (
                                    <li key={j}>
                                      <Link
                                        href={`${getLangPrefix()}${sub.href}`}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-3 text-sm py-1"
                                      >
                                        <sub.icon className="w-4 h-4 text-white/70" />
                                        <span>{t(`items.${sub.textKey}`)}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {authModal === "login" && (
        <LoginModal
          onClose={() => setAuthModal(null)}
          openSignup={() => setAuthModal("signup")}
        />
      )}
    </>
  );
}
