"use client";
import React from "react";
import {
  Home,
  DollarSign,
  Brush,
  House,
  PiggyBank,
  Wrench,
} from "lucide-react";

const HomeCards = () => {
  const cards = [
    {
      title: "Track home value",
      desc: "Get current property estimates for your home.",
      btn: "Track home value",
      icon: <Home className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Estimate proceeds",
      desc: "Calculate an estimate of how much you could make selling your home.",
      btn: "Estimate proceeds",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Start designing",
      desc: "Choose a photo to redesign your home instantly.",
      btn: "Start designing",
      icon: <Brush className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Compare similar homes",
      desc: "Compare your home to similar homes in your area.",
      btn: "Compare homes",
      icon: <House className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Estimate earnings",
      desc: "Learn how much you could make by hosting your home on Airbnb.",
      btn: "Estimate earnings",
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Find skilled pros",
      desc: "Find skilled pros near you to assist you with your next remodeling project.",
      btn: "Find pros",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          RealValue<span className="text-blue-600">TM</span>
        </h2>
        <p className="text-gray-600 mb-12 text-sm">
          Log in to access these features.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className={"bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 
                           text-sm rounded-xl transition-all duration-300 hover:shadow-md"
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeCards;
