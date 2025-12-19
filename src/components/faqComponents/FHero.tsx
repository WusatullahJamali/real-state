import React from 'react';

const FHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hp-hero.webp"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Welcome to Our Real Estate Platform
        </h1>
        <p className="mt-4 text-gray-200 text-lg md:text-xl">
          Discover your dream home with ease and confidence.
        </p>
      </div>

      {/* Wavy Section Divider (optional) */}
      {/* Add SVG or CSS wave here if needed */}
      
    </section>
  );
};

export default FHero;
