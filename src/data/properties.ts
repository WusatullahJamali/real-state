/* ======================================================
   PROPERTY TYPES & INTERFACES
====================================================== */

export interface HomeSpecs {
  beds: number;
  baths: number;
  sqft: number;
}

export interface LandSpecs {
  lotSizeKey: string;
  lotSizeValue: number;
}

export type PropertySpecs = HomeSpecs | LandSpecs;
export type PropertyTypeKey = "singleFamily" | "condo" | "land";

export interface Property {
  id: string;
  image: string;
  typeKey: PropertyTypeKey;
  price: number;
  addressKey: string;
  cityKey: string;
  specs: PropertySpecs;
  tags?: string[];
}

/* ======================================================
   DATA ROWS (Total 10 Unique Properties)
====================================================== */

export const row1: Property[] = [
  {
    id: "1",
    image: "/buy1.webp",
    typeKey: "singleFamily",
    price: 380000000,
    addressKey: "data.p1.address",
    cityKey: "data.p1.city",
    specs: { beds: 3, baths: 2, sqft: 1500 },
  },
  {
    id: "2",
    image: "/buy2.webp",
    typeKey: "condo",
    price: 290000000,
    addressKey: "data.p2.address",
    cityKey: "data.p2.city",
    specs: { beds: 2, baths: 2, sqft: 1200 },
  },
  {
    id: "3",
    image: "/buy3.webp",
    typeKey: "singleFamily",
    price: 420000000,
    addressKey: "data.p3.address",
    cityKey: "data.p3.city",
    specs: { beds: 4, baths: 3, sqft: 2000 },
  },
  {
    id: "4",
    image: "/buy4.webp",
    typeKey: "condo",
    price: 260000000,
    addressKey: "data.p4.address",
    cityKey: "data.p4.city",
    specs: { beds: 2, baths: 2, sqft: 1100 },
  },
];

export const row2: Property[] = [
  {
    id: "5",
    image: "/buy2.webp",
    typeKey: "singleFamily",
    price: 500000000,
    addressKey: "data.p5.address",
    cityKey: "data.p5.city",
    specs: { beds: 4, baths: 3, sqft: 2300 },
  },
  {
    id: "6",
    image: "/buy3.webp",
    typeKey: "land",
    price: 650000000,
    addressKey: "data.p6.address",
    cityKey: "data.p6.city",
    specs: { lotSizeKey: "sqm", lotSizeValue: 1200 },
  },
  {
    id: "7",
    image: "/buy4.webp",
    typeKey: "singleFamily",
    price: 410000000,
    addressKey: "data.p7.address",
    cityKey: "data.p7.city",
    specs: { beds: 4, baths: 3, sqft: 2100 },
  },
  {
    id: "8",
    image: "/buy1.webp",
    typeKey: "condo",
    price: 240000000,
    addressKey: "data.p8.address",
    cityKey: "data.p8.city",
    specs: { beds: 3, baths: 2, sqft: 1450 },
  },
];

// Row 3, 4, and 5 use a mix to ensure we have full 4-card rows
export const row3: Property[] = [
  {
    id: "9",
    image: "/buy2.webp",
    typeKey: "land",
    price: 720000000,
    addressKey: "data.p9.address",
    cityKey: "data.p9.city",
    specs: { lotSizeKey: "sqm", lotSizeValue: 2000 },
  },
  {
    id: "10",
    image: "/buy3.webp",
    typeKey: "singleFamily",
    price: 330000000,
    addressKey: "data.p10.address",
    cityKey: "data.p10.city",
    specs: { beds: 3, baths: 3, sqft: 1700 },
  },
  ...row1.slice(0, 2),
];

export const row4: Property[] = [...row2];
export const row5: Property[] = [...row1];

/* ======================================================
   MASTER EXPORTS & HELPERS
====================================================== */

export const allProperties: Property[] = [...row1, ...row2, ...row3];

export const getPropertyById = (id: string): Property | undefined => {
  return allProperties.find((p) => p.id === id);
};
