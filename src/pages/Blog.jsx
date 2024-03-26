import React from 'react'
import Container from '../components/Container'
import OurBlog from '../components/Blog/OurBlog'
import AllBlog from '../components/Blog/AllBlog'

function Blog() {
  return (
    <div className='pt-[100px] lg:pt-[194px] bg-[#F5F2F0]'>
        <Container>
            <div>
                <OurBlog />
                <AllBlog />
            </div>
        </Container>
    </div>
  )
}

export default Blog