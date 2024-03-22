import React from 'react'

import Container from '../../components/Container'

import Bg_sermon from '../../assets/home/sermon_bg.png'
import Clock from '../../assets/home/clock.svg'
import Circle from '../../assets/home/circle.svg'
import CustomBtn from '../../components/CustomBtn'
import Titre from '../../components/Titre'
import Arrow from '../../assets/home/arrow.svg'

function Sermon() {
  return (
    <Container>
        <div className='text-center mb-[64px]'>
            <Titre h1='Upcoming SERMONS' h2={[ "join us and become part", <br className='hidden lg:flex'/>, "of something great" ]}/>
        </div>

        <div className='lg:flex lg:flex-row-reverse'>
            {/* de la banniere */}
            <div className='w-full'>
                <img src={Bg_sermon} alt="" className='w-full h-full'/>
            </div>

            {/* div des textes */}
            <div className='w-full lg:w-[37%] px-[50px] py-[51px] lg:px-[90px] lg:py-[61px] bg-[#FFF5EB] space-y-[32px] relative'>
                <div className='text-end absolute top-[32px] right-[32px]'>
                    <p className='font-bold text-[24px]'>20</p>
                    <p className='font-normal text-[16px]'>JULY</p>
                </div>
                <div className='space-y-[16px]'>
                    <h1 className='text-[#A54E2B] text-[12px] font-bold'>Upcoming Event</h1>
                    <h2 className='text-[24px] font-bold'>WATCH AND LISTEN<br className='hidden lg:flex'/> TO OUR SERMONS</h2>
                    <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur<br className='hidden lg:flex'/> adipiscing elit, sed do eiusmod tempor.</p>
                </div>

                <div className='space-y-[16px]'>
                    <div className='flex items-center space-x-[16px]'>
                        <img src={Clock} alt="" />
                        <p className='text-[16px] font-normal'>Friday 23:39 IST<br/> Saturday 11:20 ISD</p>
                    </div>

                    <div className='flex items-center space-x-[16px]'>
                        <img src={Circle} alt="" />
                        <p className='text-[16px] font-normal'>No 233 Main St. New York,<br/> United States</p>
                    </div>
                </div>

                <CustomBtn title='Register' Bg='bg-black text-[#FFD2A4] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>
            </div>
        </div>

        <div className='mt-[48px] w-fit'>
            <a href="/" className='flex items-center space-x-2 w-fit mx-auto'>
                <p className='text-[#161722] text-[24px] font-normal'>View all Sermons</p>
                <img src={Arrow} alt="" className='w-[24px] h-auto'/>
            </a>
        </div>
    </Container>
  )
}

export default Sermon