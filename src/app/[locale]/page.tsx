"use client";

import { useTranslations } from "next-intl";
import Hero from "@/components/Home/Hero";
import CollectionsSection from "@/components/Home/Collections";
import Startbutton from "@/components/Home/Startbutton";
import RecommendedLocations from "@/components/Home/Recommended";
import Categories from "@/components/Home/Categories";
import BlogPage from "@/components/blog components/BlogPage";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Collections */}
      <CollectionsSection />

      {/* Start Button */}
      <Startbutton />

      {/* Categories */}
      <Categories />

      {/* Recommended Locations */}
      <RecommendedLocations />

      <BlogPage />
    </>
  );
}
