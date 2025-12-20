"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ConstructionFaq = () => {
  const [openSection, setOpenSection] = useState<string | null>('popular');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqData = [
    {
      id: 'popular',
      title: 'Popular searches in Iraq',
      links: [
        'New constructions Baghdad',
        'Apartments for sale Erbil',
        'Villas for sale Basra',
        'Rentals in Najaf',
        'Luxury homes in Sulaymaniyah',
        'Open houses in Mosul',
      ],
    },
    {
      id: 'types',
      title: 'Property types for sale in Iraq',
      links: [
        'Apartments',
        'Houses',
        'Villas',
        'Land plots',
        'Commercial properties',
      ],
    },
    {
      id: 'price',
      title: 'Homes by price in Iraq',
      links: [
        'Below $50k',
        '$50k - $150k',
        '$150k - $300k',
        '$300k - $500k',
        'Above $500k',
      ],
    },
    {
      id: 'beds',
      title: 'Homes by number of bedrooms in Iraq',
      links: [
        '1+ bedrooms',
        '2+ bedrooms',
        '3+ bedrooms',
        '4+ bedrooms',
        '5+ bedrooms',
      ],
    },
    {
      id: 'markets',
      title: 'Top new construction markets in Iraq',
      links: [
        'Baghdad',
        'Erbil',
        'Basra',
        'Najaf',
        'Sulaymaniyah',
        'Mosul',
      ],
    },
    {
      id: 'rent',
      title: 'Property for rent in Iraq',
      links: [
        'Apartments for rent',
        'Villas for rent',
        'Commercial rentals',
        'Short-term rentals',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-black">
      <h2 className="text-xl font-bold mb-6">Find your ideal property in Iraq</h2>
      
      <div className="border-t border-gray-200">
        {faqData.map((section) => (
          <div key={section.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex justify-between items-center py-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-bold text-black">{section.title}</span>
              {openSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === section.id ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              {section.links.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
                  {section.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-sm text-black hover:text-yellow-600 hover:underline underline-offset-4 decoration-1 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
              {section.links.length === 0 && (
                <p className="text-sm text-black italic">No listings available at this time.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionFaq;
