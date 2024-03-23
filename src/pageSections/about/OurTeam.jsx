import React from 'react'
import Container from '../../components/Container'
import Titre from '../../components/Titre'
import AboutTeamCard from '../../components/AboutTeamCard'

import Team1 from '../../assets/about/team1.png'
import Team2 from '../../assets/about/team2.png'
import Team3 from '../../assets/about/team3.png'
import Team4 from '../../assets/about/team4.png'

function OurTeam() {
  return (
    <Container>
        <div className='space-y-[64px]'>
            <div className='text-center'>
                <Titre h1='church members' h2="meet our Inspirational team"/>
            </div>

            <div className='space-y-[16px] lg:space-y-0 lg:flex items-center lg:justify-between'>
                <AboutTeamCard img={Team1} h1="Kim Bowen" h2="Pastor, Church"/>
                <AboutTeamCard img={Team2} h1="Danielle Watkins" h2="Pastor, Church"/>
                <AboutTeamCard img={Team3} h1="Naomi Craig" h2="Pastor, Church"/>
                <AboutTeamCard img={Team4} h1="Kim Bowen" h2="Pastor, Church"/>
            </div>
        </div>
    </Container>
  )
}

export default OurTeam