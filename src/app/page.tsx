import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Startbutton from "@/components/Home/Startbutton";
import Categories from "@/components/Home/Categories";
import NeighborhoodCards from "@/components/Home/NeighbourCard";

import ProductSlider from "@/components/Home/PropertySlider";

import CollectionsSection from "@/components/Home/Collections";
import RecentPropertiesSection from "@/components/Home/RecentProperty";
import BlogPage from "@/components/blog components/BlogPage";
import RecommendedLocations from "@/components/Home/Recommended";

export default function HomePage() {
  return (
    <>
      <Hero />

      <CollectionsSection />

      <Startbutton />
      <Categories />
      <RecommendedLocations />
      {/* <ProductSlider /> */}
      {/* <Hero2 /> */}
      <BlogPage />
      {/* <Footer1 />
      <Footer2 /> */}
      {/* <RecentPropertiesSection/> */}
    </>
  );
}
