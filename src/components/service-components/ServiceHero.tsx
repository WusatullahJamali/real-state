// components/Hero.tsx
import React from "react";
import Image from "next/image";

const ServiceHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/srr.avif"
          alt="Home service tools"
          fill
          className="object-cover pointer-events-none brightness-50"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="container mx-auto flex items-center justify-center px-6 relative z-20">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase text-white mb-6">
            Your Trusted Home Services
          </h1>

          {/* Sub Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-500">
            Quality Solutions for a Comfortable Home
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
