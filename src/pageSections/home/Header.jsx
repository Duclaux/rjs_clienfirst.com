import React from 'react'
import Container from '../../components/Container'
import CustomBtn from '../../components/CustomBtn'


// import Bg_home from '../../assets/home/'

function Header() {
  return (
    <div className="w-full h-[100vh] bg-center bg-cover home_head">
      <Container>
        <div className='text-white pt-[50%] lg:pt-[20%]'>
          <div className='font-bold space-y-[16px] mb-[32px]'>
            <h1 className='text-[18px]'>Welcome to our CHURCH</h1>
            <p className='text-[45px] lg:text-[64px]'>Become a part of<br className=' lg:flex'/> our community</p>
          </div>

          <CustomBtn title='Learn more' Bg='bg-[#FFD2A4] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>

          <div className='flex items-start space-x-[12px] mt-[64px]'>
            <div className='w-[18px] h-[2px] bg-[#FFD2A4] mt-[12px]'></div>
            <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header