import React from 'react';
import {Link} from 'react-scroll';


const Footer = () => {
  return (
    <div className='h-1/3 w-full mt-52 md:mt-24 p-4 md:p-8  flex flex-col justify-center items-center bg-container-color'>
       <div className='flex flex-row justify-center gap-4 py-8 text-title-color hover:text-title-color-dark'>
            
            <div>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="text-text-color hover:text-title-color-dark cursor-pointer">Home</Link>
            </div>
            <div>
              <Link to="about" spy={true} smooth={true} offset={-150} duration={500} className="text-text-color hover:text-title-color-dark cursor-pointer">About</Link>
            </div>
            <div>
              <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="text-text-color hover:text-title-color-dark cursor-pointer">Skills</Link>
            </div>
            <div>
              <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} className="text-text-color hover:text-title-color-dark cursor-pointer">Experience</Link>
            </div>
       </div>
       
       <div className='flex flex-col justify-center items-center gap-2'>

          <h1 className='text-base font-medium text-text-color'>&#169; 2025, Pranav Prakash. All rights reserved.</h1>
          {/* <p className='text-sm text-text-color'>Feel free to use.</p> */}
        </div>
    </div>
  )
}

export default Footer