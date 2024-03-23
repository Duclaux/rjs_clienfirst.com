import React from 'react'
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

import Container from './Container'
import CustomBtn from './CustomBtn'

import Logo from '../assets/navbar/logoYellow.svg'


function Footer() {
  return (
    <div className='bg-[#161722]'>
        <Container>
            <div className='space-y-[100px] text-center lg:space-y-0 lg:text-start lg:flex lg:items-center lg:flex-row-reverse justify-between py-[64px]'>
                {/* newsletter */}
                <div className='space-y-[32px] mx-auto w-fit lg:w-auto lg:mx-0'>
                    <p className='font-bold text-[32px] text-white'>Subscribe to get Latest<br/> Updates and News</p>
                    <div className='border-[1px] border-[#FFFFFF]/15 rounded-[12px] w-fit h-fit pl-[20px]'>
                        <input type="email" className=' bg-transparent w-[150px] sm:w-auto focus:outline-none text-white' placeholder='Yourmail@gmail.com'/>
                        <CustomBtn title='Subscribe' Bg='bg-[#FFD2A4]' style='px-[30px]  py-[12px] sm:px-[64px] sm:py-[24px]'/>
                    </div>
                </div>

                {/* liens */}
                <div className='space-y-[30px] lg:flex text-white lg:space-y-0 lg:space-x-[70px]'>
                    <div className='space-y-[20px]'>
                        <h1 className='text-[16px] font-medium'>Quicklinks</h1>
                        <ul className='flex space-x-[20px] lg:space-x-0 w-fit mx-auto lg:mx-0 lg:flex-col lg:space-y-[24px] text-[12px]'>
                            <li><a href="about">About us</a></li>
                            <li><a href="/sermon">Sermon</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>

                    <div className='space-y-[20px]'>
                        <h1 className='text-[16px] font-medium'>Connect </h1>
                        <ul className='flex items-center space-x-5 w-fit mx-auto lg:mx-0'>
                            <li>
                                <a href="https://web.facebook.com/?locale=fr_FR&_rdc=1&_rdr" target='_blank'>
                                    <BsFacebook size={30} color='#FFD2A4'/>
                                </a>                                
                            </li>

                            <li>
                                <a href="https://web.whatsapp.com/" target='_blank'>
                                    <BsTwitter size={30} color='#FFD2A4'/>
                                </a>                               
                            </li>

                            <li>
                                <a href="https://web.whatsapp.com/" target='_blank'>
                                    <BsWhatsapp size={30} color='#FFD2A4'/>
                                </a>                              
                            </li>
                        </ul>
                    </div>
                </div>

                
                {/* logo */}
                <div className='text-white space-y-[32px]'>
                    <div className='space-y-5'>
                        <a href="/">
                            <img src={Logo} alt="" className='w-[167.44px] h-[40px] mx-auto lg:mx-0'/>
                        </a>
                        <p className='text-[12px] font-normal'>© Copyright Finsweet 2022 | FredFox</p>
                    </div>

                    <div className='text-[12px] font-normal space-y-5'>
                        <p>(480) 555-0103</p>
                        <p>4517 Washington Ave. </p>
                        <p>finsweet@example.com</p>
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Footer