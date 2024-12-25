import React, { useRef } from 'react';
import { RiArrowRightLine, RiMailCheckLine, RiTwitterXLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Contact = () => {
    
  return (
    <div id="contact" className='h-full w-full mt-32 md:mt-40 px-4 md:px-12  flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl md:text-4xl font-medium text-title-color'>Contact</h1>
            <p className='text-sm text-text-color'>Get in touch</p>
        </div>

        <div className='flex flex-col md:flex-row mt-20 mx-auto gap-28 md:gap-16 justify-center items-center md:items-start w-full '>

            <div className='flex flex-col gap-4 md:gap-8 justify-center items-center p-4 md:p-6'>
            
                <h1 className='text-xl font-medium text-text-color'>Talk to me</h1>

                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col gap-4 md:gap-8'>
                        <div className='bg-container-color rounded-2xl w-[250px] h-[150px] flex flex-col gap-1 justify-center items-center'>
                            <RiMailCheckLine size={28} className='text-title-color'/>
                            <p className='text-title-color'>Email</p>
                            <p className='text-xs text-text-color'>pranavprakash2023@gmail.com</p>
                            <div className='flex flex-row gap-2 items-center mt-6'>
                                <p className='text-sm text-text-color'>Write me</p>
                                <RiArrowRightLine className='hover:text-title-color-dark'/>
                            </div>
                        </div>

                        <a href="https://x.com/pranav_prksh">
                            <div className='bg-container-color rounded-2xl w-[250px] h-[150px] flex flex-col gap-1 justify-center items-center'>
                                
                                <RiTwitterXLine size={28} className='text-title-color'/>
                                <p className='text-title-color'>X.com</p>
                                <p className='text-xs text-text-color'>@pranav_prksh</p>
                            </div>
                        </a>
                    </div>

                    <div className='flex flex-col gap-4 md:gap-8'>
                        <a href="https://www.linkedin.com/in/pranavprakash-sde/">
                            <div className='bg-container-color rounded-2xl w-[250px] h-[150px] flex flex-col gap-1 justify-center items-center'>
                                <RiLinkedinLine size={28} className='text-title-color'/>
                                <p className='text-title-color'>LinkedIn</p>
                                <p className='text-xs text-text-color'>@pranav_prksh</p>
                            </div>
                        </a>

                        <a href="https://github.com/pranavprakash23">
                            <div className='bg-container-color rounded-2xl w-[250px] h-[150px] flex flex-col gap-1 justify-center items-center'>
                                <RiGithubLine size={28} className='text-title-color'/>
                                <p className='text-title-color'>Github</p>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>

            <div className='flex flex-col gap-4 md:gap-8 justify-start items-center p-4 md:p-6 rounded-xl w-[250px] sm:w-[300px] h-[250px] md:w-[450px] md:h-[360px]'>
            
                <h1 className='text-xl font-medium text-text-color'>Write me your project</h1>

                <form className='flex flex-col gap-4 w-full'>
                    <div className='md:relative'>
                        <label htmlFor="" className='hidden md:inline-block absolute -top-3 left-5 text-sm p-1 bg-body-color rounded-lg'>Name</label>
                        <input type="text" name="name" placeholder='Your Name'
                        className='w-full h-full border-2 border-black/[.1] text-text-color rounded-xl px-6 py-4 z-1 focus:outline focus:outline-0 focus:bg-body-color'/>
                    </div>

                    <div className='md:relative'>
                        <label htmlFor="" className='hidden md:inline-block absolute -top-3 left-5 text-sm p-1 bg-body-color rounded-lg'>Mail</label>
                        <input type="email" name="email" placeholder='Your Email ID'
                        className='w-full h-full border-2 border-black/[.1] text-text-color rounded-xl px-6 py-4 z-1 focus:outline focus:outline-0 bg-none'/>
                    </div>

                    <div className='md:relative'>
                        <label htmlFor="" className='hidden md:inline-block  absolute -top-3 left-5 text-sm p-1 bg-body-color rounded-lg'>Message</label>
                        <textarea name="message" id="" cols="30" placeholder='Your message'
                        className='h-40 w-full border-2 border-black/[.1] text-text-color rounded-xl px-6 py-4 z-1 focus:outline focus:outline-0'></textarea>
                    </div>

                    <button className='flex flex-row justify-center items-center bg-title-color text-container-color text-base md:font-base px-2 md:px-4 py-1 md:py-2 w-max h-max gap-2 rounded-xl'>Send Message
                        <svg
                                className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="#fff"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="#fff"
                                ></path>
                                </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact