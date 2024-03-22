import React from 'react'



function CardHedLine(props) {
  return (
    <div className={`text-start max-w-[411px] ${props.max} bg-[#FFF5EB] px-[80px] py-[80px] relative`}>
        <div className='p-[12px] rounded-full w-fit bg-[#FFD2A4] hover:bg-[#f1b677] transition-all duration-500 mb-[24px]'>
            <img src={props.img} alt="" />
        </div>

        <div className='space-y-[8px]'>
            <h1 className='uppercase font-bold text-[27px] lg:text-[32px]'>{props.h1}</h1>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='h-[16px] bg-[#FFD2A4] w-full absolute bottom-0 left-0'></div>
    </div>
  )
}

export default CardHedLine