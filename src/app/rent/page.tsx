"use client";

import AdviceCardsRow from "@/components/rent-components/AdviceCard";
import GeoFooter from "@/components/rent-components/Footer3";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/rent-components/Hero2";
import ExploreAlaska from "@/components/rent-components/ExploreAlaska";
import NewListings from "@/components/rent-components/NewListings";
import OnlineApplications from "@/components/rent-components/OnlineApplications";
import Pet from "@/components/rent-components/Pet";
import UnitLaundry from "@/components/rent-components/UnitLaundry";
import { Network } from "inspector/promises";

export default function Page() {
  return (
    <div>
      <Hero />
      <NewListings />
      <ExploreAlaska />
      <Pet />
      <OnlineApplications />
      <UnitLaundry />

      <Hero2 />
      <AdviceCardsRow />

      <GeoFooter />
    </div>
  );
}
