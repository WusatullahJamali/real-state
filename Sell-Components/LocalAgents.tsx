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
    // Icon resembling a house on a monitor/desktop
    icon: House,
    title: "See where you fit",
    description: "See what similar homes in the area have recently sold for",
  },
  {
    // Icon resembling a light bulb/sunburst for insights
    icon: Activity,
    title: "Get the full picture",
    description:
      "View sales activity in your market by browsing similar homes for sale",
  },
  {
    // Icon resembling a stock chart/sales trend
    icon: History,
    title: "Stay in the know",
    description:
      "Access sales history and assessments for properties you're interested in",
  },
];


// --- 3. Feature Card Component (Internal) ---
const FeatureCard: React.FC<{ item: FeatureItem }> = ({ item }) => {
  const IconComponent = item.icon;


  return (
    <div className="flex w-80 flex-col items-center text-center p-4">
      {/* Icon: Large size, dark grey color */}
      <div className="mb-2">
        <IconComponent className="w-12 h-12 text-yellow-500" />
      </div>


      {/* Title */}
      <h3 className="text-xl font-semibold text-[#301366] mb-1">
        {item.title}
      </h3>


      {/* Description */}
      <p className="text-base text-gray-600 max-w-xs">{item.description}</p>
    </div>
  );
};


// --- 4. Main Grid Component ---
const FeatureGrid: React.FC = () => {
  return (
    // Light background matching the image
    <section className="bg-white -mt-8 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl text-[#301366] leading-relaxed font-bold">
            When it comes to selling, information is power. So make the very
            best calls with the very latest property info.
          </p>
        </div>


        {/* Feature Grid: 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureData.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeatureGrid;