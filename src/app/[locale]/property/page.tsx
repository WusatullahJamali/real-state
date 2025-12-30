"use client";

import React from "react";
import BuyCards from "@/components/buy-components/BuyCards";
import PropertyHero from "@/components/property-components/PropertyHero";

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
      price: 450000,
      address: "101 Sunset Blvd",
      cityStateZip: "Seattle, WA 98001",
      specs: { beds: 3, baths: 2, sqft: 1500 },
    },
    {
      id: "2",
      image: "/buy2.webp",
      type: "Condo",
      price: 520000,
      address: "500 City Walk",
      cityStateZip: "Bellevue, WA 98004",
      specs: { beds: 2, baths: 2, sqft: 1200 },
    },
    {
      id: "3",
      image: "/buy3.webp",
      type: "Single-Family Home",
      price: 610000,
      address: "400 Pine Street",
      cityStateZip: "Seattle, WA 98005",
      specs: { beds: 4, baths: 3, sqft: 2000 },
    },
    {
      id: "4",
      image: "/buy4.webp",
      type: "Condo",
      price: 470000,
      address: "700 Harbor Ave",
      cityStateZip: "Seatac, WA 98188",
      specs: { beds: 2, baths: 2, sqft: 1100 },
    },
    {
      id: "5",
      image: "/buy2.webp",
      type: "Single-Family Home",
      price: 690000,
      address: "900 Rainier Ave",
      cityStateZip: "Renton, WA 98055",
      specs: { beds: 4, baths: 3, sqft: 2300 },
    },
  ];

  // ------------------ ROW 2 ------------------
  const row2: Property[] = [
    {
      id: "6",
      image: "/buy3.webp",
      type: "Land",
      price: 650000,
      address: "Mountain Ridge",
      cityStateZip: "Cle Elum, WA 98922",
      specs: { lotSize: "1.2 acre lot" },
    },
    {
      id: "7",
      image: "/buy4.webp",
      type: "Single-Family Home",
      price: 700000,
      address: "Green Valley",
      cityStateZip: "Everett, WA 98201",
      specs: { beds: 4, baths: 3, sqft: 2100 },
    },
    {
      id: "8",
      image: "/buy1.webp",
      type: "Condo",
      price: 560000,
      address: "Sunrise Heights",
      cityStateZip: "Tacoma, WA 98444",
      specs: { beds: 3, baths: 2, sqft: 1450 },
    },
    {
      id: "9",
      image: "/buy2.webp",
      type: "Land",
      price: 720000,
      address: "Forest Creek",
      cityStateZip: "Olympia, WA 98501",
      specs: { lotSize: "2.0 acre lot" },
    },
    {
      id: "10",
      image: "/buy3.webp",
      type: "Single-Family Home",
      price: 590000,
      address: "Sun View Estate",
      cityStateZip: "Kent, WA 98032",
      specs: { beds: 3, baths: 3, sqft: 1700 },
    },
  ];

  const row3: Property[] = [...row1];
  const row4: Property[] = [...row2];
  const row5: Property[] = [...row1];

  return (
    <>
      <PropertyHero />

      <div className="pb-20">
        <BuyCards
          title="Homes around $650,000"
          linkText="View all in Cle Elum, WA"
          linkHref="#"
          properties={row1}
        />

        <BuyCards
          title="Newest Listings"
          linkText="View all in Cle Elum, WA"
          linkHref="#"
          properties={row2}
        />

        <BuyCards
          title="Hot Deals"
          linkText="View all in Cle Elum, WA"
          linkHref="#"
          properties={row3}
        />

        <BuyCards
          title="Upcoming Open Houses"
          linkText="View all in Cle Elum, WA"
          linkHref="#"
          properties={row4}
        />

        <BuyCards
          title="Affordable Homes"
          linkText="View all in Cle Elum, WA"
          linkHref="#"
          properties={row5}
        />
      </div>
    </>
  );
};

export default Page;
