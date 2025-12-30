"use client";

import React from "react";
import BuyCards from "@/components/buy-components/BuyCards";
import CombinedAd from "@/components/buy-components/LocalInfo";
import PropertyCards from "@/components/buy-components/PropertyCards";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/rent-components/Hero2";

import { row1, row2, row3, row4, row5 } from "@/data/properties";

const Page: React.FC = () => {
  return (
    <>
      <Hero />

      <div className="pb-20">
        <BuyCards
          title="Homes around 400M IQD"
          linkText="View all in Baghdad"
          linkHref="#"
          properties={row1}
        />
        <BuyCards
          title="Newest Listings in Iraq"
          linkText="View all properties"
          linkHref="#"
          properties={row2}
        />
        <BuyCards
          title="Hot Deals"
          linkText="Special offers"
          linkHref="#"
          properties={row3}
        />
        <BuyCards
          title="Upcoming Projects"
          linkText="View developments"
          linkHref="#"
          properties={row4}
        />
        <BuyCards
          title="Affordable Homes"
          linkText="Budget-friendly homes"
          linkHref="#"
          properties={row5}
        />

        <PropertyCards />
        <Hero2/>
        <CombinedAd />
      </div>
    </>
  );
};

export default Page;
