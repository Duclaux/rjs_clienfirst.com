import React from 'react'

function Container({ children, styles }) {
  return (
    <div className={`w-full bg-transparent px-[10px] sm:px-[25px] lg:px-0 lg:w-[1000px] lg:mx-auto xl:w-[1180px] 2xl:w-[1500px]`}>{ children }</div>
  )
}

export default Container