"use client";
import React from "react";
import Tracker from "../../components/Sell-Components/Tracker";
import SoldCards from "../../components/Sell-Components/soldcards";
import FAQ from "../../components/Sell-Components/Faq";
import CompareAgents from "../../components/Sell-Components/Compare-Agent";
import FeatureGrid from "../../components/Sell-Components/LocalAgents";
import Guide from "@/components/Sell/Guide";

const Page = () => {
  return (
    <>
      <CompareAgents />
      {/* <HeroSection /> */}
      <FeatureGrid />
      <Tracker />
      <SoldCards />

      <Guide />
      <FAQ />
    </>
  );
};

export default Page;
