import React from 'react'
import PropertyStatus from '../../../add-property components/PropertyStatus'
import PropretyInformation from '../../../add-property components/PropretyInformation'
import Price from '../../../add-property components/Price'
import ExtraFacilities from '../../../add-property components/ExtraFacilities'
import ContactInformation from '../../../add-property components/ContactInformation'

const page = () => {
  return (
    <div>
      <PropertyStatus />
      <PropretyInformation />
      <Price />
      <ExtraFacilities />
      <ContactInformation />
    </div>
  )
}

export default page
