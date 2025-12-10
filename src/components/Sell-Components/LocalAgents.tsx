"use client";

import React from "react";
import { House, Activity, History } from "lucide-react"; // Using lucide-react for the icons

// --- 1. Define Types ---
interface FeatureItem {
  icon: React.ElementType; // To allow passing the Lucide icon component
  title: string;
  description: string;
}

// --- 2. Sample Data ---
const featureData: FeatureItem[] = [
  {
    icon: House,
    title: "See where you fit",
    description: "See what similar homes in the area have recently sold for",
  },
  {
    icon: Activity,
    title: "Get the full picture",
    description:
      "View sales activity in your market by browsing similar homes for sale",
  },
  {
    icon: History,
    title: "Stay in the know",
    description:
      "Access sales history and assessments for properties you're interested in",
  },
];

// --- 3. Feature Card Component ---
const FeatureCard: React.FC<{ item: FeatureItem }> = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
      {/* Icon */}
      <div className="mb-4">
        <IconComponent className="w-12 h-12 text-yellow-500" />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-[#301366] mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 max-w-xs">
        {item.description}
      </p>
    </div>
  );
};

// --- 4. Main Grid Component ---
const FeatureGrid: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-12 max-w-4xl mx-auto px-4 sm:px-0">
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#301366] leading-relaxed font-bold">
            When it comes to selling, information is power. So make the very
            best calls with the very latest property info.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
          {featureData.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
