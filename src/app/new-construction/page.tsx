"use client";

import React, { useState } from "react";
import Construction from "@/components/new-construction-components/Construction";
import ConstructionHead from "@/components/new-construction-components/ConstructionHead";
import RentalConstruction from "@/components/new-construction-components/RentalConstruction";
import CtaButton from "@/components/new-construction-components/CtaButton";


const ConstructionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [rooms, setRooms] = useState("all");

  return (
    <>
      <ConstructionHead
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        rooms={rooms}
        setRooms={setRooms}
      />

      <Construction
        searchTerm={searchTerm}
        priceRange={priceRange}
        rooms={rooms}
      />
      <RentalConstruction />
      <CtaButton />
      
    </>
  );
};

export default ConstructionPage;
