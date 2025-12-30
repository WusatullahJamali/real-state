import Common from "@/components/mortgage components/Comon";
import Hero3 from "@/components/mortgage components/Hero3";
import Loan from "@/components/mortgage components/Loan";
import MFooter from "@/components/mortgage components/MFooter";
import Rate from "@/components/mortgage components/Rate";
import Tool from "@/components/mortgage components/Tool";

const page = () => {
  return (
    <div>
      <Hero3 />
      <Tool />
      <Rate />
      <Loan />
      <Common />
      <MFooter />
    </div>
  );
};

export default page;
