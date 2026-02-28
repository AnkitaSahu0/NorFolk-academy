import Hero from '@/components/Hero'
import React from 'react'
import AboutSection from './about/page'
import AcademicsPage from './academics/page'
import AdmissionsPage from './admissions/page'
import GalleryPage from './gallery/page'
import EventsPage from './events/page'
import ContactPage from './contact/page'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <AcademicsPage/>
      <AdmissionsPage/>
      <GalleryPage/>
      <EventsPage/>
      <ContactPage/>
    </div>
  )
}

export default page
