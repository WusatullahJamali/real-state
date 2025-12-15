"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- Carousel Data ---
const CAROUSEL_IMAGES = ["/sample-proposals.png", "/c2.png", "/c3.png"];

// --- Step Component ---
interface StepProps {
  number: number;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => (
  <div className="flex items-center gap-4">
    {/* Number circle with dark background */}
    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-lg">
      {number}
    </div>
    <p className="text-lg text-gray-900 font-normal">{text}</p>
  </div>
);

// --- Main Component ---
export default function CompareAgents() {
  const [address, setAddress] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for agents at:", address);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Steps + Search Form */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-2">
              Compare agents with{" "}
              <span className="text-yellow-500">Real</span>
              <span className="text-gray-900">Choice™</span>
            </h1>
            <p className="text-2xl text-black mb-10">
              Selling, find a trusted expert
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              <Step number={1} text="Enter your selling address" />
              <Step number={2} text="View proposals, no commitment" />
              <Step number={3} text="Choose the right agent, confidently" />
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter home address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={"w-full h-16 pl-6 pr-48 rounded-full border-2 border-gray-300 placeholder-gray-400 focus:outline-none  focus:border-gray-400 transition duration-200  text-gray-900 text-lg"}
                  required
                />
                <button
                  type="submit"
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2
                    flex items-center gap-2
                    px-8 py-3 h-12
                    bg-yellow-600 hover:bg-yellow-500
                    text-white font-semibold
                    rounded-full
                    transition-colors duration-200
                  "
                >
                  Get started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Carousel */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative h-[500px]">
            {CAROUSEL_IMAGES.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Agent proposal mockup ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className={`transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
          </div>
        </div>
      </div>
    </div>
  );
}