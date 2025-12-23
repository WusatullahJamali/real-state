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
      "The best way to sell your home quickly depends on your local market. A skilled real estate agent can guide you through pricing, staging, and marketing strategies to sell faster.",
  },
  {
    question: "How can I estimate my home's value?",
    answer:
      "Samarix.com makes it easy to estimate your home's value. Visit the 'My Home' page to see your property's current value and track it over time.",
  },
  {
    question: "Who is best to sell your house with?",
    answer:
      "Local agents specialized in your area are ideal, but you can also consider 'For Sale By Owner (FSBO)' options depending on your needs.",
  },
  {
    question: "What is the #1 thing that determines the value of a home?",
    answer:
      "Comparing recently sold similar properties in your area helps determine market value. A knowledgeable agent can provide further insights.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // CHANGE 1: Use a pure white background for the entire section //
    <section className="bg-white py-16" data-testid="faq-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                // Box remains White, border is subtle gray
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-xl mx-auto"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  // CHANGE 2: Hover effect uses a very light yellow (or a very light gray if yellow is too much)
                  className="w-full flex justify-between items-center p-6 hover:bg-yellow-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    // CHANGE 3: Highlight the question in yellow when open
                    className={`text-xl md:text-2xl font-semibold text-left transition-colors duration-300 ${
                      isOpen ? "text-yellow-600" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    // CHANGE 4: Rotate and change icon color to yellow when open
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-yellow-600" // Use yellow when open
                        : "text-gray-500" // Standard gray when closed
                    }`}
                  />
                </button>

                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden px-6 ${
                    isOpen ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}