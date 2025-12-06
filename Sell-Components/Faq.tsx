// components/Sell/Faqs.tsx
"use client";
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
      "The best way to sell your home or apartment quickly,  totally depends on the market in your area. A real estate agent can help you a lot in understanding what is the market , how is it going on and also help in fastest sell of your property ",
  },
  {
    question: "How can I estimate my home's value?",
    answer:
      // "Samarix.com makes it easy for you to estimate and understand your home's value. Visit My Home in order to claim your home, see the current estimate of your home's value, and to track the value over time.",
      "Samarix.com make it totally easy for you to estimate your home's value. Visit our website's My Home page to see your home's current value and you can refer it in future also. ",
  },
  {
    question: "Who is best to sell your house with?",
    answer:
      // "Local real estate agents who specialize in your neighborhood are a great place to start for a listing agent who can sell your home with expertise. Some other options, like cash offers or For Sale By Owner (FSBO), might be an option in your area.",
      "Local real estate agents who are specilized in your area are great to start with, they can make you a great deal or you can use the other option of 'For Sale By Owner (FSBO) also' .",
  },
  {
    question: "What is the #1 thing that determines the value of a home?",
    answer:
      // "Understanding comparable home sales, or recent sales of similar properties in your community, is crucial for determining your home's market value. A listing agent can prepare “comps” to help show the value of your home.",
      "Understanding of comparable home sales or recently sales of similar properties in your area , you can find the market value for your property. And the agent can also help you in determining the value of your property. ",
  },
];

const FAQ: React.FC<FAQProps> = ({
  iconColor = "#000000", // Arrow color black
  questionMarkColor = "#FACC15", // Yellow
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Outer container ensures full width and centers the content
    <div className="bg-white w-full flex justify-center">
      {/* MAIN CONTENT CONTAINER: Set to max-w-7xl and centered (mx-auto).
        This replaces the non-standard 'w-7xl' class.
      */}
      <div className="max-w-7xl w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title Container: Remains centered within the max-w-7xl parent */}
        <div className="mx-auto mb-10 lg:mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">
            You might be wondering...
          </h2>
        </div>

        {/* Accordion Items Container: Now also set to max-w-7xl to fill the space */}
        <div className="max-w-5xl mx-auto divide-y divide-gray-200">
          {faqData.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  className="flex justify-between items-start w-full focus:outline-none gap-x-4"
                  onClick={() => toggleAccordion(index)}
                >
                  {/* Left question mark icon */}
                  <svg
                    className="shrink-0 mt-1 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={questionMarkColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>

                  <div className="grow text-left">
                    <h3 className="md:text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                  </div>

                  {/* Right arrow icon */}
                  <svg
                    className={`w-5 h-5 mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={iconColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Smooth answer using Tailwind max-height transition */}
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
    </section>
  );
}
