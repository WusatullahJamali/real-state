"use client";

import { inUnitLaundryRentals } from "./RentData";
import ListingGrid from "./ListingGrid";

export default function InUnitLaundry() {
  return (
    <ListingGrid
      title="Rentals with in-unit laundry"
      listings={inUnitLaundryRentals}
    />
  );
}
