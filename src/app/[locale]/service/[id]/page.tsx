import React from "react";
import ServiceDetailPage from "@/components/service-components/service-detail";

interface PageProps {
  params: {
    id: string;
  };
}

// In Next.js App Router, params is passed directly to the Server Component
const Page = async ({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) => {
  // We await params in case your Next.js version requires it (Next 15)
  const resolvedParams = await params;

  return <ServiceDetailPage params={resolvedParams} />;
};

export default Page;
