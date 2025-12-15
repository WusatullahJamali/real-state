import React from 'react';
import Link from 'next/link';


const BANNER_IMAGE_URL = "/images/unique-home-banner.jpg"; 


export default function FeaturedArticleBanner() {
  return (
    <div className="relative bg-yellow-500 w-full h-[50vh] md:h-[65vh] overflow-hidden">
      
     
   
      <div 
        className="absolute inset-0 bg-cover bg-center transition duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${BANNER_IMAGE_URL})` }}
      >
        {/* Placeholder for the actual image. 
           If using the actual image path (e.g., /images/fdr-retreat.jpg), place it here:
           <Image 
             src={BANNER_IMAGE_URL} 
             alt="Featured Unique Home Article" 
             layout="fill" 
             objectFit="cover" 
             priority 
             className="transition duration-500 ease-in-out transform hover:scale-105"
           />
        */}
      </div>

      {/* 2. Dark Overlay for Readability */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* 3. Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        
        {/* Category Tag */}
        <p className="text-sm font-semibold uppercase text-black tracking-wider mb-3">
          Unique Homes
        </p>

        {/* Headline */}
        <h3 className="text-md sm:text-1xl md:text-3xl lg:text-5xl font-extrabold text-white max-w-4xl leading-tight drop-shadow-lg">
          Read our article to know about the trends in real estate market 
        </h3>

        {/* Call to Action Button */}
        <Link href="/article/fdr-hunting-retreat" passHref>
          <div className="mt-8">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition duration-300 shadow-xl backdrop-blur-sm">
              Read Article
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}