"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
import {
  DollarSign,
  Calculator,
  Home,
  MapPin,
  KeyRound,
  TrendingUp,
  CreditCard,
  Search,
  ShieldCheck,
} from "lucide-react";

const REALTOR_BLUE = "#efb93f";

type TabKey = "Buying" | "Renting" | "Selling";

interface Card {
  title: string;
  description: string;
  linkText: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface TabContent {
  heading: string;
  cards: Card[];
}

const TAB_DATA: Record<TabKey, TabContent> = {
  Buying: {
    heading: `Discover your path to <span style="color:${REALTOR_BLUE}">Homeownership</span>`,
    cards: [
      { title: "Want to Buy a Home?", description: "Buy a home within your budget. Plan smarter with clear affordability insights.", linkText: "Start exploring homes today", href: "/buy", Icon: DollarSign },
      { title: "Explore recently sold homes", description: "Explore recently sold homes to make smarter buying decisions. Compare prices and understand real market trends.", linkText: "Start exploring homes today", href: "/soldhomes", Icon: Calculator },
      { title: "Explore Properties", description: "Browse available properties and find your perfect home that fits your needs and budget.", linkText: "View Properties", href: "/property", Icon: CreditCard },
    ],
  },
  Renting: {
    heading: `Find your next <span style="color:${REALTOR_BLUE}">Rental</span> effortlessly`,
    cards: [
      { title: "Search rental properties", description: "Explore thousands of rental listings in your desired area. Filter by price, size, and amenities.", linkText: "Start your rental search now", href: "/rent", Icon: Search },
      { title: "Determine safe budget", description: "Find out the maximum rent you can afford comfortably based on your income and lifestyle.", linkText: "Explore Apartments", href: "/apartments-for-rent", Icon: ShieldCheck },
      { title: "Contact a Landlord", description: "Get in touch with landlords directly to inquire about available properties and rental details.", linkText: "Reach Out Now", href: "/contact-rent-landlord", Icon: KeyRound },
    ],
  },
  Selling: {
    heading: `Maximize your <span style="color:${REALTOR_BLUE}">Sale</span> and value`,
    cards: [
      { title: "Live Market Intelligence", description: "Get comprehensive insights into Iraq's real estate market. Stay updated on trends, prices, and investment opportunities.", linkText: "see the trends", href: "/housing-market-trends", Icon: Home },
      { title: "Explore Recently Sold Homes", description: "Check out homes that were recently sold and get insights into final sale prices and market trends.", linkText: "View Sold Homes", href: "/recently-sold-homes", Icon: TrendingUp },
      { title: "Connect with an agent", description: "Find a top local real estate agent specializing in selling homes in your neighborhood quickly and for the best price.", linkText: "Find a trusted agent", href: "/find-agent", Icon: MapPin },
    ],
  },
};

const HomeDiscovery = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Buying");
  const activeContent = useMemo(() => TAB_DATA[activeTab], [activeTab]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-322 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#2f363b] mb-10 text-center"
        >
          Discover how we can <span style={{ color: REALTOR_BLUE }}>help you</span>
        </motion.h2>

        {/* Tabs with pill animation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg ring-1 ring-gray-200 relative">
            {Object.keys(TAB_DATA).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey as TabKey)}
                className={`relative px-6 py-2 text-base font-medium rounded-full cursor-pointer transition-colors duration-300 z-10 ${
                  activeTab === tabKey ? "text-white" : "text-[#2f363b] hover:text-yellow-600"
                }`}
              >
                {activeTab === tabKey && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-yellow-500 rounded-full z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {tabKey}
              </button>
            ))}
          </div>
        </div>

        {/* Content Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3
              className="text-xl font-bold text-[#2f363b] mb-8 text-center"
              dangerouslySetInnerHTML={{ __html: activeContent.heading }}
            />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {activeContent.cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col justify-between h-full p-6 space-y-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-yellow-500/30"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#2f363b] pr-4 leading-tight">
                      {card.title}
                    </h3>
                    <card.Icon
                      className="w-6 h-6 text-[#efb93f] shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed grow">
                    {card.description}
                  </p>

                  <a
                    href={card.href}
                    className="pt-4 text-[#efb93f] font-bold text-sm hover:text-yellow-600 transition-colors flex items-center group/link"
                  >
                    {card.linkText}
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeDiscovery;