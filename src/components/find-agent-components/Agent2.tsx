"use client";

import React, { useState } from 'react';

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
    <div className="">
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
    { question: "Why should I work with a real estate agent?", answer: "A real estate agent provides professional expertise, market knowledge, negotiation skills, and handles complex paperwork, saving you time and money and ensuring a smooth transaction." },
    { question: "How do I find the right real estate agent?", answer: "Look for an agent with experience in your specific market, check client reviews, and interview several agents to find someone whose communication style and expertise match your needs." },
    { question: "How is the real estate agent I'm connected chosen?", answer: "The matching process typically considers factors like the agent's experience level, specialization (buyer/seller), geographic area, and client feedback scores." },
    { question: "What information is shared with my real estate agent?", answer: "Only the information you provide during the matching process, such as your contact details, home preferences, and timeline, is shared to facilitate the initial connection." },
    { question: "I've heard about the National Association of REALTORS® Settlement. does impact my home selling process?", answer: "The settlement introduces changes to how commission is handled and disclosed, potentially leading to more transparency and negotiation on compensation. Consult with your agent for specifics." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-stretch gap-12 px-6">

        {/* Right: Image */}
        <div className="lg:w-1/2 w-full overflow-hidden">
          <img 
            src="/findagent2.png" 
            alt="Real estate agent shaking hands with clients" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left: FAQ */}
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 rounded-3xl flex flex-col">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            What's the difference between a professional real estate license to help people and a REALTOR®, part of the national mandate. A REALTOR® is a member of REALTORS® and enjoys exclusive benefits, including access to NAR's data, educational offerings, and networking opportunities.
          </p>

          <div className="space-y-0 divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="mt-8">
            <button className="flex items-center px-6 py-4 border-2 bg-white text-black hover:border-yellow-500 transition-colors rounded-full text-sm font-semibold duration-300">
              Connect with an agent
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
