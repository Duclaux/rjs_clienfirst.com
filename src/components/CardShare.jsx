import React from 'react'

function CardShare(props) {
  return (
    <div className='px-[32px] py-[48px] bg-[#FFF5EB] w-fit mx-auto lg:mx-0 relative'>
        <div className='space-y-[16px] mb-[73px]'>
            <h1 className='text-[#A54E2B] text-[12px] font-bold'>Relationship</h1>
            <h2 className='text-[24px] font-bold'>WATCH AND LISTEN<br className='hidden lg:flex'/> TO OUR SERMONS</h2>
            <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur<br className='hidden lg:flex'/> adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <div className='space-y-[4px]'>
            <p className='text-[16px] font-normal'>By Mathew Johnson</p>
            <p className='text-[16px] font-normal'>Tuesday 13 May, 2021</p>
        </div>

        <div className={`h-[16px] bg-[#FFD2A4] w-full absolute bottom-0 right-0 ${props.hidden}`}></div>
    </div>
  )
}

export default CardShare