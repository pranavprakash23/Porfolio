import React from 'react'
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div  className="grid grid-rows-2 gap-y-8 col-span-2">
        <Link rel="stylesheet" to="https://www.linkedin.com/in/pranavprakash-sde/" >
            <RiLinkedinLine size={26} className='text-title-color hover:text-title-color-dark cursor-pointer'/>
        </Link>

        <Link rel="stylesheet" to="https://github.com/pranavprakash23">
            <RiGithubLine size={26} className='text-title-color hover:text-title-color-dark'/>
        </Link>
    </div>
  )
}

export default Social