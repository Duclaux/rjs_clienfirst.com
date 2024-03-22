import React from 'react'

import Container from '../../components/Container'
import CustomBtn from '../../components/CustomBtn'

import Quote from '../../assets/home/quote.svg'

function Visit() {
  return (
    <div className='visit_home py-[128px] bg-cover bg-center relative'>
        <Container>
            <div className='px-[48px] py-[72px] bg-white lg:flex lg:items-center w-fit mx-auto lg:space-x-[100px] relative z-10'>
                <div className='space-y-[16px]'>
                    <h1 className='font-bold text-[38px]'>We want to<br className='hidden lg:flex'/> serve the world <br className='hidden lg:flex'/>around us</h1>
                    <h2 className='font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h2>
                    <CustomBtn title='Visit' Bg='bg-[#FFD2A4] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>
                </div>

                <div className='hidden lg:flex'>
                    <img src={Quote} alt="" />
                </div>

                <div className='h-[16px] bg-[#FFD2A4] w-full absolute bottom-0 right-0'></div>
            </div>
        </Container>
        <div className='h-full w-full absolute bottom-0 right-0 bg-gradient-to-tr to-[#CD5423] from-[#FFD0A0] opacity-10'></div>
    </div>
  )
}

export default Visit