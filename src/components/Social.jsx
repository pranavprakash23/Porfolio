import React from 'react'
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { Link } from 'react-scroll';

const Social = () => {
  return (
    <div  className="grid grid-rows-2 gap-y-8 col-span-2">
        <Link rel="stylesheet" to="linkedIn" >
            <RiLinkedinLine size={30} className='text-title-color hover:text-title-color-dark'/>
        </Link>

        <Link rel="stylesheet" to="github">
            <RiGithubLine size={30} className='text-title-color hover:text-title-color-dark'/>
        </Link>
    </div>
  )
}

export default Social