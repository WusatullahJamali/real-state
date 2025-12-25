/* ======================================================
   PROPERTY TYPES
====================================================== */

export interface HomeSpecs {
  beds: number;
  baths: number;
  sqft: number;
}

export interface LandSpecs {
  lotSize: string;
}

export type PropertySpecs = HomeSpecs | LandSpecs;

export type PropertyType = "Single-Family Home" | "Condo" | "Land";

export interface Property {
  id: string;
  image: string;
  type: PropertyType;
  price: number;
  address: string;
  cityStateZip: string;
  specs: PropertySpecs;
  tags?: string[];
}

/* ======================================================
   ROW 1 – HOMES
====================================================== */

export const row1: Property[] = [
  {
    id: "1",
    image: "/buy1.webp",
    type: "Single-Family Home",
    price: 380_000_000,
    address: "Street 14, Al-Mansour",
    cityStateZip: "Baghdad, Al-Mansour",
    specs: { beds: 3, baths: 2, sqft: 1500 },
  },
  {
    id: "2",
    image: "/buy2.webp",
    type: "Condo",
    price: 290_000_000,
    address: "Dream City Complex",
    cityStateZip: "Baghdad, Al-Jadriya",
    specs: { beds: 2, baths: 2, sqft: 1200 },
  },
  {
    id: "3",
    image: "/buy3.webp",
    type: "Single-Family Home",
    price: 420_000_000,
    address: "Street 60, Zayouna",
    cityStateZip: "Baghdad, Zayouna",
    specs: { beds: 4, baths: 3, sqft: 2000 },
  },
  {
    id: "4",
    image: "/buy4.webp",
    type: "Condo",
    price: 260_000_000,
    address: "Palm Residence",
    cityStateZip: "Erbil, Ankawa",
    specs: { beds: 2, baths: 2, sqft: 1100 },
  },
  {
    id: "5",
    image: "/buy2.webp",
    type: "Single-Family Home",
    price: 500_000_000,
    address: "Green Hills",
    cityStateZip: "Erbil, Italian City",
    specs: { beds: 4, baths: 3, sqft: 2300 },
  },
];

/* ======================================================
   ROW 2 – LAND + MIX
====================================================== */

export const row2: Property[] = [
  {
    id: "6",
    image: "/buy3.webp",
    type: "Land",
    price: 650_000_000,
    address: "Mountain View Plot",
    cityStateZip: "Duhok, Amedi",
    specs: { lotSize: "1200 sqm" },
  },
  {
    id: "7",
    image: "/buy4.webp",
    type: "Single-Family Home",
    price: 410_000_000,
    address: "Family Villas",
    cityStateZip: "Najaf, Al-Askan",
    specs: { beds: 4, baths: 3, sqft: 2100 },
  },
  {
    id: "8",
    image: "/buy1.webp",
    type: "Condo",
    price: 240_000_000,
    address: "Sunrise Towers",
    cityStateZip: "Basra, Al-Ashar",
    specs: { beds: 3, baths: 2, sqft: 1450 },
  },
  {
    id: "9",
    image: "/buy2.webp",
    type: "Land",
    price: 720_000_000,
    address: "Palm Agricultural Land",
    cityStateZip: "Karbala, Ain Al-Tamr",
    specs: { lotSize: "2000 sqm" },
  },
  {
    id: "10",
    image: "/buy3.webp",
    type: "Single-Family Home",
    price: 330_000_000,
    address: "Al-Quds District",
    cityStateZip: "Mosul, Al-Zohour",
    specs: { beds: 3, baths: 3, sqft: 1700 },
  },
];

/* ======================================================
   DERIVED ROWS
====================================================== */

export const row3: Property[] = [...row1];
export const row4: Property[] = [...row2];
export const row5: Property[] = [...row1];

/* ======================================================
   MASTER LIST
====================================================== */

// Add this helper to ensure the list is always fresh
export const allProperties: Property[] = [...row1, ...row2];

export const getPropertyById = (id: string): Property | undefined => {
  return allProperties.find((p) => p.id === id);
};
