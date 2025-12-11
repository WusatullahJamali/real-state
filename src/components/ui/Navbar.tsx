"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, Plus, Home, Building, House, Briefcase, Layers, Info, BookOpen, X, Menu } from "lucide-react";

// --- Navbar Component ---
export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const pathname = usePathname();

  // Helper: Check if link is active
  const isActive = (path: string) => pathname === path || (path !== "/" && pathname?.startsWith(path));

  // Helper: Dynamic Class Names
  const getNavClass = (path: string, isMobile = false) => {
    const active = isActive(path);
    const base = "transition-colors font-medium";
    if (isMobile) {
      return `${base} block p-3 rounded-lg ${active ? "bg-yellow-50 text-yellow-600 font-bold" : "text-gray-700 hover:bg-gray-50 hover:text-yellow-500"}`;
    }
    return `${base} px-3 py-2 text-sm xl:text-base whitespace-nowrap ${active ? "text-yellow-500 font-bold" : "text-gray-700 hover:text-yellow-500"}`;
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav className="bg-white border-b shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-4">
          
          <Link href="/" className="flex-shrink-0">
            <Image 
  src="/logo3.jpg" 
  width={100} 
  height={10} 
  alt="logo" 
  className="w-32 md:w-[110px] h-12" // <--- Added h-auto
/>
          </Link>

          {/* Desktop Links (XL Screens) */}
          <ul className="hidden xl:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative h-full"
                onMouseEnter={() => item.hasDropdown && setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={item.href} className={getNavClass(item.href)}>
                  {item.name}
                </Link>

                {/* Desktop Mega Menu Dropdown */}
                <AnimatePresence>
                  {hoveredMenu === item.name && item.hasDropdown && megaMenuContent[item.name] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-yellow-500 shadow-xl rounded-xl overflow-hidden z-50 w-[600px] max-w-[90vw]"
                    >
                      <div className="p-6 grid gap-6" style={{ gridTemplateColumns: `repeat(${megaMenuContent[item.name].columns.length}, 1fr)` }}>
                        {megaMenuContent[item.name].columns.map((col, i) => (
                          <div key={i}>
                            <h4 className="uppercase text-xs font-bold text-gray-500 mb-4">{col.title}</h4>
                            {col.isFeatured ? (
                              <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="h-24 bg-gray-200 rounded mb-3 flex items-center justify-center text-xs text-gray-500">[Image]</div>
                                <Link href={col.cta!.href} className="block text-center bg-yellow-600 text-white py-2 rounded-md text-sm font-bold hover:bg-yellow-700">{col.cta!.text}</Link>
                              </div>
                            ) : (
                              <ul className="space-y-1">
                                {col.items?.map((sub, idx) => (
                                  <li key={idx}>
                                    <Link href={sub.href} className="group flex gap-3 p-3 rounded-lg hover:bg-yellow-50 transition">
                                      <sub.icon className="w-5 h-5 text-gray-500 group-hover:text-yellow-600" />
                                      <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-yellow-600 text-sm">{sub.text}</div>
                                        {sub.description && <p className="text-xs text-gray-500">{sub.description}</p>}
                                      </div>
                                    </Link>
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

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/login" className="hidden xl:flex items-center px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium text-sm whitespace-nowrap">
              <User className="w-4 h-4 mr-1" /> REGISTER/LOGIN
            </Link>
            <Link href="/add-property" className="hidden md:flex px-4 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 text-sm whitespace-nowrap items-center">
              <Plus className="w-4 h-4 mr-1" /> ADD PROPERTY
            </Link>
            <button className="xl:hidden p-2 hover:bg-gray-100 rounded-md" onClick={() => setMobileOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-[60]" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-[70] p-5 overflow-y-auto">
              
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <Image src="/logo.svg" width={110} height={35} alt="Logo" />
                <button onClick={() => setMobileOpen(false)} className="p-2 bg-gray-50 rounded-full hover:text-red-500"><X className="h-5 w-5" /></button>
              </div>

              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const isOpen = mobileExpanded === item.name;
                  const hasData = item.hasDropdown && megaMenuContent[item.name];

                  return (
                    <li key={item.name} className="border-b border-gray-100 last:border-0">
                      {hasData ? (
                        <>
                          <button onClick={() => setMobileExpanded(isOpen ? null : item.name)} className={`flex justify-between items-center w-full text-left ${getNavClass(item.href, true)}`}>
                            {item.name}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-gray-50 rounded-b-lg">
                                <div className="p-4 space-y-4">
                                  {megaMenuContent[item.name].columns.map((col, i) => (
                                    <div key={i}>
                                      <h4 className="uppercase text-[10px] font-bold text-gray-400 mb-2">{col.title}</h4>
                                      <ul className="space-y-1">
                                        {col.items?.map((sub, idx) => (
                                          <li key={idx}>
                                            <Link href={sub.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-1 transition-all">
                                              {sub.text}
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
                        </>
                      ) : (
                        <Link href={item.href} onClick={() => setMobileOpen(false)} className={getNavClass(item.href, true)}>{item.name}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 space-y-3">
                <Link href="/login" className="flex justify-center gap-2 w-full py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-yellow-500 hover:text-yellow-500"><User className="w-5 h-5" /> Register / Login</Link>
                <Link href="/add-property" className="flex justify-center gap-2 w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 shadow-md"><Plus className="w-5 h-5" /> ADD PROPERTY</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// --- DATA DEFINITIONS (Moved to bottom for clean code) ---
const menuItems = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "FOR SALE", href: "/sell", hasDropdown: true },
  { name: "FOR RENT", href: "/rent", hasDropdown: true },
  { name: "PROPERTY", href: "/mortgege", hasDropdown: true },
  { name: "PAGES", href: "/pages", hasDropdown: true },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
];

const megaMenuContent: Record<string, { columns: any[] }> = {
  "FOR SALE": {
    columns: [
      { title: "Buying Essentials", items: [{ text: "Homes for Sale", href: "/sell/home-for-sale", icon: Home, description: "Find your dream house." }, 
        // { text: "New Construction", href: "/new-construction", icon: Building, description: "Latest properties." },
         { text: "Recently Sold", href: "/recently-sold-homes", icon: House, description: "Market values." }] },
      { title: "Market Insight", items: [{ text: "Explore Neighborhoods", href: "/sell/neighbourhood", icon: Info, description: "Area guides." }, { text: "Housing Market Trends", href: "/housing-market-trends", icon: Briefcase, description: "Analysis." }] },
      // { title: "Featured Service", isFeatured: true, cta: { text: "Get a Free Home Valuation", href: "/free-valuation" } },
    ],
  },
  "FOR RENT": {
    columns: [
      { title: "Rental Types", items: [{ text: "Apartments", href: "/apartments-for-rent", icon: Building }, { text: "Houses", href: "/houses-for-rent", icon: House }] },
      { title: "Landlord Resources", items: [{ text: "Manage Rentals", href: "/manage-rentals", icon: Briefcase }, { text: "List Rentals", href: "/list-your-rentals", icon: Plus }, { text: "Contact Landlord", href: "/contact-rent-landlord", icon: User }] },
    ],
  },
  PROPERTY: {
    columns: [
      { title: "Search & Valuation", items: [{ text: "Property Search", href: "/property-search", icon: Layers }, { text: "Property Listings", href: "/property-listings", icon: Home }, { text: "Property Valuation", href: "/property-valuation", icon: Info }] },
      { title: "Investment", items: [{ text: "Investment", href: "/property-investment", icon: Briefcase }, { text: "Commercial", href: "/commercial-property", icon: Building }, { text: "Residential", href: "/residential-property", icon: House }] },
    ],
  },
  PAGES: {
    columns: [
      { title: "Company", items: [{ text: "About Us", href: "/about", icon: Info }, { text: "Contact Us", href: "/contact", icon: BookOpen }, { text: "Careers", href: "/careers", icon: Briefcase }] },
      { title: "Resources", items: [{ text: "Blog", href: "/blog", icon: BookOpen }, { text: "FAQ", href: "/faq", icon: Info }] },
      { title: "Legal", items: [{ text: "Terms", href: "/terms-of-service", icon: Layers }, { text: "Privacy", href: "/privacy-policy", icon: Layers }] },
    ],
  },
};