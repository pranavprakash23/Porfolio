import React from 'react';
import { RiGraduationCapLine, RiBriefcase2Line } from "react-icons/ri";

const Qualification = () => {
  return (
    <div id="experience" className='h-full w-full mb-28 md:mb-4 px-4 md:px-12 flex flex-col justify-center items-center mt-32 md:mt-4'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl md:text-4xl text-center font-medium text-title-color'>Experience  & Qualification</h1>
            <p className='text-sm text-text-color'>My Personal Journey</p>
        </div>

        <div className='w-full flex flex-col mt-20 mx-auto gap-16 justify-center items-center'>
            
            <div className='w-full flex flex-col gap-4 '>
                <div className='flex flex-row items-center gap-4 text-title-color px-8'>
                    <p><RiBriefcase2Line size={22}/></p>
                    <p className='text-base md:text-2xl'>Experience</p>
                </div>

                <div className="bg-container-color flex flex-row justify-between items-center rounded-xl p-8 w-full gap-4">
                    <div className='flex flex-col gap-4 w-full md:w-2/3'>
                        <div className='text-title-color text-lg'>Reflexis Systems India Pvt. Ltd. <p className='text-text-color text-base'>----- Software Engineer I</p></div>

                        <p className='md:hidden text-title-color text-sm '>(July 2018 – Nov 2021)</p>

                        <div className='flex flex-col gap-2 mt-4 '>
                            <li><span className='text-text-color font-medium'>User Engagement Boost –</span> Designed and developed push notification systems(email and mobile alerts) to enhance real-time communication and user engagement. Increase in user interaction rate.</li>
                            <li><span className='text-text-color font-medium'>System Performance Improvement –</span> Migrated legacy systems to a modern React.js and Spring-based architecture, enhancing performance and maintainability. Reduction in system response time and improved efficiency metrics.</li>
                            <li><span className='text-text-color font-medium'>Frontend Optimization & UX Enhancement –</span> Developed dynamic, responsive,and user-friendly web interfaces using React.js, ensuring a seamless user experience. Improved page load speed and better user satisfaction scores.</li>
                        </div>
                    
                    </div>
                    <p className='text-title-color text-sm hidden md:inline-block'>(July 2018 – Nov 2021)</p>
                </div>

                <div className="bg-container-color flex flex-row justify-between items-center rounded-xl p-8 w-full gap-4">
                    <div className='flex flex-col gap-4 w-full md:w-2/3'>
                        <div className='text-title-color text-lg'>Planned Career Break<p className='text-text-color text-base'></p></div>

                        <p className='md:hidden text-title-color text-sm '>(Jan 2022 – Dec 2024)</p>

                        <div className='flex flex-col gap-2 mt-4 '>
                            <li>Took a dedicated career break to focus on UPSC CSE and MBA entrance exam preparation. While I ultimately chose not to pursue this path, the experience enhanced my adaptability, perseverance, and structured problem-solving skills. Now, I am excited to return to software engineering, leveraging both my technical expertise and the valuable insights gained during this period.</li>                            
                        </div>
                    
                    </div>
                    <p className='text-title-color text-sm hidden md:inline-block'>(Jan 2022 – Dec 2024)</p>
                </div>
            </div>


            <div className='w-full flex flex-col gap-4'>

                <div className='flex flex-row items-center gap-4 text-title-color px-8'>
                    <p><RiGraduationCapLine size={22}/></p>
                    <p className='text-base md:text-2xl'>Education</p>
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