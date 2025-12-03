import React from 'react';


const Hero2 = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-0 max-w-2xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          What To Ask Before Renting a Home To Avoid Hidden Expenses
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full font-semibold shadow-lg">
          Read Article
        </button>
      </div>
    </div>
  );
};

export default Hero2;
