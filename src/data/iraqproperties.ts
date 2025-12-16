// data/iraqProperties.ts

const BAGHDAD = { lat: 33.3153, lng: 44.3661 };
const ERBIL = { lat: 36.1912, lng: 44.0092 };
const BASRA = { lat: 30.515, lng: 47.81 };

interface Geo {
  lat: number;
  lng: number;
}

interface HomeSpecs {
  beds: number;
  baths: number;
  areaSqM: number;
}

interface LandSpecs {
  lotSizeSqM: number;
}

export type Property =
  | {
      id: string;
      image: string;
      type: "House" | "Apartment" | "Villa";
      priceIQD: number;
      address: string;
      city: "Baghdad" | "Erbil" | "Basra";
      specs: HomeSpecs;
      geo: Geo;
    }
  | {
      id: string;
      image: string;
      type: "Land";
      priceIQD: number;
      address: string;
      city: "Baghdad" | "Erbil" | "Basra";
      specs: LandSpecs;
      geo: Geo;
    };

export const propertiesData: Property[] = [
  {
    id: "1",
    image: "/blog[1].jpg",
    type: "Villa",
    priceIQD: 550000000,
    address: "Al-Mansour District",
    city: "Baghdad",
    specs: { beds: 4, baths: 3, areaSqM: 420 },
    geo: { lat: BAGHDAD.lat + 0.01, lng: BAGHDAD.lng - 0.01 },
  },
  {
    id: "2",
    image: "/blog1.jpg",
    type: "Apartment",
    priceIQD: 120000000,
    address: "Dream City, Gulan",
    city: "Erbil",
    specs: { beds: 2, baths: 2, areaSqM: 135 },
    geo: { lat: ERBIL.lat - 0.01, lng: ERBIL.lng + 0.01 },
  },
  {
    id: "3",
    image: "/blog2.jpg",
    type: "Land",
    priceIQD: 350000000,
    address: "Al-Ashar Main Road",
    city: "Basra",
    specs: { lotSizeSqM: 780 },
    geo: { lat: BASRA.lat + 0.01, lng: BASRA.lng - 0.01 },
  },

  // ===== EXTRA 7 PINS =====
  {
    id: "4",
    image: "/blog3.jpg",
    type: "House",
    priceIQD: 290000000,
    address: "Karrada",
    city: "Baghdad",
    specs: { beds: 3, baths: 2, areaSqM: 260 },
    geo: { lat: BAGHDAD.lat + 0.02, lng: BAGHDAD.lng + 0.01 },
  },
  {
    id: "5",
    image: "/blog4.jpg",
    type: "Apartment",
    priceIQD: 180000000,
    address: "Zayouna",
    city: "Baghdad",
    specs: { beds: 2, baths: 1, areaSqM: 120 },
    geo: { lat: BAGHDAD.lat - 0.015, lng: BAGHDAD.lng + 0.02 },
  },
  {
    id: "6",
    image: "/blog5.jpg",
    type: "Villa",
    priceIQD: 800000000,
    address: "Empire World",
    city: "Erbil",
    specs: { beds: 5, baths: 4, areaSqM: 520 },
    geo: { lat: ERBIL.lat + 0.015, lng: ERBIL.lng - 0.015 },
  },
  {
    id: "7",
    image: "/blog[1].jpg",
    type: "House",
    priceIQD: 360000000,
    address: "Ankawa",
    city: "Erbil",
    specs: { beds: 3, baths: 2, areaSqM: 300 },
    geo: { lat: ERBIL.lat - 0.02, lng: ERBIL.lng - 0.005 },
  },
  {
    id: "8",
    image: "/blog5.jpg",
    type: "House",
    priceIQD: 270000000,
    address: "Al-Qurna",
    city: "Basra",
    specs: { beds: 3, baths: 2, areaSqM: 280 },
    geo: { lat: BASRA.lat + 0.02, lng: BASRA.lng + 0.01 },
  },
  {
    id: "9",
    image: "/blog2.jpg",
    type: "Villa",
    priceIQD: 640000000,
    address: "Al-Tanuma",
    city: "Basra",
    specs: { beds: 4, baths: 3, areaSqM: 450 },
    geo: { lat: BASRA.lat - 0.015, lng: BASRA.lng + 0.02 },
  },
  {
    id: "10",
    image: "/blog3.jpg",
    type: "Land",
    priceIQD: 410000000,
    address: "Airport Road",
    city: "Baghdad",
    specs: { lotSizeSqM: 900 },
    geo: { lat: BAGHDAD.lat + 0.03, lng: BAGHDAD.lng - 0.02 },
  },
];

export const IRAQ_CENTER_COORDINATES = {
  lat: 33.3153,
  lng: 44.3661,
  zoom: 6,
};
