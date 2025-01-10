import React from 'react';
import { RiCheckboxCircleFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className='h-screen mb-28 md:mb-4 mt-32 md:mt-4 px-4 md:px-12 w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-4xl font-medium text-title-color'>Skills</h1>
        </div>

        <div className='flex flex-col md:flex-row mt-20 mx-auto gap-8 md:gap-16 justify-center items-center w-full'>

            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center p-4 md:p-8 bg-container-color rounded-2xl w-[200px] sm:w-[300px] h-[250px] md:w-[450px] md:h-[360px]'>
                   <p className='text-sm md:text-lg text-text-color'>Frontend Developer</p>
                   <div className='flex flex-row justify-center items-center text-text-color w-full h-full px-4 sm:px-0'>
                        <div className='grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 gap-x-4 md:gap-x-8 lg:gap-x-20 gap-y-6 justify-items-start text-title-color w-full'>

                            <div className='flex flex-row gap-4 justify-center items-center '>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>HTML</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>Javascript</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>CSS</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>React JS</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>Tailwind CSS</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill size={14}/></p>
                                <p className='text-sm md:text-lg'>Angular JS</p>
                            </div>
                        </div>
                    </div>     
            </div>

            <div className='flex flex-col gap-4 md:gap-8 lg:gap-12 justify-center items-center p-4 md:p-8 bg-container-color rounded-2xl w-[200px] sm:w-[300px] h-[250px] md:w-[450px] md:h-[360px]'>
                   <p className='text-sm md:text-lg text-text-color'>Backend Developer</p>
                   <div className='flex flex-row justify-center items-center text-text-color w-full h-full px-4 sm:px-0'>
                        <div className='grid grod-col-4 sm:grid-cols-2 sm:grid-rows-2 gap-x-4 md:gap-x-8 lg:gap-x-20 gap-y-2 sm:gap-y-6 justify-items-start text-title-color w-full'>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill  size={14}/></p>
                                <p className='text-sm md:text-lg'>Java</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill  size={14}/></p>
                                <p className='text-sm md:text-lg'>Spring</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill  size={14}/></p>
                                <p className='text-sm md:text-lg'>MYSQL</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill  size={14}/></p>
                                <p className='text-sm md:text-lg'>Firebase</p>
                            </div>
                        </div>
                    </div>  

                    <p className='text-sm md:text-lg text-text-color'>Version control - <span className='text-title-color text-sm md:text-lg'>GIT</span></p>   
            </div>
        </div>
    </div>
  )
}

export default Skills