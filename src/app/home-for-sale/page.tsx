// pages/SellHomeGuidePage.tsx

"use client";

import { FC } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

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
      "Before listing, ensure your home is clean, organized, and appealing to a broad range of buyers...",
    imageSrc: "/marketinghome.avif",
    imageAlt: "Well-organized and staged living room",
  },
  {
    id: 2,
    title: "Pricing Strategy: Position Your Home for Maximum Demand",
    shortDescription:
      "Pricing correctly determines how quickly your home sells and how many buyers it attracts.",
    detailedContent:
      "Effective pricing begins with a Comparative Market Analysis (CMA)...",
    imageSrc: "/homestrategy.jpg",
    imageAlt: "Charts showing market comparison and pricing analysis",
  },
  {
    id: 3,
    title: "Listing & Marketing: Make Your Property Unmissable",
    shortDescription:
      "High-quality marketing ensures your listing reaches the right audience.",
    detailedContent:
      "Today’s buyers search online first, making digital presentation essential...",
    imageSrc: "/homedeal.webp",
    imageAlt: "Marketing dashboard showing digital promotion tools",
  },
  {
    id: 4,
    title: "Negotiation & Offers: Protect Your Interests",
    shortDescription:
      "Reviewing offers and negotiating terms requires attention to detail.",
    detailedContent:
      "Beyond the offer price, evaluate buyer financing and contingencies...",
    imageSrc: "/homesell.avif",
    imageAlt: "Contract signing during home negotiation",
  },
  {
    id: 5,
    title: "Closing Process: Finalize and Transition Smoothly",
    shortDescription:
      "The closing stage ensures legal and financial readiness.",
    detailedContent:
      "During closing, your home undergoes appraisal and final inspections...",
    imageSrc: "/negotiationhome.avif",
    imageAlt: "Keys and closing documents on a table",
  },
];

// ---------------- GUIDE STEP ----------------
interface GuideStepProps {
  step: GuideStepType;
  isEven: boolean;
}

const GuideStep: FC<GuideStepProps> = ({ step, isEven }) => {
  const orderClass = isEven ? "lg:order-last" : "lg:order-first";

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full lg:w-1/2 ${orderClass} p-6`}>
        <p className="text-sm font-semibold text-yellow-600 mb-2">
          Step {step.id}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {step.title}
        </h2>
        <p className="text-gray-600 mb-4">{step.shortDescription}</p>
        <p className="text-gray-700 leading-relaxed">
          {step.detailedContent}
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          src={step.imageSrc}
          alt={step.imageAlt}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
};

// ---------------- MAIN PAGE ----------------
const SellHomeGuidePage: FC = () => {
  const router = useRouter();
  const stepsContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Head>
        <title>The Ultimate Home Selling Guide</title>
      </Head>

      <div className="min-h-screen bg-white">
        <main className="pt-14 pb-16">

          {/* ✅ MOBILE BACK BUTTON – BELOW NAVBAR */}
          <div className="lg:hidden px-4 mb-6">
            <button
              onClick={() => router.push("/")}
              className="bg-yellow-500 text-white px-5 py-3 rounded-full shadow-md w-fit"
            >
              ← Back to Home
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <section ref={stepsContainerRef} className="relative">
              <motion.div
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-yellow-400"
                style={{ height: lineHeight }}
              />

              {guideSteps.map((step, index) => (
                <GuideStep
                  key={step.id}
                  step={step}
                  isEven={index % 2 !== 0}
                />
              ))}
            </section>
          </div>

        </main>
      </div>
    </>
  );
};

export default SellHomeGuidePage;
