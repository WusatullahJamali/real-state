import React from "react";
import ServiceDetailPage from "@/components/service-components/service-detail";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  // 1. Properly await the params (Required for Next.js 15)
  const resolvedParams = await params;

  // 2. Pass the resolved object to the Client Component
  return <ServiceDetailPage params={resolvedParams} />;
};

export default Page;
