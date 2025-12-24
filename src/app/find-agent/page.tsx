import Agent1 from '@/components/find-agent-components/Agent1'
import Agent2 from '@/components/find-agent-components/Agent2'
import ContactAgent from '@/components/find-agent-components/ContactAgent'
import FindCards from '@/components/find-agent-components/FindCards'
import FindHero from '@/components/find-agent-components/FindHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <FindHero  />
      <FindCards  />
      <Agent1  />
      <Agent2  />
      <ContactAgent  />
    </div>
  )
}

export default page
