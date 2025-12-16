// data/iraqProperties.ts

// Iraqi City Coordinates (Source: Search Results)
const BAGHDAD_COORD = { lat: 33.3153, lng: 44.3661 };
const ERBIL_COORD = { lat: 36.1912, lng: 44.0092 };
const BASRAH_COORD = { lat: 30.515, lng: 47.81 };

// Base Specs
interface Geo {
  lat: number;
  lng: number;
}
interface HomeSpecs {
  beds: number;
  baths: number;
  areaSqM: number; // Iraqi properties often use square meters (M²)
}
interface LandSpecs {
  lotSizeSqM: number;
}

// Discriminated Union for Property Type
export type Property =
  | {
      id: string;
      image: string;
      type: "House" | "Apartment" | "Villa";
      priceIQD: number; // Price in Iraqi Dinar
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

// Static Data (Using IQD and Iraqi City coordinates)
export const propertiesData: Property[] = [
  {
    id: "1",
    image: "/img/baghdad-villa.jpg",
    type: "Villa",
    priceIQD: 550000000, // 550 Million IQD
    address: "Street 40, Al-Mansour District",
    city: "Baghdad",
    specs: { beds: 4, baths: 3, areaSqM: 400 },
    geo: { lat: BAGHDAD_COORD.lat + 0.01, lng: BAGHDAD_COORD.lng - 0.01 },
  },
  {
    id: "2",
    image: "/img/erbil-apartment.jpg",
    type: "Apartment",
    priceIQD: 120000000, // 120 Million IQD
    address: "Dream City Towers, Gulan Street",
    city: "Erbil",
    specs: { beds: 2, baths: 2, areaSqM: 140 },
    geo: { lat: ERBIL_COORD.lat - 0.02, lng: ERBIL_COORD.lng + 0.005 },
  },
  {
    id: "3",
    image: "/img/basra-land.jpg",
    type: "Land",
    priceIQD: 350000000, // 350 Million IQD
    address: "Main Road Plot, Al-Ashar",
    city: "Basra",
    specs: { lotSizeSqM: 750 },
    geo: { lat: BASRAH_COORD.lat + 0.005, lng: BASRAH_COORD.lng - 0.01 },
  },
  // ... add more detailed Iraq data here ...
];

export const IRAQ_CENTER_COORDINATES = { lat: 33.3153, lng: 44.3661, zoom: 6 }; // Center on Baghdad/Iraq
