import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "What's the best way to sell your house quickly?",
    answer:
      "The best way to sell your home quickly depends on the market in your area. A listing agent can help you to understand the market in your area and understand what options will help sell your home the fastest.",
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white w-full flex justify-center py-12 px-4">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="divide-y divide-gray-200">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  {/* Question */}
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </h3>

                  {/* Chevron Icon */}
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-gray-900" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-900" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
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