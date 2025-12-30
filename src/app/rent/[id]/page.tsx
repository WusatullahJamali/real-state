import React from 'react'
import RentDetail from '@/components/rent-components/RentDetail'

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = ({ params }: PageProps) => {
  return (
    <div>
      <RentDetail params={params} />
    </div>
  )
}

export default page