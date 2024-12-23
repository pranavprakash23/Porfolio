import React from 'react';
import { RiCheckboxCircleFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='h-screen mt-8 px-4 md:px-12 w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-medium text-title-color'>Skills</h1>
        </div>

        <div className='flex flex-col md:flex-row mt-20 mx-auto gap-16 justify-center items-center'>

            <div className='flex flex-col gap-12 justify-center items-center p-8 bg-container-color rounded-2xl'>
                   <p>Frontend Developer</p>
                   <div className='flex flex-row justify-center items-center text-text-color'>
                        <div className='grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-8 justify-items-start text-title-color'>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>HTML</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Javascript</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>CSS</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>React JS</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Tailwind CSS</p>
                            </div>

                            

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Angular Js</p>
                            </div>

                        </div>

                    </div>     
            </div>

            <div className='flex flex-col gap-12 justify-center items-center p-8 bg-container-color rounded-2xl'>
                   <p>Backend Developer</p>
                   <div className='flex flex-row justify-center items-center text-text-color'>
                        <div className='grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-8 justify-items-start text-title-color'>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Java</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Spring</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>MYSQL</p>
                            </div>

                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <p><RiCheckboxCircleFill /></p>
                                <p>Firebase</p>
                            </div>
                        </div>

                    </div>  

                    <p>Version control - <span className='text-title-color'>GIT</span></p>   
            </div>

        </div>

    </div>
  )
}

export default Skills