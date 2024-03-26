import React from 'react'

import Clock from '../../assets/home/clock.svg'
import Circle from '../../assets/home/circle.svg'

function SermonCard(props) {
  return (
    <div className='w-[302px] lg:w-fit mx-auto lg:mx-0 px-[40px] py-[51px] lg:py-[80px] bg-[#FFF5EB] space-y-[32px] relative text-start'>
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
        <div className={`h-[16px] bg-[#FFD2A4] w-full absolute bottom-0 left-0 ${props.no}`}></div>
    </div>
  )
}

export default SermonCard