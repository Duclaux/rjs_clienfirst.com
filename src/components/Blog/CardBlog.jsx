import React from 'react'

import Pray4 from '../../assets/blog/pray4.png'
import CustomBtn from '../CustomBtn'

function CardBlog() {
  return (
    <div className='w-fit mx-auto lg:w-full lg:flex items-center lg:space-x-[51.08px] py-[57.19px] px-[20.59px] bg-white lg:py-[57.19px] lg:px-[59.59px]'>
        {/* img */}
        <div>
            <img src={Pray4} alt="" />
        </div>

        {/* text */}
        <div className='mt-[8px]'>
            <div className='font-normal text-[16px] flex items-center justify-between'>
                <h3>Tuesday 13 May, 2022</h3>
                <h3>By John Hunau Deo</h3>
            </div>

            <h1 className='font-bold text-[32px] mt-[15px] mb-[16px]'>Church was doing what he often did<br className='hidden min-[594px]:flex'/> when dropped An oracle </h1>

            <p className='font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br className='hidden min-[594px]:flex'/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br className='hidden min-[594px]:flex'/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br className='hidden min-[594px]:flex'/> dolor.</p>

            <CustomBtn title='Read more' Bg='bg-[#FFD2A4] text-[#000] mt-[33px] px-[30px] py-[12px] sm:px-[64px] sm:py-[24px]'/>
        </div>
    </div>
  )
}

export default CardBlog