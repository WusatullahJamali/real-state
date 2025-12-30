"use client";
import { onlineApplications } from "./RentData";
import ListingGrid from "./ListingGrid";

export default function OnlineApplications() {
  return (
    <ListingGrid
      title="Rentals accepting online applications"
      listings={onlineApplications}
    />
  );
}
