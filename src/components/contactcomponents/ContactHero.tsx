import React from "react";

const ContactHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hp-hero.webp"
          alt="contact background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          For Any Information
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl mx-auto">
          Feel free to reach out to us anytime. Our team will assist you as soon
          as possible.
        </p>
      </div>

      {/* Wavy Section Divider */}
      
    </section>
  );
};

export default ContactHero;
