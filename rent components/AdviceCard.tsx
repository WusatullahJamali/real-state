"use client"
import React from 'react';
import { Home, Building, Key, CreditCard } from 'lucide-react';

const AdviceCard = ({ icon: Icon, title, description}:any) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-yellow-500" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-black">{description}</p>
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
    </section>
  );
};

export default AdviceCardsRow;
