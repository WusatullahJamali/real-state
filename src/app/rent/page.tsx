"use client"

import ACards from "@/components/rent components/ACards";
import AdviceCardsRow from "@/components/rent components/AdviceCard";
import GeoFooter from "@/components/rent components/Footer3";
import Hero from "@/components/rent components/Hero";
import Hero2 from "@/components/rent components/Hero2";


export default function Page() {
  return (
    <div>
      <Hero />
      <ACards />
      <Hero2 />
      <AdviceCardsRow />
      
       <GeoFooter />
    </div>
  );
}
