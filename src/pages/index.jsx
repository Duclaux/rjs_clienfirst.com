import React from 'react'
import Header from '../pageSections/home/Header'
import Headline from '../pageSections/home/Headline'
import Compasion from '../pageSections/home/Compasion'
import Benefits from '../pageSections/home/Benefits'
import Sermon from '../pageSections/home/Sermon'
import Visit from '../pageSections/home/Visit'
import Share from '../pageSections/home/Share'

function index() {
  return (
    <>
      <Header/>
      <div className='py-[128px] space-y-[128px]'>
        <Headline/>
        <Compasion/>
        <Benefits/>
        <Sermon/>
        <Visit/>
        <Share/>
      </div>
    </>
  )
}

export default index