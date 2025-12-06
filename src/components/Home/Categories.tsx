"use client";

import React, { useState, useMemo } from "react";
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

// --- Colors ---
const REALTOR_BLUE = "#efb93f";
const DARK_TEXT = "#2f363b";
const LIGHT_BG = "#f8f8f8";

// --- Types ---
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

// --- Tab Data ---
const TAB_DATA: Record<TabKey, TabContent> = {
  Buying: {
    heading: `Discover your path to <span style="color:${REALTOR_BLUE}">Homeownership</span>`,
    cards: [
      {
        title: "Estimate your budget",
        description:
          "Find out how much you can afford and estimate your budget range before you start searching for properties.",
        linkText: "Try our affordability calculator",
        href: "#",
        Icon: DollarSign,
      },
      {
        title: "Analyze monthly costs",
        description:
          "Get an in-depth look at what your monthly payments and closing costs will look like based on current rates.",
        linkText: "Use the mortgage calculator",
        href: "#",
        Icon: Calculator,
      },
      {
        title: "Explore down payment options",
        description:
          "Find assistance programs and resources that can help you buy a home with less cash upfront.",
        linkText: "Find down payment help",
        href: "#",
        Icon: CreditCard,
      },
    ],
  },
  Renting: {
    heading: `Find your next <span style="color:${REALTOR_BLUE}">Rental</span> effortlessly`,
    cards: [
      {
        title: "Search rental properties",
        description:
          "Explore thousands of rental listings in your desired area. Filter by price, size, and amenities.",
        linkText: "Start your rental search now",
        href: "#",
        Icon: Search,
      },
      {
        title: "Determine safe budget",
        description:
          "Calculate the maximum rent you can comfortably afford based on your income and expenses to rent securely.",
        linkText: "Use our rent budget tool",
        href: "#",
        Icon: ShieldCheck,
      },
      {
        title: "Understand tenant rights",
        description:
          "Get informed on your local tenant rights and responsibilities before you sign a lease agreement.",
        linkText: "Read our tenant guide",
        href: "#",
        Icon: KeyRound,
      },
    ],
  },
  Selling: {
    heading: `Maximize your <span style="color:${REALTOR_BLUE}">Sale</span> and value`,
    cards: [
      {
        title: "Get instant home value",
        description:
          "Get a free, instant estimate of your home’s current market value using recent sales data and market trends.",
        linkText: "Get a home valuation",
        href: "#",
        Icon: Home,
      },
      {
        title: "Calculate net proceeds",
        description:
          "Calculate the potential profit from your sale after deducting agent commissions and all closing costs.",
        linkText: "Calculate net proceeds",
        href: "#",
        Icon: TrendingUp,
      },
      {
        title: "Connect with an agent",
        description:
          "Find a top local real estate agent specializing in selling homes in your neighborhood quickly and for the best price.",
        linkText: "Find a trusted agent",
        href: "#",
        Icon: MapPin,
      },
    ],
  },
};

const HomeDiscovery = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Buying");
  const [showCards, setShowCards] = useState(true);

  const activeContent = useMemo(() => TAB_DATA[activeTab], [activeTab]);

  const handleTabClick = (tab: TabKey): void => {
    if (tab === activeTab) return;

    setShowCards(false);

    setTimeout(() => {
      setActiveTab(tab);
      setShowCards(true);
    }, 150);
  };

  const CardContainer: React.FC<{ card: Card }> = ({ card }) => (
    <div className="group flex flex-col justify-between h-full p-3 space-y-3 bg-white rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-xl hover:border-[#0077c0] transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-[#2f363b] pr-4">
          {card.title}
        </h3>
        <card.Icon
          className="w-6 h-6 text-[#efb93f] shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
      <p className="text-sm text-[#2f363b] grow">{card.description}</p>

      <a
        href={card.href}
        className="mt-6 text-[#efb93f] font-medium hover:text-[#efb91f] transition duration-150 flex items-center"
      >
        {card.linkText}
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>
  );

  return (
    <section className="py-16 bg-[#f8f8f8] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#2f363b] mb-10 text-center">
          Discover how we can{" "}
          <span style={{ color: REALTOR_BLUE }}>help you</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg ring-1 ring-gray-200">
            {Object.keys(TAB_DATA).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => handleTabClick(tabKey as TabKey)}
                className={`px-5 py-2 text-base font-medium rounded-full transition-all duration-300 ${
                  activeTab === tabKey
                    ? "bg-[#0077c0] text-white shadow-md"
                    : "text-[#2f363b] hover:bg-gray-100"
                }`}
              >
                {tabKey}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <h3
            className="text-xl font-bold text-[#2f363b] mb-6 text-center transition-opacity duration-300"
            dangerouslySetInnerHTML={{ __html: activeContent.heading }}
          />
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-150 ease-in-out ${
              showCards ? "opacity-100" : "opacity-0"
            }`}
          >
            {activeContent.cards.map((card, index) => (
              <CardContainer key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDiscovery;
