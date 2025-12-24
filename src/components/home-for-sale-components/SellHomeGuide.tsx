"use client";

import { FC, useRef } from "react";
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
    "Before listing your home, focus on creating a clean, welcoming, and neutral environment that appeals to the widest range of buyers. Start by deep cleaning every room, decluttering closets and storage spaces, and removing personal items such as family photos. Small upgrades like fresh paint, repaired fixtures, modern lighting, and well-maintained landscaping can significantly increase perceived value. Curb appeal is especially important—buyers often decide how they feel about a home before stepping inside. A well-prepared home not only attracts more interest but can also lead to stronger offers and faster sales.",
  imageSrc: "/marketinghome.avif",
  imageAlt: "Well-organized and staged living room",
},
{
  id: 2,
  title: "Pricing Strategy: Position Your Home for Maximum Demand",
  shortDescription:
    "Pricing correctly determines how quickly your home sells and how many buyers it attracts.",
  detailedContent:
    "Effective pricing begins with a detailed Comparative Market Analysis (CMA), examining recently sold homes, active listings, and local market trends. Overpricing can cause your home to sit unsold, leading to price reductions that weaken buyer confidence. Competitive pricing, on the other hand, generates more showings, increases urgency, and may result in multiple offers. A strategic price positions your home as a strong value in the market while maximizing your final sale price.",
  imageSrc: "/homestrategy.jpg",
  imageAlt: "Charts showing market comparison and pricing analysis",
},
{
  id: 3,
  title: "Listing & Marketing: Make Your Property Unmissable",
  shortDescription:
    "High-quality marketing ensures your listing reaches the right audience.",
  detailedContent:
    "Modern buyers begin their home search online, making professional marketing essential. High-quality photography, video tours, and detailed descriptions help your listing stand out among competing properties. Strategic online exposure through real estate platforms, social media, email campaigns, and agent networks ensures maximum visibility. A strong marketing plan not only attracts more buyers but also positions your home as desirable and well-presented from the start.",
  imageSrc: "/homedeal.webp",
  imageAlt: "Marketing dashboard showing digital promotion tools",
},
{
  id: 4,
  title: "Negotiation & Offers: Protect Your Interests",
  shortDescription:
    "Reviewing offers and negotiating terms requires attention to detail.",
  detailedContent:
    "When offers arrive, it’s important to look beyond the purchase price. Factors such as financing strength, contingencies, closing timelines, and buyer flexibility all play a critical role. Skilled negotiation helps you secure favorable terms while keeping buyers engaged. Strategic counteroffers can improve pricing, reduce risk, and ensure a smoother transaction from contract to closing.",
  imageSrc: "/homesell.avif",
  imageAlt: "Contract signing during home negotiation",
},
{
  id: 5,
  title: "Closing Process: Finalize and Transition Smoothly",
  shortDescription:
    "The closing stage ensures legal and financial readiness.",
  detailedContent:
    "During the closing process, your home undergoes appraisal, final inspections, and legal documentation review. Any remaining conditions must be resolved before ownership is transferred. Coordinating paperwork, timelines, and final walkthroughs ensures a smooth transition. Once funds are transferred and documents are signed, the sale is officially complete, allowing you to move forward with confidence and peace of mind.",
  imageSrc: "/negotiationhome.avif",
  imageAlt: "Keys and closing documents on a table",
}

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
