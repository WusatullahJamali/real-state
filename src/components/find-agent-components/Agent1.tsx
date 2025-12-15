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
          backgroundImage: "url('/findagent1.webp')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Optional: Dark overlay for better text readability, similar to the image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content over the image (REALTOR Logo and Text) */}
        <div className="relative z-10">
          {/* Using a placeholder for the NAR Logo 'R' - replace with an actual logo component/image */}
          <div className="text-6xl font-extrabold mb-4">R</div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide">
            NATIONAL ASSOCIATION OF REALTORS
          </h1>
        </div>
      </div>
      
      {/* Right Column: Content Section 
        - Use white background and padding
      */}
      <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 flex flex-col justify-start">
        
        {/* Title and Introduction */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The REALTOR® difference</h2>
          <p className="text-gray-600 leading-relaxed">
            REALTORS® are members of the National Association of REALTORS®. Here are some of the advantages of working with an agent who is a REALTOR®:
          </p>
        </div>

        {/* Features/Advantages List */}
        <div className="space-y-8">
          
          {/* Code of Ethics */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod1.svg" alt="Code of Ethics icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Code of Ethics icon">☕</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Code of Ethics</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
              REALTORS® must adhere to a <span className="font-bold">Code of Ethics,</span> which is based on professionalism, serving the interests of clients, and protecting the public.
            </p>
          </div>

          {/* Commitment to excellence */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod2.svg" alt="Commitment icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Commitment icon">🏆</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Commitment to excellence</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
              Agents who are REALTORS® commit to the highest levels of professionalism - they advocate for their clients, understand local market conditions, and help bring people home.
            </p>
          </div>

          {/* Designations and certifications */}
          <div className="flex flex-col">
            {/* Header: Icon and Title */}
            <div className="flex items-center mb-2">
              {/* Replace with actual SVG icon: <img src="cod3.svg" alt="Certification icon" className="w-6 h-6 mr-3"/> */}
              <span className="text-2xl mr-3" role="img" aria-label="Certification icon">🎖️</span> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold text-gray-800">Designations and certifications</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-9">
              Agents who are REALTORS® have access to a wide range of programs and services that help them increase their skills, proficiency, and knowledge.
            </p>
          </div>

        </div>

       
        <div className="mt-12 ">
         
          <button className="flex items-center px-6 py-4 border-2 bg-white text-black hover:border-yellow-500 transition-colors rounded-full text-sm font-semibold duration-300">
            Find a REALTOR® 
            
            {/* Adding an arrow icon similar to the image */}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Agent1;