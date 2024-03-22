import React from 'react'

import Container from '../../components/Container'
import Titre from '../../components/Titre'
import CardHedLine from '../../components/CardHedLine'


import Church from '../../assets/home/church.svg'
import Wifi from '../../assets/home/wifi.svg'
import Coeur from '../../assets/home/coeur.svg'


function Headline() {
  return (
    <Container>
        <div className='text-center space-y-[64px]'>
            <Titre h1='sub-headline' h2="a church that's relevant"/>

            <div className='w-fit mx-auto space-y-[25px] lg:space-y-0 lg:w-full lg:mx-0 lg:flex lg:items-center lg:space-x-5 2xl:justify-between'>
                <CardHedLine img={Church} h1='About us' max='lg:h-[478px] xl:h-auto'/>
                <CardHedLine img={Wifi} h1='Get involved'/>
                <CardHedLine img={Coeur} h1='Giving back'/>
            </div>
        </div>
    </Container>
  )
}

export default Headline