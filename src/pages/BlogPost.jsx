import React from 'react'

import PrayBlog from '../assets/prayBlog.png'
import Container from '../components/Container'

import Child from '../assets/child.png'

function BlogPost() {
  return (
    <div className='pt-[280px] bg-[#F5F2F0]'>
        <Container>
            <div className='space-y-[64px]'>
                {/* entete */}
                <div className='space-y-[64px]'>
                    <div className='text-black uppercase space-y-[16px] text-center'>
                        <h1 className='text-[12px] text-[#A54E2B] font-normal'>Relationship</h1>
                        <h2 className='text-[27px] lg:text-[48px] font-bold'>HOW TO SHOW COMPASSION</h2>
                        <p className='text-[16px] font-normal'>13 May, 2018 By Mathew Johnson</p>
                    </div>

                    <div className='w-fit mx-auto'>
                        <img src={PrayBlog} alt="" className=''/>
                    </div>
                </div>

                {/* corps publication */}
                <div className='text-black text-start'>
                    <div className='w-fit mx-auto space-y-[24px]'>
                        <h1 className='text-[27px] lg:text-[48px] font-bold'>LOREM IPSUM DOLOR SIT AMET</h1>
                        <p className='text-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br className='hidden lg:flex'/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex<br className='hidden lg:flex'/> ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br className='hidden lg:flex'/> nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                        <p className='text-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br className='hidden lg:flex'/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex<br className='hidden lg:flex'/> ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br className='hidden lg:flex'/> nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                    </div>

                    <div className='w-fit mx-auto'>
                        <img src={Child} alt="" className='w-[768px] h-[437px] mt-[48px]'/>
                        <h1 className='text-[23px] lg:text-[32px] font-bold'>LOREM IPSUM DOLOR SIT AMET</h1>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BlogPost