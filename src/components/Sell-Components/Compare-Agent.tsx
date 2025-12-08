"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import { Check, Search, MoveRight } from "lucide-react";
import Link from "next/link";


// --- Carousel Data ---
const CAROUSEL_IMAGES = ["/sample-proposals.png", "/c2.png", "/c3.png"];

// --- Step Component ---
interface StepProps {
  number: number;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => (
  <div className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
    {/* Number circle with yellow background and black check */}
    <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold text-sm">
      <Check className="w-4 h-4" />
    </div>
    <p className="ml-4 text-base font-medium text-gray-700">{text}</p>
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
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl bg-white p-6 md:p-12 rounded-3xl  ">
        {/* Header Section */}
        <div className="text-center pb-8 mb-8 border-b border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-600 leading-snug">
            Find Your Perfect Agent with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400">
              RealChoice™
            </span>
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Unlock expert proposals tailored to your home—zero commitment
            required.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: Steps + Search Form */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your 3-Step Path to a Confident Sale
              </h2>

              <Step
                number={1}
                text="Enter your address for instant agent matching"
              />
              <Step
                number={2}
                text="View detailed proposals and selling strategies"
              />
              <Step
                number={3}
                text="Interview and choose the right expert, commitment-free"
              />
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <div className="relative flex-1 w-full">
                  <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-black" />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter home address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="
                      w-full h-12 pl-12 pr-4
                      rounded-xl
                      border border-gray-300
                      shadow-inner
                      placeholder-gray-500
                      focus:outline-none
                      focus:ring-2 focus:ring-yellow-400
                      
                      transition duration-200
                      text-gray-900
                      text-lg
                    "
                    required
                  />
                </div>

               <Link
  href="/add-property"
  className={`
    relative flex items-center justify-center gap-2
    px-6 py-3 w-[220px] md:w-[250px] h-12
    font-semibold text-sm cursor-pointer overflow-hidden shadow-md transition-all duration-300
    active:translate-x-[5px] active:translate-y-[5px] group

    bg-yellow-500 text-black        /* MOBILE BUTTON FULL YELLOW */
    md:bg-gray-900 md:text-white    /* DESKTOP BUTTON BLACK */
  `}
  style={{ borderRadius: "0px" }}
>
  {/* Yellow hover animation (only on desktop) */}
  <span
    className="
      absolute w-[250px] h-[250px] bg-yellow-500 -left-full top-0
      transition-all duration-300
      group-hover:translate-x-full group-hover:-translate-y-1/2 group-hover:rounded-none
      hidden md:block   /* HIDE ON MOBILE */
    "
  ></span>

  <MoveRight className="w-4 h-4 relative z-10" />
  <span className="relative z-10">ADD PROPERTY</span>
</Link>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Carousel */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative p-6 bg-white rounded-2xl shadow-inner h-[400px]">
            {CAROUSEL_IMAGES.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Agent proposal mockup ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className={`rounded-xl absolute transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}

            {/* <div className="absolute -bottom-2 right-4 text-xs text-gray-400">
              Data privacy guaranteed.
            </div> */}

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {CAROUSEL_IMAGES.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex
                      ? "bg-yellow-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
