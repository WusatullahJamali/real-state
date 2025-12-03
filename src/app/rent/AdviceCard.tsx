"use client"
import React from 'react';
import { Home, Building, Key, CreditCard } from 'lucide-react'; // Using lucide-react icons

const AdviceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white/20 rounded-full">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const AdviceCardsRow = () => {
  const cards = [
    { icon: Home, title: 'Find Apartments', description: 'Search for apartments in your area easily.' },
    { icon: Building, title: 'Sell Your Home', description: 'Get the best price for your property quickly.' },
    { icon: Key, title: 'Rent Your Space', description: 'List your property and reach potential renters.' },
    { icon: CreditCard, title: 'Mortgage Help', description: 'Guidance for home loans and financing.' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <AdviceCard 
            key={index} 
            icon={card.icon} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default AdviceCardsRow;
