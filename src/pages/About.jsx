import React from 'react'
import HearderAbout from '../pageSections/about/HearderAbout'
import BenefAbout from '../pageSections/about/BenefAbout'
import OurTeam from '../pageSections/about/OurTeam'
import CompaAbout from '../pageSections/about/CompaAbout'

function About() {
  return (
    <div className='pt-[50px] lg:pt-[80px]'>
      <HearderAbout />
      
      <div className='py-[128px] space-y-[128px]'>
        <CompaAbout />
        <BenefAbout />
        <OurTeam />
      </div>
    </div>
  )
}

export default About