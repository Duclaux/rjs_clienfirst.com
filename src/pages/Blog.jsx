import React from 'react'
import Container from '../components/Container'
import OurBlog from '../components/Blog/OurBlog'
import AllBlog from '../components/Blog/AllBlog'

function Blog() {
  return (
    <div className='pt-[100px] lg:pt-[194px] bg-[#F5F2F0] pb-[128px]'>
        <Container>
            <div className='space-y-[64px]'>
                <OurBlog />
                <AllBlog />
            </div>
        </Container>
    </div>
  )
}

export default Blog