import React from 'react'

import SermonAb from '../pageSections/home/Sermon'
import SermonCard from '../components/sermon/SermonCard'
import Container from '../components/Container'
import Titre from '../components/Titre'

function Sermon() {
  return (
    <div className='pt-[50px] lg:pt-[80px] bg-[#F5F2F0]'>

      <div className='py-[128px] space-y-[128px]'>
        <SermonAb />
        <Container styles=' text-center space-y-[64px]'>
            <Titre h2='View All Events'/>
            
            <div className='lg:flex space-y-[16px] lg:space-y-0 lg:justify-between lg:items-center'>
              <SermonCard />
              <SermonCard no='hidden'/>
              <SermonCard no='hidden'/>
              <SermonCard no='hidden'/>
            </div>
        </Container>
      </div>

    </div>
  )
}


export default Sermon