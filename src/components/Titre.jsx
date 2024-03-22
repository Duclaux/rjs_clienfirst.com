import React from 'react'

function Titre(props) {
  return (
    <div className='text-black uppercase space-y-[16px]'>
        <h1 className='text-[16px] font-normal'>{props.h1}</h1>
        <h2 className='text-[27px] lg:text-[48px] font-bold'>{props.h2}</h2>
    </div>
  )
}

export default Titre