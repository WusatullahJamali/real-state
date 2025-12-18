import React from 'react';

const AdviceCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group text-black">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-600 text-black px-4 py-1.5 rounded-full text-sm font-medium">
            Advice/rent
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-black leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

const AdviceCardsGrid = () => {
  const cards = [
    { 
      image: '/advice1.jpg',
      title: 'New Bill Could Help Nonprofits Save Affordable Apartments in'
    },
    { 
      image: '/advice2.jpg',
      title: 'Winter Heating Tips for Renters: How To Stay Warm Without Driving Up Your Bills'
    },
    { 
      image: '/advice3.jpg',
      title: '7 Surprising Renter Pain Points, According to DIY Landlords'
    },
    { 
      image: '/advice4.jpg',
      title: 'How HOA Leasing Requests Can Block Homeowners From Renting'
    },
  ];
//Rent
  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <AdviceCard 
              key={index} 
              image={card.image}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdviceCardsGrid;