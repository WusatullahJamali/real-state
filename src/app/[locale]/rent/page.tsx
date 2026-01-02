
import Hero from "@/components/Home/Hero";
import ACards from "@/components/rent-components/ACards";
import Hero2 from "@/components/rent-components/Hero2";
import AdviceCardsGrid from "@/components/rent-components/AdviceCard";
import RentListingSections from "@/components/rent-components/RentalListingSection";

export default function RentPage() {
  return (
    <>
    <Hero />
    <RentListingSections />
    <ACards />
    <Hero2 />
    <AdviceCardsGrid />
    </>
  );
}