// "use client";

// import { FC } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react"; // Import Search icon

// /**
//  * Component for the aesthetic hero section of the Explore Neighborhood page.
//  * Designed to match the typography and color accents of the provided theme,
//  * now including the aesthetic search bar.
//  */
// const NeighborHeader: FC = () => {
//   return (
//     // Outer container with a light background to simulate the theme's aesthetic
//     <div className="bg-white py-20 relative overflow-hidden">
//       {/* Optional: Add a subtle radial gradient effect for depth, matching the light tone */}
//       <div
//         className="absolute inset-0 bg-yellow-50/50 opacity-50 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(255, 255, 200, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
//         }}
//       />

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Secondary Header / Callout (Matching the theme's small, colored text) */}
//           <p className="text-sm font-semibold text-teal-700 tracking-wider uppercase mb-3">
//             Find Your Community. Find the Home
//           </p>

//           {/* Primary Header (Large, bold, with gradient clip text) */}
//           <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-600 leading-tight">
//             Explore The Perfect{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
//               Neighborhood
//             </span>
//           </h1>

//           {/* Descriptive Subtext */}
//           <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
//             Search diverse neighborhoods, discover local amenities, and find the
//             community that perfectly matches your lifestyle.
//           </p>

//           {/* SEARCH BAR INTEGRATION
//             Matches the aesthetic search bar design: rounded, subtle shadow, teal button.
//           */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             // Main container styling: Rounded, shadow, white background
//             className="max-w-3xl mx-auto mt-8 p-1 bg-white rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl"
//             style={{
//               boxShadow:
//                 "0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)",
//             }}
//           >
//             <div className="flex items-stretch w-full">
//               {/* Input Field */}
//               <input
//                 type="text"
//                 placeholder="Search by City, Neighborhood, or Builder..."
//                 className="flex-grow px-6 py-4 text-lg text-gray-700 bg-white
//                            focus:outline-none focus:ring-0 rounded-l-xl placeholder-gray-400"
//               />

//               {/* Search Button (Teal/Cyan Theme Color) */}
//               <button
//                 className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold
//                            px-8 py-4 rounded-r-xl transition duration-200 shadow-md hover:shadow-lg"
//               >
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </motion.div>
//           {/* END SEARCH BAR */}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default NeighborHeader;

import React from "react";

// You will need to replace the image URL with your actual image path or public URL.
// For Next.js, you might import the image like: import heroImage from 'path/to/your/image.jpg';
// and use it in the style attribute or a Next.js <Image> component.
// For simplicity and matching the reference image, I'm using an external URL structure here,
// but it's best practice to use a local asset and the <Image> component in a real Next.js app.
const BACKGROUND_IMAGE_URL = "/hh.jpg"; // Replace with your actual image path

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center  "
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      {/* Overlay to darken the image slightly for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white p-4">
        {/* Top Text (FIND COMWUNITY FINE TNE TNE) - Adjusted for possible typo */}
        <p className="text-sm uppercase tracking-widest mb-2 font-semibold text-gray-200">
          Find Community Fine The The
        </p>

        {/* Main Heading */}

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-600 leading-snug">
          Discover Your Dream{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400">
            Lifeam Lifestyle
          </span>
        </h1>

        {/* Sub-text / Description */}
        <p className="text-base text-center max-w-xl mb-8 text-gray-100">
          Explore diverse neighborhoods, discover local amenities, and find
          community and perfectly matches mycts lifestyle.
        </p>

        {/* Button */}
        <button
          className="px-8 py-3 text-lg font-bold rounded-md transition duration-300
                     bg-teal-500 hover:bg-teal-600 text-white shadow-lg"
          onClick={() => console.log("Explore Communities clicked")}
        >
          Explore Communities
        </button>
      </div>
    </div>
  );
};

export default Hero;
