// pages/SellHomeGuidePage.tsx

"use client";

import { FC } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";

// WhatsApp Config
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I read your home selling guide and need more guidance from a consultant."
);

// ---------------- TYPES ----------------
interface GuideStepType {
  id: number;
  title: string;
  shortDescription: string;
  detailedContent: string;
  imageSrc: string;
  imageAlt: string;
}

// ---------------- DATA ----------------
const guideSteps: GuideStepType[] = [
  {
    id: 1,
    title: "Preparation: Strengthen Your Home’s First Impression",
    shortDescription:
      "Proper preparation sets the foundation for a smoother sale and helps your home stand out.",
    detailedContent:
      "Before listing, ensure your home is clean, organized, and appealing to a broad range of buyers. Enhance curb appeal by maintaining the lawn, repainting the entrance, and ensuring outdoor lighting is functional. Inside, deep cleaning, repairs, decluttering, and neutral décor help buyers imagine the space as their own. Small improvements such as fixing leaks, enhancing lighting, and refreshing paint can significantly boost perceived value.",
    imageSrc: "/marketinghome.avif",
    imageAlt: "Well-organized and staged living room",
  },
  {
    id: 2,
    title: "Pricing Strategy: Position Your Home for Maximum Demand",
    shortDescription:
      "Pricing correctly determines how quickly your home sells and how many buyers it attracts.",
    detailedContent:
      "Effective pricing begins with a Comparative Market Analysis (CMA), which compares your property to recently sold homes of similar size, location, and condition. Strategically pricing within the competitive range generates immediate interest and increases the chance of receiving multiple offers. Overpricing causes your listing to sit for too long, while underpricing may lead to financial loss. Work with a professional to understand market trends, buyer demand, and seasonal timing.",
    imageSrc: "/homestrategy.jpg",
    imageAlt: "Charts showing market comparison and pricing analysis",
  },
  {
    id: 3,
    title: "Listing & Marketing: Make Your Property Unmissable",
    shortDescription:
      "High-quality marketing ensures your listing reaches the right audience and leaves a lasting impression.",
    detailedContent:
      "Today’s buyers search online first, making digital presentation essential. Professional photography, cinematic video tours, 3D walkthroughs, and accurate floor plans create stronger engagement. Combine these with compelling descriptions that highlight key features, community benefits, and lifestyle advantages. Promote your listing using social media ads, real estate portals, and email campaigns to expand visibility and generate qualified leads.",
    imageSrc: "/homedeal.webp",
    imageAlt: "Marketing dashboard showing digital promotion tools",
  },
  {
    id: 4,
    title: "Negotiation & Offers: Protect Your Interests",
    shortDescription:
      "Reviewing offers and negotiating terms requires attention to detail and strategic thinking.",
    detailedContent:
      "Beyond the offer price, evaluate buyer financing, contingencies, deposit strength, closing dates, and inspection requests. Skilled negotiation helps you secure not only the best price but also favorable terms that reduce risk. A knowledgeable agent will guide you through counteroffers, multiple-offer situations, and legally binding documents to ensure every agreement protects your goals.",
    imageSrc: "/homesell.avif",
    imageAlt: "Contract signing during home negotiation",
  },
  {
    id: 5,
    title: "Closing Process: Finalize and Transition Smoothly",
    shortDescription:
      "The closing stage ensures legal, financial, and logistical readiness before ownership is transferred.",
    detailedContent:
      "During closing, your home undergoes appraisal, final inspections, and verification of all paperwork. Ensure agreed repairs are complete, disclosures are accurate, and the property's title is clear. Review closing documents carefully, including settlement statements and tax details. With proper coordination, this final step leads to a seamless and stress-free transition of ownership.",
    imageSrc: "/negotiationhome.avif",
    imageAlt: "Keys and closing documents on a table",
  },
];

// ---------------- GUIDE STEP COMPONENT ----------------
interface GuideStepProps {
  step: GuideStepType;
  isEven: boolean;
}

const GuideStep: FC<GuideStepProps> = ({ step, isEven }) => {
  const orderClass = isEven ? "lg:order-last" : "lg:order-first";

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 border-b border-gray-100 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* TEXT CONTENT */}
      <div className={`w-full lg:w-1/2 ${orderClass}`}>
        <p className="text-sm font-semibold text-yellow-600 mb-2 tracking-wide uppercase">
          Step {step.id}
        </p>

        <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
          {step.title}
        </h2>

        <p className="text-gray-600 mb-4">{step.shortDescription}</p>

        <p className="text-gray-700 leading-relaxed">{step.detailedContent}</p>
      </div>

      {/* IMAGE */}
      <div className="w-full lg:w-1/2">
        <div className="bg-gray-50 rounded-xl p-4 overflow-hidden shadow-sm">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={step.imageSrc}
              alt={step.imageAlt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ---------------- MAIN PAGE ----------------
const SellHomeGuidePage: FC = () => {
  return (
    <>
      <Head>
        <title>The Ultimate Home Selling Guide | Modern Real Estate</title>
        <meta
          name="description"
          content="A modern, detailed step-by-step guide to selling your home effectively."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* MAIN CONTENT */}
        <main className="pt-14 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HERO */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-teal-700 tracking-wide uppercase mb-3">
                Your Roadmap to a Successful Sale
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-600 leading-snug">
                Your Path to the{"  "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400">
                  Perfect Home
                </span>
              </h1>

              <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-600">
                Follow this clear, simplified, and practical 5-step framework to
                sell your home faster, smarter, and at the best possible price.
              </p>
            </motion.div>

            {/* STEPS */}
            <section className="space-y-8">
              {guideSteps.map((step, index) => (
                <GuideStep key={step.id} step={step} isEven={index % 2 !== 0} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default SellHomeGuidePage;
