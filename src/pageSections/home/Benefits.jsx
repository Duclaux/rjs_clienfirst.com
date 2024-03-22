import React from 'react'
import Container from '../../components/Container'
import Titre from '../../components/Titre'
import CardBenefits from '../../components/CardBenefits'

function Benefits() {
  return (
    <div className='py-[70px] bg-[#F5F2F0] text-center'>
        <Container>
            <div>
                <Titre h1='Watch and listen' h2={["THE benefits of", <br/>, "joining our church"]}/>

                <div>
                    <CardBenefits />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Benefits