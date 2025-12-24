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

      if (
        price === "$100k - $300k" &&
        (p < 100_000_000 || p > 300_000_000)
      )
        return false;

      if (price === "$300k+" && p < 300_000_000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Results Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900">
            Search Results
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredProperties.length} properties found
          </p>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <SearchCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No properties match your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
