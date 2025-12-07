// components/Sell/Faqs.tsx
"use client";

import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

interface FAQProps {
  iconColor?: string;
  questionMarkColor?: string;
}

const faqs: Faq[] = [
  {
    question: "What's the best way to sell your house quickly?",
    answer:
      "The best way to sell your home or apartment quickly depends on the market in your area. A real estate agent can help you understand how the market is performing and guide you toward the fastest way to sell your property.",
  },
  {
    question: "How can I estimate my home's value?",
    answer:
      "Samarix.com makes it easy for you to estimate your home's value. Simply visit the 'My Home' page to see your current estimated value and track it over time.",
  },
  {
    question: "Who is best to sell your house with?",
    answer:
      "Local real estate agents who specialize in your area are usually the best choice. They understand the market and can help you get a great deal. You may also choose the 'For Sale By Owner (FSBO)' option if you prefer.",
  },
  {
    question: "What is the #1 thing that determines the value of a home?",
    answer:
      "Comparable home sales — meaning recent sales of similar properties in your area — are the most important factor in determining market value. A real estate agent can prepare these comparisons to help you understand your home's worth.",
  },
];

const FAQ: React.FC<FAQProps> = ({
  iconColor = "#000000",
  questionMarkColor = "#FACC15",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="max-w-7xl w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="mx-auto mb-10 lg:mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-4xl text-gray-900">
            You might be wondering...
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="max-w-5xl mx-auto divide-y divide-gray-200">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-start w-full gap-x-4 focus:outline-none"
                >
                  {/* Question Mark Icon */}
                  <svg
                    className="shrink-0 mt-1 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={questionMarkColor}
                    strokeWidth={2}
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>

                  {/* Question */}
                  <div className="grow text-left">
                    <h3 className="md:text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <svg
                    className={`w-5 h-5 mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={iconColor}
                    strokeWidth={2}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 pl-10">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;