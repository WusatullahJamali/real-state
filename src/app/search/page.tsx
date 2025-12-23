"use client";

import { useSearchParams } from "next/navigation";
import SearchData from "@/components/Home/SearchData";
import SearchCard from "@/components/Home/SearchCard";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const transaction = searchParams.get("transaction");
  const location = searchParams.get("location");
  const type = searchParams.get("type");
  const price = searchParams.get("price");

  const filteredProperties = SearchData.filter((property) => {
    if (transaction && property.transaction !== transaction) return false;

    if (
      location &&
      !property.city.toLowerCase().includes(location.toLowerCase())
    )
      return false;

    if (type && type !== "All Types" && property.type !== type) return false;

    if (price && price !== "Any Price") {
      const p = property.priceIQD;
      if (price === "$0 - $100k" && p > 100_000_000) return false;
      if (price === "$100k - $300k" && (p < 100_000_000 || p > 300_000_000))
        return false;
      if (price === "$300k+" && p < 300_000_000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-600 mb-6">
        {filteredProperties.length} properties found
      </p>

      {filteredProperties.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No properties found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <SearchCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
