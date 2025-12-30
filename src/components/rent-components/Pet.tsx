"use client";

import { petFriendlyRentals } from "./RentData";
import ListingGrid from "./ListingGrid";

export default function PetFriendly() {
  return (
    <ListingGrid
      title="Pet-friendly rentals"
      listings={petFriendlyRentals}
    />
  );
}
