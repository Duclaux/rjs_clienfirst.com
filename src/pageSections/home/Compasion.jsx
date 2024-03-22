import React from 'react'


import Container from '../../components/Container'
import Titre from '../../components/Titre'
import CustomBtn from '../../components/CustomBtn'

import Img1 from '../../assets/home/img1.png'
import Img2 from '../../assets/home/img2.png'
import Img3 from '../../assets/home/img3.png'
import Arrow from '../../assets/home/arrow.svg'

function Compasion() {
  return (
    <Container>
        <div className='text-center '>
            {/* les titres */}
            <div>
                <Titre h1='sub-headline' h2="love and compassion"/>
                <p className='mt-[32px] mb-[58px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br className='hidden lg:flex'/> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br className='hidden lg:flex'/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <CustomBtn title='Read more' Bg='bg-[#FFD2A4] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>
            </div>
            
            {/* les images */}
            <div className='lg:flex space-y-[10px] lg:space-y-0 lg:space-x-[24px] w-fit mx-auto translate-y-[-40px]'>
                <img src={Img1} alt="" className='mx-auto w-full lg:mx-0 lg:w-[293px] lg:h-[384px]' />
                <img src={Img2} alt="" className='lg:translate-y-[64px] mx-auto w-full lg:mx-0 lg:w-[293px] lg:h-[384px]'/>
                <img src={Img3} alt=""  className='mx-auto w-full lg:mx-0 lg:w-[293px] lg:h-[384px]'/>
            </div>

            {/* bottom titre */}
            <div className='space-y-[16px] mt-[128px]'>
                <h1 className='text-[16px] font-normal'>our mission & vision</h1>
                <h2 className='text-[32px] font-bold'>celebrate WITH US</h2>
                <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.</p>
                <a href="/" className='flex items-center space-x-2 w-fit mx-auto'>
                    <p className='text-[#161722] text-[14px] font-normal'>Read More</p>
                    <img src={Arrow} alt="" />
                </a>
            </div>
        </div>
    </Container>
  )
}

export default Compasion