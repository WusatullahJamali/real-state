import AboutCard from '@/components/about components/AboutCards'
import AboutHero from '@/components/about components/AboutHero'
import Know from '@/components/about components/Know'
import Work from '@/components/about components/Work'

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutCard />
      <Work />
      <Know />
    </div>
  )
}

export default page
