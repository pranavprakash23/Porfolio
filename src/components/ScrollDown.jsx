import React from 'react';
import { RiArrowDownLine } from "react-icons/ri";

const ScrollDown = () => {
  return (
    <div className='ml-52 hidden md:inline-block'>
        <a href="#" className='flex items-center gap-2 '>
            <svg
                    width="32px"
                    height="32px"
                    className="animate-scroll"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                    }}
                >
                    <path
                    className="animate-scroll"
                    d="M123.359,79.775l0,72.843"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "20px",
                    }}
                    ></path>
                    <path
                    id="mouse"
                    className='animate-scroll'
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "20px",
                    }}
                    ></path>
                </svg>
            <span className='text-title-color font-medium mt-4'>Scroll Down</span>
            <RiArrowDownLine className='text-lg mt-4'/>
        </a>
    </div>
  )
}

export default ScrollDown