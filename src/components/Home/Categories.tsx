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

type Card = {
  title: string;
  description: string;
  href: string;
  linkText: string;
  icon: string;
  Icon: React.ComponentType<any>;
};

const HomeDiscovery = () => {
  const t = useTranslations("home.discovery");
  const [activeTab, setActiveTab] = useState<TabKey>("Buying");

  const rawContent = t.raw("content");
  const activeContent = rawContent ? rawContent[activeTab] : null;
  const tabList: TabKey[] = ["Buying", "Renting", "Selling"];

  const CardContainer: React.FC<{ card: Card }> = ({ card }) => (
    <div className="group flex flex-col justify-between h-full p-3 space-y-3 bg-white rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-xl hover:border-[#0077c0] transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-[#2f363b] pr-4">
          {card.title}
        </h3>
        <card.Icon className="w-6 h-6 text-[#efb93f]" />
      </div>
      <p className="text-sm text-[#2f363b] grow">{card.description}</p>
      <a href={card.href} className="mt-6 text-[#efb93f] font-medium">
        {card.linkText}
      </a>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[80.5rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#2f363b] mb-10 text-center"
        >
          Discover how we can{" "}
          <span style={{ color: REALTOR_BLUE }}>help you</span>
        </motion.h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg ring-1 ring-gray-200">
            {tabList.map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`relative px-6 py-2 font-medium rounded-full ${
                  activeTab === tabKey ? "text-white" : "text-[#2f363b]"
                }`}
              >
                {activeTab === tabKey && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-yellow-500 rounded-full z-[-1]"
                  />
                )}
                {t(`tabs.${tabKey}`)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeContent.cards.map((card: any, index: number) => {
                  const IconComponent = IconMap[card.icon] || Home;
                  return (
                    <motion.div key={index}>
                      <IconComponent />
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
