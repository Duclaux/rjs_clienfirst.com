import React from 'react'
import { Link } from 'react-router-dom'

function CardAllBlog(props) {
  return (
      
    <div className={`bg-white px-[32px] py-[48px] w-fit mx-auto lg:mx-0 relative ${props.style}`}>
        <h1 className='text-[#A54E2B] font-bold text-[12px] uppercase mb-[16px]'>Relationship</h1>
        <h1 className='text-[#000] font-bold text-[24px] uppercase mb-[16px]'>THE BEST WAY TO<br/> INSPIRE PEOPLE</h1>
        <p className='text-[#000] font-normal text-[16px] mb-[48px]'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore.</p>

        <div className='space-y-[4px]'>
            <h1 className='text-[#000] font-normal text-[16px]'>By Mathew Johnson</h1>
            <h1 className='text-[#000] font-normal text-[16px]'>Tuesday 13 May, 2018</h1>
        </div>

        <div className={`h-[16px] bg-[#FFD2A4] w-full absolute bottom-0 left-0 ${props.no}`}></div>
    </div>
  )
}

export default CardAllBlog