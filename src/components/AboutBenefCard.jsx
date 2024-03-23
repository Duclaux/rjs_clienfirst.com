import React from 'react'

function AboutBenefCard(props) {
  return (
    <div className={`space-y-[8px] lg:space-y-0 lg:flex lg:items-center lg:justify-evenly ${props.sens}`}>
        <div className='w-fit mx-auto lg:mx-0'>
            <img src={props.img} alt="" className=''/>
        </div>

        <div className='space-y-[2px] lg:space-y-[16px] w-fit mx-auto lg:mx-0'>
            <h1 className='font-bold text-[32px]'>{props.h1}</h1>
            <p className='font-normal text-[16px]'>{props.p}</p>
        </div>
    </div>
  )
}

export default AboutBenefCard