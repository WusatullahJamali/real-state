"use client";

import React from "react";

const cards = [
  {
    title: "Get support from local Iraqi agents",
    desc: "Tell us about your property needs and a local agent from Baghdad, Erbil, Basra, or other cities will guide you.",
    img: "/find1.jpg",
  },
  {
    title: "Find the perfect agent for your property",
    desc: "Tap into the expertise of certified real estate agents across Iraq to help you buy, sell, or rent your property.",
    img: "/find2.jpg",
  },
  {
    title: "No fees, no obligations",
    desc: "Connect with an agent in minutes for free. Choose the best fit for your needs, or switch agents anytime.",
    img: "/find3.png",
  },
];

const FindCards = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Connect with trusted agents in Iraq
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            We help buyers, sellers, and renters find reliable real estate agents across Baghdad, Erbil, Basra, Najaf, Karbala, and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="px-8 py-4 border-2 bg-white text-black rounded-full hover:border-yellow-500 transition-colors font-semibold text-lg">
            Connect with an Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindCards;
