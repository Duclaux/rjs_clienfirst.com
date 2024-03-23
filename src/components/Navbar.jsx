import React, { useState } from 'react'
import Container from './Container'
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";

import Logo from '../assets/navbar/logoWhite.svg'
import CustomBtn from './CustomBtn'

function Navbar() {
  const [ close, setClose ] = useState(false)

  const showNav = () => {
    setClose(!close)
  }

  return (
     <div className='bg-[#161722] fixed py-[12px] z-20 w-full'>
        <Container>
            <div className='flex items-center justify-between'>
                <div>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>

                <div className={ close ? `absolute top-[55px] right-0 h-96 md:h-full pt-[50px] text-center bg-black/95 w-[80%] transition-all duration-500` : `absolute top-[55px] right-[-100%] h-96 md:h-full pt-[50px] text-center bg-black/95 w-[80%] transition-all duration-500 md:relative md:top-0 md:right-auto md:flex md:items-center md:bg-transparent md:pt-0 md:justify-between md:w-[80%]`}>
                    {/* lien */}
                    <div className='w-[2px] h-[87px] hidden xl:flex translate-x-[-50px] 2xl:translate-x-[-70px] absolute bg-gray-400'></div>
                    <ul className='text-white text-[16px] font-normal uppercase space-y-[30px] md:flex md:items-center md:space-y-0 md:space-x-[30px] lg:space-x-[60px]'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/">Sermon</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>

                    <div className='mt-[50px] text-[16px] uppercase md:mt-0'>
                        <button className={`px-[48px]  py-[20px] bg-[#FFD2A4] rounded-[12px] uppercase`}>
                            <a href="/">contact us</a>
                        </button>
                    </div>
                </div>

                <div onClick={showNav} className='md:hidden'>
                    {
                        close ? <CgClose size={30} color='white'/> : <SlMenu size={30} color='white'/>
                    }
                </div>
            </div>
        </Container>
     </div>
  )
}

export default Navbar