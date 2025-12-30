// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, Variants } from "framer-motion";
// import { useTranslations } from "next-intl";

// interface CollectionItem {
//   title: string;
//   count: number;
//   img: string;
//   href: string;
// }

// export default function CollectionsSection() {
//   const t = useTranslations("home.collections");

//   const collections = t.raw("items") as CollectionItem[];

//   const cardVariants = (index: number): Variants => ({
//     hidden: {
//       opacity: 0,
//       x: index < 4 ? -120 : 120,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 18,
//         duration: 0.8,
//         delay: index * 0.15
//       }
//     }
//   });

//   return (
//     <section className="bg-white py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-black mb-3">
//             {t("title")}
//           </h2>
//           <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//             {t("description")}
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-4 md:overflow-visible">
//           {collections.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={cardVariants(i)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               className="min-w-[85%] md:min-w-0"
//             >
//               <Link
//                 href={item.href}
//                 className="block group rounded-xl overflow-hidden transition-transform hover:scale-105"
//               >
//                 <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src={item.img}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 flex flex-col justify-end items-center md:items-start p-4 bg-gradient-to-t from-black/60 to-transparent">
//                     <h3 className="text-white font-bold text-xl">
//                       {item.title}
//                     </h3>
//                     <p className="text-white text-sm">
//                       {item.count} {t("propertiesLabel")}
//                     </p>
//                     <span className="mt-3 px-6 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-lg transition group-hover:bg-yellow-400">
//                       {t("viewCollection")}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile indicator */}
//       <div className="mt-6 flex justify-center md:hidden">
//         <div className="flex items-center gap-2">
//           <span className="w-8 h-1 rounded-full bg-gray-300 animate-pulse"></span>
//           <span className="w-2 h-2 rounded-full bg-gray-400"></span>
//           <span className="w-2 h-2 rounded-full bg-gray-300"></span>
//         </div>
//       </div>

//       <p className="mt-2 text-center text-sm text-gray-800 md:hidden">
//         {t("swipeHint")}
//       </p>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

interface CollectionItem {
  title: string;
  count: number;
  img: string;
  href: string;
}

export default function CollectionsSection() {
  // Use the namespace for the whole section
  const t = useTranslations("home.collections");

  // Get the raw data array for images, hrefs, and titles
  const collections = t.raw("items") as CollectionItem[];

  const cardVariants = (index: number): Variants => ({
    hidden: {
      opacity: 0,
      x: index < 4 ? -120 : 120,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.8,
        delay: index * 0.15,
      },
    },
  });

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-3">{t("title")}</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-4 md:overflow-visible">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="min-w-[85%] md:min-w-0"
            >
              <Link
                href={item.href}
                className="block group rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end items-center md:items-start p-4 bg-gradient-to-t from-black/60 to-transparent">
                    {/* Title comes from the raw JSON array */}
                    <h3 className="text-white font-bold text-xl">
                      {item.title}
                    </h3>

                    {/* Translate the count label using the t function */}
                    <p className="text-white text-sm">
                      {t("propertiesCount", { count: item.count })}
                    </p>

                    {/* Translate the button label using the t function */}
                    <span className="mt-3 px-6 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-lg transition group-hover:bg-yellow-400">
                      {t("viewButton")}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="mt-6 flex justify-center md:hidden">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-gray-300 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}
