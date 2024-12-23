import React from 'react';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <div className='mt-24 px-4 md:px-12 w-full h-screen'>
        <div className='grid max-w-[1300px] m-auto px-4 md:px-12 h-full gap-28 flex flex-cols w-full'>
                <div className='hidden md:grid md:grid-cols-12 pt-20 gap-x-24 items-center'>
                    <Social/>
                    <Data/>
                    <div className='bg-profile-pic col-span-4 w-[250px] h-[250px] bg-cover bg-left-bottom animate-profile_animate rounded-full  shadow-profile-pic'></div>
                </div>

                {/* <div className='md:hidden grid grid-cols-6 grid-rows-2 pt-20 gap-x-4 items-center gap-y-16'>

                    <Social/>
                    <div className='bg-profile-pic w-[180px] h-[180px] bg-cover bg-left-bottom animate-profile_animate rounded-full  shadow-profile-pic'></div>

                    <Data className="text-center"/>
                    
                </div> */}

                <div className='md:hidden mt-16 flex flex-col justify-start items-center gap-y-12'>
                  <div className='flex flex-row items-center justify-start gap-x-12'>
                    <Social/>
                    <div className='bg-profile-pic w-[180px] h-[180px] bg-cover bg-left-bottom animate-profile_animate rounded-full  shadow-profile-pic'></div>
                  </div>
                  <Data className="text-center"/>
                </div>
                
                <ScrollDown/>
        </div>
    </div>
  )
}

export default Home

// 