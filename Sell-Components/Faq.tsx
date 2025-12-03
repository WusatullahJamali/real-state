// components/FAQ.tsx
"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  iconColor?: string; // For arrow icon
  questionMarkColor?: string; // For question mark icon
}

const faqData: FaqItem[] = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
  },
  {
    question: "How does Preline's pricing work?",
    answer:
      "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
  },
  {
    question: "How secure is Preline?",
    answer:
      "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
  },
  {
    question: "How do I get access to a theme I purchased?",
    answer:
      "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
  },
  {
    question: "Upgrade License Type",
    answer:
      "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
  },
];

const FAQ: React.FC<FAQProps> = ({
  iconColor = "#0077c0",
  questionMarkColor = "#0077c0",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">
          You might be wondering...
        </h2>
      </div>

      {/* Accordion Items */}
      <div className="max-w-2xl mx-auto divide-y divide-gray-200">
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
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
