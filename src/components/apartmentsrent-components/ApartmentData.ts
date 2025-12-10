export interface ApartmentType {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
  image: string;
  description: string;
  amenities: string[];
  areaSqFt: number;
}

export const apartmentList: ApartmentType[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    price: 1200,
    bedrooms: 3,
    location: "Downtown, Karachi",
    image: "/a1.jpg",
    description:
      "A spacious and modern 3-bedroom apartment located in the heart of Downtown, offering panoramic city views and premium finishes.",
    amenities: ["24/7 Security", "Gym Access", "Pool", "Dedicated Parking"],
    areaSqFt: 1850,
  },
  {
    id: 2,
    title: "Modern Studio",
    price: 800,
    bedrooms: 1,
    location: "Bahria Town, Lahore",
    image: "/a2.jpg",
    description:
      "Ideal for students or young professionals, this efficient studio offers modern living in a secured community.",
    amenities: ["Balcony", "Gated Community", "Laundry Facilities"],
    areaSqFt: 750,
  },
  {
    id: 3,
    title: "Family Apartment",
    price: 1000,
    bedrooms: 2,
    location: "Clifton, Karachi",
    image: "/a3.jpg",
    description: "Comfortable and cozy 2-bedroom unit perfect for a small family, steps away from the Clifton beach.",
    amenities: ["Kids Play Area", "Power Backup", "Nearby Park"],
    areaSqFt: 1100,
  },
  {
    id: 4,
    title: "Penthouse View",
    price: 1500,
    bedrooms: 4,
    location: "DHA Phase 6, Karachi",
    image: "/a4.jpg",
    description: "Exclusive penthouse with terrace views, smart home features, and premium finishes.",
    amenities: ["Private Terrace", "Smart Home Tech", "Servant Quarter"],
    areaSqFt: 2800,
  },
  {
    id: 5,
    title: "Executive Residence",
    price: 1100,
    bedrooms: 3,
    location: "Gulberg, Lahore",
    image: "/a5.jpg",
    description: "High-end finishing and excellent location in Gulberg.",
    amenities: ["24/7 Security", "Gym Access"],
    areaSqFt: 1500,
  },
  {
    id: 6,
    title: "Stylish Loft",
    price: 950,
    bedrooms: 2,
    location: "Islamabad",
    image: "/a6.avif",
    description:
      "Modern loft apartment featuring high ceilings, stylish interiors, and close access to downtown Islamabad business district.",
    amenities: ["Lift", "Smart Entry", "Covered Parking"],
    areaSqFt: 1200,
  },
  {
    id: 7,
    title: "Budget Studio",
    price: 650,
    bedrooms: 1,
    location: "Johar Town, Lahore",
    image: "/a7.jpg",
    description:
      "Affordable studio apartment suitable for students and single professionals located near commercial markets.",
    amenities: ["Public Transport Nearby", "CCTV", "Water Supply"],
    areaSqFt: 600,
  },
  {
    id: 8,
    title: "Corner Apartment",
    price: 1050,
    bedrooms: 3,
    location: "F-11 Islamabad",
    image: "/a8.jpg",
    description:
      "Spacious corner unit in a secure community located close to shopping centers and schools in F-11.",
    amenities: ["Family Friendly", "Backup Generator", "CCTV"],
    areaSqFt: 1700,
  },
  {
    id: 9,
    title: "Luxury High Rise",
    price: 1300,
    bedrooms: 3,
    location: "Emaar, Karachi",
    image: "/a9.jpg",
    description:
      "Luxury sea-facing apartment at Emaar with modern interiors, world-class amenities, and secured environment.",
    amenities: ["Private Beach Access", "Gym", "Community Pool"],
    areaSqFt: 1950,
  },
  {
    id: 10,
    title: "Student Apartment",
    price: 550,
    bedrooms: 1,
    location: "Rawalpindi",
    image: "/a10.webp",
    description:
      "Affordable and safe apartment ideal for students, close to universities and transport links in Rawalpindi.",
    amenities: ["Internet Ready", "Balcony", "Laundry Room"],
    areaSqFt: 550,
  },
  {
    id: 11,
    title: "Serviced Apartment",
    price: 1600,
    bedrooms: 4,
    location: "Blue Area, Islamabad",
    image: "/a11.jpg",
    description:
      "Premium serviced apartments in the heart of Islamabad, offering hotel-style services for long-term stays.",
    amenities: ["Housekeeping", "Room Service", "Concierge"],
    areaSqFt: 2600,
  },
  {
    id: 12,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Peshawar",
    image: "/a12.jpg",
    description:
      "Family friendly apartment located near schools and shopping centers in a safe Peshawar locality.",
    amenities: ["Security Gate", "Kids Area", "Parking"],
    areaSqFt: 1250,
  },
  {
    id: 13,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Hyderabad",
    image: "/ap14.jpg",
    description:
      "Affordable apartment option in Hyderabad with quick access to markets and public transportation.",
    amenities: ["Public Transport", "Lift", "Parking"],
    areaSqFt: 1180,
  },
  {
    id: 14,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Lahore",
    image: "/ap15.jpg",
    description:
      "Affordable apartment perfect for families looking for comfortable space in a peaceful Lahore neighborhood.",
    amenities: ["Community Park", "Security", "Parking"],
    areaSqFt: 1200,
  },
  {
    id: 15,
    title: "Cozy Family Home",
    price: 850,
    bedrooms: 2,
    location: "Karachi",
    image: "/a16.webp",
    description:
      "Well maintained building located near commercial areas offering easy commuting and secure environment.",
    amenities: ["Lift", "Power Backup", "Parking"],
    areaSqFt: 1150,
  },
];
