"use client";

import React from "react";
import BuyCards from "../../components/buy-components/BuyCards";
import CombinedAd from "@/components/buy-components/LocalInfo";
import PropertyCards from "@/components/buy-components/PropertyCards";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/rent-components/Hero2";

/* -------------------- TYPES -------------------- */

interface HomeSpecs {
  beds: number;
  baths: number;
  sqft: number;
}

interface LandSpecs {
  lotSize: string;
}

type PropertySpecs = HomeSpecs | LandSpecs;

export interface Property {
  id: string;
  image: string;
  type: "Single-Family Home" | "Condo" | "Land";
  price: number;
  address: string;
  cityStateZip: string;
  specs: PropertySpecs;
}

/* -------------------- PAGE -------------------- */

const Page: React.FC = () => {
  // ------------------ ROW 1 ------------------
  const row1: Property[] = [
    {
      id: "1",
      image: "/buy1.webp",
      type: "Single-Family Home",
      price: 380000000,
      address: "Street 14, Al-Mansour",
      cityStateZip: "Baghdad, Al-Mansour",
      specs: { beds: 3, baths: 2, sqft: 1500 },
    },
    {
      id: "2",
      image: "/buy2.webp",
      type: "Condo",
      price: 290000000,
      address: "Dream City Complex",
      cityStateZip: "Baghdad, Al-Jadriya",
      specs: { beds: 2, baths: 2, sqft: 1200 },
    },
    {
      id: "3",
      image: "/buy3.webp",
      type: "Single-Family Home",
      price: 420000000,
      address: "Street 60, Zayouna",
      cityStateZip: "Baghdad, Zayouna",
      specs: { beds: 4, baths: 3, sqft: 2000 },
    },
    {
      id: "4",
      image: "/buy4.webp",
      type: "Condo",
      price: 260000000,
      address: "Palm Residence",
      cityStateZip: "Erbil, Ankawa",
      specs: { beds: 2, baths: 2, sqft: 1100 },
    },
    {
      id: "5",
      image: "/buy2.webp",
      type: "Single-Family Home",
      price: 500000000,
      address: "Green Hills",
      cityStateZip: "Erbil, Italian City",
      specs: { beds: 4, baths: 3, sqft: 2300 },
    },
  ];

  // ------------------ ROW 2 ------------------
  const row2: Property[] = [
    {
      id: "6",
      image: "/buy3.webp",
      type: "Land",
      price: 650000000,
      address: "Mountain View Plot",
      cityStateZip: "Duhok, Amedi",
      specs: { lotSize: "1200 sqm" },
    },
    {
      id: "7",
      image: "/buy4.webp",
      type: "Single-Family Home",
      price: 410000000,
      address: "Family Villas",
      cityStateZip: "Najaf, Al-Askan",
      specs: { beds: 4, baths: 3, sqft: 2100 },
    },
    {
      id: "8",
      image: "/buy1.webp",
      type: "Condo",
      price: 240000000,
      address: "Sunrise Towers",
      cityStateZip: "Basra, Al-Ashar",
      specs: { beds: 3, baths: 2, sqft: 1450 },
    },
    {
      id: "9",
      image: "/buy2.webp",
      type: "Land",
      price: 720000000,
      address: "Palm Agricultural Land",
      cityStateZip: "Karbala, Ain Al-Tamr",
      specs: { lotSize: "2000 sqm" },
    },
    {
      id: "10",
      image: "/buy3.webp",
      type: "Single-Family Home",
      price: 330000000,
      address: "Al-Quds District",
      cityStateZip: "Mosul, Al-Zohour",
      specs: { beds: 3, baths: 3, sqft: 1700 },
    },
  ];

  const row3: Property[] = [...row1];
  const row4: Property[] = [...row2];
  const row5: Property[] = [...row1];

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
