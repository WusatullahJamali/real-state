import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hp-hero.webp"
          alt="About background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
