import ACards from "./ACards";
import AdviceCardsRow from "./AdviceCard";
import Footer2 from "./Footer2";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import GeoFooter from "./Footer3";

export default function Page() {
  return (
    <div>
      <Hero />
      <ACards />
      <Hero2 />
      <AdviceCardsRow />
      <Footer2 />
       <GeoFooter />
    </div>
  );
}
