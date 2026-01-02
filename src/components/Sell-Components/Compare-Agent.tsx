"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

// --- Carousel Data ---
const CAROUSEL_IMAGES = ["/sample-proposals.png", "/c2.png", "/c3.png"];

// --- Step Component ---
interface StepProps {
  number: number;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => (
  <div className="flex items-center gap-4">
    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold text-lg">
      {number}
    </div>
    <p className="text-lg text-black font-normal">{text}</p>
  </div>
);

export default function CompareAgents() {
  const t = useTranslations("CompareAgents");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [address, setAddress] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for agents at:", address);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Content */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-2">
              {t("title")} <span className="text-yellow-500">Alba</span>
              <span className="text-black">sync™</span>
            </h1>
            <p className="text-2xl text-black mb-10">{t("subTitle")}</p>

            <div className="space-y-6 mb-10">
              <Step number={1} text={t("steps.one")} />
              <Step number={2} text={t("steps.two")} />
              <Step number={3} text={t("steps.three")} />
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("inputPlaceholder")}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full h-16 rounded-full border-2 border-gray-300 placeholder-black focus:outline-none focus:border-gray-400 transition duration-200 text-gray-900 text-lg ${
                    isRtl ? "pr-6 pl-48" : "pl-6 pr-48"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-2 px-8 py-3 h-12 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition-colors duration-200 ${
                    isRtl ? "left-2" : "right-2"
                  }`}
                >
                  {t("buttonText")}
                  <ArrowRight
                    className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </form>
          </motion.div>

          {/* RIGHT SIDE: Carousel */}
          <motion.div
            className="order-2 lg:order-2 flex items-center justify-center relative h-[300px] sm:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={CAROUSEL_IMAGES[currentImageIndex]}
                    alt={`Agent proposal mockup ${currentImageIndex + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Dots */}
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
              dir="ltr"
            >
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex
                      ? "bg-yellow-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
