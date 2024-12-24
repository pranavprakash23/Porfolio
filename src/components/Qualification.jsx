import React from 'react';
import { RiGraduationCapLine, RiBriefcase2Line } from "react-icons/ri";

const Qualification = () => {
  return (
    <div className='h-full w-full mb-28 md:mb-4 px-4 md:px-12 flex flex-col justify-center items-center mt-32 md:mt-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-medium text-title-color'>About Me</h1>
            <p className='text-sm text-text-color'>My Introduction</p>
        </div>

        <div className='w-full flex flex-col mt-20 mx-auto gap-16 justify-center items-center'>
            
            <div className='w-full flex flex-col gap-4 '>
                <div className='flex flex-row items-center gap-4 text-title-color px-8'>
                    <p><RiBriefcase2Line size={22}/></p>
                    <p className='text-base md:text-3xl'>Experience</p>
                </div>

                <div className="bg-container-color flex flex-row justify-between items-center rounded-xl p-8 w-full gap-4">
                    <div className='flex flex-col gap-4 w-full md:w-2/3'>
                        <div className='text-title-color text-lg'>Reflexis Systems, Inc., <p className='text-text-color text-base'>----- Full-Stack Developer</p></div>

                        <p className='md:hidden text-title-color text-sm '>(July 2018 – Nov 2021)</p>

                        <div className='flex flex-col gap-2 mt-4 '>
                            <li>Designed and developed push notification systems, integrating email and mobile
                            alerts to enhance user engagement and real-time communication.</li>
                            <li>Migrated existing legacy systems to a modern Angular Js and and Spring-based
                            architecture, improving performance and maintainability.</li>
                            <li>Developed dynamic, responsive, and user-friendly web interfaces using React Js,
                            ensuring a seamless user experience.</li>
                        </div>
                    
                    </div>
                    <p className='text-title-color text-sm hidden md:inline-block'>(July 2018 – Nov 2021)</p>
                </div>
            </div>


            <div className='w-full flex flex-col gap-4'>

                <div className='flex flex-row items-center gap-4 text-title-color px-8'>
                    <p><RiGraduationCapLine size={22}/></p>
                    <p className='text-base md:text-3xl'>Education</p>
                </div>

                <div className="bg-container-color flex flex-col md:flex-row  justify-between items-center rounded-xl p-8 gap-4 w-full">
                    <div className='flex flex-col gap-4 w-full md:w-2/3'>
                        <div className='text-title-color text-lg'>Birla Institute of Technology and Science, Pilani</div>
                        <p className='md:hidden text-sm text-title-color'>(Aug 2014 – May 2018)</p>
                        <p className='text-sm'>Bachelor in Pharmacy</p>
                    </div>
                    <p className='text-title-color text-sm hidden md:inline-block'>(Aug 2014 – May 2018)</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Qualification