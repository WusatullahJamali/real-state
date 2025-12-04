
import ListingCard from "@/components/Home/cards";
import Image from "next/image";
import Categories from "@/components/Home/Categories"
import NeighborhoodCards from "@/components/Home/NeighbourCard";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Startbutton from "@/components/Home/Startbutton"
import Footer1 from "@/components/Home/Footer1";
import Footer2 from "@/components/Home/Footer2";
// import Guide from "@/components/Sell/Guide"
// import Faqs from "@/components/Sell/Faqs"

export default function HomePage() {
  const collections = [
    {
      title: "Recommended Homes",
      count: 17,
      img: "/img1.webp",
      href: "/recommended",
    },
    {
      title: "New Listings",
      count: 7,
      img: "/img2.avif",
      href: "/new-listings",
    },
    {
      title: "Price Reduced",
      count: 14,
      img: "/img3.webp",
      href: "/price-reduced",
    },
    {
      title: "Open Houses",
      count: 3,
      img: "/img4.jpeg",
      href: "/open-houses",
    },
    {
      title: "Recently Sold",
      count: 168,
      img: "/img5.jpg",
      href: "/open-houses",
    },
    {
      title: "New Constructions",
      count: 32,
      img: "/img6.webp",
      href: "/open-houses",
    },
    {
      title: "New Home Communities",
      count: 2,
      img: "/img7.jpg",
      href: "/open-houses",
    },
    {
      title: "Land",
      count: 29,
      img: "/img8.jpg",
      href: "/open-houses",
    },
  ];

  return (
    <>
    <Hero/>
    
    <div className="bg-white">
    <main className="max-w-7xl h-full bg-white mx-auto px-4 py-10">
      <h2 className="text-2xl text-black font-bold mb-6">Collections</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((item, i) => (
          <ListingCard key={i} {...item} />
        ))}
      </div>
    </main>
    </div>
    <Startbutton/>
    <Categories/>
    <NeighborhoodCards/>
    <Hero2/>
    <Footer1/>
    <Footer2/>
    {/* <Guide/>
    <Faqs/> */}
        
    </>
  );
}
