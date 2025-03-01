import React from 'react';
import { RiFileList3Line, RiAwardLine } from "react-icons/ri";
import CV from "../assets/Pranav_Prakash_SDE_2025.pdf";

const About = () => {
  return (
    <div id="about" className='h-screen mb-28 md:mb-4 px-4 md:px-12 w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl md:text-4xl font-medium text-title-color'>About Me</h1>
            <p className='text-sm text-text-color'>My Introduction</p>
        </div>
        
        <div className='flex flex-col md:flex-row mt-20 mx-auto gap-16 justify-center items-center'>
          <div className='bg-profile-pic col-span-4 w-[300px] h-[300px] md:w-[400px] md:h-[350px] bg-cover bg-left-bottom rounded-3xl'></div>
          <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='flex flex-row gap-4'>
                <div className='rounded-3xl flex flex-col gap-4 justify-center items-center text-title-color bg-container-color p-4'>
                  <RiAwardLine size={22}/>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <p className='text-base  text-title-color'>Experience</p>
                    <p className='text-xs content-center text-text-color'>3.5 Years</p>
                  </div>
                </div>
              </div>
              <p className='text-base font-sm w-[300px] md:w-[450px] text-text-color'>Experienced Full Stack Developer with 3.5 years of expertise in building dynamic and scalable web applications using
              modern frameworks such as ReactJS, Redux, Spring Boot and Microservices.</p>
              
              <a href={CV}>
                <button className='w-max p-4 bg-title-color rounded-2xl flex flex-row items-center gap-4 text-container-color'>
                  Download Resume <RiFileList3Line size={22}/>
                </button>
              </a>
          </div>
        </div>
    </div>
  )
}

export default About