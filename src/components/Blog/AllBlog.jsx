import React from 'react'
import Titre from '../Titre'
import CardAllBlog from './CardAllBlog'

function AllBlog() {
  return (
    <div className='space-y-[65px]'>
        <div className='text-center'>
            <Titre h2={["ALL BLOG POSTS"]}/>
        </div>

        <div className='space-y-[16px] lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-10'>
          <CardAllBlog style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
          <CardAllBlog no='hidden' style='col-span-1'/>
        </div>
    </div>
  )
}

export default AllBlog