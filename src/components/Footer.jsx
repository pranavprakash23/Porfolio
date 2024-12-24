import React from 'react';


const Footer = () => {
  return (
    <div className='h-1/3 w-full mt-52 md:mt-24 p-4 md:p-8  flex flex-col justify-center items-center bg-container-color'>
       <div className='flex flex-row justify-center gap-4 py-8 text-title-color hover:text-title-color-dark'>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Skills</div>
       </div>
       
       <div className='flex flex-col justify-center items-center gap-2'>

          <h1 className='text-base font-medium text-title-color'>No &#169; copyright issues</h1>
          <p className='text-sm text-text-color'>Feel free to use.</p>
        </div>
    </div>
  )
}

export default Footer