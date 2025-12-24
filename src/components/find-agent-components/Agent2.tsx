"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Reusable component for an FAQ item (Toggle/Accordion)
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ChevronIcon = ({ isUp }: { isUp: boolean }) => (
    <svg 
      className={`w-5 h-5 transition-transform duration-300 ${isUp ? 'rotate-180' : ''}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div>
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 font-medium text-base">{question}</span>
        <ChevronIcon isUp={isOpen} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-3' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Agent2 = () => {
  const faqData = [
    { question: "Why should I work with a real estate agent in Iraq?", answer: "A local Iraqi real estate agent has professional expertise, knowledge of neighborhoods in Baghdad, Erbil, Basra, Najaf, Karbala, and other cities, negotiation skills, and handles all paperwork to make buying or selling smooth and secure." },
    { question: "How do I find the right agent in Iraq?", answer: "Look for agents experienced in your specific city or property type, read client reviews, and speak with multiple agents to choose one that understands your needs and communicates clearly." },
    { question: "How is the agent I’m connected to chosen?", answer: "The matching process considers the agent's experience, specialization (buying, selling, or renting), familiarity with local markets, and client feedback scores in Iraq." },
    { question: "What information is shared with my agent?", answer: "Only the details you provide, such as your contact info, property preferences, and timeline, are shared to help the agent connect with you efficiently." },
    { question: "Do agents charge any hidden fees?", answer: "No. Our connected agents operate transparently, and any commission or fee is agreed upon before proceeding with transactions in Iraq." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-stretch gap-12 px-6">

        {/* Right: Image */}
        <div className="lg:w-1/2 w-full relative h-80 lg:h-auto">
          <Image 
            src="/shahzaib.png" 
            alt="Iraqi real estate agent assisting clients" 
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Left: FAQ */}
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 rounded-3xl flex flex-col">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions about Iraqi Real Estate Agents
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Learn how our certified agents in Iraq help you buy, sell, or rent properties safely and efficiently, while providing expert guidance and local insights.
          </p>

          <div className="space-y-0 divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="mt-8">
            <button className="flex items-center px-6 py-4 border-2 bg-white text-black hover:border-yellow-500 transition-colors rounded-full text-sm font-semibold duration-300">
              Connect with an Iraqi Agent
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Agent2;
