import React from 'react';


const Footer = () => {
  return (
    <div className='h-1/3 w-full mb-28 md:mb-4 mt-32 md:mt-4 px-4 md:px-12  flex flex-col justify-center items-center bg-container-color'>
       <div className='flex flex-row justify-center gap-4 py-8 text-title-color hover:text-title-color-dark'>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Skills</div>
       </div>
       
       <div className='flex flex-col justify-center items-center'>

          <h1 className='text-base font-medium text-title-color'>No &#169; copyright issues</h1>
          <p className='text-sm text-text-color'>Feel free to use.</p>
        </div>
    </div>
  )
}

export default Footer