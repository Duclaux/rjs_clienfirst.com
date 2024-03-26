import React from 'react'
import Titre from '../Titre'
import CardBlog from './CardBlog'

function OurBlog() {
  return (
    <div className='space-y-[65px]'>
        <div className='text-center'>
            <Titre h1='OUR BLOG' h2={["most recent post"]}/>
        </div>

        <div>
            <CardBlog/>
        </div>
    </div>
  )
}

export default OurBlog