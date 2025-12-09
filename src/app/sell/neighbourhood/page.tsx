"use client";

import RecentPropertiesSection from "@/components/Home/RecentProperty";
import FeaturedCommunitySection from "@/components/Neighbour-Componets/FeatureCards";
import Hero from "@/components/Neighbour-Componets/Neighbour-Header";
import NeighborHeader from "@/components/Neighbour-Componets/Neighbour-Header";

const page = () => {
  return (
    <>
      {/* <NeighborHeader /> */}
      <Hero />
      <FeaturedCommunitySection />
      <RecentPropertiesSection />
    </>
  );
};

export default page;
