// components/FeaturedCommunitySection.tsx
import React from "react";
import Image from "next/image";
import { MapPin, Utensils, PawPrint } from "lucide-react";

// --- 1. TYPESCRIPT INTERFACE ---
interface CommunityCardData {
  id: number;
  title: string;
  location: string;
  iconType: "location" | "utensils" | "pawprint";
  imageUrl: string;
}

// --- 2. SAMPLE DATA ---
const communityData: CommunityCardData[] = [
  {
    id: 1,
    title: "Willow Creek",
    location: "Austin, TX",
    iconType: "location",
    imageUrl: "/featureimge.jpg",
  },
  {
    id: 2,
    title: "Willow Creek",
    location: "8Kap7, 7I9 or Kayand",
    iconType: "utensils",
    imageUrl: "/featureimge2.webp",
  },
  {
    id: 3,
    title: "Pet Friendly",
    location: "Family Fristdeby",
    iconType: "pawprint",
    imageUrl: "/featureimge3.webp",
  },
];

// --- 3. REUSABLE CARD COMPONENT ---
interface CommunityCardProps {
  card: CommunityCardData;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ card }) => {
  const Icon =
    card.iconType === "location"
      ? MapPin
      : card.iconType === "utensils"
      ? Utensils
      : PawPrint;

  const hoverClasses =
    "hover:ring-4 hover:ring-amber-500/50 hover:shadow-xl transition-all duration-300";

  return (
    <div
      className={`relative w-full overflow-hidden shadow-lg ${hoverClasses} bg-white border border-gray-100 group`}
    >
      {/* Card Image Wrapper */}
      <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
        <Image
          src={card.imageUrl}
          alt={`Image of ${card.title} community`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />

        {/* Card Footer/Details Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none">
                {card.title}
              </span>
              <div className="flex items-center text-amber-400 text-sm mt-1">
                <MapPin className="w-3 h-3 mr-1 fill-current" />
                <span className="font-medium">{card.location}</span>
              </div>
            </div>

            <div className="w-8 h-8 flex items-center justify-center border-2 border-amber-400 text-amber-400">
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Optional subtle hover overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

// --- 4. MAIN FEATURED SECTION COMPONENT ---
const FeaturedCommunitySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-left mb-8 sm:text-4xl">
          Featured Communities
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityData.map((card) => (
            <CommunityCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommunitySection;
