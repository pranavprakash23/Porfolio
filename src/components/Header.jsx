import { useState } from "react";
// import { Link } from "react-router-dom";
import {Link} from "react-scroll";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {motion} from "framer-motion";
import { RiHome5Line , RiContactsLine, RiUser3Line, RiSlideshowLine, RiPresentationLine} from "react-icons/ri";


const Header = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () =>{
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition:{
                stiffness: 20,
                damping: 15 
            }
        },
        closed: {
            x: '-100%',
            transition:{
                stiffness: 20,
                damping: 15 
            }
        }
    }

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-100 bg-container-color">
        <div className="max-w-[1300px] mx-auto flex justify-between text-xl items-center px-12 h-20">

            <Link to="home" spy={true} smooth={true} offset={0} duration={500}className="font-medium text-title-color cursor-pointer">PP</Link>

            <div>
                <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="hover:text-title-color-dark">Home</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={20} duration={500} className="hover:text-title-color-dark">About</Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} offset={20} duration={500} className="hover:text-title-color-dark">Skills</Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-title-color-dark">Experience</Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-title-color-dark">Contact</Link>
                    </li>
                </ul>
            </div>


            <div onClick={toggleNav} className="md:hidden z-30 font-medium text-title-color">
                {nav? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            <motion.div
                initial={false}
                animate={nav?'open':'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen z-20 bg-container-color md:hidden'>
                
                <ul className="space-y-8 mt-24 text-center cursor-pointer">
                    <li>
                        <Link to="home" onClick={closeNav} spy={true} smooth={true} offset={-100} duration={500} className="hover:text-title-color-dark flex flex-col justify-center items-center gap-2">
                        <RiHome5Line />
                        Home</Link>
                    </li>
                    <li>
                        <Link to="about" onClick={closeNav}  spy={true} smooth={true} offset={-150} duration={500} className="hover:text-title-color-dark  flex flex-col justify-center items-center gap-2">
                        <RiUser3Line />About</Link>
                    </li>
                    <li>
                        <Link to="skills" onClick={closeNav} spy={true} smooth={true} offset={-50} duration={500} className="hover:text-title-color-dark  flex flex-col justify-center items-center gap-2">
                        <RiPresentationLine />Skills</Link>
                    </li>
                    <li>
                        <Link to="experience" onClick={closeNav} smooth="true" offset={-100} duration={500} className="hover:text-title-color-dark  flex flex-col justify-center items-center gap-2">
                        <RiSlideshowLine />Experience</Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={closeNav} spy={true} smooth={true} offset={-120} duration={500} className="hover:text-title-color-dark  flex flex-col justify-center items-center gap-2">
                        <RiContactsLine />Contact</Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Header