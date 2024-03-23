import React from 'react'

import Pray1 from '../assets/home/pray1.png'

function CardBenefits() {
  return (
    // <div className='relative w-fit text-white text-start'>
    //     <img src={Pray1} alt="" className=''/>
    //     <div className='absolute w-full h-[50%] bottom-0 left-0 bg-gradient-to-t from-black to-white/0 px-[32px] pb-[32px]'>
    //         <h1 className='font-bold text-[24px]'>WATCH AND LISTEN TO OUR SERMONS</h1>
    //         <p className='font-normal text-[16px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
    //     </div>
    // </div>

    <div className={` bg-[url('${Pray1}')] w-fit pt-[298px] pb-[32px] px-[32px] lg:w-[302px] text-start`} onMouseUp={console.log('souris')}>
        <h1 className='font-bold text-[24px]'>WATCH AND LISTEN TO OUR SERMONS</h1>
        <p className='font-normal text-[16px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
    </div>
  )
}

export default CardBenefits