import React from 'react'

function CustomBtn( props ) {
  return (
    <button className={`${props.style} ${props.Bg} text-[#1C1D28] rounded-[12px] uppercase`}>
        <a href="/">{props.title}</a>
    </button>
  )
}

export default CustomBtn