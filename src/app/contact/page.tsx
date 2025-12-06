import React from 'react'
import ContactHero from '../../../contact components/ContactHero'
import ContactCards from '../../../contact components/ContactCards'
import ContactForm from '../../../contact components/Contact Form'
import ContactMap from '../../../contact components/ContactMap'

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <ContactMap />
      
    </div>
  )
}

export default page
