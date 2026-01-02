export interface SoldListing {
  id: number;
  image: string;
  price: string;
  beds: string | number;
  baths: string | number;
  sqft?: string | null;
}

export const soldListings: SoldListing[] = [
  {
    id: 1,
    image: "/buy1.webp",
    price: "$180,000",
    beds: 3,
    baths: 2,
    sqft: "1,200",
  },
  {
    id: 2,
    image: "/buy2.webp",
    price: "$240,000",
    beds: 4,
    baths: 3,
    sqft: "1,650",
  },
  {
    id: 3,
    image: "/buy3.webp",
    price: "$135,000",
    beds: 2,
    baths: 1,
    sqft: "980",
  },
  {
    id: 4,
    image: "/buy4.webp",
    price: "$320,000",
    beds: 5,
    baths: 4,
    sqft: "2,300",
  },
  {
    id: 6,
    image: "/buy1.webp",
    price: "$180,000",
    beds: 3,
    baths: 2,
    sqft: "1,200",
  },
  {
    id: 7,
    image: "/buy2.webp",
    price: "$240,000",
    beds: 4,
    baths: 3,
    sqft: "1,650",
  },
  {
    id: 8,
    image: "/buy3.webp",
    price: "$135,000",
    beds: 2,
    baths: 1,
    sqft: "980",
  },
  {
    id: 9,
    image: "/buy4.webp",
    price: "$320,000",
    beds: 5,
    baths: 4,
    sqft: "2,300",
  },
];
