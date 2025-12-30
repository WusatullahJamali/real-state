import { Suspense } from "react";
import SearchResults from "@/components/Home/Search";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-gray-600 text-lg">Loading search results...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
