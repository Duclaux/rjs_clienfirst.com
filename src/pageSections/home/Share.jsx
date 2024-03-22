import React from 'react'
import Container from '../../components/Container'
import Titre from '../../components/Titre'
import CardShare from '../../components/CardShare'

function Share() {
  return (
    <Container>
        <div className='text-center mb-[64px]'>
            <Titre h1='Read our Blog' h2='SHARE, INSPIRE, INNOVATE'/>
        </div>

        <div className='space-y-[16px] lg:space-y-0 lg:flex items-center lg:justify-between'>
            <CardShare/>
            <CardShare hidden='hidden'/>
            <CardShare hidden='hidden'/>
            <CardShare hidden='hidden'/>
        </div>
    </Container>
  )
}

export default Share