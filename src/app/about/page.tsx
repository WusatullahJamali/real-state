import React from 'react'
import AboutHero from '../../../about components/AboutHero'
import AboutCard from '../../../about components/AboutCards'
import Know from '../../../about components/Know'
import Work from '../../../about components/Work'

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
