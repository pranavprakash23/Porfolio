import React from 'react';
import { RiFileList3Line, RiAwardLine } from "react-icons/ri";

const About = () => {
  return (
    <section className='h-screen px-4 md:px-12 w-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-medium text-title-color'>About Me</h1>
        <p className='text-sm'>My Introduction</p>
        <div className='flex flex-col md:flex-row mt-28 mx-auto gap-16'>
          <div className='bg-profile-pic col-span-4 w-[400px] h-[350px] bg-cover bg-left-bottom rounded-3xl'></div>
          <div className='flex flex-col gap-8'>
              <div className='flex flex-row gap-4'>
                <div className='rounded-3xl flex flex-col gap-4 justify-center items-center text-title-color bg-container-color p-4'>
                  <RiAwardLine size={22}/>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <p className='text-base  text-title-color'>Experience</p>
                    <p className='text-xs content-center text-text-color'>3.5 Years</p>
                  </div>
                </div>
              </div>
              <p className='text-base font-sm w-[450px] text-text-color'>Experienced Full Stack Developer with 3.5 years of expertise in building dynamic, scalable web applications using
              modern frameworks like React, Angular JS, and Spring.</p>
              <button className='w-max p-4 bg-title-color rounded-2xl flex flex-row items-center gap-4 text-container-color'>
                Download Resume <RiFileList3Line size={22}/>
              </button>
          </div>
        </div>
    </section>
  )
}

export default About