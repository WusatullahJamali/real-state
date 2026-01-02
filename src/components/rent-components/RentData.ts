export interface RentListing {
  id: number;
  image: string;
  price: string;
  beds: string | number;
  baths: string | number;
  sqft?: string | null;
}

export const newListings: RentListing[] = [
  {
    id: 1,
    image: "/a1.jpg",
    price: "$1,800",
    beds: 4,
    baths: 2,
    sqft: "1,750",
  },
  {
    id: 2,
    image: "/a2.jpg",
    price: "$650 - $850",
    beds: "Studio - 2",
    baths: 1,
    sqft: null,
  },
  { id: 3, image: "/a5.jpg", price: "$750", beds: 2, baths: 1, sqft: null },
  {
    id: 4,
    image: "/a3.jpg",
    price: "$700",
    beds: 2,
    baths: 1,
    sqft: "1,150",
  },
];

export const exploreApartments: RentListing[] = [
  {
    id: 101,
    image: "/a1.jpg",
    price: "$550 - $580",
    beds: "1",
    baths: 1,
    sqft: "550",
  },
  {
    id: 102,
    image: "/a2.jpg",
    price: "$600 - $950",
    beds: "1 - 3",
    baths: 1,
    sqft: "630 - 865",
  },
  {
    id: 103,
    image: "/a3.jpg",
    price: "$1,200 - $1,600",
    beds: "2 - 3",
    baths: 2,
    sqft: "1,025 - 1,065",
  },
  {
    id: 104,
    image: "/a4.jpg",
    price: "$700 - $1,100",
    beds: "1 - 2",
    baths: 1,
    sqft: "445 - 1,008",
  },
];

export const petFriendlyRentals: RentListing[] = [
  {
    id: 201,
    image: "/a5.jpg",
    price: "$450",
    beds: "2",
    baths: 1,
    sqft: null,
  },
  {
    id: 202,
    image: "/a6.avif",
    price: "$600 - $650",
    beds: "1",
    baths: 1,
    sqft: "720",
  },
  {
    id: 203,
    image: "/a7.jpg",
    price: "$800",
    beds: "2",
    baths: 1,
    sqft: "1,000",
  },
  {
    id: 204,
    image: "/a8.jpg",
    price: "$720",
    beds: "2",
    baths: 1,
    sqft: "900",
  },
];

export const onlineApplications: RentListing[] = [
  {
    id: 301,
    image: "/a8.jpg",
    price: "$680",
    beds: "2",
    baths: 1,
    sqft: "1,200",
  },
  {
    id: 302,
    image: "/a8.jpg",
    price: "$2,100",
    beds: "3",
    baths: 2,
    sqft: "1,300",
  },
  {
    id: 303,
    image: "/a8.jpg",
    price: "$1,100",
    beds: "2",
    baths: "1.5",
    sqft: "1,250",
  },
  {
    id: 304,
    image: "/a8.jpg",
    price: "$1,700",
    beds: "3",
    baths: "2.5",
    sqft: "1,515",
  },
];

export const inUnitLaundryRentals: RentListing[] = [
  {
    id: 401,
    image: "/a8.jpg",
    price: "$1,600",
    beds: "3",
    baths: "3",
    sqft: "1,780",
  },
  {
    id: 402,
    image: "/a8.jpg",
    price: "$700 - $950",
    beds: "1 - 2",
    baths: "1 - 1.5",
    sqft: "680 - 912",
  },
  {
    id: 403,
    image: "/a8.jpg",
    price: "$950",
    beds: "2",
    baths: "1",
    sqft: "760",
  },
  {
    id: 404,
    image: "/a8.jpg",
    price: "$1,450",
    beds: "3",
    baths: "2",
    sqft: "1,700",
  },
];
