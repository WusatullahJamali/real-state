"use client";

import { FC, useRef } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

// ---------------- TYPES ----------------
interface GuideStepType {
  id: number;
  title: string;
  shortDescription: string;
  detailedContent: string;
  imageSrc: string;
  imageAlt: string;
}

const STATIC_IMAGES = [
  "/marketinghome.avif",
  "/homestrategy.jpg",
  "/homedeal.webp",
  "/homesell.avif",
  "/negotiationhome.avif",
];

// ---------------- GUIDE STEP ----------------
interface GuideStepProps {
  step: GuideStepType;
  isEven: boolean;
  locale: string;
}

const GuideStep: FC<GuideStepProps> = ({ step, isEven, locale }) => {
  const t = useTranslations("SellGuide");
  const isRtl = locale === "ar";

  // In RTL, we flip the logic so the visual layout remains consistent with standard design patterns
  const orderClass = isEven ? "lg:order-last" : "lg:order-first";

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-full lg:w-1/2 ${orderClass} p-6 ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        <p className="text-sm font-semibold text-yellow-600 mb-2">
          {t("stepLabel")} {step.id}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
        <p className="text-gray-600 mb-4">{step.shortDescription}</p>
        <p className="text-gray-700 leading-relaxed">{step.detailedContent}</p>
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
  const locale = useLocale();
  const t = useTranslations("SellGuide");
  const stepsContainerRef = useRef(null);
  const isRtl = locale === "ar";

  // Merge JSON data with static image paths
  const guideSteps: GuideStepType[] = (t.raw("steps") as any[]).map(
    (step, index) => ({
      ...step,
      id: index + 1,
      imageSrc: STATIC_IMAGES[index],
    })
  );

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
      <div className="min-h-screen bg-white" dir={isRtl ? "rtl" : "ltr"}>
        <main className="pt-14 pb-16">
          {/* ✅ MOBILE BACK BUTTON – BELOW NAVBAR */}
          <div
            className={`lg:hidden px-4 mb-6 ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            <button
              onClick={() => router.push("/")}
              className="bg-yellow-500 text-white px-5 py-3 rounded-full shadow-md w-fit"
            >
              {t("backButton")}
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <section ref={stepsContainerRef} className="relative">
              {/* Vertical Animated Line */}
              <motion.div
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-yellow-400"
                style={{ height: lineHeight }}
              />

              {guideSteps.map((step, index) => (
                <GuideStep
                  key={step.id}
                  step={step}
                  isEven={index % 2 !== 0}
                  locale={locale}
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
