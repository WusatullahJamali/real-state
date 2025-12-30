
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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

// Icon mapping helper
const IconMap: Record<string, React.ComponentType<any>> = {
  DollarSign,
  Calculator,
  Home,
  MapPin,
  KeyRound,
  TrendingUp,
  CreditCard,
  Search,
  ShieldCheck,
};

type TabKey = "Buying" | "Renting" | "Selling";

const HomeDiscovery = () => {
  const t = useTranslations("home.discovery");
  const [activeTab, setActiveTab] = useState<TabKey>("Buying");

  // Safe data fetching with fallback to avoid "map of undefined" errors
  const rawContent = t.raw("content");
  const activeContent = rawContent ? rawContent[activeTab] : null;
  const tabList: TabKey[] = ["Buying", "Renting", "Selling"];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading - FIXED t.rich usage */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#2f363b] mb-10 text-center"
        >
          {t.rich("title", {
            highlight: (chunks) => (
              <span style={{ color: REALTOR_BLUE }}>{chunks}</span>
            ),
          })}
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg ring-1 ring-gray-200 relative">
            {tabList.map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`relative px-6 py-2 text-base font-medium rounded-full cursor-pointer transition-colors duration-300 z-10 ${
                  activeTab === tabKey
                    ? "text-white"
                    : "text-[#2f363b] hover:text-yellow-600"
                }`}
              >
                {activeTab === tabKey && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-yellow-500 rounded-full z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {t(`tabs.${tabKey}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Animation */}
        <AnimatePresence mode="wait">
          {activeContent && (
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
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
              >
                {activeContent.cards.map((card: any, index: number) => {
                  const IconComponent = IconMap[card.icon] || Home;
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ y: -8 }}
                      className="group flex flex-col justify-between h-full p-6 space-y-4 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-yellow-500/30"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-[#2f363b] pr-4 leading-tight rtl:pl-4 rtl:pr-0">
                          {card.title}
                        </h3>
                        <IconComponent className="w-6 h-6 text-[#efb93f] shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
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
                          className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeDiscovery;