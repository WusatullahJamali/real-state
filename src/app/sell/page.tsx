import React from "react";
import CompareAgents from "../../../Sell-Components/Compare-Agent";
import LocalAgents from "../../../Sell-Components/LocalAgents";
import Tracker from "../../../Sell-Components/Tracker";
import SoldCards from "../../../Sell-Components/soldcards";
import FAQ from "../../../Sell-Components/Faq";

const Page = () => {
  return (
    <>
      <CompareAgents />
      <LocalAgents />
      <Tracker />
      <SoldCards />
      <FAQ />
    </>
  );
};

export default Page;
