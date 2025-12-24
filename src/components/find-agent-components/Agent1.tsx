import React from 'react';

// Assuming you have the images available in your public/assets folder or similar structure.
// NOTE: I'm using placeholder classes and comments for styling that relies on exact image contents,
// like the background image and the specific icons, as I don't have those files.

const Agent1 = () => {
  return (
    // Main container to hold the two columns: image and content
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Column: Image Section 
        - Use a div for background image and overlay text
      */}
      <div 
        className="
          lg:w-1/2 w-full h-96 lg:h-auto 
          bg-cover bg-center 
          relative 
          text-white 
          flex flex-col justify-end p-8 
          md:p-12
        "
        // Replace with your actual image URL or use a proper background image setup in CSS/Tailwind config
        style={{ 
          backgroundImage: "url('/shahzaib2.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Optional: Dark overlay for better text readability, similar to the image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content over the image (REALTOR Logo and Text) */}
        <div className="relative z-10">
          {/* Using a placeholder for the NAR Logo 'R' - replace with an actual logo component/image */}
          <div className="text-6xl font-extrabold mb-4"></div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide">
             IRAQ REAL ESTATE AGENTS NETWORK
          </h1>
        </div>
      </div>
      
      {/* Right Column: Content Section 
        - Use white background and padding
      */}
      <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 flex flex-col justify-start">
        
        {/* Title and Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why choose our agents in Iraq?</h2>
          <p className="text-gray-600 leading-relaxed">
           Our certified real estate agents across Baghdad, Erbil, Basra, Najaf, Karbala, and other cities provide professional support for buying, selling, and renting properties.
          </p>
        </div>

        {/* Features/Advantages List */}
        <div className="space-y-8">
          
          {/* Code of Ethics */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod1.svg" alt="Code of Ethics icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Professionalism">🏢</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Professionalism</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
              Our agents follow strict standards of professionalism, ensuring transparent transactions and protecting the interests of both buyers and sellers.
            </p>
          </div>

          {/* Commitment to excellence */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod2.svg" alt="Commitment icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Local Expertise">📍</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Local Expertise</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
              Agents have in-depth knowledge of local markets, neighborhoods, and pricing trends to help you make informed decisions.
            </p>
          </div>

          {/* Designations and certifications */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod3.svg" alt="Certification icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Certifications icon">🎖️</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Certifications & Experience</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
             Our agents hold relevant certifications and have years of experience facilitating property transactions across Iraq.
            </p>
          </div>

        </div>

       
        <div className="mt-12 ">
         
          <button className="flex items-center px-6 py-4 border-2 bg-white text-black hover:border-yellow-500 transition-colors rounded-full text-sm font-semibold duration-300">
            Find an Agent in Iraq
            
            {/* Adding an arrow icon similar to the image */}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Agent1;