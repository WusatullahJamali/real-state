"use client"

import ACards from "@/components/rent-components/ACards";
import AdviceCardsRow from "@/components/rent-components/AdviceCard";
import ExploreAlaska from "@/components/rent-components/ExploreAlaska";
import GeoFooter from "@/components/rent-components/Footer3";
import Hero from "@/components/rent-components/Hero";
import Hero2 from "@/components/rent-components/Hero2";
import NewListings from "@/components/rent-components/NewListings";
import OnlineApplications from "@/components/rent-components/OnlineApplications";
import Pet from "@/components/rent-components/Pet";
import UnitLaundry from "@/components/rent-components/UnitLaundry";


export default function Page() {
  return (
    <div>
      <Hero />
      <NewListings />
      <ExploreAlaska />
      <Pet />
      <OnlineApplications />
      <UnitLaundry />
       <ACards />
      <Hero2 />
      <AdviceCardsRow />
      
       <GeoFooter />
    </div>
  );
}
