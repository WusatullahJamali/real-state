import ContactInformation from "@/components/add-property components/ContactInformation"
import ExtraFacilities from "@/components/add-property components/ExtraFacilities"
import Price from "@/components/add-property components/Price"
import PropertyStatus from "@/components/add-property components/PropertyStatus"
import PropretyInformation from "@/components/add-property components/PropretyInformation"

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
