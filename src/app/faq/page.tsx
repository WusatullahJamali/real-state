import Answer from "@/components/faqComponents/Answer";
import FContact from "@/components/faqComponents/FContact";
import FHero from "@/components/faqComponents/FHero";

const page = () => {
  return (
    <div>
      <FHero />
      <Answer />
      <FContact />
    </div>
  );
};

export default page;
