export interface RentListing {
  id: number;
  image: string;
  badge?: string | null;
  special?: string;
  type: string;
  price: string;
  beds: string | number;
  baths: string | number;
  sqft?: string | null;
  address: string;
  city: string;
}

/* ================= NEW LISTINGS ================= */
export const newListings: RentListing[] = [
  {id: 1, image: "/a1.png", badge: "New units - 10 hours ago", type: "Single-Family Home", price: "$1,800", beds: 4, baths: 2, sqft: "1,750", address: "Al-Yarmouk District", city: "Baghdad, Iraq",},
  {id: 2, image: "/new2.webp", badge: "New units - 10 hours ago", type: "Apartment", price: "$650 - $850", beds: "Studio - 2", baths: 1, sqft: null, address: "Dream City", city: "Erbil, Kurdistan Region",},
  {id: 3, image: "/new4.jpg", badge: "New units - 10 hours ago", type: "Apartment", price: "$750", beds: 2, baths: 1, sqft: null, address: "Al-Ashar", city: "Basra, Iraq",},
  {id: 4, image: "/new3.webp", badge: "New units - 22 hours ago", type: "Apartment", price: "$700", beds: 2, baths: 1, sqft: "1,150", address: "Al-Mansour", city: "Baghdad, Iraq",},
];

/* ================= EXPLORE APARTMENTS ================= */
export const exploreApartments: RentListing[] = [
  {id: 101, image: "/alaska1.webp", badge: "New units", type: "Apartment", price: "$550 - $580", beds: "1", baths: 1, sqft: "550", address: "Al-Zahraa", city: "Najaf, Iraq",},
  {id: 102, image: "/alaska3.webp", badge: "New units", type: "Apartment", price: "$600 - $950", beds: "1 - 3", baths: 1, sqft: "630 - 865", address: "Italian Village", city: "Erbil, Kurdistan Region",},
  {id: 103, image: "/alaska4.webp", badge: "New units", type: "Apartment", price: "$1,200 - $1,600", beds: "2 - 3", baths: 2, sqft: "1,025 - 1,065", address: "Royal City", city: "Erbil, Kurdistan Region",},
  {id: 104, image: "/alaska5.webp", badge: "New units", type: "Apartment", price: "$700 - $1,100", beds: "1 - 2", baths: 1, sqft: "445 - 1,008", address: "Al-Karada", city: "Baghdad, Iraq",},
];

/* ================= PET FRIENDLY ================= */
export const petFriendlyRentals: RentListing[] = [
  {id: 201, image: "/alaska2.webp", badge: "Pet-friendly", type: "Apartment", price: "$450", beds: "2", baths: 1, sqft: null, address: "Al-Jadriya", city: "Baghdad, Iraq",},
  {id: 202, image: "/pet1.webp", badge: "Pet-friendly", type: "Apartment", price: "$600 - $650", beds: "1", baths: 1, sqft: "720", address: "Dream City", city: "Erbil, Kurdistan Region",},
  { id: 203, image: "/pet2.webp", badge: "Pet-friendly", type: "Apartment", price: "$800", beds: "2", baths: 1, sqft: "1,000", address: "Al-Ashar", city: "Basra, Iraq",},
  {id: 204, image: "/pet3.webp", badge: "Pet-friendly", type: "Apartment", price: "$720", beds: "2", baths: 1, sqft: "900", address: "Al-Mansour", city: "Baghdad, Iraq"},
];

/* ================= ONLINE APPLICATIONS ================= */
export const onlineApplications: RentListing[] = [
  { id: 301, image: "/online1.webp", badge: "Apply Now", type: "Apartment", price: "$680", beds: "2", baths: 1, sqft: "1,200", address: "Al-Salam District", city: "Najaf, Iraq",},
  {id: 302, image: "/online2.webp", badge: "Apply Now", type: "Single-Family Home", price: "$2,100", beds: "3", baths: 2, sqft: "1,300", address: "English Village", city: "Erbil, Kurdistan Region",},
  {id: 303, image: "/online3.webp", badge: "Apply Now", type: "Single-Family Home", price: "$1,100", beds: "2", baths: "1.5", sqft: "1,250", address: "Al-Karama", city: "Mosul, Iraq",},
  {id: 304, image: "/online4.webp", badge: "Apply Now", type: "Listing for Rent", price: "$1,700", beds: "3", baths: "2.5", sqft: "1,515", address: "Al-Harithiya", city: "Baghdad, Iraq",},
];

/* ================= IN-UNIT LAUNDRY ================= */
export const inUnitLaundryRentals: RentListing[] = [
  {id: 401, image: "/unit1.webp", badge: "New units - 12 hour ago", type: "Single-Family Home", price: "$1,600", beds: "3", baths: "3", sqft: "1,780", address: "Italian Village", city: "Erbil, Kurdistan Region",},
  {id: 402, image: "/unit2.webp", badge: "New units - 23 hours ago", type: "Apartment", price: "$700 - $950", beds: "1 - 2", baths: "1 - 1.5", sqft: "680 - 912", address: "Al-Karrada", city: "Baghdad, Iraq",},
  {id: 403, image: "/unit3.webp", badge: "New units - 22 hour ago", type: "Single-Family Home", price: "$950", beds: "2", baths: "1", sqft: "760", address: "Al-Ghazaliya", city: "Baghdad, Iraq",},
  {id: 404, image: "/unit4.webp", badge: "New units - 10 hour ago", type: "Listing for Rent", price: "$1,450", beds: "3", baths: "2", sqft: "1,700", address: "Al-Yarmouk", city: "Baghdad, Iraq",},
];