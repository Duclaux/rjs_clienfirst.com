import React from 'react'

import Container from '../../components/Container'
import Titre from '../../components/Titre'
import AboutBenefCard from '../../components/AboutBenefCard'

import Img1 from '../../assets/about/img1.png'
import Img2 from '../../assets/about/img2.png'
import Img3 from '../../assets/about/img3.png'
import Img4 from '../../assets/about/img4.png'

function BenefAbout() {
  return (
    <Container>
        <div className='space-y-[64px]'>
            <div className='text-center'>
                <Titre h1='Watch and listen' h2={["THE benefits of", <br/>, "joining our church"]}/>
            </div>

            <div className='space-y-[64px]'>
                
                <AboutBenefCard 
                    img={Img1} 
                    h1="find fulfillment and joy"
                    p={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", <br className='hidden min-[520px]:flex'/>, " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", <br className='hidden min-[520px]:flex'/>, " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo", <br className='hidden min-[520px]:flex'/>, " consequat. Duis aute irure dolor in reprehenderit."]}
                    sens ='lg:flex-row-reverse'
                />

                <AboutBenefCard 
                    img={Img2} 
                    h1="shared values"
                    p={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", <br className='hidden min-[520px]:flex'/>, " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim", <br className='hidden min-[520px]:flex'/>, "veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", <br className='hidden min-[520px]:flex'/>, " commodo consequat. Duis aute irure dolor in reprehenderit."]}
                />

                <AboutBenefCard 
                    img={Img3} 
                    h1="charity events"
                    p={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", <br className='hidden min-[520px]:flex'/>, " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", <br className='hidden min-[520px]:flex'/>, " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo", <br className='hidden min-[520px]:flex'/>, " consequat. Duis aute irure dolor in reprehenderit."]}
                    sens ='lg:flex-row-reverse'
                />

                <AboutBenefCard 
                    img={Img4} 
                    h1="All are welcome"
                    p={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", <br className='hidden min-[520px]:flex'/>, " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim", <br className='hidden min-[520px]:flex'/>, "veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", <br className='hidden min-[520px]:flex'/>, " commodo consequat. Duis aute irure dolor in reprehenderit."]}
                />
            </div>
        </div>
    </Container>
  )
}

export default BenefAbout