// 'use client';


// import Hero from "@/components/Home/Hero";
// import Hero2 from "@/components/Home/Hero2";
// import Startbutton from "@/components/Home/Startbutton";
// import Categories from "@/components/Home/Categories";
// // import NeighborhoodCards from "@/components/Home/NeighbourCard";
// // import Footer1 from "@/components/Home/Footer1";
// // import Footer2 from "@/components/Home/Footer2";
// import ProductSlider from "@/components/Home/PropertySlider";

// import CollectionsSection from "@/components/Home/Collections";
// import RecentPropertiesSection from "@/components/Home/RecentProperty";
// import BlogPage from "@/components/blog components/BlogPage";
// import RecommendedLocations from "@/components/Home/Recommended";


// export default function HomePage() {
//   return (
//     <>
//       <Hero />

//       <CollectionsSection />

//       <Startbutton />
//       <Categories />
//       <RecommendedLocations/>
//       {/* <ProductSlider /> */}
//       {/* <Hero2 /> */}
//       <BlogPage/>
//       {/* <Footer1 />
//       <Footer2 /> */}
//       {/* <RecentPropertiesSection/> */}
      
      
//     </>
//   );
// }


// 'use client';

// import { useTranslations } from 'next-intl';

// import Hero from "@/components/Home/Hero";
// import Hero2 from "@/components/Home/Hero2";
// import Startbutton from "@/components/Home/Startbutton";
// import Categories from "@/components/Home/Categories";
// // import NeighborhoodCards from "@/components/Home/NeighbourCard";
// // import Footer1 from "@/components/Home/Footer1";
// // import Footer2 from "@/components/Home/Footer2";
// import ProductSlider from "@/components/Home/PropertySlider";

// import CollectionsSection from "@/components/Home/Collections";
// import RecentPropertiesSection from "@/components/Home/RecentProperty";
// import BlogPage from "@/components/blog components/BlogPage";
// import RecommendedLocations from "@/components/Home/Recommended";

// export default function HomePage() {
//   // Translation hook
//   const t = useTranslations("home");
  
//   return (
//     <>
//       {/* Hero Section */}
//       <Hero title={t('heroTitle')} />

//       {/* Collections */}
//       <CollectionsSection title={t('collectionsTitle')} />

//       {/* Start Button */}
//       <Startbutton label={t('startButton')} />

//       {/* Categories */}
//       <Categories />

//       {/* Recommended Locations */}
//       <RecommendedLocations title={t('recommendedCities')} />

    
//       <BlogPage />
//       </>
   
//   );
// }










"use client";

import { useTranslations } from "next-intl";
import Hero from "@/components/Home/Hero";
import CollectionsSection from "@/components/Home/Collections";
import Startbutton from "@/components/Home/Startbutton";
import RecommendedLocations from "@/components/Home/Recommended";
import Categories from "@/components/Home/Categories";
import BlogPage from "@/components/blog components/BlogPage"

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <Hero
        // title={t("hero.title")}
        // description={t("hero.description")}
      />

      {/* Collections */}
      <CollectionsSection
        // title={t("collections.title")}
        // description={t("collections.description")}
      />

      {/* Start Button */}
      <Startbutton  />

      {/* Categories */}
      <Categories />

      {/* Recommended Locations */}
      <RecommendedLocations
        // title={t("recommendedLocations.title")}
        // subtitle={t("recommendedLocations.subtitle")}
      />

      <BlogPage />
    </>
  );
}
