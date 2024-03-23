import React from 'react'

import Container from '../../components/Container'
import Titre from '../../components/Titre'
import CustomBtn from '../../components/CustomBtn'

import Img1 from '../../assets/home/img1.png'
import Img2 from '../../assets/home/img2.png'
import Img3 from '../../assets/home/img3.png'

function CompaAbout() {
  return (
    <Container>
        <div className='text-center'>
            {/* les titres */}
            <div>
                <Titre h1='sub-headline' h2="love and compassion"/>
                <p className='mt-[32px] mb-[58px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br className='hidden lg:flex'/> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br className='hidden lg:flex'/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <CustomBtn title='Read more' Bg='bg-[#FFD2A4] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>
            </div>

            {/* les images */}
            <div className='lg:flex space-y-[10px] lg:space-y-0 lg:items-center lg:space-x-[24px] w-fit mx-auto mt-[48px] mb-[64px]'>
                <img src={Img1} alt="" className='mx-auto w-full hidden lg:flex lg:mx-0 lg:w-[293px] lg:h-[384px]' />
                <img src={Img2} alt="" className='mx-auto w-full lg:mx-0 lg:w-[390px] h-[384px] lg:h-[512px]'/>
                <img src={Img3} alt=""  className='mx-auto w-full lg:mx-0 hidden lg:flex lg:w-[293px] lg:h-[384px]'/>
            </div>

            <div className='space-y-[64px] w-fit mx-auto lg:space-y-0 lg:flex lg:items-center lg:justify-evenly lg:space-x-[24px]'>
                <div className='space-y-[8px] text-start'>
                    <h1 className='font-normal text-[16px]'>OUR MISSIOn & Vision</h1>
                    <h2 className='font-bold text-[32px]'>STRIVING FOR A BETTER<br/> TOMORROW</h2>
                    <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className='hidden lg:flex'/> sed do eiusmod tempor incididunt ut labore et dolore<br className='hidden lg:flex'/> magna aliqua. Ut enim ad minim veniam, quis nostrud<br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo<br className='hidden lg:flex'/> consequat. Duis aute irure dolor in reprehenderit in<br className='hidden lg:flex'/> voluptate velit esse cillum.</p>
                </div>
                <div className='space-y-[8px] text-start'>
                    <h1 className='font-normal text-[16px]'>WHAT WE DO</h1>
                    <h2 className='font-bold text-[32px]'>BRINgING PEACE AND JOY<br className='hidden lg:flex'/> TO THE WORLD</h2>
                    <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className='hidden lg:flex'/>sed do eiusmod tempor incididunt ut labore et dolore<br className='hidden lg:flex'/> magna aliqua. Ut enim ad minim veniam, quis nostrud<br className='hidden lg:flex'/> exercitation ullamco laboris nisi ut aliquip ex ea commodo<br className='hidden lg:flex'/> consequat. Duis aute irure dolor in reprehenderit in<br className='hidden lg:flex'/> voluptate velit esse cillum.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default CompaAbout