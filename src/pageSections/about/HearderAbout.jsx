import React from 'react'
import Container from '../../components/Container'

function HearderAbout() {
  return (
    <div className='w-full h-[70vh] bg-top bg-cover about_header py-[80px] min-[772px]:py-[160px]'>
        <Container>
            <div className='text-black font-bold space-y-[16px]'>
                <h1 className='text-[16px]'>About us</h1>
                <h1 className='text-[29px] md:text-[48px]'>Serving the world<br className='md:hidden'/> around us</h1>
            </div>
        </Container>
    </div>
  )
}

export default HearderAbout