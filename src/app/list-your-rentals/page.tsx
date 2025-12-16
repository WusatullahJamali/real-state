import List1 from '@/components/list-your-rentals-components/List1'
import List2 from '@/components/list-your-rentals-components/List2'
import List3 from '@/components/list-your-rentals-components/List3'
import List4 from '@/components/list-your-rentals-components/List4'
import ListHero from '@/components/list-your-rentals-components/ListHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <ListHero />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
    </div>
  )
}

export default page
