"use client";

import React from "react";
import { exploreApartments } from "./RentData";
import ListingGrid from "./ListingGrid";

const ExploreAlaska = () => {
  return (
    <ListingGrid
      title="Explore Apartments"
      subtitle="View all rentals with rent specials"
      listings={exploreApartments}
      linkHref="/listings"
    />
  );
};

export default ExploreAlaska;
