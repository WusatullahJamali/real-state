import ApartmentDetail from '@/components/apartmentsrent components/ApartmentDetails';
import React from 'react';

interface PageProps {
  params: { id: string }; // Next.js passes params for dynamic routes
}

const Page = ({ params }: PageProps) => {
  const apartmentId = Number(params.id); // convert string to number

  return (
    <div>
      <ApartmentDetail id={apartmentId} />
    </div>
  );
};

export default Page;
