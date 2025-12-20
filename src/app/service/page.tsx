import FeaturedProviders from "@/components/service-components/FeatureProviders";
import FeatureService from "@/components/service-components/FeatureService";
import ServiceHero from "@/components/service-components/ServiceHero";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceHero />
      <FeatureService />
      <FeaturedProviders />
    </>
  );
};

export default page;
