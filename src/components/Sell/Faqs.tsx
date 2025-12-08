// components/Sell/Faqs.tsx
"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "What's the best way to sell your house quickly?",
    answer:
      // "The best way to sell your home quickly depends on the market in your area. A listing agent can help you to understand the market in your area and understand what options will help sell your home the fastest.",
      "The best way to sell your home or apartment quickly,  totally depends on the market in your area. A real estate agent can help you a lot in understanding what is the market , how is it going on and also help in fastest sell of your property "
  },
  {
    question: "How can I estimate my home's value?",
    answer:
      // "Samarix.com makes it easy for you to estimate and understand your home's value. Visit My Home in order to claim your home, see the current estimate of your home's value, and to track the value over time.",
      "Samarix.com make it totally easy for you to estimate your home's value. Visit our website's My Home page to see your home's current value and you can refer it in future also. "
  },
  {
    question: "Who is best to sell your house with?",
    answer:
      // "Local real estate agents who specialize in your neighborhood are a great place to start for a listing agent who can sell your home with expertise. Some other options, like cash offers or For Sale By Owner (FSBO), might be an option in your area.",
      "Local real estate agents who are specilized in your area are great to start with, they can make you a great deal or you can use the other option of 'For Sale By Owner (FSBO) also' ."
  },
  {
    question: "What is the #1 thing that determines the value of a home?",
    answer:
      // "Understanding comparable home sales, or recent sales of similar properties in your community, is crucial for determining your home's market value. A listing agent can prepare “comps” to help show the value of your home.",
      "Understanding of comparable home sales or recently sales of similar properties in your area , you can find the market value for your property. And the agent can also help you in determining the value of your property. "
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="bg-white py-12" data-testid="faq-section">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-left text-gray-900 font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="p-4 text-gray-700 border-t border-gray-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}
