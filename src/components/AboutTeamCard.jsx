import React from 'react'

import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";



function AboutTeamCard(props) {
  return (
    <div className='bg-[#F5F2F0] py-[48px] px-[75px] w-fit mx-auto lg:mx-0 space-y-[20px]'>
        <div>
            <img src={props.img} alt="" className='border-[8px] border-white rounded-full'/>
        </div>

        <div className='text-center space-y-[16px]'>
            <div className='text-[#161722] space-y-[8px]'>
                <h1 className='font-bold text-[24px]'>{props.h1}</h1>
                <h2 className='font-normal text-[24px]'>{props.h2}</h2>
            </div>

            <div className='flex items-center space-x-[20px] w-fit mx-auto'>
                <BsFacebook size={25} color='#161722'/>
                <BsTwitter size={25} color='#161722'/>
                <BsLinkedin size={25} color='#161722'/>
            </div>
        </div>
    </div>
  )
}

export default AboutTeamCard